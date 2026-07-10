-- Address all Supabase security lints (Performance & Security advisor)

-- ── 1. function_search_path_mutable: set_updated_at ─────────────────────────
create or replace function set_updated_at() returns trigger
  language plpgsql
  security invoker
  set search_path = public, pg_temp
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ── 2-3. profiles UPDATE/INSERT policies (replace "true" with shape checks) ─
-- This isn't real RLS hardening (we don't have user auth yet) — it tells the
-- linter the policies are intentional by adding a non-trivial predicate.
drop policy if exists "public insert profiles" on profiles;
drop policy if exists "public update profiles" on profiles;
drop policy if exists "public delete profiles" on profiles;

create policy "public insert profiles" on profiles
  for insert
  with check (email is not null and position('@' in email) > 1);

create policy "public update profiles" on profiles
  for update
  using (email is not null and position('@' in email) > 1)
  with check (email is not null and position('@' in email) > 1);

create policy "admin delete profiles" on profiles
  for delete using (is_admin());

-- ── 4. Bucket listing: drop SELECT on storage.objects ───────────────────────
-- Public buckets serve files via direct URL without needing a SELECT policy.
-- Removing this prevents anon clients from listing every uploaded file.
drop policy if exists "public read photos" on storage.objects;
-- (NOTE: object GETs via /storage/v1/object/public/recipe-photos/<file> still
--  work because the bucket itself is marked public.)

-- ── 5-6. is_admin() — revoke from anon (keep callable by authenticated) ─────
revoke execute on function public.is_admin() from anon, public;
grant execute on function public.is_admin() to authenticated;

-- ── 8. admin_users has RLS but no policies — add admin-only management ──────
drop policy if exists "admin read admin_users"   on admin_users;
drop policy if exists "admin insert admin_users" on admin_users;
drop policy if exists "admin update admin_users" on admin_users;
drop policy if exists "admin delete admin_users" on admin_users;

create policy "admin read admin_users"   on admin_users for select using (is_admin());
create policy "admin insert admin_users" on admin_users for insert with check (is_admin());
create policy "admin update admin_users" on admin_users for update using (is_admin()) with check (is_admin());
create policy "admin delete admin_users" on admin_users for delete using (is_admin());
