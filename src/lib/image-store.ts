// IndexedDB storage for recipe photos.
// localStorage is capped at ~5 MB by the browser; IndexedDB has no practical limit.
// Images are kept in an in-memory cache so the rest of the app can read them synchronously.

const DB_NAME = "mab_imgs";
const STORE = "photos";

let _cache: Record<string, string> = {};
let _ready = false;
// True once the GLOBAL cloud photo fetch has completed (success or failure).
// Until then, a recipe id missing from the cache is "unknown", not "no photo" —
// callers should show a skeleton instead of the bundled stock fallback so stock
// never flashes before the real cloud photo arrives.
let _cloudDone = false;
let _readyPromise: Promise<void> | null = null;

export function isImagesReady(): boolean {
  return _ready;
}

/** True after the global cloud photo fetch has finished (so a cache miss is real). */
export function isCloudDone(): boolean {
  return _cloudDone;
}

/** Returns a promise that resolves once IDB images are loaded into cache. */
export function waitImagesReady(): Promise<void> {
  if (_ready) return Promise.resolve();
  if (!_readyPromise) _readyPromise = initImages();
  return _readyPromise;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = async () => {
      const db = req.result;
      if (db.objectStoreNames.contains(STORE)) {
        res(db);
        return;
      }
      // Recover from corrupted DB (exists but missing store): delete and recreate
      db.close();
      const delReq = indexedDB.deleteDatabase(DB_NAME);
      delReq.onsuccess = () => {
        const retry = indexedDB.open(DB_NAME, 1);
        retry.onupgradeneeded = () => retry.result.createObjectStore(STORE);
        retry.onsuccess = () => res(retry.result);
        retry.onerror = () => rej(retry.error);
      };
      delReq.onerror = () => rej(delReq.error);
    };
    req.onerror = () => rej(req.error);
  });
}

/** Load all stored images into the in-memory cache. Call once at app startup. */
export async function initImages(): Promise<void> {
  if (typeof indexedDB === "undefined") {
    _ready = true;
    _cloudDone = true;
    return;
  }
  try {
    // Fast path — root.tsx bootstrap may have pre-warmed the cache before React mounted
    const prewarm = (window as Window & { __MAB_IMG_PREWARM__?: Record<string, string> })
      .__MAB_IMG_PREWARM__;
    if (prewarm && Object.keys(prewarm).length) {
      _cache = prewarm;
      _ready = true;
      window.dispatchEvent(new CustomEvent("mab:images-ready"));
    }

    await migrateFromLocalStorage();
    const db = await openDB();
    const result: Record<string, string> = {};
    await new Promise<void>((res, rej) => {
      const req = db.transaction(STORE, "readonly").objectStore(STORE).openCursor();
      req.onsuccess = () => {
        const c = req.result;
        if (c) {
          result[c.key as string] = c.value as string;
          c.continue();
        } else res();
      };
      req.onerror = () => rej(req.error);
    });
    _cache = { ..._cache, ...result };

    // Pull GLOBAL cloud photos. Cloud is authoritative for every id it knows
    // about (the spread below overwrites those entries). Local-only photos —
    // e.g. an upload whose cloud publish failed — are kept as a device-local
    // fallback instead of being purged.
    try {
      const { fetchRecipePhotos } = await import("./sync");
      const cloud = await fetchRecipePhotos();
      console.log(`[ImageStore] cloud returned ${Object.keys(cloud).length} photo URLs`);
      if (Object.keys(cloud).length) {
        // Cloud wins for known ids
        _cache = { ..._cache, ...cloud };
        // Persist to IDB for fast next-load
        for (const [id, url] of Object.entries(cloud)) saveImage(id, url).catch(() => {});
        window.dispatchEvent(new CustomEvent("mab:images"));
      }
    } catch (e) {
      console.warn("[ImageStore] cloud fetch failed", e);
    }
  } catch (e) {
    console.warn("[ImageStore] init failed", e);
  } finally {
    _ready = true;
    _cloudDone = true;
    window.dispatchEvent(new CustomEvent("mab:images-ready"));
  }
}

