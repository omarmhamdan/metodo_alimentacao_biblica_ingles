// Generate per-recipe food photos with OpenAI gpt-image-1, then upload them to
// the same Supabase storage + recipe_photos table the in-app admin uses.
// Because the app treats the cloud as authoritative on load, these photos show
// up for every user and survive deploys — no bundle changes, no cache problems.
//
// Usage:
//   OPENAI_API_KEY=sk-... node scripts/gen-recipe-photos.mjs            # all 50 (skips ones already in cloud)
//   OPENAI_API_KEY=sk-... node scripts/gen-recipe-photos.mjs --dry      # generate to scripts/out/, NO upload
//   OPENAI_API_KEY=sk-... node scripts/gen-recipe-photos.mjs --limit 1  # just the first (smoke test)
//   OPENAI_API_KEY=sk-... node scripts/gen-recipe-photos.mjs --only pao-cevada-mel
//   OPENAI_API_KEY=sk-... node scripts/gen-recipe-photos.mjs --force    # regenerate even if cloud already has it
//
// Flags can combine. Always save a local copy to scripts/out/ as a backup.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { R } from "./gen-breakfast.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(__dirname, "out");

// ---- args ----
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : undefined; };
const DRY = has("--dry");
const FORCE = has("--force");
const LIMIT = val("--limit") ? parseInt(val("--limit"), 10) : Infinity;
const ONLY = val("--only");

// ---- env: read .env.local for Supabase, OPENAI_API_KEY from process env ----
function parseEnv(file) {
  const out = {};
  if (!existsSync(file)) return out;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}
const env = { ...parseEnv(join(root, ".env.local")), ...process.env };
const OPENAI_API_KEY = env.OPENAI_API_KEY;
const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_ANON = env.VITE_SUPABASE_ANON_KEY;
// Storage upload + recipe_photos write now require an authenticated admin
// (is_admin() was revoked from anon). Provide admin creds OR a service-role key.
const ADMIN_EMAIL = env.ADMIN_EMAIL;
const ADMIN_PASSWORD = env.ADMIN_PASSWORD;
const SERVICE_ROLE = env.SUPABASE_SERVICE_ROLE_KEY;
const PHOTOS_BUCKET = "recipe-photos";

if (!OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY (set it in env or .env.local).");
  process.exit(1);
}
if (!DRY && (!SUPABASE_URL || !SUPABASE_ANON)) {
  console.error("Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY in .env.local (needed for upload). Use --dry to skip upload.");
  process.exit(1);
}
if (!DRY && !SERVICE_ROLE && !(ADMIN_EMAIL && ADMIN_PASSWORD)) {
  console.error("Upload needs admin auth. Add ADMIN_EMAIL + ADMIN_PASSWORD (the admin-panel login) OR SUPABASE_SERVICE_ROLE_KEY to .env.local. Or use --dry to only generate.");
  process.exit(1);
}

// Service role bypasses RLS; otherwise use anon client + admin sign-in.
const supabase = DRY
  ? null
  : SERVICE_ROLE
    ? createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } })
    : createClient(SUPABASE_URL, SUPABASE_ANON, { auth: { persistSession: false } });

async function authAdmin() {
  if (DRY || SERVICE_ROLE) return;
  const { error } = await supabase.auth.signInWithPassword({
    email: ADMIN_EMAIL.trim().toLowerCase(),
    password: ADMIN_PASSWORD,
  });
  if (error) throw new Error(`admin login failed: ${error.message}`);
  const { data: isAdmin, error: rpcErr } = await supabase.rpc("is_admin");
  if (rpcErr) throw new Error(`is_admin check failed: ${rpcErr.message}`);
  if (!isAdmin) throw new Error("logged-in user is not an admin");
  console.log(`🔑 authenticated as admin (${ADMIN_EMAIL})`);
}

