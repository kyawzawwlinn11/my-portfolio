import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllBlogPosts, getAllProjects } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getAllProjects(), getAllBlogPosts()]);
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/blog",
    "/services",
    "/contact",
    "/resume",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
