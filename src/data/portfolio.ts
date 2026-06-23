/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PORTFOLIO DATA - Single source of truth for all portfolio content
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Edit this file to update all portfolio content.
 * All components import data from here - no hardcoded data elsewhere.
 *
 * Sections:
 *   1. Site Configuration & Navigation
 *   2. Profile & About
 *   3. Experience & Education Timeline
 *   4. Skills & Categories
 *   5. Projects & Categories
 *   6. Certificates & Categories
 *   7. Journey Milestones
 *   8. Contact Information
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type { ComponentType } from "react";

// ═══════════════════════════════════════════════════════════════════════════
// 1. SITE CONFIGURATION & NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const siteConfig = {
  name: "Hussein Almasri",
  title: "Hussein Almasri | Flutter Developer & Software Engineering Student",
  description:
    "Flutter Developer and Software Engineering Student passionate about building modern mobile applications with beautiful UI and robust architecture.",
  url: "https://hussein-almasri.dev",
  ogImage: "/og-image.svg",
  author: {
    name: "Hussein Almasri",
    role: "Flutter Developer",
    bio: "Software Engineering Student passionate about building modern mobile applications.",
    avatar: "/avatar.jpg",
    location: "Jordan",
    email: "hussein@example.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/hussein-almasri" },
  { name: "LinkedIn", url: "https://linkedin.com/in/hussein-almasri" },
  { name: "Twitter", url: "https://twitter.com/hussein_almasri" },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// 2. PROFILE & ABOUT
// ═══════════════════════════════════════════════════════════════════════════

export interface QuickFact {
  id: string;
  label: string;
  value: string;
}

export const profile = {
  name: "Hussein Almasri",
  role: "Flutter Developer",
  summary:
    "I'm a Software Engineering student with a deep passion for crafting beautiful, performant mobile applications using Flutter. I love turning complex problems into simple, elegant solutions that users enjoy.",
  location: "Jordan",
  languages: ["Arabic", "English"],
  interests: ["Mobile Development", "UI/UX Design", "Open Source", "Tech Community"],
};

export const quickFacts: QuickFact[] = [
  { id: "f1", label: "Based in", value: "Jordan" },
  { id: "f2", label: "Focus", value: "Flutter & Dart" },
  { id: "f3", label: "Education", value: "Software Engineering" },
  { id: "f4", label: "Languages", value: "Arabic, English" },
  { id: "f5", label: "Interests", value: "Mobile, UI/UX, Open Source" },
  { id: "f6", label: "Status", value: "Open to opportunities" },
];

// ═══════════════════════════════════════════════════════════════════════════
// 3. EXPERIENCE & EDUCATION TIMELINE
// ═══════════════════════════════════════════════════════════════════════════

export interface TimelineItem {
  id: string;
  type: "education" | "experience";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string[];
  tags?: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  color: string;
}

export const timeline: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "B.Sc. Software Engineering",
    organization: "University of Jordan",
    location: "Amman, Jordan",
    startDate: "2022",
    endDate: "Present",
    description: [
      "Focusing on software architecture, data structures, and mobile development.",
      "Dean's List for academic excellence.",
      "Active member of the university's tech club.",
    ],
    tags: ["Software Engineering", "Mobile Dev", "Architecture"],
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Flutter Developer Intern",
    organization: "Tech Solutions Co.",
    location: "Remote",
    startDate: "2024",
    endDate: "2024",
    description: [
      "Developed and maintained 3+ Flutter applications for Android and iOS.",
      "Implemented custom widgets and animations improving UX by 40%.",
      "Collaborated with design team to translate Figma mockups into production code.",
    ],
    tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
  },
  {
    id: "edu-2",
    type: "education",
    title: "Flutter Development Bootcamp",
    organization: "Udemy",
    startDate: "2023",
    endDate: "2023",
    description: [
      "Completed 40+ hours of intensive Flutter training.",
      "Built 5+ projects including e-commerce and social media apps.",
    ],
    tags: ["Flutter", "Dart", "State Management"],
  },
  {
    id: "exp-2",
    type: "experience",
    title: "Freelance Mobile Developer",
    organization: "Self-Employed",
    startDate: "2023",
    endDate: "Present",
    description: [
      "Built custom mobile applications for local businesses.",
      "Delivered 5+ projects on time, earning 5-star client ratings.",
      "Specialized in e-commerce and service booking apps.",
    ],
    tags: ["Flutter", "Firebase", "REST APIs", "Stripe"],
  },
];

