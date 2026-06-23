"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SkillCard } from "./skill-card";
import type { SkillCategoryData, Skill } from "./data";

interface SkillCategoryGroupProps {
  category: SkillCategoryData;
  skills: Skill[];
  index: number;
}

export function SkillCategoryGroup({ category, skills, index }: SkillCategoryGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group/category relative"
    >
      {/* Category glow */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-0 blur-3xl transition-opacity duration-700 group-hover/category:opacity-[0.03]"
        style={{ backgroundColor: category.color }}
      />

      <div className="relative rounded-2xl border border-border bg-card/50 p-5 shadow-sm transition-all duration-300 sm:p-6">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          {/* Dot indicator */}
          <div
            className="flex h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: category.color }}
          />

          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
            <p className="text-xs text-muted-foreground/70">{category.description}</p>
          </div>

          {/* Skill count */}
          <div className="ml-auto shrink-0">
            <span
              className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{
                backgroundColor: `${category.color}12`,
                color: category.color,
              }}
            >
              {skills.length}
            </span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid gap-2.5 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
