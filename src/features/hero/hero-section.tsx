"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ParticlesBackground } from "@/components/shared/particles-background";
import { FloatingFlutterIcons } from "@/components/shared/floating-icons";

/* ─── Animation Config ─── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const shimmer = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Stat Card ─── */
function StatCard({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />
      <div className="glass relative flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-lg">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${color}15` }}
        >
          <span className="text-xl font-bold" style={{ color }}>
            {value}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Social Button ─── */
function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-xl dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/[0.05]"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/5 group-hover:to-transparent group-hover:opacity-100" />
      <span className="relative text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {children}
      </span>
    </a>
  );
}

/* ─── Main Hero ─── */
export function HeroSection() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* ── Background Layer ── */}
      <ParticlesBackground />

      {/* Gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Primary orb */}
        <motion.div
          className="absolute -left-32 -top-32 h-[700px] w-[700px] rounded-full opacity-20 blur-[140px] dark:opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(239 84% 67%) 0%, transparent 70%)",
            y: parallaxY,
          }}
        />
        {/* Blue orb */}
        <motion.div
          className="dark:opacity-8 absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)",
          }}
        />
        {/* Violet accent */}
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[130px]"
          style={{
            background: "radial-gradient(circle, hsl(270 76% 60%) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <motion.div style={{ opacity: heroOpacity }} className="w-full">
        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-16 py-24 lg:flex-row lg:items-center lg:gap-20 lg:py-0">
            {/* ─── Left Column ─── */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {/* Status */}
              <motion.div variants={fadeUp}>
                <Badge
                  variant="glass"
                  className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-sm"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for opportunities
                </Badge>
              </motion.div>

              {/* Heading */}
              <motion.div variants={fadeUp}>
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                  <span className="mb-3 block text-2xl font-medium tracking-wide text-muted-foreground/70 sm:text-3xl">
                    Hello, I&apos;m
                  </span>
                  <span className="block leading-[1.05]">Hussein</span>
                  <span className="mt-1 block bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text leading-[1.05] text-transparent">
                    Almasri
                  </span>
                </h1>
              </motion.div>

              {/* Role line */}
              <motion.div variants={shimmer} className="mt-6">
                <div className="inline-flex items-center gap-4">
                  <div className="hidden h-px w-12 bg-gradient-to-r from-primary to-transparent sm:block" />
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-lg font-medium tracking-wide text-muted-foreground sm:text-xl">
                      Flutter Developer
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground/80 sm:text-lg lg:mx-0 lg:max-w-xl"
              >
                Software Engineering Student passionate about building modern mobile applications.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Button size="xl" className="group relative min-w-[220px] overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Download className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span className="relative">Download CV</span>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="min-w-[220px] border-white/10 bg-white/5 hover:bg-white/10 dark:border-white/5 dark:bg-white/[0.02]"
                >
                  <ExternalLink className="h-4 w-4" />
                  Projects
                </Button>
              </motion.div>

              {/* Social */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
              >
                <span className="text-sm text-muted-foreground/60">Find me on</span>
                <div className="flex items-center gap-2.5">
                  <SocialButton href="https://github.com/" label="GitHub">
                    <Github className="h-5 w-5" />
                  </SocialButton>
                  <SocialButton href="https://linkedin.com/" label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </SocialButton>
                </div>
              </motion.div>

              {/* Scroll hint */}
              <motion.div variants={fadeUp} className="mt-16 hidden lg:block">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground/50"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <ArrowDown className="h-3.5 w-3.5" />
                  </div>
                  <span>Scroll to explore</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ─── Right Column ─── */}
            <motion.div
              className="relative flex-1"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                {/* Animated gradient ring */}
                <div className="hero-gradient-ring absolute -inset-4 rounded-[2rem] opacity-60" />

                {/* Outer glow */}
                <div className="dark:via-blue-500/8 absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-blue-500/15 to-violet-500/20 blur-2xl dark:from-primary/10 dark:to-violet-500/10" />

                {/* Glass card wrapper */}
                <div className="glass-hero relative overflow-hidden rounded-[2rem] p-[2px]">
                  {/* Gradient border animation */}
                  <div className="hero-border-gradient absolute inset-0" />

                  {/* Inner card */}
                  <div className="relative rounded-[1.95rem] bg-background/95 p-2 dark:bg-background">
                    {/* Image area */}
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-muted via-muted/80 to-muted/60">
                      {/* Placeholder */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                        <div className="relative">
                          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl" />
                          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-primary/15 to-violet-500/15">
                            <span className="bg-gradient-to-br from-primary to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
                              HA
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-muted-foreground/70">
                            Hussein Almasri
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground/40">
                            Professional Photo
                          </p>
                        </div>
                      </div>

                      {/* Bottom gradient fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                      {/* Open to work badge */}
                      <div className="absolute right-4 top-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="glass flex items-center gap-2 rounded-full px-3.5 py-1.5 shadow-lg"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          <span className="text-xs font-medium text-foreground/80">
                            Open to work
                          </span>
                        </motion.div>
                      </div>

                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="glass flex items-center justify-between rounded-xl px-4 py-3">
                          <div>
                            <p className="text-xs text-muted-foreground/60">Role</p>
                            <p className="text-sm font-medium text-foreground">Flutter Developer</p>
                          </div>
                          <div className="h-8 w-px bg-white/10" />
                          <div>
                            <p className="text-xs text-muted-foreground/60">Focus</p>
                            <p className="text-sm font-medium text-foreground">Mobile Apps</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <FloatingFlutterIcons />

                {/* Stat cards */}
                <StatCard value="3+" label="Years Experience" color="#8B5CF6" delay={1} />
                <div className="absolute -right-3 top-10 sm:-right-6">
                  <StatCard value="15+" label="Projects" color="#3B82F6" delay={1.2} />
                </div>
                <div className="absolute -left-3 bottom-12 sm:-left-6">
                  <StatCard value="10+" label="Technologies" color="#06B6D4" delay={1.4} />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
