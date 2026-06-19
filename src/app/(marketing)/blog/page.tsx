import type { Metadata } from "next";

import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { BlogCard } from "@/features/blog/components/blog-card";
import { createMetadata } from "@/lib/metadata";
import { getAllBlogPosts } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Blog - Kyaw Zaww Linn",
  description:
    "Technical notes on full-stack engineering, backend architecture, product systems, startup building, and mobile development.",
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  if (!posts.length) {
    return (
      <CmsEmptyState
        title="Add your first blog post."
        description="Create Blog category, Author, and Blog post documents in Sanity to populate the blog."
      />
    );
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase text-primary">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Engineering notes and product lessons.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          Writing on full-stack engineering, backend architecture, product systems,
          startup delivery, mobile development, and technical lessons.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
