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
  const heroCtas = profile.heroCtas?.length
    ? profile.heroCtas
    : [
        { label: "View case studies", href: "/projects", variant: "primary" as const },
        { label: "Contact me", href: "/contact", variant: "secondary" as const },
      ];
  const highlights = (profile.highlights ?? []).slice(0, 2);
  const statusRows: Array<[string, string]> = [
    ["role", profile.role.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_")],
    ["focus", "product_engineering"],
    ["domains", "travel_tech / fintech / startups"],
    ["stack", "nextjs / typescript / node / sanity"],
    ["status", "open_to_selected_roles"],
  ];

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <StaggerContainer>
          <StaggerItem>
            <p className="retro-label text-sm font-bold text-primary">
              PLAYER_PROFILE / {profile.name.replaceAll(" ", "_").toUpperCase()}
            </p>
          </StaggerItem>
          <StaggerItem y={10}>
            <h1 className="retro-headline mt-5 max-w-4xl text-4xl leading-tight tracking-tight sm:text-5xl">
              {profile.role}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {profile.heroIntro}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroCtas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  size="lg"
                  variant={cta.variant === "secondary" ? "secondary" : "default"}
                >
                  <Link href={cta.href}>
                    {cta.variant === "secondary" ? "SELECT" : "START"}: {cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              ))}
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="retro-label inline-flex items-center gap-2 rounded-md border-2 border-primary/35 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                <span className="status-dot" />
                {profile.availability}
              </span>
              <span>save file ready / {profile.location}</span>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <HeroStatusPanel rows={statusRows} highlights={highlights} />
      </div>
    </section>
  );
}
