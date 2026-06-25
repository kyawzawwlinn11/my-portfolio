import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Profile } from "@/types";

type AboutSectionProps = {
  profile: Profile;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1fr]">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="/working-style"
            title="Calm ownership from idea to launch."
            description={profile.summary}
          />
        </AnimatedContainer>
        <AnimatedContainer delay={0.06}>
          <div className="readable-panel rounded-lg p-6">
            <p className="text-base leading-8 text-muted-foreground">{profile.longBio}</p>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
