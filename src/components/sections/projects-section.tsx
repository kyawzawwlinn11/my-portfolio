import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/features/projects/components/project-card";
import type { Project } from "@/types";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="STAGE_01: SELECT_STAGE"
              title="Load a case file from real product systems."
              description="Selected travel tech, creator platform, fintech, and client work with concrete ownership and delivery context."
            />
            <Button asChild variant="secondary">
              <Link href="/projects">Open archive</Link>
            </Button>
          </div>
        </AnimatedContainer>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedContainer key={project._id} delay={Math.min(index * 0.05, 0.15)}>
              <ProjectCard project={project} featured index={index} />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
