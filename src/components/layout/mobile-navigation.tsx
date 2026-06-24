"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/types";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <div className="md:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Toggle navigation"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu-panel absolute inset-x-4 top-20 rounded-lg p-3"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: -4 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.18,
                    delay: index * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "premium-transition block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                      pathname === item.href &&
                        "border-l-2 border-accent bg-background-soft text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
