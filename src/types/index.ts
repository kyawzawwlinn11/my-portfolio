import type { PortableTextBlock } from "@portabletext/types";

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
};

export type Seo = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export type SanityImage = {
  url?: string;
  alt?: string;
};

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type SiteSettings = {
  title: string;
  description: string;
  siteUrl: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  seo?: Seo;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  summary: string;
  longBio: string;
  availability: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroIntro: string;
  heroCtas: Cta[];
  highlights: string[];
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  employmentType?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
  featured?: boolean;
  order?: number;
};

export type SkillCategory = {
  _id: string;
  title: string;
  description?: string;
  order?: number;
};

export type Skill = {
  _id: string;
  name: string;
  category: string;
  featured?: boolean;
  order?: number;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudy = {
  overview: string;
  problem: string;
  role: string;
  responsibilities: string[];
  approach: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string[];
  lessons: string[];
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  company?: string;
  year?: string;
  role: string;
  status?: string;
  technologies: string[];
  categories: string[];
  links: ProjectLink[];
  image?: SanityImage;
  featured?: boolean;
  order?: number;
  caseStudy: CaseStudy;
  seo?: Seo;
};

export type BlogCategory = {
  title: string;
  slug: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingTime?: string;
  categories: BlogCategory[];
  coverImage?: SanityImage;
  body: PortableTextBlock[];
  seo?: Seo;
};

export type Service = {
  _id: string;
  title: string;
  description: string;
  deliverables: string[];
  order?: number;
};

export type HomePageData = {
  settings: SiteSettings;
  profile: Profile;
  featuredProjects: Project[];
  recentPosts: BlogPost[];
  experience: Experience[];
  skills: Skill[];
  services: Service[];
};
