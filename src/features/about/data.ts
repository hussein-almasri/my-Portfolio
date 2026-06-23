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
  icon?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  color: string;
}

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

export const quickFacts: QuickFact[] = [
  { id: "f1", label: "Based in", value: "Jordan" },
  { id: "f2", label: "Focus", value: "Flutter & Dart" },
  { id: "f3", label: "Education", value: "Software Engineering" },
  { id: "f4", label: "Languages", value: "Arabic, English" },
  { id: "f5", label: "Interests", value: "Mobile, UI/UX, Open Source" },
  { id: "f6", label: "Status", value: "Open to opportunities" },
];
