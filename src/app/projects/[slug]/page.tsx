import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ProjectDetail } from "@/features/projects/project-detail";
import { getProjectBySlug, projects } from "@/features/projects/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ProjectDetail project={project} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
