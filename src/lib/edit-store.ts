// Inline edit engine — admin-only "Modo edição" overlaid on the real app.
// Texts are stored as overrides keyed by a stable string id, persisted to
// Supabase (table `content_text`, visible to all users) with a localStorage
// fallback when Supabase isn't configured. Photos reuse the existing
// recipe_photos system (see image-store/sync).
//
// Access is gated: edit affordances only render when an admin is logged in
// (isAdminLoggedIn) AND edit mode is toggled on from /admin.

import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { isAdminLoggedIn } from "./admin-store";

export interface TextOverride {
  text?: string;
}

const LS_KEY = "mab:text_overrides";
// Edit mode is in-memory only → resets to OFF on every page reload (safety).
let _editMode = false;

let _map: Record<string, TextOverride> = {};
let _loaded = false;

// ── Local persistence (fallback / cache) ─────────────────────────────────────
function readLocal(): Record<string, TextOverride> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? "{}");
  } catch {
    return {};
  }
}
function writeLocal(m: Record<string, TextOverride>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(m));
}

/** Load all text overrides (cloud-authoritative, local fallback). Call at startup. */
export async function initTextOverrides(): Promise<void> {
  if (_loaded) return;
  _map = readLocal();
  _loaded = true;
  window.dispatchEvent(new CustomEvent("mab:text"));
  if (!supabase) return;
  try {
    const { data, error } = await supabase.from("content_text").select("key, text");
    if (error || !data) return;
    const cloud: Record<string, TextOverride> = {};
    for (const row of data as { key: string; text: string | null }[]) {
      cloud[row.key] = { text: row.text ?? undefined };
    }
    _map = { ..._map, ...cloud };
    writeLocal(_map);
    window.dispatchEvent(new CustomEvent("mab:text"));
  } catch {
    /* offline — keep local */
  }
}

export function getOverride(key: string): TextOverride | undefined {
  return _map[key];
}

/** Resolve the display string for a key, falling back to the code default. */
export function resolveText(key: string, fallback: string): string {
  const ov = _map[key];
  const v = ov?.text;
  return v != null && v.trim() !== "" ? v : fallback;
}

/** Save an override. Persists to cloud when admin+Supabase, else local. */
export async function saveTextOverride(key: string, value: TextOverride): Promise<void> {
  _map[key] = { ..._map[key], ...value };
  writeLocal(_map);
  window.dispatchEvent(new CustomEvent("mab:text"));
  if (!supabase) return;
  try {
    await supabase.from("content_text").upsert({
      key,
      text: _map[key].text ?? null,
    });
  } catch {
    /* keep local copy */
  }
}

/** Remove an override (restore code default). */
export async function clearTextOverride(key: string): Promise<void> {
  delete _map[key];
  writeLocal(_map);
  window.dispatchEvent(new CustomEvent("mab:text"));
  if (!supabase) return;
  try {
    await supabase.from("content_text").delete().eq("key", key);
  } catch {
    /* noop */
  }
}

// ── Edit mode flag ───────────────────────────────────────────────────────────
export function isEditMode(): boolean {
  if (typeof window === "undefined") return false;
  return _editMode && isAdminLoggedIn();
}

export function setEditMode(on: boolean): void {
  if (typeof window === "undefined") return;
  _editMode = on;
  window.dispatchEvent(new CustomEvent("mab:editmode"));
}

export function useEditMode(): boolean {
  const [on, setOn] = useState<boolean>(isEditMode);
  useEffect(() => {
    const fn = () => setOn(isEditMode());
    window.addEventListener("mab:editmode", fn);
    window.addEventListener("storage", fn);
    return () => {
      window.removeEventListener("mab:editmode", fn);
      window.removeEventListener("storage", fn);
    };
  }, []);
  return on;
}

/** Reactive resolved text for a key. */
export function useText(key: string, fallback: string): string {
  const [val, setVal] = useState<string>(() => resolveText(key, fallback));
  useEffect(() => {
    const fn = () => setVal(resolveText(key, fallback));
    fn();
    window.addEventListener("mab:text", fn);
    return () => window.removeEventListener("mab:text", fn);
  }, [key, fallback]);
  return val;
}
