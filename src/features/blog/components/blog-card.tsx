import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getBlogPostHref } from "@/features/blog/utils";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

function formatDevlogNumber(index?: number) {
  return `devlog_${String((index ?? 0) + 1).padStart(3, "0")}`;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const categories = post.categories ?? [];

  return (
    <Card className="retro-card group rounded-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="retro-label text-xs font-bold text-primary">
            {formatDevlogNumber(index)}
          </p>
          <span className="retro-label text-xs text-muted-foreground">
            {post.readingTime ?? "4 min read"}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
        <div className="log-meta mt-5 grid gap-2 rounded-md border border-border bg-background/60 p-3 text-xs text-muted-foreground">
          <span>
            category:{" "}
            {categories.length
              ? categories.map((category) => category.title).join(", ")
              : "engineering"}
          </span>
          <span>published: {formatDate(post.publishedAt)}</span>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category.slug} variant="secondary">
              {category.title}
            </Badge>
          ))}
        </div>
        <Link
          href={getBlogPostHref(post)}
          className="group/link retro-label mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline"
        >
          OPEN LOG
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
