"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import type { Skill } from "./data";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function AnimatedProgress({ level, color }: { level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
      {/* Track glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />
      {/* Fill */}
      <div
        className="skill-progress-bar absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Shimmer */}
      <div
        className="skill-shimmer absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${width}%`,
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
          transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Glow */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-15"
        style={{ backgroundColor: skill.color }}
      />

      <div
        className="relative flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 group-hover:border-[color:var(--hover-color)] group-hover:shadow-md"
        style={{ "--hover-color": `${skill.color}40` } as React.CSSProperties}
      >
        {/* Icon */}
        <div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            backgroundColor: `${skill.color}10`,
            boxShadow: "none",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: skill.color }}
          />
          <Icon
            size={24}
            color={skill.color}
            className="relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="truncate text-sm font-semibold text-foreground">{skill.name}</h4>
            <div className="flex shrink-0 items-center gap-1.5">
              {skill.years && (
                <span className="text-[10px] text-muted-foreground/60">{skill.years}y</span>
              )}
              <span className="text-xs font-bold tabular-nums" style={{ color: skill.color }}>
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-2">
            <AnimatedProgress level={skill.level} color={skill.color} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
