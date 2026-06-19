import { Badge } from "@/components/ui/badge";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { formatDate } from "@/lib/utils";
import type { Experience } from "@/types";

type ExperienceSectionProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="Experience"
            title="Production ownership across travel, fintech, and startup delivery."
            description="A recruiter-friendly view of the roles where I shipped, supported, mentored, and led product work."
          />
        </AnimatedContainer>
        <div className="mt-10 space-y-5">
          {experience.map((item, index) => (
            <AnimatedContainer key={item._id} delay={Math.min(index * 0.04, 0.12)}>
            <article className="readable-panel premium-transition rounded-xl p-6 hover:-translate-x-0.5 hover:-translate-y-0.5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-primary">
                    {formatDate(item.startDate)} - {item.isCurrent ? "Present" : item.endDate ? formatDate(item.endDate) : "Current"}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {item.company}
                    {item.employmentType ? ` / ${item.employmentType}` : ""}
                  </p>
                </div>
                {item.featured ? <Badge variant="amber">high-signal</Badge> : null}
              </div>
              <p className="mt-5 text-sm font-medium leading-7 text-muted-foreground">{item.summary}</p>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {(item.achievements ?? []).slice(0, 4).map((achievement) => (
                  <li key={achievement} className="text-sm font-medium leading-6 text-muted-foreground">
                    <span className="text-primary">-</span> {achievement}
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
