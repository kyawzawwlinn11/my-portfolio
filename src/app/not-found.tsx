import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto readable-panel max-w-3xl rounded-xl p-8">
        <p className="text-xs font-bold uppercase text-primary">Page Not Found</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          This route does not exist.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page may have moved, or the CMS item may not be published yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
