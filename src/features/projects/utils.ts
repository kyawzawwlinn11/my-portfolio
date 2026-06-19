import type { Project } from "@/types";

export function getProjectHref(project: Pick<Project, "slug">) {
  return `/projects/${project.slug}`;
}
