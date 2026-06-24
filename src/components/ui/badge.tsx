import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "premium-transition retro-label inline-flex items-center rounded-md border-2 px-2.5 py-1 text-xs font-bold uppercase",
  {
    variants: {
      variant: {
        default: "border-primary/55 bg-primary/15 text-primary",
        secondary: "border-border bg-card text-muted-foreground",
        amber: "border-accent/55 bg-accent/15 text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
