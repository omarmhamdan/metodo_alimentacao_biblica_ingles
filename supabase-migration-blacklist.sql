-- Blacklist — blocks app access for buyers who refunded/charged back the MAIN
-- product (Método Alimentación Bíblica). Run once in the Supabase SQL editor.
--
-- Writes happen from two places:
--   1) Hotmart webhook (Worker) — service_role key, BYPASSES RLS. On a refund/
--      chargeback/protest/cancel of the main product the buyer's email is added;
--      a later approved purchase removes it.
--   2) Admin panel — authenticated admin, gated by is_admin() (add/remove block).
-- Reads are public (anon) so the app can check a login email on any device.

create table if not exists public.blacklist (
  email      text primary key,
  reason     text,
  source     text,                 -- 'hotmart' | 'admin'
  event      text,                 -- the Hotmart event that triggered it
  created_at timestamptz not null default now()
);

create index if not exists blacklist_created_at_idx
  on public.blacklist (created_at desc);

alter table public.blacklist enable row level security;

drop policy if exists "blacklist public read" on public.blacklist;
create policy "blacklist public read"
  on public.blacklist for select using (true);

drop policy if exists "blacklist admin write" on public.blacklist;
create policy "blacklist admin write"
  on public.blacklist for all
  using (public.is_admin()) with check (public.is_admin());
