/// <reference types="react" />

declare module "framer-motion" {
  import type { ComponentType, HTMLAttributes, ReactNode, CSSProperties } from "react";

  export interface MotionProps {
    initial?: string | Record<string, unknown>;
    animate?: string | Record<string, unknown>;
    exit?: string | Record<string, unknown>;
    transition?: Record<string, unknown>;
    variants?: Record<string, unknown>;
    custom?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const motion: Record<string, ComponentType<Record<string, unknown>>>;

  export function AnimatePresence(props: {
    children: ReactNode;
    mode?: "wait" | "sync" | "popLayout";
  }): JSX.Element;
}
