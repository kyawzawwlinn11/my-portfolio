import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections/experience-section";
import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { createMetadata } from "@/lib/metadata";
import { getExperience } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Experience - Kyaw Zaww Linn",
  description:
    "Work experience across Fly Fairly, Xenolink Technology, uab bank, and freelance software projects.",
});

export default async function ExperiencePage() {
  const experience = await getExperience();

  if (!experience.length) {
    return (
      <CmsEmptyState
        title="Add work experience."
        description="Create Work experience documents in Sanity to populate this timeline."
      />
    );
  }

  return <ExperienceSection experience={experience} />;
}
