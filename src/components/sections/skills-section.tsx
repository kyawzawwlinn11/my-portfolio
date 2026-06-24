import { Badge } from "@/components/ui/badge";
import {
  AnimatedContainer,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Skill } from "@/types";

type SkillsSectionProps = {
  skills: Skill[];
};

const preferredCoreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Sanity",
  "React Native",
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  const featuredSkills = skills.filter((skill) => skill.featured);
  const coreSkills = featuredSkills.length
    ? featuredSkills
    : skills.filter((skill) => preferredCoreStack.includes(skill.name));
  const coreSkillIds = new Set(coreSkills.map((skill) => skill._id));
  const extendedSkills = skills.filter((skill) => !coreSkillIds.has(skill._id));
  const groupedSkills = extendedSkills.reduce<Record<string, Skill[]>>(
    (groups, skill) => {
      const category = skill.category ?? "Other";
      const group = groups[category] ?? [];
      groups[category] = [...group, skill];
      return groups;
    },
    {},
  );

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="STAGE_03: STACK_INVENTORY"
            title="Core loadout first, extended inventory when the product needs it."
            description="A prioritized view of the stack I reach for most often, followed by supporting tools grouped for scanning."
          />
        </AnimatedContainer>
        <AnimatedContainer delay={0.04}>
          <div className="mt-10 rounded-lg border-2 border-primary/35 bg-card p-6">
            <p className="retro-label text-xs font-bold uppercase text-accent">
              CORE_LOADOUT
            </p>
            <StaggerContainer className="mt-5 flex flex-wrap gap-3" stagger={0.035}>
              {coreSkills.map((skill) => (
                <StaggerItem key={skill._id} y={6}>
                  <Badge variant="default" className="px-3 py-1.5 text-sm">
                    {skill.name}
                  </Badge>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedContainer>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
            <AnimatedContainer key={category} delay={Math.min(index * 0.04, 0.14)}>
              <div className="readable-panel premium-transition rounded-lg p-6 hover:-translate-y-0.5 hover:border-primary/35">
                <h3 className="retro-label text-sm font-bold uppercase text-foreground">
                  INVENTORY / {category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge key={skill._id} variant="secondary">
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
