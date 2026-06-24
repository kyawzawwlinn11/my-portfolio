import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortableTextRenderer } from "@/components/shared/portable-text-renderer";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { getAllBlogPosts, getBlogPostBySlug } from "@/sanity/lib/queries";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return createMetadata({ title: "Post not found" });
  }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ...post.seo,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Badge key={category.slug}>{category.title}</Badge>
          ))}
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex gap-3 text-sm text-muted-foreground">
          <span>{formatDate(post.publishedAt)}</span>
          <span>/</span>
          <span>{post.readingTime ?? "4 min read"}</span>
        </div>
        <div className="mt-10 border-t border-border pt-10">
          <PortableTextRenderer value={post.body} />
        </div>
      </div>
    </article>
  );
}
