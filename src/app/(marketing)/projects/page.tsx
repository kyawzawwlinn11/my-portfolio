import type { Metadata } from "next";

import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { ProjectCard } from "@/features/projects/components/project-card";
import { createMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Projects - Kyaw Zaww Linn",
  description:
    "Case studies across creator workflows, travel search, fintech mobile, and startup software delivery.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  if (!projects.length) {
    return (
      <CmsEmptyState
        title="Add your first project."
        description="Create Project category and Project documents in Sanity to populate this page."
      />
    );
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="retro-label text-xs font-bold uppercase text-primary">
          STAGE_01: SELECT_STAGE
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Case studies and selected builds.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          Practical systems across travel search, creator operations, fintech mobile, CMS
          workflows, and focused client delivery.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              featured={project.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
