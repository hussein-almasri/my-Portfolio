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
import type { ComponentType } from "react";

export interface Skill {
  id: string;
  name: string;
  icon: ComponentType<{ size?: number; color?: string; className?: string }>;
  color: string;
  level: number; // 0-100
  years?: string;
  category: SkillCategory;
}

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

export const categories: SkillCategoryData[] = [
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

export const skills: Skill[] = [
  // ─── Flutter & Mobile ───
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

  // ─── Programming Languages ───
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

  // ─── Backend ───
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

  // ─── Database ───
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

  // ─── Tools ───
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

  // ─── Architecture ───
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

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category);
}

export function getCategoryById(id: SkillCategory): SkillCategoryData | undefined {
  return categories.find((c) => c.id === id);
}
