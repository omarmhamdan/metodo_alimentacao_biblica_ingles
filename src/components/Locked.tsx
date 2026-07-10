// Gate de acesso pago. Envolve o conteúdo de um upsell.
// Liberado → mostra children. Bloqueado → tela de venda (pitch + checkout + restaurar).

import { useState } from "react";
import { Lock, Check, ArrowRight, RotateCcw } from "lucide-react";
import {
  useEntitlement,
  restoreByEmail,
  CHECKOUT_URLS,
  type Produto,
} from "@/lib/entitlements";

interface Pitch {
  titulo: string;
  subtitulo: string;
  bullets: string[];
  cta: string;
}

const PITCH: Record<Produto, Pitch> = {
  "anti-inflamacao": {
    titulo: "7-Day Anti-Inflammatory Protocol",
    subtitulo: "The biblical 7-day protocol to de-bloat, gain energy, and get your body unstuck.",
    bullets: [
      "Day-by-day menu, from waking to dinner",
      "Jordan Water + Drainage Ritual (secret bonus)",
      "The science of each day, a shopping list, and a food guide",
      "Lifetime access, at your own pace",
    ],
    cta: "Unlock access",
  },
  "mesa-unica": {
    titulo: "The Family Table Guide",
    subtitulo: "How the whole family eats well without suspecting — one pot, zero fights.",
    bullets: [
      "Complete recipes by category, with a family version",
      "Flavor and texture tricks that fool the palate",
      "Sunday Table + strategies for the kids",
      "Lifetime access, at your own pace",
    ],
    cta: "Unlock access",
  },
};

const COPY = {
  locked: "Locked content",
  haveBought: "I already bought it",
  restoreHint: "Enter the email you used at checkout to unlock it on this device.",
  emailPh: "you@email.com",
  restore: "Restore access",
  notFound: "We couldn't find an active purchase with that email. Double-check it or wait a few minutes after payment.",
  found: "Access unlocked! 🎉",
  foundOther: "That email has access to {p}, but not to this one. If you think it's a mistake, contact support below.",
  soon: "Checkout coming soon. Contact support to unlock.",
  support: "Didn't work? Email biblicalnutritionmethod@gmail.com and we'll unlock your access within minutes.",
};

export function Locked({ product, children }: { product: Produto; children: React.ReactNode }) {
  const ok = useEntitlement(product);
  if (ok) return <>{children}</>;
  return <Paywall product={product} />;
}

function Paywall({ product }: { product: Produto }) {
  const p = PITCH[product];
  const t = COPY;
  const [showRestore, setShowRestore] = useState(false);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  // Store the message KIND (not the resolved string).
  const [msg, setMsg] = useState<{
    ok: boolean;
    kind: "found" | "foundOther" | "notFound" | "soon";
    otherProduct?: Produto;
  } | null>(null);

  const checkout = () => {
    const url = CHECKOUT_URLS[product];
    if (url) window.open(url, "_blank", "noopener");
    else setMsg({ ok: false, kind: "soon" });
  };

  const restore = async () => {
    setBusy(true);
    setMsg(null);
    const granted = await restoreByEmail(email);
    setBusy(false);
    if (granted.includes(product)) setMsg({ ok: true, kind: "found" });
    else if (granted.length > 0) setMsg({ ok: false, kind: "foundOther", otherProduct: granted[0] });
    else setMsg({ ok: false, kind: "notFound" });
  };

  return (
    <div className="mx-auto max-w-md px-6 pb-10 pt-16">
      <div className="rounded-3xl bg-gradient-devotional p-6 text-center shadow-card">
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-earth/10 text-earth">
          <Lock className="h-5 w-5" />
        </span>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t.locked}</p>
        <h1 className="mt-1 font-serif text-2xl leading-tight text-foreground text-balance">
          {p.titulo}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{p.subtitulo}</p>
      </div>

      <ul className="mt-5 space-y-2.5">
        {p.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 rounded-2xl bg-card p-3.5 shadow-card">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
            <span className="text-sm text-foreground">{b}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={checkout}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-transform active:scale-[0.98]"
      >
        {p.cta} <ArrowRight className="h-4 w-4" />
      </button>

      <button
        onClick={() => setShowRestore((v) => !v)}
        className="mt-3 w-full text-center text-xs text-muted-foreground underline-offset-4 hover:underline"
      >
        {t.haveBought}
      </button>

      {showRestore && (
        <div className="mt-3 rounded-2xl bg-card p-4 shadow-card">
          <p className="mb-2 text-xs text-muted-foreground">{t.restoreHint}</p>
          <input
            type="email"
            inputMode="email"
            autoCapitalize="none"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder={t.emailPh}
            style={{ fontSize: "16px" }}
            className="w-full rounded-xl border border-border bg-secondary px-3 py-2.5 text-sm outline-none focus:border-olive/50"
          />
          <button
            onClick={restore}
            disabled={busy}
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-olive py-2.5 text-sm font-medium text-cream disabled:opacity-60"
          >
            <RotateCcw className="h-3.5 w-3.5" /> {t.restore}
          </button>

          {msg && (
            <div
              className={`mt-3 space-y-2 rounded-xl p-3 text-center text-xs ${msg.ok ? "bg-sage/30 text-foreground" : "bg-terracotta/15 text-terracotta"}`}
            >
              <p>
                {msg.kind === "foundOther" && msg.otherProduct
                  ? t.foundOther.replace("{p}", PITCH[msg.otherProduct].titulo)
                  : t[msg.kind]}
              </p>
              {!msg.ok && (
                <p className="leading-relaxed">
                  {t.support.split("biblicalnutritionmethod@gmail.com").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <a
                          href="mailto:biblicalnutritionmethod@gmail.com"
                          className="font-semibold underline underline-offset-2"
                        >
                          biblicalnutritionmethod@gmail.com
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
