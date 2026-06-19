import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { mainNavigation } from "@/config/navigation";

export function Header() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="site-shell-line h-1 w-full" />
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
          <span className="premium-transition flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-primary text-sm font-black text-primary-foreground shadow-[3px_3px_0_#1f1a24] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_#1f1a24]">
            KZ
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-foreground">
              Kyaw Zaww Linn
            </span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">
              Full-stack & product engineering
            </span>
          </span>
        </Link>

        <DesktopNavigation items={mainNavigation} />

        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden rounded-full border-2 border-border bg-section-mint px-3 py-1 text-xs font-bold text-foreground shadow-[3px_3px_0_#1f1a24] lg:inline-flex">
            Available
          </span>
          <MobileNavigation items={mainNavigation} />
        </div>
      </div>
    </header>
  );
}
