import type { BlogPost } from "@/types";

export function getBlogPostHref(post: Pick<BlogPost, "slug">) {
  return `/blog/${post.slug}`;
}
