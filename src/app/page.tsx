"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { PageTransition } from "@/components/shared/page-transition";

import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ProjectsSection } from "@/features/projects";
import { SkillsSection } from "@/features/skills";
import { ContactSection } from "@/features/contact";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
