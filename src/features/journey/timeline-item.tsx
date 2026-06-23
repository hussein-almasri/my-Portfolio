"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { JourneyMilestone } from "./data";

interface TimelineItemProps {
  milestone: JourneyMilestone;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ milestone, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const Icon = milestone.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* ─── Desktop Layout ─── */}
      <div className="hidden w-full md:grid md:grid-cols-[1fr_80px_1fr] md:gap-0">
        {/* Left Side (Even items) */}
        <div className={cn("flex items-center", isEven ? "justify-end" : "justify-end")}>
          {isEven ? (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mr-8 max-w-md"
            >
              <CardContent milestone={milestone} align="right" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mr-8"
            >
              <DateBadge date={milestone.date} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center Node */}
        <div className="relative flex flex-col items-center">
          {/* Connecting Line Top */}
          {index > 0 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-12 w-[2px] origin-top"
              style={{
                background: `linear-gradient(to bottom, ${milestone.color}40, ${milestone.color})`,
              }}
            />
          )}

          {/* Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2"
            style={{
              borderColor: milestone.color,
              backgroundColor: `${milestone.color}15`,
            }}
          >
            {/* Pulse Ring */}
            <div
              className="journey-pulse absolute inset-0 rounded-full"
              style={{ borderColor: milestone.color }}
            />

            {/* Icon */}
            <Icon size={24} color={milestone.color} className="relative z-10" />
          </motion.div>

          {/* Connecting Line Bottom */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-12 w-[2px] origin-top"
              style={{
                background: `linear-gradient(to bottom, ${milestone.color}, ${milestone.color}40)`,
              }}
            />
          )}
        </div>

        {/* Right Side (Odd items) */}
        <div className={cn("flex items-center", isEven ? "justify-start" : "justify-start")}>
          {isEven ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="ml-8"
            >
              <DateBadge date={milestone.date} align="left" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="ml-8 max-w-md"
            >
              <CardContent milestone={milestone} align="left" />
            </motion.div>
          )}
        </div>
      </div>

      {/* ─── Mobile Layout ─── */}
      <div className="flex w-full md:hidden">
        {/* Mobile Timeline Line */}
        <div className="relative flex flex-col items-center">
          {/* Connecting Line Top */}
          {index > 0 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-8 w-[2px] origin-top"
              style={{
                background: `linear-gradient(to bottom, ${milestone.color}40, ${milestone.color})`,
              }}
            />
          )}

          {/* Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2"
            style={{
              borderColor: milestone.color,
              backgroundColor: `${milestone.color}15`,
            }}
          >
            {/* Pulse Ring */}
            <div
              className="journey-pulse absolute inset-0 rounded-full"
              style={{ borderColor: milestone.color }}
            />

            {/* Icon */}
            <Icon size={20} color={milestone.color} className="relative z-10" />
          </motion.div>

          {/* Connecting Line Bottom */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-8 w-[2px] origin-top"
              style={{
                background: `linear-gradient(to bottom, ${milestone.color}, ${milestone.color}40)`,
              }}
            />
          )}
        </div>

        {/* Mobile Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="ml-4 flex-1 pb-8"
        >
          <CardContent milestone={milestone} align="left" mobile />
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Card Content ─── */
function CardContent({
  milestone,
  align,
  mobile = false,
}: {
  milestone: JourneyMilestone;
  align: "left" | "right";
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "hover:shadow-elevation-3 group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300",
        !mobile && align === "right" && "rounded-tr-none",
        !mobile && align === "left" && "rounded-tl-none"
      )}
    >
      {/* Hover Glow */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
        style={{ backgroundColor: milestone.color }}
      />

      {/* Content */}
      <div className="relative">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">{milestone.title}</h3>
            <p className="text-sm font-medium" style={{ color: milestone.color }}>
              {milestone.subtitle}
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {milestone.description}
        </p>

        {/* Tags */}
        {milestone.tags && milestone.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {milestone.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: `${milestone.color}15`,
                  color: milestone.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Date Badge ─── */
function DateBadge({ date, align }: { date: string; align: "left" | "right" }) {
  return (
    <div
      className={cn(
        "rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground",
        align === "right" && "mr-auto",
        align === "left" && "ml-auto"
      )}
    >
      {date}
    </div>
  );
}
