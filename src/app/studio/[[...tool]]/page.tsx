import type { Metadata, Viewport } from "next";

import { SanityStudio } from "@/components/providers/sanity-studio";

export const metadata: Metadata = {
  title: "Portfolio Studio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioPage() {
  return <SanityStudio />;
}
