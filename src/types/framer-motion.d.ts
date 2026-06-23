/// <reference types="react" />

declare module "framer-motion" {
  import type {
    ComponentType,
    HTMLAttributes,
    ReactNode,
    CSSProperties,
    MutableRefObject,
  } from "react";

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

  export function useScroll(options?: {
    container?: MutableRefObject<HTMLElement | null>;
    offset?: [string, string];
    target?: MutableRefObject<HTMLElement | null>;
    layout?: boolean;
  }): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export function useTransform<T>(
    value: MotionValue<number>,
    inputRange: number[],
    outputRange: T[],
    options?: { clamp?: boolean; ease?: (t: number) => number }
  ): MotionValue<T>;

  export interface MotionValue<T = number> {
    get(): T;
    set(value: T): void;
    on(eventName: "change" | "renderRequest", callback: (latest: T) => void): () => void;
  }
}
