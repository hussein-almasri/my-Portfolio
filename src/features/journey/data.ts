import { SiPython, SiFlutter, SiFirebase, SiGit, SiGithub } from "react-icons/si";
import { BiShield, BiCode, BiTrophy, BiUser, BiRocket, BiTargetLock } from "react-icons/bi";
import type { ComponentType } from "react";

export interface JourneyMilestone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon: ComponentType<{ size?: number; color?: string; className?: string }>;
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
    icon: BiCode,
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
    icon: SiFlutter,
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
    icon: BiShield,
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
    icon: SiPython,
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
    icon: BiTrophy,
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
    icon: BiUser,
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
    icon: SiGithub,
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
    icon: BiRocket,
    color: "#02569B",
    tags: ["Internship", "Career"],
  },
];
