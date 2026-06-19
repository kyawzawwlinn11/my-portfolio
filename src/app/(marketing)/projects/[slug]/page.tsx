import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import { getAllProjects, getProjectBySlug } from "@/sanity/lib/queries";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project not found" });
  }

  return createMetadata({
    title: `${project.title} - Case Study`,
    description: project.summary,
    ...project.seo,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy ?? {
    overview: "Add the project overview in Sanity.",
    problem: "Add the problem statement in Sanity.",
    role: project.role ?? "Add your role in Sanity.",
    responsibilities: [],
    approach: "Add the architecture or approach in Sanity.",
    features: [],
    challenges: [],
    solutions: [],
    impact: [],
    lessons: [],
  };
  const technologies = project.technologies ?? [];
  const sections = [
    ["Problem", caseStudy.problem],
    ["My role", caseStudy.role],
    ["Architecture / approach", caseStudy.approach],
  ] as const;
  const listSections: Array<{ title: string; items: string[] }> = [
    { title: "Responsibilities", items: caseStudy.responsibilities ?? [] },
    { title: "Key features", items: caseStudy.features ?? [] },
    { title: "Challenges", items: caseStudy.challenges ?? [] },
    { title: "Solutions", items: caseStudy.solutions ?? [] },
    { title: "Impact", items: caseStudy.impact ?? [] },
    { title: "Lessons learned", items: caseStudy.lessons ?? [] },
  ];

  return (
    <article className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase text-primary">
          Case Study / {project.status ?? "Selected Work"}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>

        <div className="readable-panel mt-10 rounded-xl p-6">
          <p className="text-base leading-8 text-muted-foreground">
            {caseStudy.overview}
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {sections.map(([title, content]) => (
            <section key={title}>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                {title}
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">{content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {listSections.map(({ title, items }) => (
            <section key={title} className="readable-panel rounded-xl p-6">
              <h2 className="text-lg font-semibold text-foreground">{title}</h2>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-muted-foreground">
                    <span className="text-primary">-</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
