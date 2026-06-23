"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "./data";
import { getProjectCategoryById } from "./data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const category = getProjectCategoryById(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-20"
        style={{ backgroundColor: project.color }}
      />

      {/* Card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:border-[color:var(--project-color)] group-hover:shadow-xl"
        style={{ "--project-color": `${project.color}30` } as React.CSSProperties}
      >
        {/* Image area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {/* Gradient placeholder */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 50%, ${project.color}15 100%)`,
            }}
          />

          {/* Placeholder content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm">
              <span className="text-2xl font-bold" style={{ color: project.color }}>
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Overlay on hover */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute left-3 top-3">
              <Badge variant="glass" size="sm" className="gap-1 border-white/20 text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Featured
              </Badge>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute right-3 top-3">
            <Badge variant="glass" size="sm" className="border-white/20 text-white">
              {category?.name}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" style={{ color: project.color }} />
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover:bg-muted"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="rounded-md bg-muted/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
