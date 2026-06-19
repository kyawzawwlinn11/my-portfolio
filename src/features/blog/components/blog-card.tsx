import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPostHref } from "@/features/blog/utils";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const categories = post.categories ?? [];

  return (
    <Card className="group rounded-xl bg-card">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category.slug}>{category.title}</Badge>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-black tracking-tight text-foreground">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime ?? "4 min read"}</span>
        </div>
        <Link
          href={getBlogPostHref(post)}
          className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Read article
        </Link>
      </CardContent>
    </Card>
  );
}
