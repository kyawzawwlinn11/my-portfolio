import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Resume - Kyaw Zaww Linn",
  description: "Download or request the latest resume for Kyaw Zaww Linn.",
  path: "/resume",
});

export default async function ResumePage() {
  const settings = await getSiteSettings();
  const resumeUrl =
    settings?.resumeUrl && settings.resumeUrl !== "/resume" ? settings.resumeUrl : null;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto readable-panel max-w-3xl rounded-lg p-8">
        <p className="retro-label text-xs font-bold text-primary">resume.pdf</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Resume and CV.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {resumeUrl
            ? "Download my latest resume as a PDF, or contact me for role-specific details."
            : "For the latest resume or role-specific details, send me a short note and I’ll reply with the right context."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {resumeUrl ? (
            <Button asChild>
              <Link href={resumeUrl} target="_blank" rel="noreferrer">
                Download resume
              </Link>
            </Button>
          ) : null}
          <Button asChild variant="secondary">
            <Link href="/contact">Request resume</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
