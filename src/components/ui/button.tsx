"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap text-sm font-medium",
    "rounded-md",
    "transition-all duration-200 ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        /* Primary - Solid fill */
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary/95 active:scale-[0.98]",

        /* Secondary - Subtle fill */
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 active:bg-secondary/90 active:scale-[0.98]",

        /* Destructive */
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 active:bg-destructive/95 active:scale-[0.98]",

        /* Outline - Border only */
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:scale-[0.98]",

        /* Ghost - No border/background */
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:scale-[0.98]",

        /* Link - Inline text */
        link: "text-primary underline-offset-4 hover:underline active:opacity-80",

        /* Glass - Frosted glass */
        glass: "glass hover:bg-white/80 dark:hover:bg-white/5 active:scale-[0.98]",

        /* Gradient - Linear-style */
        gradient:
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:shadow-lg hover:from-primary/90 hover:to-primary/70 active:scale-[0.98]",
      },
      size: {
        xs: "h-7 px-2.5 text-xs rounded",
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-9 px-4 text-sm rounded-md",
        default: "h-10 px-5 py-2.5 text-sm rounded-md",
        lg: "h-11 px-6 text-sm rounded-md",
        xl: "h-12 px-8 text-base rounded-lg",
        "2xl": "h-14 px-10 text-base rounded-lg",
        icon: "h-10 w-10 rounded-md",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
