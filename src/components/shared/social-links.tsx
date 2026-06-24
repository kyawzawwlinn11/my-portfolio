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
          className="premium-transition retro-label inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-3 py-1.5 text-sm font-bold text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background-soft"
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
            className="premium-transition retro-label inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-3 py-1.5 text-sm font-bold text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background-soft"
          >
            <ExternalLink className="h-4 w-4" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
