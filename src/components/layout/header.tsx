import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ScrollAwareHeader } from "@/components/layout/scroll-aware-header";
import { mainNavigation } from "@/config/navigation";

export function Header() {
  return (
    <ScrollAwareHeader>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
          <span className="premium-transition flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/45 bg-primary text-sm font-black text-primary-foreground shadow-[0_0_24px_rgba(56,213,255,0.22)] group-hover:-translate-y-0.5">
            KZ
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-foreground">
              Kyaw Zaww Linn
            </span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">
              backend / product systems
            </span>
          </span>
        </Link>

        <DesktopNavigation items={mainNavigation} />

        <div className="flex shrink-0 items-center gap-3">
          <span className="retro-label hidden rounded-md border-2 border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary lg:inline-flex">
            Available
          </span>
          <MobileNavigation items={mainNavigation} />
        </div>
      </div>
    </ScrollAwareHeader>
  );
}
