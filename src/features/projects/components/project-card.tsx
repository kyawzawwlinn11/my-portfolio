import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectHref } from "@/features/projects/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index?: number;
};

function formatProjectNumber(order?: number, index?: number) {
  return String(order && order > 0 ? order : (index ?? 0) + 1).padStart(2, "0");
}

function stripListMarker(value: string) {
  return value.replace(/^\s*(?:[-*]|[0-9]+[.)])\s+/, "");
}

function getProjectFileLabel(project: Project) {
  return project.categories?.[0]?.toLowerCase().replaceAll(" ", "_") ?? "case_file";
}

export function ProjectCard({ project, featured = false, index }: ProjectCardProps) {
  const technologies = project.technologies ?? [];
  const status = project.status ?? (featured ? "Case Study" : "Selected Work");
  const impact = project.caseStudy?.impact?.[0]
    ? stripListMarker(project.caseStudy.impact[0])
    : project.summary;
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
          ? `retro-card group overflow-hidden rounded-lg ${shadowClass}`
          : `retro-card group overflow-hidden rounded-lg ${shadowClass}`
      }
    >
      <CardContent className="p-0">
        <div className="border-b border-border px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <span className="retro-label text-xs text-muted-foreground">
              case_study_{formatProjectNumber(project.order, index)} /{" "}
              {getProjectFileLabel(project)}
            </span>
            <Badge variant="default">{status}</Badge>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="retro-label text-sm font-bold text-accent">
                case_study_{formatProjectNumber(project.order, index)}
              </p>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </div>

          <div className="mt-5 rounded-md border border-border bg-background/60 p-4">
            <div className="grid gap-2">
              <div className="metadata-row grid gap-1 sm:grid-cols-[5rem_1fr]">
                <span className="retro-label text-xs text-muted-foreground">role:</span>
                <span className="text-sm text-foreground">{project.role}</span>
              </div>
              <div className="metadata-row grid gap-1 sm:grid-cols-[5rem_1fr]">
                <span className="retro-label text-xs text-muted-foreground">domain:</span>
                <span className="text-sm text-foreground">
                  {project.categories?.join(" / ") || project.company || "selected work"}
                </span>
              </div>
              <div className="metadata-row grid gap-1 sm:grid-cols-[5rem_1fr]">
                <span className="retro-label text-xs text-muted-foreground">stack:</span>
                <span className="text-sm text-foreground">
                  {technologies.slice(0, 4).join(" / ") || "Documented in case study"}
                </span>
              </div>
              <div className="metadata-row grid gap-1 sm:grid-cols-[5rem_1fr]">
                <span className="retro-label text-xs text-muted-foreground">year:</span>
                <span className="text-sm text-foreground">
                  {project.year ?? "Current"}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 border-l border-primary/45 pl-4 text-sm leading-6 text-muted-foreground">
            <span className="text-foreground">Impact:</span> {impact}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.slice(0, 5).map((technology) => (
              <Badge key={technology} variant="secondary">
                {technology}
              </Badge>
            ))}
          </div>

          <Link
            href={getProjectHref(project)}
            className="group/link retro-label mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
          >
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
