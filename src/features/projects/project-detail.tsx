"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Code2,
  Layers,
  ChevronRight,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "./data";
import { getProjectCategoryById, getAdjacentProjects } from "./data";

/* ─── Animation Config ─── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Section Wrapper ─── */
function DetailSection({
  title,
  icon,
  children,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn("flex flex-col gap-5", className)}>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div>{children}</div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function ProjectDetail({ project }: { project: Project }) {
  const category = getProjectCategoryById(project.category);
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div className="relative">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pb-8 pt-28 sm:pt-32">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]"
            style={{ backgroundColor: `${project.color}10` }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Back link */}
            <motion.div variants={fadeUp}>
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </motion.div>

            {/* Meta row */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Badge variant="glass" size="sm">
                {category?.name}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {project.year}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {project.duration}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <User className="h-3.5 w-3.5" />
                {project.role}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              {project.longDescription}
            </motion.p>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-[0.98]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Gallery ─── */}
      {project.gallery.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {project.gallery.map((item, i) => (
                <div
                  key={item.id}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-muted",
                    i === 0 && "sm:col-span-2 sm:row-span-2"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center",
                      i === 0 ? "aspect-[16/10]" : "aspect-[16/10]"
                    )}
                    style={{
                      background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                    }}
                  >
                    <span
                      className="text-4xl font-bold opacity-20"
                      style={{ color: project.color }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}

      {/* ─── Content ─── */}
      <section className="py-12 sm:py-16">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-12 lg:grid-cols-3"
          >
            {/* Main content */}
            <div className="flex flex-col gap-12 lg:col-span-2">
              {/* Features */}
              <DetailSection title="Features" icon={<Layers className="h-4 w-4" />}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md"
                    >
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </DetailSection>

              {/* Architecture */}
              <DetailSection title="Architecture" icon={<Code2 className="h-4 w-4" />}>
                <div className="space-y-3">
                  {project.architecture.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </DetailSection>

              {/* Challenges */}
              <DetailSection
                title="Challenges & Solutions"
                icon={<AlertTriangle className="h-4 w-4" />}
              >
                <div className="space-y-4">
                  {project.challenges.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <span className="text-xs font-bold">P</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.problem}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                          <span className="text-xs font-bold">S</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.solution}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </DetailSection>

              {/* Lessons */}
              <DetailSection title="Lessons Learned" icon={<Lightbulb className="h-4 w-4" />}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.lessons.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </DetailSection>
            </div>

            {/* ─── Sidebar ─── */}
            <div className="flex flex-col gap-6">
              {/* Tech Stack */}
              <motion.div
                variants={fadeUp}
                className="sticky top-24 rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-foreground">Tech Stack</h3>
                <div className="space-y-4">
                  {project.techStack.map((group, i) => (
                    <div key={i}>
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md bg-muted/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex flex-col gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                    >
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: project.color }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Prev / Next ─── */}
      <section className="border-t border-border py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Previous</p>
                  <p className="truncate text-sm font-semibold text-foreground">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-1 items-center justify-end gap-4 rounded-2xl border border-border bg-card p-5 text-right transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Next</p>
                  <p className="truncate text-sm font-semibold text-foreground">{next.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
