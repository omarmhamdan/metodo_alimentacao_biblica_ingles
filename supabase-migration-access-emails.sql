-- Access emails — idempotency ledger for the post-purchase access email (Brevo).
-- One row per Hotmart transaction that already had its access email sent, so the
-- same buyer is never emailed twice when Hotmart retries the webhook.
--
-- Writes/reads happen ONLY from the Worker via the service_role key (bypasses RLS).
-- No anon/authenticated policies → the table is invisible to the public client.
-- Run once in the Supabase SQL editor.

create table if not exists public.access_emails (
  transaction_id text primary key,   -- Hotmart data.purchase.transaction (or noTx:<email> fallback)
  email          text,
  sent_at        timestamptz not null default now()
);

alter table public.access_emails enable row level security;
-- Intentionally no policies: only the Worker (service_role) touches this table.
