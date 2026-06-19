import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type PortableTextRendererProps = {
  value: PortableTextBlock[];
};

type LinkMark = {
  href?: string;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 leading-8 text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-primary/50 pl-5 text-lg text-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const link = value as LinkMark;
      const href = link.href ?? "#";
      const external = href.startsWith("http");

      return (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
};

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value.length) {
    return null;
  }

  return <PortableText value={value} components={components} />;
}