export const stats: StatItem[] = [
  { id: "s1", value: 3, suffix: "+", label: "Years Experience", color: "#8B5CF6" },
  { id: "s2", value: 15, suffix: "+", label: "Projects Completed", color: "#3B82F6" },
  { id: "s3", value: 10, suffix: "+", label: "Technologies", color: "#06B6D4" },
  { id: "s4", value: 5, suffix: "+", label: "Happy Clients", color: "#10B981" },
];

// ═══════════════════════════════════════════════════════════════════════════
// 4. SKILLS & CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════

export type SkillCategory =
  | "flutter"
  | "backend"
  | "languages"
  | "database"
  | "tools"
  | "architecture";

export interface SkillCategoryData {
  id: SkillCategory;
  name: string;
  description: string;
  color: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: ComponentType<{ size?: number; color?: string; className?: string }>;
  color: string;
  level: number;
  years?: string;
  category: SkillCategory;
}

export const skillCategories: SkillCategoryData[] = [
  {
    id: "flutter",
    name: "Flutter & Mobile",
    description: "Cross-platform mobile development",
    color: "#02569B",
  },
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core language proficiency",
    color: "#8B5CF6",
  },
  {
    id: "backend",
    name: "Backend",
    description: "Server-side development",
    color: "#10B981",
  },
  {
    id: "database",
    name: "Database",
    description: "Data storage & management",
    color: "#F59E0B",
  },
  {
    id: "tools",
    name: "Tools",
    description: "Development & design tools",
    color: "#EC4899",
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "Patterns & best practices",
    color: "#06B6D4",
  },
];

// Skills array is defined after icon imports below

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category);
}

