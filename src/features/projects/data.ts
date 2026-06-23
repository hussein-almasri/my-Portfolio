export type ProjectCategory = "mobile" | "web" | "fullstack" | "backend" | "design" | "open-source";

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

export interface ProjectGalleryItem {
  id: string;
  url: string;
  alt: string;
  type: "image" | "video";
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
    slug: "fittrack-pro",
    title: "FitTrack Pro",
    description:
      "A comprehensive fitness tracking app with workout plans, progress charts, and social features built with Flutter.",
    longDescription:
      "FitTrack Pro is a comprehensive fitness tracking application designed to help users achieve their health and fitness goals. Built with Flutter, it provides a seamless cross-platform experience with native performance. The app features workout tracking, progress visualization, social challenges, and personalized recommendations powered by machine learning.",
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
      { id: "g3", url: "/projects/fittrack-3.jpg", alt: "Social features", type: "image" },
      { id: "g4", url: "/projects/fittrack-4.jpg", alt: "Profile dashboard", type: "image" },
    ],
    features: [
      {
        title: "Workout Tracking",
        description: "Track workouts with custom exercises, sets, reps, and rest timers.",
        icon: "dumbbell",
      },
      {
        title: "Progress Charts",
        description: "Visualize progress with interactive charts and weekly summaries.",
        icon: "chart",
      },
      {
        title: "Social Challenges",
        description: "Compete with friends in fitness challenges and leaderboards.",
        icon: "users",
      },
      {
        title: "Custom Plans",
        description: "Create and share personalized workout plans.",
        icon: "calendar",
      },
      {
        title: "Offline Mode",
        description: "Full offline support with automatic sync when online.",
        icon: "wifi-off",
      },
      {
        title: "Dark Mode",
        description: "Beautiful dark theme with OLED optimization.",
        icon: "moon",
      },
    ],
    architecture: [
      {
        title: "Clean Architecture",
        description:
          "Separated presentation, domain, and data layers for testability and maintainability.",
      },
      {
        title: "BLoC Pattern",
        description: "Business Logic Component pattern for state management with clear data flow.",
      },
      {
        title: "Repository Pattern",
        description: "Abstracted data sources with repository pattern for flexible data fetching.",
      },
    ],
    challenges: [
      {
        problem: "Handling complex workout state across multiple screens",
        solution:
          "Implemented BLoC pattern with event-driven architecture to manage state transitions cleanly.",
      },
      {
        problem: "Offline data synchronization",
        solution:
          "Built a custom sync queue with conflict resolution using timestamps and user priorities.",
      },
      {
        problem: "Real-time social features",
        solution: "Used Firebase Cloud Firestore with snapshot listeners for live updates.",
      },
    ],
    lessons: [
      {
        title: "State Management Matters",
        description:
          "Choosing the right state management solution early saves significant refactoring time later.",
      },
      {
        title: "Offline-First Design",
        description:
          "Designing for offline first forces better architecture and improves overall reliability.",
      },
      {
        title: "User Testing is Crucial",
        description:
          "Early user testing revealed UX issues that weren't apparent during development.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart", "Material Design 3"] },
      { category: "State Management", items: ["BLoC", "flutter_bloc"] },
      { category: "Backend", items: ["Firebase", "Cloud Firestore", "Firebase Auth"] },
      { category: "Tools", items: ["Git", "VS Code", "Android Studio", "Figma"] },
    ],
  },
  {
    id: "p2",
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "A modern project management tool with real-time collaboration, kanban boards, and AI-powered task prioritization.",
    longDescription:
      "TaskFlow is a comprehensive project management platform designed for modern teams. It features real-time collaboration, kanban boards, Gantt charts, and AI-powered task prioritization. Built with Next.js and powered by PostgreSQL, it delivers enterprise-grade performance with a beautiful, intuitive interface.",
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
      { id: "g2", url: "/projects/taskflow-2.jpg", alt: "Team collaboration", type: "image" },
      { id: "g3", url: "/projects/taskflow-3.jpg", alt: "Analytics dashboard", type: "image" },
    ],
    features: [
      {
        title: "Kanban Boards",
        description: "Drag-and-drop kanban boards with customizable columns.",
        icon: "columns",
      },
      {
        title: "Real-time Collaboration",
        description: "See team members' changes instantly with WebSocket connections.",
        icon: "users",
      },
      {
        title: "AI Prioritization",
        description: "AI-powered task prioritization based on deadlines and dependencies.",
        icon: "brain",
      },
      {
        title: "Gantt Charts",
        description: "Visual project timelines with dependency tracking.",
        icon: "timeline",
      },
    ],
    architecture: [
      {
        title: "Next.js App Router",
        description: "Server-side rendering with React Server Components for optimal performance.",
      },
      {
        title: "Prisma ORM",
        description: "Type-safe database queries with Prisma's schema-first approach.",
      },
      {
        title: "WebSocket Layer",
        description: "Custom WebSocket server for real-time updates across all connected clients.",
      },
    ],
    challenges: [
      {
        problem: "Real-time sync across multiple users",
        solution:
          "Implemented operational transformation with conflict resolution for concurrent edits.",
      },
      {
        problem: "Complex drag-and-drop with performance",
        solution: "Used virtualized lists and optimized re-renders with React.memo and useMemo.",
      },
    ],
    lessons: [
      {
        title: "Type Safety Pays Off",
        description: "TypeScript caught numerous bugs early and made refactoring much safer.",
      },
      {
        title: "Real-time is Complex",
        description:
          "Building real-time features requires careful consideration of state synchronization.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Prisma", "PostgreSQL", "Redis"] },
      { category: "Real-time", items: ["WebSocket", "Socket.io"] },
      { category: "Tools", items: ["Vercel", "Docker", "GitHub Actions"] },
    ],
  },
  {
    id: "p3",
    slug: "weathernow",
    title: "WeatherNow",
    description:
      "Beautiful weather app with animated forecasts, location-based alerts, and a clean minimalist design.",
    longDescription:
      "WeatherNow is a beautifully designed weather application that provides accurate forecasts with stunning visualizations. Built with Flutter, it features animated weather icons, location-based alerts, and a clean minimalist interface that makes checking the weather a delight.",
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
      { id: "g2", url: "/projects/weathernow-2.jpg", alt: "Forecast details", type: "image" },
    ],
    features: [
      {
        title: "Animated Weather",
        description: "Beautiful animated icons that reflect current conditions.",
        icon: "cloud-sun",
      },
      {
        title: "Location Alerts",
        description: "Push notifications for severe weather in your area.",
        icon: "bell",
      },
      {
        title: "Hourly Forecast",
        description: "Detailed hour-by-hour weather predictions.",
        icon: "clock",
      },
    ],
    architecture: [
      {
        title: "Service Layer",
        description: "Clean service layer for API calls with error handling and caching.",
      },
      {
        title: "Repository Pattern",
        description: "Repository pattern for data access with offline caching.",
      },
    ],
    challenges: [
      {
        problem: "Weather data accuracy",
        solution: "Implemented multi-source aggregation with fallback mechanisms.",
      },
      {
        problem: "Battery optimization for location services",
        solution: "Used geofencing and background fetch APIs efficiently.",
      },
    ],
    lessons: [
      {
        title: "Animation Elevates UX",
        description: "Well-crafted animations make the app feel premium and delightful.",
      },
      {
        title: "API Reliability",
        description: "Always implement fallbacks and caching for external APIs.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart"] },
      { category: "API", items: ["OpenWeather API", "Geolocator"] },
      { category: "Tools", items: ["Git", "VS Code"] },
    ],
  },
  {
    id: "p4",
    slug: "devconnect-api",
    title: "DevConnect API",
    description:
      "RESTful API powering developer community platforms with authentication, rate limiting, and real-time notifications.",
    longDescription:
      "DevConnect API is a robust RESTful API designed to power developer community platforms. It features JWT authentication, rate limiting, real-time notifications, and comprehensive documentation. Built with Node.js and Express, it handles thousands of requests efficiently.",
    image: "/projects/devconnect.jpg",
    category: "backend",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    github: "https://github.com/hussein/devconnect-api",
    featured: false,
    color: "#F59E0B",
    year: "2024",
    duration: "6 weeks",
    role: "Backend Developer",
    gallery: [
      { id: "g1", url: "/projects/devconnect-1.jpg", alt: "API documentation", type: "image" },
    ],
    features: [
      {
        title: "JWT Authentication",
        description: "Secure authentication with refresh tokens and role-based access.",
        icon: "shield",
      },
      {
        title: "Rate Limiting",
        description: "Configurable rate limiting to prevent abuse.",
        icon: "gauge",
      },
      {
        title: "Real-time Notifications",
        description: "WebSocket-based notifications for instant updates.",
        icon: "bell",
      },
    ],
    architecture: [
      {
        title: "MVC Pattern",
        description: "Model-View-Controller pattern for clean separation of concerns.",
      },
      {
        title: "Middleware Chain",
        description: "Composable middleware for auth, validation, and error handling.",
      },
    ],
    challenges: [
      {
        problem: "Handling high concurrent connections",
        solution: "Implemented connection pooling and Redis caching for scalability.",
      },
    ],
    lessons: [
      {
        title: "API Design Matters",
        description: "Good API design reduces client-side complexity significantly.",
      },
    ],
    techStack: [
      { category: "Runtime", items: ["Node.js", "Express"] },
      { category: "Database", items: ["MongoDB", "Redis"] },
      { category: "Auth", items: ["JWT", "bcrypt"] },
      { category: "Tools", items: ["Postman", "Docker", "Swagger"] },
    ],
  },
  {
    id: "p5",
    slug: "portfolio-os",
    title: "Portfolio OS",
    description:
      "An interactive portfolio website designed as a desktop OS with draggable windows and custom themes.",
    longDescription:
      "Portfolio OS is an innovative portfolio website designed to look and feel like a desktop operating system. Users can open draggable windows, switch between themes, and explore projects through an immersive, interactive experience. Built with React and Framer Motion.",
    image: "/projects/portfolio-os.jpg",
    category: "web",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    demo: "https://hussein.dev",
    featured: true,
    color: "#8B5CF6",
    year: "2024",
    duration: "5 weeks",
    role: "Frontend Developer",
    gallery: [
      { id: "g1", url: "/projects/portfolio-os-1.jpg", alt: "Desktop view", type: "image" },
      { id: "g2", url: "/projects/portfolio-os-2.jpg", alt: "Window management", type: "image" },
    ],
    features: [
      {
        title: "Draggable Windows",
        description: "Fully draggable and resizable windows with snap-to-grid.",
        icon: "move",
      },
      {
        title: "Theme System",
        description: "Multiple built-in themes with custom theme support.",
        icon: "palette",
      },
      {
        title: "File Explorer",
        description: "Interactive file system to browse projects.",
        icon: "folder",
      },
    ],
    architecture: [
      {
        title: "Component Architecture",
        description: "Modular window system with composable components.",
      },
      {
        title: "Context API",
        description: "React Context for global window and theme state.",
      },
    ],
    challenges: [
      {
        problem: "Window dragging performance",
        solution: "Used CSS transforms and requestAnimationFrame for smooth 60fps dragging.",
      },
    ],
    lessons: [
      {
        title: "Creativity in Portfolios",
        description: "A unique portfolio concept can make a strong impression.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Animation", items: ["Framer Motion"] },
      { category: "Tools", items: ["Vite", "Vercel"] },
    ],
  },
  {
    id: "p6",
    slug: "chatsphere",
    title: "ChatSphere",
    description:
      "End-to-end encrypted messaging app with voice notes, file sharing, and group channels.",
    longDescription:
      "ChatSphere is a secure messaging application with end-to-end encryption, voice notes, file sharing, and group channels. Built with Flutter and Firebase, it prioritizes user privacy while delivering a smooth messaging experience.",
    image: "/projects/chatsphere.jpg",
    category: "mobile",
    tags: ["Flutter", "Firebase", "WebRTC", "Encryption"],
    github: "https://github.com/hussein/chatsphere",
    featured: false,
    color: "#EC4899",
    year: "2023",
    duration: "3 months",
    role: "Lead Developer",
    gallery: [
      { id: "g1", url: "/projects/chatsphere-1.jpg", alt: "Chat interface", type: "image" },
    ],
    features: [
      {
        title: "E2E Encryption",
        description: "Messages encrypted on device, never readable by servers.",
        icon: "lock",
      },
      {
        title: "Voice Notes",
        description: "Record and send voice messages with waveform visualization.",
        icon: "mic",
      },
      {
        title: "Group Channels",
        description: "Create groups with admin controls and permissions.",
        icon: "users",
      },
    ],
    architecture: [
      {
        title: "Signal Protocol",
        description: "Implemented Signal Protocol for end-to-end encryption.",
      },
    ],
    challenges: [
      {
        problem: "E2E encryption complexity",
        solution: "Used established Signal Protocol library and adapted for Flutter.",
      },
    ],
    lessons: [
      {
        title: "Security by Design",
        description: "Security features are easier to implement when planned from the start.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "Dart"] },
      { category: "Backend", items: ["Firebase", "Cloud Functions"] },
      { category: "Security", items: ["Signal Protocol", "AES-256"] },
    ],
  },
  {
    id: "p7",
    slug: "flutter-ui-kit",
    title: "Flutter UI Kit",
    description:
      "Open source collection of 50+ beautifully crafted Flutter widgets and templates for the community.",
    longDescription:
      "Flutter UI Kit is an open-source collection of over 50 beautifully crafted Flutter widgets, components, and templates. It helps developers build beautiful apps faster with production-ready, customizable components.",
    image: "/projects/flutter-ui-kit.jpg",
    category: "open-source",
    tags: ["Flutter", "Dart", "Material Design", "Widgets"],
    github: "https://github.com/hussein/flutter-ui-kit",
    demo: "https://flutter-ui-kit.dev",
    featured: true,
    color: "#06B6D4",
    year: "2024",
    duration: "Ongoing",
    role: "Creator & Maintainer",
    gallery: [
      { id: "g1", url: "/projects/flutter-ui-kit-1.jpg", alt: "Widget showcase", type: "image" },
      { id: "g2", url: "/projects/flutter-ui-kit-2.jpg", alt: "Component library", type: "image" },
    ],
    features: [
      {
        title: "50+ Widgets",
        description: "Production-ready widgets for common UI patterns.",
        icon: "layout",
      },
      {
        title: "Customizable",
        description: "Every widget supports theming and customization.",
        icon: "settings",
      },
      {
        title: "Well Documented",
        description: "Comprehensive documentation with live examples.",
        icon: "book",
      },
    ],
    architecture: [
      {
        title: "Package Structure",
        description: "Modular package structure for easy import and tree-shaking.",
      },
    ],
    challenges: [
      {
        problem: "Maintaining consistency across widgets",
        solution: "Established strict design tokens and shared base components.",
      },
    ],
    lessons: [
      {
        title: "Open Source Impact",
        description: "Open source projects build reputation and help the community.",
      },
    ],
    techStack: [
      { category: "Framework", items: ["Flutter", "Dart"] },
      { category: "Design", items: ["Material Design 3", "Custom Themes"] },
      { category: "Docs", items: ["GitHub Pages", "Markdown"] },
    ],
  },
  {
    id: "p8",
    slug: "eshop-dashboard",
    title: "E-Shop Dashboard",
    description:
      "Admin dashboard for e-commerce platforms with analytics, inventory management, and order tracking.",
    longDescription:
      "E-Shop Dashboard is a comprehensive admin dashboard for managing e-commerce operations. It features real-time analytics, inventory management, order tracking, and customer insights with a beautiful, responsive interface.",
    image: "/projects/eshop-dashboard.jpg",
    category: "web",
    tags: ["Next.js", "Chart.js", "Tailwind", "REST API"],
    demo: "https://eshop-dashboard.vercel.app",
    featured: false,
    color: "#8B5CF6",
    year: "2024",
    duration: "6 weeks",
    role: "Frontend Developer",
    gallery: [{ id: "g1", url: "/projects/eshop-1.jpg", alt: "Analytics view", type: "image" }],
    features: [
      {
        title: "Analytics Dashboard",
        description: "Real-time sales, revenue, and customer analytics.",
        icon: "bar-chart",
      },
      {
        title: "Inventory Management",
        description: "Track stock levels and manage products.",
        icon: "package",
      },
      {
        title: "Order Tracking",
        description: "Monitor orders from placement to delivery.",
        icon: "truck",
      },
    ],
    architecture: [
      {
        title: "Dashboard Layout",
        description: "Responsive dashboard layout with collapsible sidebar.",
      },
    ],
    challenges: [
      {
        problem: "Complex data visualization",
        solution: "Custom Chart.js configurations with responsive breakpoints.",
      },
    ],
    lessons: [
      {
        title: "Data-Driven Design",
        description: "Good dashboards prioritize the most important metrics.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
      { category: "Charts", items: ["Chart.js", "Recharts"] },
      { category: "Tools", items: ["Vercel", "GitHub Actions"] },
    ],
  },
  {
    id: "p9",
    slug: "brand-identity-system",
    title: "Brand Identity System",
    description:
      "Complete brand identity design system including logos, color palettes, typography, and component library.",
    longDescription:
      "A comprehensive brand identity design system created for a tech startup. Includes logo design, color palette, typography system, iconography, and a complete component library for consistent brand application across all touchpoints.",
    image: "/projects/brand-identity.jpg",
    category: "design",
    tags: ["Figma", "Design System", "Branding", "UI/UX"],
    featured: false,
    color: "#EC4899",
    year: "2024",
    duration: "4 weeks",
    role: "UI/UX Designer",
    gallery: [{ id: "g1", url: "/projects/brand-1.jpg", alt: "Brand guidelines", type: "image" }],
    features: [
      {
        title: "Logo System",
        description: "Primary, secondary, and icon logos with usage guidelines.",
        icon: "image",
      },
      {
        title: "Color Palette",
        description: "Primary, secondary, and semantic color tokens.",
        icon: "palette",
      },
      {
        title: "Typography",
        description: "Type scale with responsive sizing and usage rules.",
        icon: "type",
      },
    ],
    architecture: [
      {
        title: "Design Tokens",
        description: "Token-based system for consistent design decisions.",
      },
    ],
    challenges: [
      {
        problem: "Maintaining consistency across platforms",
        solution: "Created comprehensive documentation and Figma component library.",
      },
    ],
    lessons: [
      {
        title: "Systems Thinking",
        description: "Good design systems are built on principles, not just patterns.",
      },
    ],
    techStack: [
      { category: "Design", items: ["Figma", "Illustrator"] },
      { category: "Tokens", items: ["Design Tokens", "CSS Variables"] },
    ],
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
