"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { projectCategories, projects, getProjectsByCategory, type ProjectCategory } from "./data";
import { ProjectCard } from "./project-card";

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
        Portfolio
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        Featured{" "}
        <span className="bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        A selection of projects I&apos;ve built, from mobile apps to full-stack platforms.
      </p>
    </motion.div>
  );
}

/* ─── Category Filter ─── */
function CategoryFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | "all";
  onChange: (c: ProjectCategory | "all") => void;
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
          {projects.length}
        </span>
      </button>

      {projectCategories.map((cat) => {
        const count = getProjectsByCategory(cat.id).length;
        if (count === 0) return null;

        return (
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
                : {}
            }
          >
            <span
              className={cn("h-1.5 w-1.5 rounded-full", active === cat.id ? "bg-white/50" : "")}
              style={active !== cat.id ? { backgroundColor: cat.color } : {}}
            />
            {cat.name}
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                active === cat.id ? "bg-white/20" : "bg-muted text-muted-foreground"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}

/* ─── Main Projects Section ─── */
export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden bg-muted/30">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-[120px]" />
      </div>

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="flex flex-col gap-12">
          <SectionHeader />
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <p className="text-lg text-muted-foreground">No projects in this category yet.</p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
