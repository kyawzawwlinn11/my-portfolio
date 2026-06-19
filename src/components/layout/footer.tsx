import Link from "next/link";

import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="mt-8 border-t-2 border-border bg-section-cream">
      <div className="site-shell-line h-1 w-full" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.25fr_0.75fr_1fr] lg:px-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-primary text-sm font-black text-primary-foreground shadow-[3px_3px_0_#1f1a24]">
              KZ
            </span>
            <div>
              <p className="text-base font-black text-foreground">Kyaw Zaww Linn</p>
              <p className="text-xs font-bold uppercase text-primary">
                Senior full-stack developer
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm font-medium leading-6 text-muted-foreground">
            Product-minded engineer focused on production web, mobile, CMS,
            backend systems, and startup software delivery.
          </p>
          <p className="mt-4 text-xs font-medium leading-5 text-muted-foreground">
            Based in {siteConfig.location}. Available for selected senior roles,
            backend/product engineering work, and focused product builds.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-black uppercase text-primary">Navigation</p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-xs font-black uppercase text-primary">Connect</p>
          <div className="mt-3">
            <SocialLinks links={siteConfig.socialLinks} email={siteConfig.email} />
          </div>
        </div>
      </div>
    </footer>
  );
}
