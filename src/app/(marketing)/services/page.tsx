import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { getServices } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Services - Kyaw Zaww Linn",
  description:
    "Focused product engineering services for MVPs, admin portals, CMS products, backend APIs, and mobile app improvements.",
  path: "/services",
});

const bestFit = [
  "MVPs with clear business goals",
  "Admin portals and internal tools",
  "CMS-powered websites and products",
  "Backend/API systems",
  "Mobile app improvements and releases",
];

const notIdeal = [
  "Tiny one-off landing page edits",
  "Unclear projects with no scope",
  "Very low-budget urgent builds",
];

export default async function ServicesPage() {
  const services = await getServices();

  if (!services.length) {
    return (
      <CmsEmptyState
        title="Add service offerings."
        description="Create Service / freelance offering documents in Sanity to populate this page."
      />
    );
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="retro-label text-xs font-bold text-primary">/services</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          Focused product engineering support.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          Useful for teams that need product delivery, backend APIs, CMS workflows, mobile
          releases, admin portals, or technical leadership support.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="readable-panel rounded-lg p-6">
            <h2 className="retro-label text-sm font-bold text-primary">best_fit</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {bestFit.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="readable-panel rounded-lg p-6">
            <h2 className="retro-label text-sm font-bold text-accent">not_ideal</h2>
            <ul className="mt-5 space-y-3">
              {notIdeal.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="readable-panel mt-6 rounded-lg p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Have an MVP, admin portal, CMS product, or mobile app to build? Send the
              product idea, timeline, and current stage. I’ll help you map the technical
              path.
            </p>
            <Button asChild>
              <Link href="/contact">Start conversation</Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service._id} className="readable-panel rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.deliverables.map((deliverable) => (
                  <Badge key={deliverable} variant="secondary">
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
