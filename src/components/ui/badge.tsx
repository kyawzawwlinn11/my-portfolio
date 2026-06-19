import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "premium-transition retro-label inline-flex items-center rounded-full border-2 px-2.5 py-1 text-xs font-bold",
  {
    variants: {
      variant: {
        default: "border-border bg-primary text-primary-foreground",
        secondary: "border-border bg-card text-foreground",
        amber: "border-border bg-accent text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
