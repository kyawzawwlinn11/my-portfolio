import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "premium-transition group/button premium-button relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border-2 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-foreground bg-primary text-primary-foreground shadow-[4px_4px_0_rgba(32,26,36,0.9)] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-primary/90 hover:shadow-[2px_2px_0_rgba(32,26,36,0.95)]",
        secondary:
          "border-foreground bg-card text-foreground shadow-[4px_4px_0_rgba(32,26,36,0.82)] hover:translate-x-0.5 hover:translate-y-0.5 hover:border-primary hover:bg-background-soft hover:shadow-[2px_2px_0_rgba(32,26,36,0.92)]",
        ghost: "border-transparent hover:bg-primary/10 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
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
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
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
