import { defineQuery } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/client";
import type {
  BlogPost,
  Experience,
  Profile,
  Project,
  Service,
  SiteSettings,
  Skill,
} from "@/types";

const imageProjection = `{
  "url": asset->url,
  "alt": coalesce(alt, asset->altText)
}`;

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  title,
  description,
  siteUrl,
  "resumeUrl": resume.asset->url,
  socialLinks[]{label, href},
  seo{title, description, "image": image.asset->url, noIndex}
}`);

export const profileQuery = defineQuery(`*[_type == "profile"][0]{
  name,
  role,
  location,
  email,
  summary,
  longBio,
  availability,
  heroEyebrow,
  heroHeadline,
  heroIntro,
  heroCtas[]{label, href, variant},
  highlights
}`);

export const experienceQuery = defineQuery(`*[_type == "experience" && visible != false] | order(order asc, startDate desc){
  _id,
  company,
  role,
  employmentType,
  location,
  startDate,
  endDate,
  isCurrent,
  summary,
  achievements,
  technologies,
  featured,
  order
}`);

export const skillsQuery = defineQuery(`*[_type == "skill" && visible != false] | order(category->order asc, order asc, name asc){
  _id,
  name,
  "category": category->title,
  featured,
  order
}`);

const projectProjection = `{
  _id,
  title,
  "slug": slug.current,
  summary,
  company,
  year,
  role,
  status,
  technologies,
  "categories": categories[]->title,
  links[]{label, href},
  image ${imageProjection},
  featured,
  order,
  caseStudy,
  seo{title, description, "image": image.asset->url, noIndex}
}`;

export const featuredProjectsQuery = defineQuery(`*[_type == "project" && visible != false && featured == true] | order(order asc, _createdAt desc) ${projectProjection}`);

export const allProjectsQuery = defineQuery(`*[_type == "project" && visible != false] | order(order asc, _createdAt desc) ${projectProjection}`);

export const projectBySlugQuery = defineQuery(`*[_type == "project" && slug.current == $slug && visible != false][0] ${projectProjection}`);

const blogPostProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readingTime,
  "categories": categories[]->{title, "slug": slug.current},
  coverImage ${imageProjection},
  body,
  seo{title, description, "image": image.asset->url, noIndex}
}`;

export const recentBlogPostsQuery = defineQuery(`*[_type == "blogPost" && visible != false] | order(publishedAt desc)[0...3] ${blogPostProjection}`);

export const allBlogPostsQuery = defineQuery(`*[_type == "blogPost" && visible != false] | order(publishedAt desc) ${blogPostProjection}`);

export const blogPostBySlugQuery = defineQuery(`*[_type == "blogPost" && slug.current == $slug && visible != false][0] ${blogPostProjection}`);

export const servicesQuery = defineQuery(`*[_type == "service" && visible != false] | order(order asc, title asc){
  _id,
  title,
  description,
  deliverables,
  order
}`);

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["site-settings"],
  });
}

export async function getProfile(): Promise<Profile | null> {
  return sanityFetch<Profile>({
    query: profileQuery,
    tags: ["profile"],
  });
}

export async function getExperience(): Promise<Experience[]> {
  const data = await sanityFetch<Experience[]>({
    query: experienceQuery,
    tags: ["experience"],
  });

  return data ?? [];
}

export async function getSkills(): Promise<Skill[]> {
  const data = await sanityFetch<Skill[]>({
    query: skillsQuery,
    tags: ["skills"],
  });

  return data ?? [];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const data = await sanityFetch<Project[]>({
    query: featuredProjectsQuery,
    tags: ["projects"],
  });

  return data ?? [];
}

export async function getAllProjects(): Promise<Project[]> {
  const data = await sanityFetch<Project[]>({
    query: allProjectsQuery,
    tags: ["projects"],
  });

  return data ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return sanityFetch<Project | null>({
    query: projectBySlugQuery,
    params: { slug },
    tags: ["projects", `project:${slug}`],
  });
}

export async function getRecentBlogPosts(): Promise<BlogPost[]> {
  const data = await sanityFetch<BlogPost[]>({
    query: recentBlogPostsQuery,
    tags: ["blog"],
  });

  return data ?? [];
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const data = await sanityFetch<BlogPost[]>({
    query: allBlogPostsQuery,
    tags: ["blog"],
  });

  return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityFetch<BlogPost | null>({
    query: blogPostBySlugQuery,
    params: { slug },
    tags: ["blog", `post:${slug}`],
  });
}

export async function getServices(): Promise<Service[]> {
  const data = await sanityFetch<Service[]>({
    query: servicesQuery,
    tags: ["services"],
  });

  return data ?? [];
}
