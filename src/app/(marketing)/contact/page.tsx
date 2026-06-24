import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact - Kyaw Zaww Linn",
  description:
    "Contact Kyaw Zaww Linn for senior engineering roles, backend/product opportunities, and focused product builds.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactSection />;
}