export function getSkillCategoryById(id: SkillCategory): SkillCategoryData | undefined {
  return skillCategories.find((c) => c.id === id);
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. PROJECTS & CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════

export type ProjectCategory = "mobile" | "web" | "fullstack" | "backend" | "design" | "open-source";

export interface ProjectCategoryData {
  id: ProjectCategory;
  name: string;
  color: string;
}

export interface ProjectGalleryItem {
  id: string;
  url: string;
  alt: string;
  type: "image" | "video";
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectArchitecture {
  title: string;
  description: string;
  diagram?: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface ProjectLesson {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  color: string;
  year: string;
  duration: string;
  role: string;
  gallery: ProjectGalleryItem[];
  features: ProjectFeature[];
  architecture: ProjectArchitecture[];
  challenges: ProjectChallenge[];
  lessons: ProjectLesson[];
  techStack: {
    category: string;
    items: string[];
  }[];
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
    slug: "fittrack-pro",
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with workout plans, progress charts, and social features built with Flutter.",
    longDescription:
      "FitTrack Pro is a comprehensive fitness tracking application designed to help users achieve their health and fitness goals. Built with Flutter, it provides a seamless cross-platform experience with native performance.",
    image: "/projects/fittrack.jpg",
    category: "mobile",
    tags: ["Flutter", "Dart", "Firebase", "BLoC", "Charts"],
    github: "https://github.com/hussein/fittrack",
    demo: "https://fittrack.app",
    featured: true,
    color: "#02569B",
    year: "2024",
    duration: "3 months",
    role: "Lead Developer",
    gallery: [
      { id: "g1", url: "/projects/fittrack-1.jpg", alt: "Workout tracking screen", type: "image" },
      { id: "g2", url: "/projects/fittrack-2.jpg", alt: "Progress charts", type: "image" },
    ],
    features: [
      {
        title: "Workout Tracking",
        description: "Track workouts with custom exercises.",
        icon: "dumbbell",
      },
      {
        title: "Progress Charts",
        description: "Visualize progress with interactive charts.",
        icon: "chart",
      },
      {
        title: "Social Challenges",
        description: "Compete with friends in fitness challenges.",
        icon: "users",
      },
    ],
    architecture: [
      {
        title: "Clean Architecture",
        description: "Separated presentation, domain, and data layers.",
      },
      {
        title: "BLoC Pattern",
        description: "Business Logic Component pattern for state management.",
      },
    ],
    challenges: [
      {
        problem: "Handling complex workout state across multiple screens",
        solution: "Implemented BLoC pattern with event-driven architecture.",
      },
    ],
    lessons: [
      {
        title: "State Management Matters",
        description: "Choosing the right state management solution early saves time.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart", "Material Design 3"] },
      { category: "Backend", items: ["Firebase", "Cloud Firestore"] },
    ],
  },
  {
    id: "p2",
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "A modern project management tool with real-time collaboration, kanban boards, and AI-powered task prioritization.",
    longDescription:
      "TaskFlow is a comprehensive project management platform designed for modern teams. It features real-time collaboration, kanban boards, and AI-powered task prioritization.",
    image: "/projects/taskflow.jpg",
    category: "fullstack",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
    github: "https://github.com/hussein/taskflow",
    demo: "https://taskflow.dev",
    featured: true,
    color: "#10B981",
    year: "2024",
    duration: "4 months",
    role: "Full Stack Developer",
    gallery: [
      { id: "g1", url: "/projects/taskflow-1.jpg", alt: "Kanban board view", type: "image" },
    ],
    features: [
      { title: "Kanban Boards", description: "Drag-and-drop kanban boards.", icon: "columns" },
      {
        title: "Real-time Collaboration",
        description: "See team members' changes instantly.",
        icon: "users",
      },
    ],
    architecture: [
      {
        title: "Next.js App Router",
        description: "Server-side rendering with React Server Components.",
      },
    ],
    challenges: [
      {
        problem: "Real-time sync across multiple users",
        solution: "Implemented operational transformation with conflict resolution.",
      },
    ],
    lessons: [
      {
        title: "Type Safety Pays Off",
        description: "TypeScript caught numerous bugs early.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL"] },
    ],
  },
  {
    id: "p3",
    slug: "weathernow",
    title: "WeatherNow",
    description:
      "Beautiful weather app with animated forecasts, location-based alerts, and a clean minimalist design.",
    longDescription:
      "WeatherNow is a beautifully designed weather application that provides accurate forecasts with stunning visualizations.",
    image: "/projects/weathernow.jpg",
    category: "mobile",
    tags: ["Flutter", "Dart", "OpenWeather API", "Geolocator"],
    github: "https://github.com/hussein/weathernow",
    featured: true,
    color: "#3B82F6",
    year: "2023",
    duration: "2 months",
    role: "Solo Developer",
    gallery: [
      { id: "g1", url: "/projects/weathernow-1.jpg", alt: "Main weather view", type: "image" },
    ],
    features: [
      { title: "Animated Weather", description: "Beautiful animated icons.", icon: "cloud-sun" },
    ],
    architecture: [{ title: "Service Layer", description: "Clean service layer for API calls." }],
    challenges: [
      {
        problem: "Weather data accuracy",
        solution: "Implemented multi-source aggregation with fallbacks.",
      },
    ],
    lessons: [
      {
        title: "Animation Elevates UX",
        description: "Well-crafted animations make the app feel premium.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart"] },
      { category: "API", items: ["OpenWeather API"] },
    ],
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function getProjectCategoryById(id: ProjectCategory): ProjectCategoryData | undefined {
  return projectCategories.find((c) => c.id === id);
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. CERTIFICATES & CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════

export type CertificateCategory = "flutter" | "mobile" | "web" | "cloud" | "design" | "general";

export interface CertificateCategoryData {
  id: CertificateCategory;
  name: string;
  color: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  category: CertificateCategory;
  featured?: boolean;
  color: string;
}

export const certificateCategories: CertificateCategoryData[] = [
  { id: "flutter", name: "Flutter", color: "#02569B" },
  { id: "mobile", name: "Mobile Development", color: "#8B5CF6" },
  { id: "web", name: "Web Development", color: "#10B981" },
  { id: "cloud", name: "Cloud & DevOps", color: "#F59E0B" },
  { id: "design", name: "Design", color: "#EC4899" },
  { id: "general", name: "General", color: "#06B6D4" },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Flutter Development Specialist",
    issuer: "Udemy",
    date: "2024-01-15",
    credentialId: "UC-12345678",
    credentialUrl: "https://udemy.com/certificate/UC-12345678",
    description:
      "Comprehensive Flutter course covering widgets, state management, animations, and production-ready app development.",
    skills: ["Flutter", "Dart", "State Management", "UI/UX"],
    category: "flutter",
    featured: true,
    color: "#02569B",
  },
  {
    id: "cert-2",
    title: "Advanced Dart Programming",
    issuer: "Coursera",
    date: "2023-11-20",
    credentialId: "COURSERA-ADV-DART",
    credentialUrl: "https://coursera.org/verify/ADV-DART",
    description:
      "Deep dive into Dart language features including async programming, generics, and advanced type system.",
    skills: ["Dart", "Async Programming", "Generics", "Type System"],
    category: "flutter",
    color: "#0175C2",
  },
  {
    id: "cert-3",
    title: "Firebase for Flutter Apps",
    issuer: "Google",
    date: "2024-02-10",
    credentialId: "GOOGLE-FIREBASE-FL",
    credentialUrl: "https://developers.google.com/verify/FIREBASE-FL",
    description: "Official Google certification covering Firebase integration with Flutter.",
    skills: ["Firebase", "Cloud Firestore", "Authentication"],
    category: "mobile",
    featured: true,
    color: "#FFCA28",
  },
  {
    id: "cert-4",
    title: "React & Next.js Masterclass",
    issuer: "Udemy",
    date: "2024-03-05",
    credentialId: "UC-87654321",
    credentialUrl: "https://udemy.com/certificate/UC-87654321",
    description:
      "Complete React and Next.js course with App Router, Server Components, and full-stack development.",
    skills: ["React", "Next.js", "TypeScript", "Server Components"],
    category: "web",
    color: "#61DAFB",
  },
  {
    id: "cert-5",
    title: "Google Cloud Platform Fundamentals",
    issuer: "Google Cloud",
    date: "2023-09-15",
    credentialId: "GCP-FUND-2023",
    credentialUrl: "https://cloud.google.com/certification/verify/GCP-FUND",
    description:
      "Foundation course covering GCP services, compute, storage, and deployment basics.",
    skills: ["GCP", "Cloud Computing", "Compute Engine"],
    category: "cloud",
    color: "#4285F4",
  },
  {
    id: "cert-6",
    title: "UI/UX Design Principles",
    issuer: "Figma",
    date: "2024-01-25",
    credentialId: "FIGMA-UIUX-2024",
    credentialUrl: "https://figma.com/verify/UIUX-2024",
    description:
      "Design principles course covering user research, wireframing, prototyping, and design systems.",
    skills: ["UI Design", "UX Research", "Prototyping"],
    category: "design",
    color: "#F24E1E",
  },
];

export function getCertificatesByCategory(category: CertificateCategory): Certificate[] {
  return certificates.filter((c) => c.category === category);
}

export function getFeaturedCertificates(): Certificate[] {
  return certificates.filter((c) => c.featured);
}

export function getCertificateCategoryById(
  id: CertificateCategory
): CertificateCategoryData | undefined {
  return certificateCategories.find((c) => c.id === id);
}

// ═══════════════════════════════════════════════════════════════════════════
// 7. JOURNEY MILESTONES
// ═══════════════════════════════════════════════════════════════════════════

export interface JourneyMilestone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  iconName: string;
  color: string;
  tags?: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "m1",
    title: "Started Programming",
    subtitle: "The Beginning",
    description:
      "Wrote my first lines of code. Discovered the power of programming and decided to pursue software engineering.",
    date: "Early 2024",
    iconName: "BiCode",
    color: "#8B5CF6",
    tags: ["First Steps", "Discovery"],
  },
  {
    id: "m2",
    title: "Flutter",
    subtitle: "Mobile Development",
    description:
      "Dove deep into Flutter and Dart. Built cross-platform mobile apps and fell in love with UI development.",
    date: "2024",
    iconName: "SiFlutter",
    color: "#02569B",
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    id: "m3",
    title: "Cyber Security",
    subtitle: "Security Fundamentals",
    description:
      "Explored cybersecurity fundamentals. Learned about secure coding practices, encryption, and ethical hacking.",
    date: "2024",
    iconName: "BiShield",
    color: "#10B981",
    tags: ["Security", "Ethical Hacking"],
  },
  {
    id: "m4",
    title: "Python Institute",
    subtitle: "Python Certification",
    description:
      "Earned Python Institute certification. Mastered Python programming, data structures, and algorithms.",
    date: "2024",
    iconName: "SiPython",
    color: "#3776AB",
    tags: ["Python", "Certification"],
  },
  {
    id: "m5",
    title: "IEEE Hackathon",
    subtitle: "Competition & Teamwork",
    description:
      "Participated in IEEE Hackathon. Built innovative solutions under pressure and collaborated with a talented team.",
    date: "2024",
    iconName: "BiTrophy",
    color: "#F59E0B",
    tags: ["Hackathon", "Innovation", "Teamwork"],
  },
  {
    id: "m6",
    title: "Student Life Manager",
    subtitle: "Leadership Role",
    description:
      "Took on the role of Student Life Manager. Developed leadership, organizational, and people management skills.",
    date: "2024",
    iconName: "BiUser",
    color: "#EC4899",
    tags: ["Leadership", "Management"],
  },
  {
    id: "m7",
    title: "Skill Hub",
    subtitle: "Community & Growth",
    description:
      "Launched Skill Hub initiative. Helped fellow students learn programming and shared knowledge with the community.",
    date: "2024",
    iconName: "SiGithub",
    color: "#06B6D4",
    tags: ["Community", "Teaching"],
  },
  {
    id: "m8",
    title: "Looking for Internship",
    subtitle: "Next Chapter",
    description:
      "Actively seeking internship opportunities to apply skills in real-world projects and gain industry experience.",
    date: "2025",
    iconName: "BiRocket",
    color: "#02569B",
    tags: ["Internship", "Career"],
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// 8. CONTACT INFORMATION
// ═══════════════════════════════════════════════════════════════════════════

export const contactInfo = {
  email: "hussein@example.com",
  phone: "+971 XX XXX XXXX",
  github: "https://github.com/hussein-almasri",
  linkedin: "https://linkedin.com/in/hussein-almasri",
  cvUrl: "/cv/hussein-almasri-cv.pdf",
};

// ═══════════════════════════════════════════════════════════════════════════
// SKILLS DATA (with icon imports)
// ═══════════════════════════════════════════════════════════════════════════

import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiDocker,
  SiMongodb,
  SiSupabase,
  SiRedis,
  SiGraphql,
  SiApachekafka,
  SiNodedotjs,
  SiFastapi,
} from "react-icons/si";
import { BiShield, BiCode, BiTrophy, BiUser, BiRocket } from "react-icons/bi";

