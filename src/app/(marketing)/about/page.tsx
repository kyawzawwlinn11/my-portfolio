import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { createMetadata } from "@/lib/metadata";
import { getProfile, getSkills } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "About - Kyaw Zaww Linn",
  description:
    "About Kyaw Zaww Linn, a product-minded senior full-stack developer in Yangon, Myanmar.",
});

export default async function AboutPage() {
  const [profile, skills] = await Promise.all([getProfile(), getSkills()]);

  if (!profile) {
    return (
      <CmsEmptyState
        title="Add your profile document."
        description="Create the Profile document in Sanity to populate the about page."
      />
    );
  }

  return (
    <>
      <AboutSection profile={profile} />
      <SkillsSection skills={skills} />
    </>
  );
}
