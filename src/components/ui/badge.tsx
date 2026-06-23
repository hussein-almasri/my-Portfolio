"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-full px-2.5 py-0.5",
    "text-xs font-medium",
    "transition-colors duration-200",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary border border-primary/20",
        secondary: "bg-secondary text-secondary-foreground border border-secondary",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20",
        success:
          "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
        warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
        info: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20",
        outline: "bg-transparent text-foreground border border-border",
        ghost: "bg-muted text-muted-foreground border border-transparent",
        glass: "glass text-foreground border border-white/20 dark:border-white/10",
      },
      size: {
        sm: "px-2 py-0.5 text-2xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot = false, children, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "default" && "bg-primary",
            variant === "secondary" && "bg-secondary-foreground/50",
            variant === "destructive" && "bg-destructive",
            variant === "success" && "bg-emerald-500",
            variant === "warning" && "bg-amber-500",
            variant === "info" && "bg-sky-500",
            variant === "outline" && "bg-foreground/50",
            variant === "ghost" && "bg-muted-foreground/50",
            variant === "glass" && "bg-foreground/50"
          )}
        />
      )}
      {children}
    </span>
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
