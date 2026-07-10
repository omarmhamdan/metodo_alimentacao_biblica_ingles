import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import { Ed, EditImage } from "@/components/Editable";
import { useDaily, useLang } from "@/lib/store";
import sucoImg from "@/assets/suco-sagrado.jpg";

export const Route = createFileRoute("/suco-sagrado")({
  component: SucoSagrado,
});

const content = {
  badge: "Morning ritual",
  title: "Sacred Morning Juice",
  subtitle: "The first gesture of the day that stills the soul and wakes the body.",
  verse: "In the morning You hear my voice, O Lord; in the morning I lay my prayers before You.",
  verseRef: "Psalm 5:3",
  secIngredientes: "Ingredients",
  secRitual: "Ritual",
  secBeneficios: "Benefits",
  ingredientes: [
    "1 green apple",
    "1 handful of fresh mint",
    "Juice of 1 lemon",
    "1 teaspoon raw honey",
    "1 thin slice of ginger",
    "300 ml (1¼ cups) filtered water",
  ],
  passos: [
    "Wash all the ingredients in silence, giving thanks for the harvest.",
    "Blend everything for 30 seconds.",
    "Strain (optional) and serve immediately, in a glass.",
    "Drink slowly, on an empty stomach, in prayer.",
  ],
  beneficios: [
    "Wakes up the liver",
    "Reduces inflammation",
    "Boosts natural energy",
    "Hydrates deeply",
  ],
  btnDone: "I had it today — God bless you",
  btnMark: "Mark as done today",
};

const SPT = content;
const SES = content;

function SucoSagrado() {
  const { daily, update } = useDaily();
  const c = content;

  return (
    <AppShell>
      <div className="relative h-[44vh] min-h-[300px] w-full overflow-hidden">
        <EditImage
          id="suco-sagrado"
          src={sucoImg}
          alt={c.title}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-cream" />
        <Link
          to="/dashboard"
          className="absolute left-4 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/85 text-foreground shadow-card backdrop-blur"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="-mt-6 rounded-t-3xl bg-background px-6 pt-6 pb-2"
      >
        <Ed
          as="p"
          k="suco.badge"
          pt={SPT.badge}
          es={SES.badge}
          className="block text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground"
        />
        <Ed
          as="h1"
          k="suco.title"
          pt={SPT.title}
          es={SES.title}
          className="mt-1 block font-serif text-3xl leading-tight text-foreground text-balance"
        />
        <Ed
          as="p"
          k="suco.subtitle"
          pt={SPT.subtitle}
          es={SES.subtitle}
          className="mt-2 block text-sm text-muted-foreground text-balance"
        />

        <blockquote className="mt-5 rounded-2xl bg-gradient-devotional p-4">
          <Ed
            as="p"
            k="suco.verse"
            pt={`"${SPT.verse}"`}
            es={`"${SES.verse}"`}
            className="block font-serif italic text-sm text-foreground"
          />
          <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
            {c.verseRef}
          </p>
        </blockquote>

        <Section title={c.secIngredientes}>
          <ul className="space-y-2">
            {c.ingredientes.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" /> {i}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={c.secRitual}>
          <ol className="space-y-3">
            {c.passos.map((p, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-highlight font-serif text-xs text-earth">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed">{p}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section title={c.secBeneficios}>
          <div className="flex flex-wrap gap-2">
            {c.beneficios.map((b) => (
              <span key={b} className="rounded-full bg-highlight px-3 py-1.5 text-xs text-earth">
                {b}
              </span>
            ))}
          </div>
        </Section>

        <button
          onClick={() => update({ sucoTomado: !daily.sucoTomado })}
          className={`mt-8 w-full rounded-2xl px-5 py-4 text-sm font-medium shadow-soft transition-all active:scale-[0.98] ${
            daily.sucoTomado
              ? "bg-sage/40 text-foreground"
              : "bg-gradient-primary text-primary-foreground"
          }`}
        >
          <span className="inline-flex items-center justify-center gap-2">
            {daily.sucoTomado ? (
              <>
                <Check className="h-4 w-4" /> {c.btnDone}
              </>
            ) : (
              c.btnMark
            )}
          </span>
        </button>
      </motion.div>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 font-serif text-lg text-foreground">{title}</h2>
      {children}
    </section>
  );
}
