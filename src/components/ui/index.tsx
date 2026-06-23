"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ─── Avatar ─── */
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const initials = fallback
      ? fallback
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "?";

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full",
          size === "sm" && "h-8 w-8",
          size === "md" && "h-10 w-10",
          size === "lg" && "h-14 w-14",
          size === "xl" && "h-20 w-20",
          className
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt || ""} className="aspect-square h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted font-medium text-muted-foreground">
            <span
              className={cn(
                size === "sm" && "text-xs",
                size === "md" && "text-sm",
                size === "lg" && "text-lg",
                size === "xl" && "text-xl"
              )}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

/* ─── Separator ─── */
export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" && "h-[1px] w-full",
        orientation === "vertical" && "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

/* ─── Icon Button ─── */
export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "outline" | "glass";
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, label, size = "md", variant = "ghost", ...props }, ref) => (
    <button
      ref={ref}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:scale-95",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "ghost" && "text-muted-foreground hover:bg-muted hover:text-foreground",
        variant === "outline" && "border border-input hover:bg-muted",
        variant === "glass" && "glass hover:bg-white/80 dark:hover:bg-white/5",
        size === "sm" && "h-8 w-8",
        size === "md" && "h-10 w-10",
        size === "lg" && "h-12 w-12",
        className
      )}
      title={label}
      {...props}
    >
      {icon}
    </button>
  )
);
IconButton.displayName = "IconButton";

/* ─── Stack ─── */
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  wrap?: boolean;
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "col",
      align = "stretch",
      justify = "start",
      gap = 4,
      wrap = false,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "row" && "flex-row",
        direction === "col" && "flex-col",
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "stretch" && "items-stretch",
        justify === "start" && "justify-start",
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        justify === "between" && "justify-between",
        justify === "around" && "justify-around",
        wrap && "flex-wrap",
        `gap-${gap}`,
        className
      )}
      {...props}
    />
  )
);
Stack.displayName = "Stack";

export { Avatar, Separator, IconButton, Stack };
