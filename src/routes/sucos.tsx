import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, ChefHat, Leaf } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useLang } from "@/lib/store";
import { sucos, sucoCats, type SucoCat } from "@/lib/sucos";

export const Route = createFileRoute("/sucos")({
  component: SucosPage,
});

const chrome = {
  pt: {
    badge: "Biblioteca de sucos",
    title: "Sucos da Terra",
    subtitle: "Mais de 50 sucos naturais para cada necessidade do corpo. Simples, vivos e bíblicos.",
    todos: "Todos",
    ritualBadge: "Ritual da manhã",
    ritualTitle: "Suco Sagrado da Manhã",
    ritualSub: "O suco-ritual do dia, com versículo e marcação de progresso.",
    ritualCta: "Abrir ritual →",
    lblIngredientes: "Ingredientes",
    lblPreparo: "Modo de preparo",
    count: (n: number) => `${n} sucos`,
  },
  es: {
    badge: "Biblioteca de jugos",
    title: "Jugos de la Tierra",
    subtitle: "Más de 50 jugos naturales para cada necesidad del cuerpo. Simples, vivos y bíblicos.",
    todos: "Todos",
    ritualBadge: "Ritual de la mañana",
    ritualTitle: "Jugo Sagrado de la Mañana",
    ritualSub: "El jugo-ritual del día, con versículo y registro de progreso.",
    ritualCta: "Abrir ritual →",
    lblIngredientes: "Ingredientes",
    lblPreparo: "Modo de preparación",
    count: (n: number) => `${n} jugos`,
  },
};

function SucosPage() {
  const { lang } = useLang();
  const c = chrome[lang];
  const [cat, setCat] = useState<SucoCat | "todos">("todos");
  const [open, setOpen] = useState<string | null>(null);

  const list = cat === "todos" ? sucos : sucos.filter((s) => s.cat === cat);

  return (
    <AppShell>
      <header className="px-6 pt-12 pb-4">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-highlight px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-earth">
          <Leaf className="h-3 w-3" /> {c.badge}
        </div>
        <h1 className="font-serif text-[28px] leading-tight text-foreground text-balance">
          {c.title}
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground text-balance">{c.subtitle}</p>
      </header>

      {/* Suco Sagrado — ritual destaque */}
      <Link to="/suco-sagrado" className="mx-6 mb-5 block">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-5 text-primary-foreground shadow-soft">
          <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-cream/25 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
            <Sparkles className="h-3 w-3" /> {c.ritualBadge}
          </div>
          <h2 className="font-serif text-xl leading-tight">{c.ritualTitle}</h2>
          <p className="mt-1 text-xs text-primary-foreground/85">{c.ritualSub}</p>
          <span className="mt-3 inline-block text-xs font-medium underline-offset-4">
            {c.ritualCta}
          </span>
        </div>
      </Link>

      {/* Filtros */}
      <div className="mb-4 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Chip active={cat === "todos"} onClick={() => setCat("todos")}>
          {c.todos}
        </Chip>
        {sucoCats.map((sc) => (
          <Chip key={sc.id} active={cat === sc.id} onClick={() => setCat(sc.id)}>
            {sc.emoji} {sc[lang]}
          </Chip>
        ))}
      </div>

      <p className="mb-2 px-6 text-[11px] uppercase tracking-wider text-muted-foreground">
        {c.count(list.length)}
      </p>

      {/* Lista */}
      <div className="mx-6 mb-4 space-y-2.5">
        {list.map((s) => {
          const isOpen = open === s.id;
          return (
            <div key={s.id} className="overflow-hidden rounded-2xl bg-card shadow-card">
              <button
                onClick={() => setOpen(isOpen ? null : s.id)}
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
              >
                <span className="flex-1">
                  <span className="block font-serif text-base leading-tight text-foreground">
                    {s.nome[lang]}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {s.beneficio[lang]}
                  </span>
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 px-4 py-3">
                      <h4 className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-foreground">
                        <ChefHat className="h-3 w-3" /> {c.lblIngredientes}
                      </h4>
                      <ul className="space-y-1">
                        {s.ingredientes[lang].map((it, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                            {it}
                          </li>
                        ))}
                      </ul>
                      <h4 className="mb-1.5 mt-3 text-[11px] font-medium uppercase tracking-wider text-foreground">
                        {c.lblPreparo}
                      </h4>
                      <ol className="space-y-1.5">
                        {s.preparo[lang].map((p, i) => (
                          <li key={i} className="flex gap-2.5 text-[13px] text-muted-foreground">
                            <span className="font-serif text-xs text-earth">{i + 1}.</span>
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <div className="h-6" />
    </AppShell>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "bg-gradient-primary text-primary-foreground shadow-soft"
          : "bg-card text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
