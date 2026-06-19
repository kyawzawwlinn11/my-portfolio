import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

import type { SocialLink } from "@/types";

type SocialLinksProps = {
  links: SocialLink[];
  email?: string;
};

export function SocialLinks({ links, email }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {email ? (
        <Link
          href={`mailto:${email}`}
          className="premium-transition inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1.5 text-sm font-bold text-foreground shadow-[3px_3px_0_#1f1a24] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-section-mint"
        >
          <Mail className="h-4 w-4" />
          Email
        </Link>
      ) : null}
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="premium-transition inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1.5 text-sm font-bold text-foreground shadow-[3px_3px_0_#1f1a24] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-section-lavender"
          >
            <ExternalLink className="h-4 w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
