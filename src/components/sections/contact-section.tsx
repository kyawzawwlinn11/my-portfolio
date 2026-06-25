import { ContactForm } from "@/features/contact/components/contact-form";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";

export function ContactSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1fr]">
        <AnimatedContainer>
          <SectionHeading
            eyebrow="/contact"
            title="Let’s talk about the role, product, or system you want to build."
            description="Send the role, product idea, or system you’re working on. I’ll reply with context on fit, availability, and next steps."
          />
        </AnimatedContainer>
        <AnimatedContainer delay={0.06}>
          <div className="readable-panel rounded-lg p-6">
            <ContactForm />
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
