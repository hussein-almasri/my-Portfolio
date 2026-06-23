export const siteConfig = {
  name: "Portfolio",
  title: "Developer Portfolio | Full Stack Engineer",
  description:
    "Full Stack Developer specializing in building exceptional digital experiences. Passionate about creating beautiful, functional, and accessible web applications.",
  url: "https://your-domain.com",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "hello@yourdomain.com",
  },
  author: {
    name: "Your Name",
    role: "Full Stack Developer",
    bio: "Building the web, one component at a time.",
    avatar: "/avatar.jpg",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  { name: "GitHub", url: siteConfig.links.github },
  { name: "LinkedIn", url: siteConfig.links.linkedin },
  { name: "Twitter", url: siteConfig.links.twitter },
] as const;
