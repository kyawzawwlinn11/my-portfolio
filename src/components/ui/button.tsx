import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "premium-transition inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-border bg-primary text-primary-foreground shadow-[4px_4px_0_#1f1a24] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[6px_6px_0_#1f1a24]",
        secondary:
          "border-border bg-card text-foreground shadow-[4px_4px_0_#1f1a24] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-muted hover:shadow-[6px_6px_0_#1f1a24]",
        ghost: "hover:bg-primary/10 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
