import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { Seo } from "@/types";
import { absoluteUrl } from "@/lib/utils";

export function createMetadata(seo?: Seo): Metadata {
  const title = seo?.title ?? siteConfig.title;
  const description = seo?.description ?? siteConfig.description;
  const image = seo?.image ?? absoluteUrl("/images/og-default.png");

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: siteConfig.url,
    },
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !seo?.noIndex,
      follow: !seo?.noIndex,
    },
  };
}
