import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectHref } from "@/features/projects/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const technologies = project.technologies ?? [];
  const shadowClass =
    project.order === 1
      ? "retro-card-shadow-teal"
      : project.order === 2
        ? "retro-card-shadow-amber"
        : "retro-card-shadow-pink";

  return (
    <Card
      className={
        featured
          ? `retro-window group overflow-hidden rounded-xl bg-card pt-8 ${shadowClass}`
          : `group overflow-hidden rounded-xl bg-card ${shadowClass}`
      }
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-primary">
              {project.status ?? "case-study"} / {project.year ?? "current"}
            </p>
            <h3 className="mt-3 text-xl font-black tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 5).map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>

        <Link
          href={getProjectHref(project)}
          className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Read case study
        </Link>
      </CardContent>
    </Card>
  );
}
