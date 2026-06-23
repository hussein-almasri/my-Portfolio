"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { TimelineItem } from "./data";

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (i: number) => ({
    scale: 1,
    transition: {
      delay: i * 0.15 + 0.1,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary/20 via-border to-transparent md:left-1/2 md:-translate-x-px" />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={item.id}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "relative flex items-start gap-6 md:gap-0",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Dot */}
              <motion.div
                custom={i}
                variants={dotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute left-5 z-10 md:left-1/2 md:-translate-x-1/2"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg",
                    item.type === "education"
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-blue-500/30 bg-blue-500/10 text-blue-500"
                  )}
                >
                  {item.type === "education" ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <Briefcase className="h-4 w-4" />
                  )}
                </div>
              </motion.div>

              {/* Content */}
              <div
                className={cn(
                  "flex-1 pl-14 md:pl-0",
                  isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                )}
              >
                <div
                  className={cn(
                    "group relative rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md",
                    isEven ? "md:ml-auto" : "md:mr-auto"
                  )}
                >
                  {/* Type badge */}
                  <div className={cn("mb-3", isEven ? "md:justify-end" : "md:justify-start")}>
                    <Badge variant={item.type === "education" ? "default" : "info"} size="sm">
                      {item.type === "education" ? "Education" : "Experience"}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>

                  {/* Organization */}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                    {item.location && (
                      <span className="ml-1 text-muted-foreground/60">· {item.location}</span>
                    )}
                  </p>

                  {/* Date */}
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    {item.startDate} – {item.endDate || "Present"}
                  </p>

                  {/* Description */}
                  <ul className={cn("mt-3 space-y-1.5", isEven ? "md:text-right" : "")}>
                    {item.description.map((desc, j) => (
                      <li key={j} className="text-sm leading-relaxed text-muted-foreground/80">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div
                      className={cn("mt-4 flex flex-wrap gap-1.5", isEven ? "md:justify-end" : "")}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-muted/80 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden flex-1 md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
