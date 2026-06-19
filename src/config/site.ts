import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kyaw Zaww Linn",
  title: "Kyaw Zaww Linn - Senior Full-Stack Developer",
  description:
    "Product-minded senior full-stack developer building production web, mobile, CMS, and backend systems for travel, fintech, and startup products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "Kyaw Zaww Linn",
  email: "kyawzawwlinn.dev@gmail.com",
  location: "Yangon, Myanmar",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/kyaw-zaww-linn-723b8323a",
    },
    {
      label: "GitHub",
      href: "https://github.com/kyawzawwlinn11",
    },
  ],
};
