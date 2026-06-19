import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact - Kyaw Zaww Linn",
  description:
    "Contact Kyaw Zaww Linn for senior full-stack roles, backend/product engineering opportunities, and freelance startup projects.",
});

export default function ContactPage() {
  return <ContactSection />;
}
