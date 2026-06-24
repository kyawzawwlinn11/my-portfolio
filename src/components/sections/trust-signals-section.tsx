import { AnimatedContainer } from "@/components/shared/animated-container";
import type { Experience, Project } from "@/types";

type TrustSignalsSectionProps = {
  experience: Experience[];
  projects: Project[];
};

const domainSignals = ["Travel Tech", "Fintech", "Creator Platforms"];

function uniqueSignals(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).slice(0, 8);
}

export function TrustSignalsSection({ experience, projects }: TrustSignalsSectionProps) {
  const companySignals = uniqueSignals([
    ...experience.map((item) => item.company),
    ...projects.map((project) => project.company ?? ""),
  ]);
  const signals = uniqueSignals([...companySignals, ...domainSignals]);

  if (!signals.length) {
    return null;
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <div className="rounded-lg border border-border bg-card/60 px-5 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="retro-label text-xs font-bold uppercase text-muted-foreground">
                selected companies / domains
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {signals.map((signal) => (
                  <span key={signal} className="text-sm font-semibold text-foreground/90">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
