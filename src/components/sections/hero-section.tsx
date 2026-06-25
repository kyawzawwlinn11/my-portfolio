import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/shared/animated-container";
import { HeroStatusPanel } from "@/components/sections/hero-status-panel";
import type { Profile } from "@/types";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const heroCtas = profile.heroCtas ?? [];
  const statusRows: Array<[string, string]> = [
    ["role", profile.role],
    ["availability", profile.availability],
    ["location", profile.location],
  ];

  return (
    <section className="hero-section relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-xl border-2 border-border bg-section-lavender p-2 shadow-[8px_8px_0_rgba(32,26,36,0.9)]">
        <div className="grid gap-6 rounded-lg border-2 border-border bg-card p-5 sm:p-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-8">
          <StaggerContainer className="min-w-0">
            <div>
              <StaggerItem y={10}>
                <h1 className="retro-hero-statement max-w-3xl">
                  {profile.heroIntro}
                </h1>
              </StaggerItem>
            </div>

            <StaggerItem>
              {heroCtas.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {heroCtas.map((cta) => (
                    <Button
                      key={cta.href}
                      asChild
                      size="default"
                      variant={cta.variant === "secondary" ? "secondary" : "default"}
                      className="min-w-44 justify-between"
                    >
                      <Link href={cta.href}>
                        <span className="truncate">{cta.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/button:translate-x-1" />
                      </Link>
                    </Button>
                  ))}
                </div>
              ) : null}
            </StaggerItem>

            <StaggerItem>
              <div className="mt-5">
                <div className="lg:hidden">
                  <HeroStatusPanel rows={statusRows} highlights={[]} />
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="hidden lg:block">
            <HeroStatusPanel rows={statusRows} highlights={[]} />
          </div>
        </div>
      </div>
    </section>
  );
}
