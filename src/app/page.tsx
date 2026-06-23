import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { PageTransition } from "@/components/shared/page-transition";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { PageLoader } from "@/components/shared/page-loader";

// Lazy load below-the-fold sections
const HeroSection = dynamic(() => import("@/features/hero").then((mod) => mod.HeroSection), {
  ssr: false,
});

const AboutSection = dynamic(() => import("@/features/about").then((mod) => mod.AboutSection), {
  ssr: false,
});

const JourneyTimeline = dynamic(
  () => import("@/features/journey").then((mod) => mod.JourneyTimeline),
  { ssr: false }
);

const ProjectsSection = dynamic(
  () => import("@/features/projects").then((mod) => mod.ProjectsSection),
  { ssr: false }
);

const SkillsSection = dynamic(() => import("@/features/skills").then((mod) => mod.SkillsSection), {
  ssr: false,
});

const CertificatesSection = dynamic(
  () => import("@/features/certificates").then((mod) => mod.CertificatesSection),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/features/contact").then((mod) => mod.ContactSection),
  { ssr: false }
);

export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <PageLoader />
      <ScrollProgress />
      <div className="relative flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>
            <HeroSection />
            <AboutSection />
            <JourneyTimeline />
            <ProjectsSection />
            <SkillsSection />
            <CertificatesSection />
            <ContactSection />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
