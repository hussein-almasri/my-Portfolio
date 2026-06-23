"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ─── Container ─── */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "narrow" | "wide" | "full";
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        variant === "default" && "max-w-7xl",
        variant === "narrow" && "max-w-4xl",
        variant === "wide" && "max-w-[90rem]",
        variant === "full" && "max-w-full",
        className
      )}
      {...props}
    />
  )
);
Container.displayName = "Container";

/* ─── Section ─── */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted" | "gradient" | "glass";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", spacing = "lg", ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "w-full",
        variant === "default" && "bg-background",
        variant === "muted" && "bg-muted/50",
        variant === "gradient" && "bg-gradient-to-b from-background via-muted/30 to-background",
        variant === "glass" && "glass-subtle",
        spacing === "none" && "py-0",
        spacing === "sm" && "py-8 sm:py-12",
        spacing === "md" && "py-12 sm:py-16",
        spacing === "lg" && "py-16 sm:py-24",
        spacing === "xl" && "py-24 sm:py-32",
        className
      )}
      {...props}
    />
  )
);
Section.displayName = "Section";

/* ─── Section Title ─── */
export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ className, badge, title, description, align = "center", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
);
SectionTitle.displayName = "SectionTitle";

/* ─── Divider ─── */
const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("my-8 w-full border-t border-border bg-transparent", className)}
      {...props}
    />
  )
);
Divider.displayName = "Divider";

export { Container, Section, SectionTitle, Divider };
