// Slots de imagem dos bônus (Anti-Inflamação 7 Dias + Mesa Única).
// Fonte única usada pelas páginas (fallback) e pelo painel admin (lista de upload).
// Cada slot é editável via admin → sobe para o Supabase (tabela recipe_photos),
// igual às fotos de receita. As páginas leem getCachedImages()[id] ?? fallback.

import heroMesa from "@/assets/hero-mesa.jpg";
import suco from "@/assets/suco-sagrado.jpg";
import sopa from "@/assets/recipe-sopa.jpg";
import salada from "@/assets/recipe-salada.jpg";
import lentilhas from "@/assets/recipe-lentilhas.jpg";
import peixe from "@/assets/recipe-peixe.jpg";
import pao from "@/assets/recipe-pao.jpg";
import figos from "@/assets/recipe-figos.jpg";

export interface BonusSlot {
  id: string;
  label: string;
  group: string;
  fallback: string;
}

const G_PROTO = "Anti-Inflammatory 7 Days";
const G_MESA = "The Family Table Guide";

export const bonusSlots: BonusSlot[] = [
  // ── Anti-Inflammatory 7 Days ──
  { id: "protocolo-hero", label: "Cover (hero)", group: G_PROTO, fallback: heroMesa },
  { id: "protocolo-agua", label: "Jordan Water", group: G_PROTO, fallback: suco },
  { id: "protocolo-dia-1", label: "Day 1 — The Preparation", group: G_PROTO, fallback: suco },
  { id: "protocolo-dia-2", label: "Day 2 — The Cleansing Begins", group: G_PROTO, fallback: sopa },
  { id: "protocolo-dia-3", label: "Day 3 — The Peak of Drainage", group: G_PROTO, fallback: salada },
  { id: "protocolo-dia-4", label: "Day 4 — The Stabilization", group: G_PROTO, fallback: lentilhas },
  { id: "protocolo-dia-5", label: "Day 5 — Lightness Settles In", group: G_PROTO, fallback: peixe },
  { id: "protocolo-dia-6", label: "Day 6 — New Life", group: G_PROTO, fallback: pao },
  { id: "protocolo-dia-7", label: "Day 7 — The Renewal", group: G_PROTO, fallback: figos },

  // ── The Family Table Guide ──
  { id: "mesa-hero", label: "Cover (hero)", group: G_MESA, fallback: heroMesa },
  {
    id: "mesa-cat-lentilhas",
    label: "Category · Lentils & grains",
    group: G_MESA,
    fallback: lentilhas,
  },
  { id: "mesa-cat-peixes", label: "Category · Fish", group: G_MESA, fallback: peixe },
  { id: "mesa-cat-legumes", label: "Category · Vegetables", group: G_MESA, fallback: salada },
  { id: "mesa-cat-paes", label: "Category · Breads", group: G_MESA, fallback: pao },
  { id: "mesa-cat-sobremesas", label: "Category · Desserts", group: G_MESA, fallback: figos },
  { id: "mesa-domingo-1", label: "Sunday · Lamb/roast", group: G_MESA, fallback: lentilhas },
  { id: "mesa-domingo-2", label: "Sunday · Golden chicken", group: G_MESA, fallback: sopa },
  { id: "mesa-domingo-3", label: "Sunday · Bread board", group: G_MESA, fallback: pao },
  { id: "mesa-domingo-4", label: "Sunday · Whole fish", group: G_MESA, fallback: peixe },
  { id: "mesa-domingo-5", label: "Sunday · Figs, honey & walnuts", group: G_MESA, fallback: figos },
];

/** Map id → fallback asset, for useStoredImageMap. */
export const bonusFallbacks: Record<string, string> = Object.fromEntries(
  bonusSlots.map((s) => [s.id, s.fallback]),
);
