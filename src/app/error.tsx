"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto readable-panel max-w-3xl rounded-xl p-8">
        <p className="text-xs font-bold uppercase text-destructive">Application Error</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          Something went wrong.
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page could not be loaded. Try again, or come back in a moment.
        </p>
        <Button className="mt-6" onClick={reset}>
          Try again
        </Button>
      </div>
    </section>
  );
}
