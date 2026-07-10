import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import { Ed } from "@/components/Editable";

export const Route = createFileRoute("/fundamentos")({
  component: FundamentosPage,
});

const sessoesContent = {
  subtitle: "Foundations",
  title: "The Table of Eden",
  desc: "Short chapters to relearn how to eat with faith and purpose.",
  chapterLabel: "Chapter",
  quote: '"Taste and see that the Lord is good."',
  quoteRef: "Psalm 34:8",
  items: [
    {
      titulo: "The problem was never your weight",
      versiculo: "Psalm 139:14",
      texto:
        "For decades you were taught to blame the number on the scale. But the starting point isn't your weight — it's disconnection. Returning to the table God created is coming home.",
    },
    {
      titulo: "Silent inflammation",
      versiculo: "1 Corinthians 6:19",
      texto:
        "Excess sugar, ultra-processed foods, and refined oils light an invisible fire in the body. That fire is called inflammation — and it's the root behind fatigue, fluid retention, and weight that won't budge.",
    },
    {
      titulo: "Daniel's answer",
      versiculo: "Daniel 1:12",
      texto:
        "Daniel asked for just ten days on vegetables and water. In the end, he and his companions were stronger and healthier. The method begins here: in the courage to eat simply.",
    },
    {
      titulo: "What the Bible describes, science confirms",
      versiculo: "Proverbs 24:13",
      texto:
        "Olive oil, fish, herbs, legumes, fresh fruit, and raw honey. The biblical Mediterranean diet is one of the most studied today — and it's been in the Scriptures for millennia.",
    },
    {
      titulo: "How to use this method",
      versiculo: "Ecclesiastes 3:1",
      texto:
        "No hurry, no perfection. Substitute little by little. Drink the Sacred Juice in the morning. Drink water with presence. Cook while praying. Repeat.",
    },
    {
      titulo: "The table of Eden",
      versiculo: "Genesis 1:29",
      texto:
        "'Behold, I have given you every plant yielding seed and every fruit tree; it shall be your food.' The original table is living, colorful, fragrant. It's already yours.",
    },
  ],
};

const FPT = sessoesContent;
const FES = sessoesContent;

function FundamentosPage() {
  const c = sessoesContent;

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-5">
        <Ed
          as="p"
          k="fund.subtitle"
          pt={FPT.subtitle}
          es={FES.subtitle}
          className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        />
        <Ed
          as="h1"
          k="fund.title"
          pt={FPT.title}
          es={FES.title}
          className="mt-1 block font-serif text-3xl text-foreground"
        />
        <Ed
          as="p"
          k="fund.desc"
          pt={FPT.desc}
          es={FES.desc}
          className="mt-1 block text-sm text-muted-foreground text-balance"
        />
      </header>

      <div className="space-y-3 px-6 pb-4">
        {c.items.map((s, i) => (
          <motion.article
            key={s.titulo}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="rounded-3xl bg-card p-5 shadow-card"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="font-serif text-xs text-earth">
                {c.chapterLabel} {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="text-[10.5px] uppercase tracking-wider text-muted-foreground">
                {s.versiculo}
              </span>
            </div>
            <Ed
              as="h2"
              k={`fund.item.${i}.titulo`}
              pt={FPT.items[i].titulo}
              es={FES.items[i].titulo}
              className="block font-serif text-xl leading-tight text-foreground text-balance"
            />
            <Ed
              as="p"
              k={`fund.item.${i}.texto`}
              pt={FPT.items[i].texto}
              es={FES.items[i].texto}
              className="mt-3 block text-sm leading-relaxed text-muted-foreground text-balance"
            />
          </motion.article>
        ))}
      </div>

      <div className="mx-6 mb-6 rounded-3xl bg-gradient-devotional p-6 text-center shadow-card">
        <Ed
          as="p"
          k="fund.quote"
          pt={FPT.quote}
          es={FES.quote}
          className="block font-serif italic text-base text-foreground text-balance"
        />
        <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
          {c.quoteRef}
        </p>
      </div>
    </AppShell>
  );
}
