import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import {
  getExperience,
  getFeaturedProjects,
  getProfile,
  getRecentBlogPosts,
  getSiteSettings,
  getSkills,
} from "@/sanity/lib/queries";

export default async function HomePage() {
  const [settings, profile, featuredProjects, recentPosts, experience, skills] =
    await Promise.all([
      getSiteSettings(),
      getProfile(),
      getFeaturedProjects(),
      getRecentBlogPosts(),
      getExperience(),
      getSkills(),
    ]);

  if (!settings || !profile) {
    return (
      <CmsEmptyState
        title="Add site settings and profile content in Sanity."
        description="The portfolio is now connected directly to Sanity. Create the Site settings and Profile documents first, then refresh this page."
      />
    );
  }

  return (
    <>
      <HeroSection profile={profile} />
      <ProjectsSection projects={featuredProjects} />
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
      <BlogSection posts={recentPosts} />
      <ContactSection />
    </>
  );
}
