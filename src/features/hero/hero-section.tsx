"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ParticlesBackground } from "@/components/shared/particles-background";
import { FloatingFlutterIcons } from "@/components/shared/floating-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      {/* Background */}
      <ParticlesBackground count={40} speed={0.2} />

      {/* Animated Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />
        <div className="absolute -bottom-[20%] -right-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/5" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <Container className="relative z-10" variant="default">
        <div className="flex flex-col items-center gap-12 py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-0">
          {/* ─── Left Content ─── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="glass" className="mb-6 inline-flex items-center gap-2 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Hi, I&apos;m</span>
                <span className="gradient-text mt-2 block bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Hussein Almasri
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
                <span className="text-lg font-medium text-muted-foreground sm:text-xl">
                  Flutter Developer
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-primary to-transparent" />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              Software Engineering Student passionate about building modern mobile applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button size="xl" className="group min-w-[200px]">
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </Button>
              <Button variant="outline" size="xl" className="min-w-[200px]">
                <ExternalLink className="h-4 w-4" />
                Projects
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </a>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div variants={itemVariants} className="mt-12 hidden lg:block">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <ArrowDown className="h-4 w-4" />
                <span>Scroll to explore</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ─── Right Content ─── */}
          <motion.div
            className="relative flex-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 p-8 blur-xl dark:from-primary/10 dark:via-blue-500/10 dark:to-purple-500/10" />

              {/* Glass Card */}
              <div className="glass relative overflow-hidden rounded-3xl p-1 shadow-2xl shadow-primary/10">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/50 via-blue-500/50 to-purple-500/50 opacity-50" />

                {/* Inner Card */}
                <div className="relative rounded-[1.35rem] bg-background/90 p-2 dark:bg-background/95">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted via-muted/80 to-muted/60">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-4xl font-bold text-primary">HA</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Professional Photo</span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                    {/* Status Indicator */}
                    <div className="absolute right-4 top-4">
                      <div className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        <span className="text-xs font-medium text-foreground/80">Open to work</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <FloatingFlutterIcons />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="glass absolute -left-4 bottom-8 rounded-2xl p-4 shadow-xl sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <span className="text-2xl font-bold text-primary">3+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Years of</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Projects Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="glass absolute -right-4 top-8 rounded-2xl p-4 shadow-xl sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <span className="text-2xl font-bold text-blue-500">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Projects</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