// ---- prompt builder: name + key ingredients → photoreal biblical food shot ----
function buildPrompt(r) {
  const titulo = r.pt.t;
  // Strip parenthetical asides like "(Maná)" and measurements from ingredients
  const mainIngredients = r.pt.i
    .slice(0, 5)
    .map((s) => s.replace(/^[\d.,/]+\s*(g|kg|ml|l|colher[^ ]*|colheres[^ ]*|xícara[^ ]*|pitada|dente[s]?|ramo[s]?|folha[s]?|fatia[s]?|unidade[s]?|pau|copo[s]?)?(\s+de\s+| de | da | do )?/i, ""))
    .map((s) => s.replace(/\s*\(.*?\)\s*/g, "").trim())
    .filter(Boolean)
    .join(", ");
  return [
    `Professional overhead food photography of "${titulo.replace(/\s*\(.*?\)\s*/g, "")}",`,
    `a rustic biblical / ancient Middle-Eastern breakfast dish.`,
    `Key ingredients visible: ${mainIngredients}.`,
    `Bright, clean, airy high-key styling: light background — pale cream linen, white marble or whitewashed light wood,`,
    `simple white or light ceramic dishware, a few fresh ingredients neatly placed.`,
    `Abundant soft natural daylight, bright and fresh, minimal soft shadows, clean and hygienic look,`,
    `light and luminous color palette, shallow depth of field, highly appetizing, photorealistic, high detail.`,
    `No text, no logos, no people, no hands.`,
  ].join(" ");
}

async function generateImage(prompt) {
  const resp = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      n: 1,
      size: "1024x1024",
      quality: "medium",
      output_format: "webp",
    }),
  });
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`OpenAI ${resp.status}: ${txt.slice(0, 400)}`);
  }
  const json = await resp.json();
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image returned");
  return Buffer.from(b64, "base64");
}

async function cloudHas() {
  if (DRY) return new Set();
  const { data, error } = await supabase.from("recipe_photos").select("recipe_id");
  if (error) { console.warn("[warn] could not read recipe_photos:", error.message); return new Set(); }
  return new Set((data || []).map((d) => d.recipe_id));
}

async function uploadPhoto(recipeId, buffer) {
  const path = `${recipeId}-${Date.now()}.webp`;
  const { error: upErr } = await supabase.storage
    .from(PHOTOS_BUCKET)
    .upload(path, buffer, { contentType: "image/webp", cacheControl: "3600", upsert: true });
  if (upErr) throw new Error(`storage upload: ${upErr.message}`);
  const { data: pub } = supabase.storage.from(PHOTOS_BUCKET).getPublicUrl(path);
  const url = pub.publicUrl;
  const { error: dbErr } = await supabase.from("recipe_photos").upsert({ recipe_id: recipeId, url });
  if (dbErr) throw new Error(`db upsert: ${dbErr.message}`);
  return url;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  mkdirSync(outDir, { recursive: true });
  await authAdmin();
  let targets = R;
  if (ONLY) targets = targets.filter((r) => r.id === ONLY);
  targets = targets.slice(0, LIMIT);

  const existing = FORCE ? new Set() : await cloudHas();
  const results = [];
  let done = 0, skipped = 0, failed = 0;

  for (const r of targets) {
    if (existing.has(r.id)) { console.log(`⏭  skip ${r.id} (already in cloud)`); skipped++; continue; }
    const prompt = buildPrompt(r);
    try {
      console.log(`🎨 ${r.id} — generating…`);
      let buffer;
      for (let attempt = 1; ; attempt++) {
        try { buffer = await generateImage(prompt); break; }
        catch (e) {
          if (attempt >= 3) throw e;
          console.warn(`   retry ${attempt} after error: ${e.message.slice(0, 120)}`);
          await sleep(2000 * attempt);
        }
      }
      const localPath = join(outDir, `${r.id}.webp`);
      writeFileSync(localPath, buffer);
      let url = `(dry, saved ${localPath})`;
      if (!DRY) { url = await uploadPhoto(r.id, buffer); console.log(`   ⬆  ${url}`); }
      results.push({ id: r.id, titulo: r.pt.t, url, prompt });
      done++;
      await sleep(1200); // gentle pacing for rate limits
    } catch (e) {
      console.error(`❌ ${r.id}: ${e.message}`);
      results.push({ id: r.id, error: e.message });
      failed++;
    }
  }

  writeFileSync(join(outDir, "manifest.json"), JSON.stringify(results, null, 2));
  console.log(`\nDone. generated=${done} skipped=${skipped} failed=${failed}. Manifest: scripts/out/manifest.json`);
  if (DRY) console.log("DRY run — nothing uploaded. Review scripts/out/ then re-run without --dry.");
}

main().catch((e) => { console.error(e); process.exit(1); });
