"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import type { StatItem } from "./data";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (value - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  stat: StatItem;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: stat.color }}
      />

      <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-md">
        {/* Icon */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${stat.color}12` }}
        >
          <span className="text-2xl font-bold" style={{ color: stat.color }}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2 + index * 0.3} />
          </span>
        </div>

        {/* Label */}
        <p className="text-center text-sm font-medium text-muted-foreground">{stat.label}</p>
      </div>
    </motion.div>
  );
}

interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {stats.map((stat, i) => (
        <StatCard key={stat.id} stat={stat} index={i} />
      ))}
    </div>
  );
}
