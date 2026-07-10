// Access block for a refund on the main product.
// Shown when the lead's email is on the blacklist (requested cancellation/refund).
// Red error screen + button to complete the purchase again.

import { ShieldAlert, ArrowRight } from "lucide-react";

// Checkout for the main product.
export const REBUY_CHECKOUT_URL = "https://pay.hotmart.com/E106250747Q?checkoutMode=10";

const t = {
  badge: "Access blocked",
  title: "Your access has been blocked",
  body: "We identified a refund request made by you. For that reason, access to the material is blocked.",
  cta_intro: "Want to restore your access? Tap the button below and complete your purchase.",
  cta: "Complete purchase and restore access",
};

export function BlacklistBlock() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-6 py-12">
      <div className="w-full rounded-3xl border-2 border-red-500/40 bg-red-500/5 p-6 text-center shadow-card">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/15 text-red-600">
          <ShieldAlert className="h-7 w-7" />
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600">
          {t.badge}
        </p>
        <h1 className="mt-1 font-serif text-2xl leading-tight text-red-700 text-balance">
          {t.title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-red-700/90">{t.body}</p>
      </div>

      <p className="mt-6 px-2 text-center text-sm text-muted-foreground">{t.cta_intro}</p>

      <a
        href={REBUY_CHECKOUT_URL}
        target="_blank"
        rel="noopener"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-5 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-transform active:scale-[0.98]"
      >
        {t.cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
