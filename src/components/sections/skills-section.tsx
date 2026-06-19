import { Badge } from "@/components/ui/badge";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Skill } from "@/types";

type SkillsSectionProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = skills.reduce<Record<string, Skill[]>>((groups, skill) => {
    const category = skill.category ?? "Other";
    const group = groups[category] ?? [];
    groups[category] = [...group, skill];
    return groups;
  }, {});

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="Technical Skills"
            title="A practical stack for shipping complete products."
            description="Frontend, backend, mobile, database, CMS, analytics, DevOps, and production support skills from real product work."
          />
        </AnimatedContainer>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
            <AnimatedContainer key={category} delay={Math.min(index * 0.04, 0.14)}>
            <div className="readable-panel premium-transition rounded-xl p-6 hover:-translate-x-0.5 hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold text-foreground">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill._id} variant={skill.featured ? "default" : "secondary"}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
