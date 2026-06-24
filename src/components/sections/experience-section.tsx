import { Badge } from "@/components/ui/badge";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { formatDate } from "@/lib/utils";
import type { Experience } from "@/types";

type ExperienceSectionProps = {
  experience: Experience[];
};

function cleanAchievement(value: string) {
  return value.replace(/^\s*(?:[-*]|[0-9]+[.)])\s+/, "");
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="STAGE_02: MISSION_LOG"
            title="Campaign history from production roles."
            description="A recruiter-friendly timeline of roles, ownership, stack, and product domains."
          />
        </AnimatedContainer>
        <div className="mt-10 space-y-6">
          {experience.map((item, index) => (
            <AnimatedContainer key={item._id} delay={Math.min(index * 0.04, 0.12)}>
              <article className="readable-panel premium-transition relative overflow-hidden rounded-lg p-6 hover:-translate-y-0.5 hover:border-primary/55">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-accent/70" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="retro-label text-xs font-bold uppercase text-accent">
                      MISSION_LOG / {formatDate(item.startDate)} -{" "}
                      {item.isCurrent
                        ? "Present"
                        : item.endDate
                          ? formatDate(item.endDate)
                          : "Current"}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.company}
                      {item.employmentType ? ` / ${item.employmentType}` : ""}
                      {item.location ? ` / ${item.location}` : ""}
                    </p>
                  </div>
                  {item.featured ? <Badge variant="amber">Featured role</Badge> : null}
                </div>
                <p className="mt-5 text-sm font-medium leading-7 text-muted-foreground">
                  {item.summary}
                </p>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {(item.achievements ?? []).slice(0, 4).map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm font-medium leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{cleanAchievement(achievement)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(item.technologies ?? []).slice(0, 8).map((technology) => (
                    <Badge key={technology} variant="secondary">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </article>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
