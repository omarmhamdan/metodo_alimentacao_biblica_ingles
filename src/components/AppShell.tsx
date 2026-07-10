import { ReactNode, useState, useEffect } from "react";
import { BottomNav } from "./BottomNav";
import { SideNav } from "./SideNav";
import { EditModeBar } from "./Editable";
import { useUser } from "@/lib/store";
import { initTextOverrides } from "@/lib/edit-store";
import { initEntitlements, useBlacklist } from "@/lib/entitlements";
import { BlacklistBlock } from "./BlacklistBlock";

/**
 * Responsive strategy:
 *  • Mobile (<768px):                full-width, bottom nav
 *  • Tablet portrait (768-1023px):   full-width content w/ generous padding, bottom nav
 *  • Tablet landscape & desktop (≥1024px):  side nav (left) + flexible content
 *
 *  Inner page components use responsive grids (grid-cols-2 md:grid-cols-3 lg:grid-cols-4)
 *  so cards expand naturally to use the available space.
 */
export function AppShell({ children, hideNav }: { children: ReactNode; hideNav?: boolean }) {
  const { user } = useUser();
  const blacklist = useBlacklist();
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Load inline-edit text overrides (cloud + local) once on mount
  useEffect(() => {
    initTextOverrides();
  }, []);

  // Load purchase entitlements for the logged-in email (per-product paywall)
  useEffect(() => {
    initEntitlements(user?.email);
  }, [user?.email]);

  // Blocked by refund blacklist → replace the whole app with the red block screen
  // (admin login bypasses this; see blacklistInfo()).
  if (blacklist) {
    return (
      <div className="relative min-h-screen w-full bg-background">
        <BlacklistBlock />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className={isWide ? "flex" : ""}>
        {/* Side nav (desktop + large tablet landscape) */}
        {isWide && !hideNav && <SideNav />}

        {/* Main content area */}
        <div
          className={[
            "relative flex-1 min-h-screen",
            // Padding adapts to screen size
            "px-0",
            // Constrain reading width on very wide screens for legibility
            isWide ? "max-w-[1400px] mx-auto" : "",
          ].join(" ")}
        >
          <main className={isWide ? "pb-10" : "pb-28"}>{children}</main>

          {/* Bottom nav only on mobile + small tablet */}
          {!isWide && !hideNav && <BottomNav />}
        </div>
      </div>

      {/* Admin inline-edit mode bar */}
      <EditModeBar />
    </div>
  );
}
