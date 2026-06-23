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

export type CertificateCategory = "flutter" | "mobile" | "web" | "cloud" | "design" | "general";

export interface CertificateCategoryData {
  id: CertificateCategory;
  name: string;
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
    description:
      "Official Google certification covering Firebase integration with Flutter including Auth, Firestore, and Cloud Functions.",
    skills: ["Firebase", "Cloud Firestore", "Authentication", "Cloud Functions"],
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
    skills: ["GCP", "Cloud Computing", "Compute Engine", "Cloud Storage"],
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
    skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
    category: "design",
    color: "#F24E1E",
  },
  {
    id: "cert-7",
    title: "Node.js Backend Development",
    issuer: "Udemy",
    date: "2023-12-10",
    credentialId: "UC-11223344",
    credentialUrl: "https://udemy.com/certificate/UC-11223344",
    description: "Backend development with Node.js, Express, REST APIs, and database integration.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB"],
    category: "web",
    color: "#339933",
  },
  {
    id: "cert-8",
    title: "Docker & Kubernetes Essentials",
    issuer: "Coursera",
    date: "2024-04-01",
    credentialId: "COURSERA-DOCKER-K8S",
    credentialUrl: "https://coursera.org/verify/DOCKER-K8S",
    description:
      "Containerization and orchestration course covering Docker fundamentals and Kubernetes deployment.",
    skills: ["Docker", "Kubernetes", "Containers", "DevOps"],
    category: "cloud",
    color: "#2496ED",
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
