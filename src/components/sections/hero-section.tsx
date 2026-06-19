import Link from "next/link";
import { ArrowRight, Code2, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import type { Profile, SiteSettings } from "@/types";

type HeroSectionProps = {
  profile: Profile;
  settings: SiteSettings;
};

export function HeroSection({ profile, settings }: HeroSectionProps) {
  const heroCtas = profile.heroCtas ?? [];
  const highlights = profile.highlights ?? [];

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <AnimatedContainer>
          <h1 className="retro-headline max-w-4xl text-4xl leading-none tracking-tight sm:text-6xl lg:text-7xl">
            {profile.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.heroIntro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroCtas.map((cta) => (
              <Button
                key={cta.href}
                asChild
                size="lg"
                variant={cta.variant === "secondary" ? "secondary" : "default"}
              >
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.08}
          className="retro-hero-art retro-window relative rounded-2xl p-5 pt-12"
        >
          <div className="retro-wire left-[-2rem] top-16 h-36 w-36 rotate-[-18deg]" />
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <Terminal className="h-4 w-4 text-primary" />
            <p className="text-xs font-bold uppercase text-muted-foreground">Profile Snapshot</p>
          </div>
          <div className="space-y-5 pt-5">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Current Focus</p>
              <p className="mt-2 text-sm leading-6 text-foreground">{profile.availability}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border-2 border-border bg-card p-3 shadow-[4px_4px_0_#1f1a24]"
                >
                  <p className="text-sm text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border-2 border-border bg-background-soft p-4 shadow-[5px_5px_0_#1f1a24]">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <p className="text-xs font-bold uppercase text-foreground">Positioning</p>
              </div>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {settings.description}
              </p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
