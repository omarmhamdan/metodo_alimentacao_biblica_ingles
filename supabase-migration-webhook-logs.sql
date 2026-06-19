-- Webhook logs — records every Hotmart webhook the Worker receives, for auditing.
-- Writes happen from the Worker via service_role (bypasses RLS). Reads = admin only.
-- Run once in the Supabase SQL editor.

create table if not exists public.webhook_logs (
  id           bigint generated always as identity primary key,
  received_at  timestamptz not null default now(),
  event        text,
  product_id   text,
  product_name text,
  mapped_product text,            -- 'anti-inflamacao' | 'mesa-unica' | null
  email        text,
  result       text,              -- granted | revoked | skipped | unauthorized | error
  detail       text
);

create index if not exists webhook_logs_received_at_idx
  on public.webhook_logs (received_at desc);

alter table public.webhook_logs enable row level security;

drop policy if exists "webhook_logs admin read" on public.webhook_logs;
create policy "webhook_logs admin read"
  on public.webhook_logs for select using (public.is_admin());
-- No insert policy for anon/authenticated: only the Worker (service_role) writes.
