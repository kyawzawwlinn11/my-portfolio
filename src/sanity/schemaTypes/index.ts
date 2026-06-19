import { authorType } from "@/sanity/schemaTypes/author";
import { blogCategoryType } from "@/sanity/schemaTypes/blog-category";
import { blogPostType } from "@/sanity/schemaTypes/blog-post";
import { caseStudyType } from "@/sanity/schemaTypes/case-study";
import { educationType } from "@/sanity/schemaTypes/education";
import { experienceType } from "@/sanity/schemaTypes/experience";
import { linkType } from "@/sanity/schemaTypes/link";
import { navigationItemType } from "@/sanity/schemaTypes/navigation-item";
import { profileType } from "@/sanity/schemaTypes/profile";
import { projectType } from "@/sanity/schemaTypes/project";
import { projectCategoryType } from "@/sanity/schemaTypes/project-category";
import { seoType } from "@/sanity/schemaTypes/seo";
import { serviceType } from "@/sanity/schemaTypes/service";
import { siteSettingsType } from "@/sanity/schemaTypes/site-settings";
import { skillType } from "@/sanity/schemaTypes/skill";
import { skillCategoryType } from "@/sanity/schemaTypes/skill-category";
import { testimonialType } from "@/sanity/schemaTypes/testimonial";

export const schemaTypes = [
  seoType,
  linkType,
  navigationItemType,
  caseStudyType,
  siteSettingsType,
  profileType,
  experienceType,
  educationType,
  skillCategoryType,
  skillType,
  projectCategoryType,
  projectType,
  blogCategoryType,
  authorType,
  blogPostType,
  testimonialType,
  serviceType,
];
