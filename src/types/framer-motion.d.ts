/// <reference types="react" />

declare module "framer-motion" {
  import type { ComponentType, HTMLAttributes, ReactNode } from "react";

  export interface MotionProps {
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown>;
    exit?: Record<string, unknown>;
    transition?: Record<string, unknown>;
    variants?: Record<string, unknown>;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const motion: {
    div: ComponentType<HTMLAttributes<HTMLDivElement> & MotionProps>;
    span: ComponentType<HTMLAttributes<HTMLSpanElement> & MotionProps>;
    section: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    article: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    button: ComponentType<HTMLAttributes<HTMLButtonElement> & MotionProps>;
    a: ComponentType<HTMLAttributes<HTMLAnchorElement> & MotionProps>;
    p: ComponentType<HTMLAttributes<HTMLParagraphElement> & MotionProps>;
    h1: ComponentType<HTMLAttributes<HTMLHeadingElement> & MotionProps>;
    h2: ComponentType<HTMLAttributes<HTMLHeadingElement> & MotionProps>;
    h3: ComponentType<HTMLAttributes<HTMLHeadingElement> & MotionProps>;
    ul: ComponentType<HTMLAttributes<HTMLUListElement> & MotionProps>;
    li: ComponentType<HTMLAttributes<HTMLLIElement> & MotionProps>;
    nav: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    header: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    footer: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    main: ComponentType<HTMLAttributes<HTMLElement> & MotionProps>;
    img: ComponentType<HTMLAttributes<HTMLImageElement> & MotionProps>;
    svg: ComponentType<HTMLAttributes<SVGSVGElement> & MotionProps>;
  };

  export function AnimatePresence(props: {
    children: ReactNode;
    mode?: "wait" | "sync" | "popLayout";
  }): JSX.Element;
}