// Refresh photos when window regains focus (catches admin uploads on other devices)
if (typeof window !== "undefined") {
  let lastRefresh = 0;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    if (Date.now() - lastRefresh < 30_000) return; // throttle 30s
    lastRefresh = Date.now();
    import("./sync").then(({ fetchRecipePhotos }) => {
      fetchRecipePhotos().then((cloud) => {
        if (!Object.keys(cloud).length) return;
        // Cloud wins for known ids; local-only photos are kept as fallback
        _cache = { ..._cache, ...cloud };
        for (const [id, url] of Object.entries(cloud)) saveImage(id, url).catch(() => {});
        window.dispatchEvent(new CustomEvent("mab:images"));
      });
    });
  });
}

/** One-time migration: moves base64 images from localStorage overrides → IndexedDB. */
async function migrateFromLocalStorage(): Promise<void> {
  try {
    const raw = localStorage.getItem("mab:content_overrides");
    if (!raw) return;
    const overrides = JSON.parse(raw);
    const recipes: Record<string, { imagem?: string }> = overrides?.recipes ?? {};
    let migrated = false;
    const db = await openDB();
    for (const [id, ov] of Object.entries(recipes)) {
      if (ov.imagem?.startsWith("data:")) {
        // Move to IDB
        await new Promise<void>((res, rej) => {
          const tx = db.transaction(STORE, "readwrite");
          tx.objectStore(STORE).put(ov.imagem, id);
          tx.oncomplete = () => res();
          tx.onerror = () => rej(tx.error);
        });
        // Strip from localStorage payload
        delete ov.imagem;
        migrated = true;
        console.log(`[ImageStore] migrated ${id} from localStorage → IDB`);
      }
    }
    if (migrated) {
      localStorage.setItem("mab:content_overrides", JSON.stringify(overrides));
    }
  } catch (e) {
    console.warn("[ImageStore] migration failed", e);
  }
}

/** Synchronous read — only valid after initImages() has resolved. */
export function getCachedImages(): Record<string, string> {
  return _cache;
}

/** Compress an image File to a max-1000px WebP/JPEG data URL (shared by admin + inline editor). */
export function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const MAX = 1000;
        const ratio = Math.min(MAX / img.width, MAX / img.height, 1);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * ratio);
        canvas.height = Math.round(img.height * ratio);
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("no canvas ctx"));
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let dataUrl = canvas.toDataURL("image/webp", 0.85);
        if (!dataUrl.startsWith("data:image/webp")) dataUrl = canvas.toDataURL("image/jpeg", 0.88);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function saveImage(id: string, dataUrl: string): Promise<void> {
  _cache[id] = dataUrl;
  window.dispatchEvent(new CustomEvent("mab:images"));
  try {
    const db = await openDB();
    await new Promise<void>((res, rej) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(dataUrl, id);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  } catch (e) {
    console.error("[ImageStore] save failed", e);
  }
}

export async function deleteImage(id: string): Promise<void> {
  delete _cache[id];
  window.dispatchEvent(new CustomEvent("mab:images"));
  try {
    const db = await openDB();
    await new Promise<void>((res, rej) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).delete(id);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  } catch (e) {
    console.error("[ImageStore] delete failed", e);
  }
}

/** Bulk-merge cloud photo URLs into the local cache (called after login). */
export function mergeCloudImages(urls: Record<string, string>): void {
  for (const [id, url] of Object.entries(urls)) {
    if (!url) continue;
    _cache[id] = url;
    // Persist URL to IDB so it survives reload without another network hop
    saveImage(id, url).catch(() => {});
  }
  if (Object.keys(urls).length) window.dispatchEvent(new CustomEvent("mab:images"));
}

export async function clearImages(): Promise<void> {
  _cache = {};
  window.dispatchEvent(new CustomEvent("mab:images"));
  try {
    const db = await openDB();
    await new Promise<void>((res, rej) => {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).clear();
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  } catch (e) {
    console.error("[ImageStore] clear failed", e);
  }
}
