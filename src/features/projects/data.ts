export type ProjectCategory = "mobile" | "web" | "fullstack" | "backend" | "design" | "open-source";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  color: string;
}

export interface ProjectCategoryData {
  id: ProjectCategory;
  name: string;
  color: string;
}

export const projectCategories: ProjectCategoryData[] = [
  { id: "mobile", name: "Mobile", color: "#02569B" },
  { id: "web", name: "Web", color: "#8B5CF6" },
  { id: "fullstack", name: "Full Stack", color: "#10B981" },
  { id: "backend", name: "Backend", color: "#F59E0B" },
  { id: "design", name: "Design", color: "#EC4899" },
  { id: "open-source", name: "Open Source", color: "#06B6D4" },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with workout plans, progress charts, and social features built with Flutter.",
    image: "/projects/fittrack.jpg",
    category: "mobile",
    tags: ["Flutter", "Dart", "Firebase", "BLoC", "Charts"],
    github: "https://github.com/hussein/fittrack",
    demo: "https://fittrack.app",
    featured: true,
    color: "#02569B",
  },
  {
    id: "p2",
    title: "TaskFlow",
    description:
      "A modern project management tool with real-time collaboration, kanban boards, and AI-powered task prioritization.",
    image: "/projects/taskflow.jpg",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
    github: "https://github.com/hussein/taskflow",
    demo: "https://taskflow.dev",
    featured: true,
    color: "#10B981",
  },
  {
    id: "p3",
    title: "WeatherNow",
    description:
      "Beautiful weather app with animated forecasts, location-based alerts, and a clean minimalist design.",
    image: "/projects/weathernow.jpg",
    category: "mobile",
    tags: ["Flutter", "Dart", "OpenWeather API", "Geolocator"],
    github: "https://github.com/hussein/weathernow",
    featured: true,
    color: "#3B82F6",
  },
  {
    id: "p4",
    title: "DevConnect API",
    description:
      "RESTful API powering developer community platforms with authentication, rate limiting, and real-time notifications.",
    image: "/projects/devconnect.jpg",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    github: "https://github.com/hussein/devconnect-api",
    featured: false,
    color: "#F59E0B",
  },
  {
    id: "p5",
    title: "Portfolio OS",
    description:
      "An interactive portfolio website designed as a desktop OS with draggable windows and custom themes.",
    image: "/projects/portfolio-os.jpg",
    category: "web",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    demo: "https://hussein.dev",
    featured: true,
    color: "#8B5CF6",
  },
  {
    id: "p6",
    title: "ChatSphere",
    description:
      "End-to-end encrypted messaging app with voice notes, file sharing, and group channels.",
    image: "/projects/chatsphere.jpg",
    category: "mobile",
    tags: ["Flutter", "Firebase", "WebRTC", "Encryption"],
    github: "https://github.com/hussein/chatsphere",
    featured: false,
    color: "#EC4899",
  },
  {
    id: "p7",
    title: "Flutter UI Kit",
    description:
      "Open source collection of 50+ beautifully crafted Flutter widgets and templates for the community.",
    image: "/projects/flutter-ui-kit.jpg",
    category: "open-source",
    tags: ["Flutter", "Dart", "Material Design", "Widgets"],
    github: "https://github.com/hussein/flutter-ui-kit",
    demo: "https://flutter-ui-kit.dev",
    featured: true,
    color: "#06B6D4",
  },
  {
    id: "p8",
    title: "E-Shop Dashboard",
    description:
      "Admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.",
    image: "/projects/eshop-dashboard.jpg",
    category: "web",
    tags: ["Next.js", "Chart.js", "Tailwind", "REST API"],
    demo: "https://eshop-dashboard.vercel.app",
    featured: false,
    color: "#8B5CF6",
  },
  {
    id: "p9",
    title: "Brand Identity System",
    description:
      "Complete brand identity design system including logos, color palettes, typography, and component library.",
    image: "/projects/brand-identity.jpg",
    category: "design",
    tags: ["Figma", "Design System", "Branding", "UI/UX"],
    featured: false,
    color: "#EC4899",
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectCategoryById(id: ProjectCategory): ProjectCategoryData | undefined {
  return projectCategories.find((c) => c.id === id);
}
