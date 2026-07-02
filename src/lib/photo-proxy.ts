// Photo proxy — serves recipe photos through the Cloudflare Worker instead of
// hitting Supabase Storage directly on every request.
//
// Why: Supabase's free plan meters "cached egress" (bytes served from its CDN).
// Recipe photos are public and downloaded by every visitor, which blows past the
// 5 GB quota. Cloudflare egress is free, so we fetch each object from Supabase
// ONCE (on a cache miss), stash it in the Cloudflare edge cache with a 1-year
// immutable header, and serve every subsequent request from Cloudflare. Supabase
// egress for photos drops to ~zero.
//
// Safety for leads: this must never break the app. On ANY failure (bad filename,
// upstream error, fetch throw) we fall back to a 302 redirect to the original
// Supabase public URL, so the image still loads — just without the egress saving
// for that one request. Photos always render; worst case is a missed optimization.

const BUCKET = "recipe-photos";

// Only a flat filename within the bucket — no slashes, no "..". This blocks path
// traversal / SSRF into other buckets or the Storage API.
const SAFE_FILENAME = /^[a-zA-Z0-9._-]+$/;

type PhotoProxyEnv = { SUPABASE_URL?: string } | undefined;
type ExecutionCtx = { waitUntil?: (promise: Promise<unknown>) => void };

function upstreamUrl(base: string, file: string): string {
  const clean = base.replace(/\/+$/, "");
  return `${clean}/storage/v1/object/public/${BUCKET}/${file}`;
}

/**
 * Handle GET/HEAD /api/photo/<file>. Serves the Supabase Storage object through
 * the Cloudflare edge cache; falls back to a redirect to Supabase on any problem.
 */
export async function handlePhotoProxy(
  request: Request,
  env: PhotoProxyEnv,
  ctx: ExecutionCtx,
): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const url = new URL(request.url);
  const file = decodeURIComponent(url.pathname.slice("/api/photo/".length));

  const base = env?.SUPABASE_URL;
  // Reject anything that isn't a plain in-bucket filename. Without an upstream
  // base we can't proxy either — 404 rather than guess.
  if (!base || !file || file.includes("..") || !SAFE_FILENAME.test(file)) {
    return new Response("Not Found", { status: 404 });
  }

  const target = upstreamUrl(base, file);

  // Edge cache lookup. Key on the proxy URL (stable, no query noise).
  const cache = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  const cacheKey = new Request(url.origin + url.pathname, { method: "GET" });

  try {
    if (cache) {
      const hit = await cache.match(cacheKey);
      if (hit) return hit;
    }

    const upstream = await fetch(target, {
      method: "GET",
      headers: { accept: request.headers.get("accept") ?? "image/*" },
    });

    // Upstream unhappy (missing object, 5xx, etc.) — don't cache, just send the
    // lead straight to Supabase so the image still resolves.
    if (!upstream.ok) {
      return Response.redirect(target, 302);
    }

    // Rebuild the response with our own long-lived immutable cache header. The
    // upload path is cache-busted (`<id>-<timestamp>.<ext>`), so a new photo is
    // always a new URL — immutable is safe and never serves a stale image.
    const headers = new Headers();
    const contentType = upstream.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    headers.set("cache-control", "public, max-age=31536000, immutable");

    const body = await upstream.arrayBuffer();
    const cached = new Response(body, { status: 200, headers });

    if (cache && ctx.waitUntil) {
      ctx.waitUntil(cache.put(cacheKey, cached.clone()));
    }

    // HEAD gets headers only.
    if (request.method === "HEAD") {
      return new Response(null, { status: 200, headers });
    }
    return cached;
  } catch {
    // Any failure in the proxy path — never surface an error to the lead.
    return Response.redirect(target, 302);
  }
}
