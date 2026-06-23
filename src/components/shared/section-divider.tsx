"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "gradient" | "line" | "dots" | "wave";
}

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === "gradient") {
    return (
      <div ref={ref} className="relative h-24 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50"
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div ref={ref} className="flex items-center justify-center gap-2 py-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-1.5 w-1.5 rounded-full bg-primary/30"
          />
        ))}
      </div>
    );
  }

  return null;
}
