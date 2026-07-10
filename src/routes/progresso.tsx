import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import { Ed } from "@/components/Editable";
import { useDaily, useUser } from "@/lib/store";

export const Route = createFileRoute("/progresso")({
  component: ProgressoPage,
});

const content = {
  badge: "Your journey",
  title: "Progress",
  subtitle: "Caring for yourself gently is the most biblical way to flourish.",
  statDay: "Day",
  statSeq: "Streak",
  statFav: "Favorites",
  weightTitle: "Weight",
  registro: "entry",
  registros: "entries",
  weightPlaceholder: "Today's weight (lb)",
  btnRegister: "Log",
  energyTitle: "How do you feel today?",
  energySubtitle: "Energy · 1 = low, 10 = vibrant",
  btnEnergy: "Log how I feel",
  verse: "He who began a good work in you will bring it to completion.",
  verseRef: "Philippians 1:6",
};

const PPT = content;
const PES = content;

function ProgressoPage() {
  const { user } = useUser();
  const { daily, update } = useDaily();
  const c = content;
  const [peso, setPeso] = useState<string>("");
  const [energia, setEnergia] = useState<number>(user?.energia ?? 5);

  const registrarPeso = () => {
    const v = Number(peso);
    if (!v) return;
    const hist = [...daily.pesoHistorico, { date: new Date().toISOString().slice(0, 10), peso: v }];
    update({ pesoHistorico: hist });
    setPeso("");
  };

  const registrarEnergia = () => {
    const hist = [
      ...daily.energiaHistorico,
      { date: new Date().toISOString().slice(0, 10), valor: energia },
    ];
    update({ energiaHistorico: hist });
  };

  const pesoData =
    daily.pesoHistorico.length > 0
      ? daily.pesoHistorico
      : [{ date: "start", peso: user?.pesoAtual ?? 70 }];

  return (
    <AppShell>
      <header className="px-6 pt-10 pb-4">
        <Ed
          as="p"
          k="prog.badge"
          pt={PPT.badge}
          es={PES.badge}
          className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        />
        <Ed
          as="h1"
          k="prog.title"
          pt={PPT.title}
          es={PES.title}
          className="mt-1 block font-serif text-3xl text-foreground"
        />
        <Ed
          as="p"
          k="prog.subtitle"
          pt={PPT.subtitle}
          es={PES.subtitle}
          className="mt-1 block text-sm text-muted-foreground text-balance"
        />
      </header>

      <section className="mx-6 mb-4 grid grid-cols-3 gap-3">
        <Stat label={c.statDay} value={String(daily.jornadaDia)} />
        <Stat label={c.statSeq} value={`${daily.sequencia}d`} />
        <Stat label={c.statFav} value={String(daily.favoritos.length)} />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-6 mb-4 rounded-3xl bg-card p-5 shadow-card"
      >
        <div className="mb-2 flex items-center justify-between">
          <Ed
            as="h2"
            k="prog.weightTitle"
            pt={PPT.weightTitle}
            es={PES.weightTitle}
            className="block font-serif text-lg text-foreground"
          />
          <span className="text-xs text-muted-foreground">
            {pesoData.length} {pesoData.length === 1 ? c.registro : c.registros}
          </span>
        </div>
        <div className="h-36 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pesoData}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                axisLine={false}
                tickLine={false}
                width={28}
                domain={["auto", "auto"]}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="peso"
                stroke="var(--olive)"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "var(--gold)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex gap-2">
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder={c.weightPlaceholder}
            className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-olive/50"
          />
          <button
            onClick={registrarPeso}
            className="rounded-2xl bg-gradient-primary px-5 text-sm font-medium text-primary-foreground shadow-soft"
          >
            {c.btnRegister}
          </button>
        </div>
      </motion.section>

      <section className="mx-6 mb-4 rounded-3xl bg-card p-5 shadow-card">
        <Ed
          as="h2"
          k="prog.energyTitle"
          pt={PPT.energyTitle}
          es={PES.energyTitle}
          className="mb-3 block font-serif text-lg text-foreground"
        />
        <Ed
          as="p"
          k="prog.energySubtitle"
          pt={PPT.energySubtitle}
          es={PES.energySubtitle}
          className="mb-3 block text-xs text-muted-foreground"
        />
        <div className="flex items-center justify-between gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setEnergia(i + 1)}
              className={`h-9 flex-1 rounded-lg text-xs font-medium transition-all ${
                i < energia
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={registrarEnergia}
          className="mt-4 w-full rounded-2xl border border-border bg-card py-3 text-sm font-medium text-foreground hover:bg-secondary"
        >
          {c.btnEnergy}
        </button>
      </section>

      <section className="mx-6 mb-6 rounded-3xl bg-gradient-devotional p-6 text-center shadow-card">
        <Ed
          as="p"
          k="prog.verse"
          pt={`"${PPT.verse}"`}
          es={`"${PES.verse}"`}
          className="block font-serif italic text-sm text-foreground text-balance"
        />
        <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
          {c.verseRef}
        </p>
      </section>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-card p-4 text-center shadow-card">
      <div className="font-serif text-2xl text-foreground">{value}</div>
      <div className="mt-0.5 text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
