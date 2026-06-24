import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { Seo } from "@/types";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = Seo & {
  path?: string;
};

export function createMetadata(seo?: MetadataInput): Metadata {
  const title = seo?.title ?? siteConfig.title;
  const description = seo?.description ?? siteConfig.description;
  const image = seo?.image ?? absoluteUrl("/opengraph-image");
  const url = absoluteUrl(seo?.path ?? "/");

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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
