"use client";

import { forwardRef, type AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "text-primary underline-offset-4 hover:underline",
          className
        )}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link };