export const skills: Skill[] = [
  {
    id: "flutter",
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    level: 92,
    years: "3+",
    category: "flutter",
  },
  {
    id: "dart",
    name: "Dart",
    icon: SiDart,
    color: "#0175C2",
    level: 88,
    years: "3+",
    category: "flutter",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    level: 85,
    years: "2+",
    category: "flutter",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 78,
    years: "2+",
    category: "languages",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 82,
    years: "3+",
    category: "languages",
  },
  {
    id: "python",
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    level: 72,
    years: "2+",
    category: "languages",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: 70,
    years: "1+",
    category: "backend",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: SiFastapi,
    color: "#009688",
    level: 65,
    years: "1+",
    category: "backend",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E10098",
    level: 60,
    years: "1+",
    category: "backend",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 75,
    years: "2+",
    category: "database",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    level: 80,
    years: "1+",
    category: "database",
  },
  {
    id: "redis",
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    level: 55,
    years: "1+",
    category: "database",
  },
  {
    id: "git",
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: 88,
    years: "3+",
    category: "tools",
  },
  {
    id: "github",
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    level: 85,
    years: "3+",
    category: "tools",
  },
  {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    level: 50,
    years: "1+",
    category: "tools",
  },
  {
    id: "figma",
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
    level: 70,
    years: "2+",
    category: "tools",
  },
  {
    id: "postman",
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    level: 80,
    years: "2+",
    category: "tools",
  },
  {
    id: "clean-arch",
    name: "Clean Architecture",
    icon: SiDart,
    color: "#06B6D4",
    level: 80,
    years: "2+",
    category: "architecture",
  },
  {
    id: "bloc",
    name: "BLoC / Cubit",
    icon: SiFlutter,
    color: "#02569B",
    level: 88,
    years: "3+",
    category: "architecture",
  },
  {
    id: "mvvm",
    name: "MVVM",
    icon: SiDart,
    color: "#8B5CF6",
    level: 78,
    years: "2+",
    category: "architecture",
  },
  {
    id: "microservices",
    name: "Microservices",
    icon: SiApachekafka,
    color: "#10B981",
    level: 55,
    years: "1+",
    category: "architecture",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// ICON MAP FOR JOURNEY (string -> component mapping)
// ═══════════════════════════════════════════════════════════════════════════

export const iconMap: Record<
  string,
  ComponentType<{ size?: number; color?: string; className?: string }>
> = {
  BiCode,
  SiFlutter,
  BiShield,
  SiPython,
  BiTrophy,
  BiUser,
  SiGithub,
  BiRocket,
};
