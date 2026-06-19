import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, Heart, Clock } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { EditImage, EdI18n } from "@/components/Editable";
import { categorias, categoriaES, dificuldadeES, type Categoria } from "@/lib/recipes";
import { useDaily, useLang, useRecipes } from "@/lib/store";

export const Route = createFileRoute("/receitas/")({
  component: ReceitasPage,
  // title set by AppShell bootstrap (per-language)
});

// Category label map per language
const CAT_ES: Record<Categoria, string> = {
  "Café da Manhã": "Desayunos",
  "Pratos Principais": "Platos Principales",
  "Saladas e Acompanhamentos": "Ensaladas",
  Sopas: "Sopas",
  "Ervas e Temperos": "Hierbas",
  Sobremesas: "Postres",
  "Receitas Âncora": "Recetas Ancla",
};
const CAT_PT: Record<Categoria, string> = {
  "Café da Manhã": "Café da Manhã",
  "Pratos Principais": "Pratos Principais",
  "Saladas e Acompanhamentos": "Saladas",
  Sopas: "Sopas",
  "Ervas e Temperos": "Ervas",
  Sobremesas: "Sobremesas",
  "Receitas Âncora": "Receitas Âncora",
};

function ReceitasPage() {
  const { daily, toggleFavorito } = useDaily();
  const { t, lang } = useLang();
  const recipes = useRecipes();
  const [q, setQ] = useState("");
  // Restore last-used category filter so returning from a recipe keeps the selection
  const [cat, setCat] = useState<Categoria | "Todas">(() => {
    if (typeof window === "undefined") return "Todas";
    const saved = sessionStorage.getItem("mab:rec_filter");
    return saved && (saved === "Todas" || categorias.includes(saved as Categoria))
      ? (saved as Categoria | "Todas")
      : "Todas";
  });
  useEffect(() => {
    if (typeof window !== "undefined") sessionStorage.setItem("mab:rec_filter", cat);
  }, [cat]);
  const catMap = lang === "es" ? CAT_ES : CAT_PT;
  const allLabel = t("rec_all");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchCat = cat === "Todas" || r.categoria === cat;
      const matchQ = q.trim() === "" || r.titulo.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, cat, lang, recipes]);

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-3">
        <EdI18n
          as="p"
          k="rec_subtitle"
          className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        />
        <EdI18n as="h1" k="rec_title" className="mt-1 block font-serif text-3xl text-foreground" />
        <EdI18n
          as="p"
          k="rec_desc"
          className="mt-1 block text-sm text-muted-foreground text-balance"
        />

        <label className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card focus-within:border-olive/50 focus-within:ring-2 focus-within:ring-olive/15">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("rec_search")}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
          />
        </label>
      </header>

      <div className="scroll-fade -mx-6 overflow-x-auto px-6 pb-2">
        <div className="flex gap-2 pb-2">
          {([allLabel, ...categorias] as const).map((c, i) => {
            const rawCat = i === 0 ? "Todas" : categorias[i - 1];
            const active = rawCat === cat;
            const displayLabel = i === 0 ? allLabel : catMap[rawCat as Categoria];
            return (
              <button
                key={String(c)}
                onClick={() => setCat(rawCat as Categoria | "Todas")}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "bg-card text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-6 mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 pb-6">
        {filtered.map((r) => {
          const isFav = (daily.favoritos ?? []).includes(r.id);
          return (
            <div
              key={r.id}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <Link to="/receitas/$id" params={{ id: r.id }} className="block">
                <div className="relative aspect-square overflow-hidden">
                  <EditImage
                    id={r.id}
                    src={r.imagem}
                    alt={r.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
                </div>
                <div className="p-3">
                  <p className="text-[9.5px] uppercase tracking-[0.15em] text-muted-foreground">
                    {catMap[r.categoria] ?? r.categoria}
                  </p>
                  <h3 className="mt-0.5 font-serif text-[15px] leading-tight text-foreground">
                    {r.titulo}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>
                      {r.tempo} {t("rec_min")}
                    </span>
                    <span>·</span>
                    <span>
                      {lang === "es"
                        ? (dificuldadeES[r.dificuldade] ?? r.dificuldade)
                        : r.dificuldade}
                    </span>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => toggleFavorito(r.id)}
                aria-label="Favoritar"
                className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-colors ${
                  isFav ? "bg-terracotta text-cream" : "bg-cream/80 text-earth hover:bg-cream"
                }`}
              >
                <Heart
                  className="h-4 w-4"
                  fill={isFav ? "currentColor" : "none"}
                  strokeWidth={1.75}
                />
              </button>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mx-6 mt-10 text-center text-sm text-muted-foreground">{t("rec_none")}</p>
      )}
    </AppShell>
  );
}
