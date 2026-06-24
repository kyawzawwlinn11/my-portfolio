import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kyaw Zaww Linn",
  title: "Kyaw Zaww Linn - Senior Full-Stack Developer",
  description:
    "Senior developer building production web, backend, mobile, and CMS-powered systems for travel, fintech, and startup products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kyawzawwlinn.dev",
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
