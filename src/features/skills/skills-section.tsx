"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { categories, skills, getSkillsByCategory, type SkillCategory } from "./data";
import { SkillCategoryGroup } from "./skill-category";

/* ─── Section Header ─── */
function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3 text-center"
    >
      <Badge variant="glass" className="px-4 py-1.5 text-sm">
        Skills & Expertise
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        My{" "}
        <span className="bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Tech Stack
        </span>
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Technologies and tools I use to bring ideas to life.
      </p>
    </motion.div>
  );
}

/* ─── Category Filter ─── */
function CategoryFilter({
  active,
  onChange,
}: {
  active: SkillCategory | "all";
  onChange: (c: SkillCategory | "all") => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      <button
        onClick={() => onChange("all")}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300",
          active === "all"
            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
            : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
        )}
      >
        All
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
            active === "all" ? "bg-white/20" : "bg-muted text-muted-foreground"
          )}
        >
          {skills.length}
        </span>
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300",
            active === cat.id
              ? "text-white shadow-md"
              : "border border-border bg-card text-muted-foreground hover:text-foreground"
          )}
          style={
            active === cat.id
              ? { backgroundColor: cat.color, boxShadow: `0 4px 14px ${cat.color}40` }
              : { borderColor: undefined }
          }
        >
          <span
            className={cn("h-1.5 w-1.5 rounded-full", active === cat.id ? "bg-white/50" : "")}
            style={active !== cat.id ? { backgroundColor: cat.color } : {}}
          />
          {cat.name.split(" ")[0]}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
              active === cat.id ? "bg-white/20" : "bg-muted text-muted-foreground"
            )}
          >
            {getSkillsByCategory(cat.id).length}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const totalSkills = skills.length;
  const avgLevel = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / totalSkills);
  const topSkill = skills.reduce((a, b) => (a.level > b.level ? a : b));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
    >
      <div className="text-center">
        <p className="text-2xl font-bold text-foreground">{totalSkills}</p>
        <p className="text-xs text-muted-foreground">Total Skills</p>
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="text-center">
        <p className="text-2xl font-bold text-foreground">{avgLevel}%</p>
        <p className="text-xs text-muted-foreground">Avg. Proficiency</p>
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="text-center">
        <p className="text-2xl font-bold text-primary">{topSkill.name}</p>
        <p className="text-xs text-muted-foreground">Top Skill</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Skills Section ─── */
export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const displayCategories =
    activeCategory === "all" ? categories : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[400px] w-[600px] rounded-full bg-primary/[0.02] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[600px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="flex flex-col gap-12">
          <SectionHeader />
          <StatsBar />
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayCategories.map((cat, i) => (
                <SkillCategoryGroup
                  key={cat.id}
                  category={cat}
                  skills={getSkillsByCategory(cat.id)}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
