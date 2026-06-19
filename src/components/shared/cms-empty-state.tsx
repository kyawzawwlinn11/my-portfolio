import Link from "next/link";

import { Button } from "@/components/ui/button";

type CmsEmptyStateProps = {
  title: string;
  description: string;
};

export function CmsEmptyState({ title, description }: CmsEmptyStateProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase text-primary">CMS setup</p>
        <h1 className="mt-4 text-3xl font-black uppercase text-foreground">{title}</h1>
        <p className="mt-4 text-base font-medium leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/studio">Open Studio</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">View contact page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
