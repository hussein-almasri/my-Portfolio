"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Heart, BookOpen, Code2, Palette, Rocket, Zap, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { profile, timeline, stats, quickFacts } from "./data";
import { Timeline } from "./timeline";
import { StatsGrid } from "./stats";

/* ─── Animation Config ─── */
const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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

/* ─── Quick Fact Icons ─── */
const factIcons: Record<string, React.ReactNode> = {
  "Based in": <MapPin className="h-4 w-4" />,
  Focus: <Code2 className="h-4 w-4" />,
  Education: <BookOpen className="h-4 w-4" />,
  Languages: <Globe className="h-4 w-4" />,
  Interests: <Heart className="h-4 w-4" />,
  Status: <Zap className="h-4 w-4" />,
};

/* ─── Section Header ─── */
function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 text-center">
      <Badge variant="glass" className="px-4 py-1.5 text-sm">
        {badge}
      </Badge>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ─── Main About Section ─── */
export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <Container className="relative z-10 py-24 sm:py-32">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-24"
        >
          {/* ═══════════════════════════════════════════════
              1. Professional Summary + Quick Facts
             ═══════════════════════════════════════════════ */}
          <motion.div variants={sectionStagger} className="flex flex-col gap-16">
            <SectionHeader
              badge="About Me"
              title="Who I Am"
              description="A glimpse into my journey and what drives me."
            />

            <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
              {/* Summary */}
              <motion.div variants={fadeUp} className="lg:col-span-3">
                <Card variant="glass" className="relative overflow-hidden p-6 sm:p-8">
                  {/* Decorative gradient */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                  <div className="relative">
                    <Quote className="mb-4 h-8 w-8 text-primary/30" />
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
                      {profile.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" size="sm">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Facts */}
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <div className="flex h-full flex-col gap-3">
                  {quickFacts.map((fact, i) => (
                    <motion.div
                      key={fact.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        {factIcons[fact.label] || <Rocket className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground/60">{fact.label}</p>
                        <p className="truncate text-sm font-medium text-foreground">{fact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════
              2. Statistics
             ═══════════════════════════════════════════════ */}
          <motion.div variants={sectionStagger} className="flex flex-col gap-12">
            <SectionHeader
              badge="By The Numbers"
              title="My Impact"
              description="A snapshot of my professional journey so far."
            />
            <StatsGrid stats={stats} />
          </motion.div>

          {/* ═══════════════════════════════════════════════
              3. Timeline (Education & Experience)
             ═══════════════════════════════════════════════ */}
          <motion.div variants={sectionStagger} className="flex flex-col gap-16">
            <SectionHeader
              badge="Journey"
              title="Education & Experience"
              description="The milestones that shaped my career."
            />

            {/* Filter badges */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2">
              <Badge variant="default" size="sm" className="gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                All
              </Badge>
              <Badge variant="ghost" size="sm" className="gap-1.5">
                <GraduationCapIcon />
                Education
              </Badge>
              <Badge variant="ghost" size="sm" className="gap-1.5">
                <BriefcaseIcon />
                Experience
              </Badge>
            </motion.div>

            <Timeline items={timeline} />
          </motion.div>

          {/* ═══════════════════════════════════════════════
              4. CTA
             ═══════════════════════════════════════════════ */}
          <motion.div variants={fadeUp}>
            <Card variant="glass" className="relative overflow-hidden p-8 text-center sm:p-12">
              {/* Decorative */}
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Let&apos;s Work Together
                </h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  I&apos;m always open to new opportunities and interesting projects. Feel free to
                  reach out!
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

/* ─── Small Icon Wrappers for Filter Badges ─── */
function GraduationCapIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
