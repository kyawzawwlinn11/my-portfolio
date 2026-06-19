import type { Metadata } from "next";

import { CmsEmptyState } from "@/components/shared/cms-empty-state";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/metadata";
import { getServices } from "@/sanity/lib/queries";

export const metadata: Metadata = createMetadata({
  title: "Services - Kyaw Zaww Linn",
  description:
    "Freelance and startup software services for full-stack product engineering, mobile systems, CMS workflows, and backend APIs.",
});

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
        <p className="text-xs font-bold uppercase text-primary">Services</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Startup and product engineering support.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          Useful for teams that need complete product delivery, backend APIs, CMS
          systems, mobile releases, admin portals, or technical leadership support.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service._id} className="readable-panel rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
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
