import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnimatedContainer } from "@/components/shared/animated-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { BlogCard } from "@/features/blog/components/blog-card";
import type { BlogPost } from "@/types";

type BlogSectionProps = {
  posts: BlogPost[];
};

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedContainer>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="STAGE_04: DEVLOG"
              title="Unlocked notes from the workbench."
              description="Technical lessons, architecture notes, and product decisions written for people who build and hire builders."
            />
            <Button asChild variant="secondary">
              <Link href="/blog">Open logs</Link>
            </Button>
          </div>
        </AnimatedContainer>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <AnimatedContainer key={post._id} delay={Math.min(index * 0.05, 0.15)}>
              <BlogCard post={post} index={index} />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
