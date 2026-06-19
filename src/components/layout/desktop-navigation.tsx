"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types";

type DesktopNavigationProps = {
  items: NavigationItem[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 rounded-full border-2 border-border bg-card px-2 py-1 shadow-[4px_4px_0_rgba(31,26,36,0.8)] md:flex"
    >
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "premium-transition relative rounded-full px-3 py-2 text-sm font-bold text-muted-foreground hover:text-foreground",
              active && "text-foreground",
            )}
          >
              {active ? (
                <motion.span
                  layoutId="active-main-navigation"
                className="absolute inset-0 rounded-full border-2 border-border bg-background-soft"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
