"use client";

import { useEffect, useState, type PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export function ScrollAwareHeader({ children }: PropsWithChildren) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updateScrolled() {
      setScrolled(window.scrollY > 8);
    }

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        "glass-nav premium-transition sticky top-0 z-50",
        scrolled && "is-scrolled",
      )}
    >
      {children}
    </header>
  );
}
