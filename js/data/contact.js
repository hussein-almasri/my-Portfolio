const contact = {
  label: "Let's Connect",
  title: "Interested in Working Together?",
  description:
    "I'm currently looking for internship opportunities, exciting software engineering projects, and opportunities to continue learning while building real-world applications.",
  card: {
    name: "Hussein Almasri",
    role: "Software Engineering Student",
    location: "Irbid, Jordan",
    status: "Open to Internship Opportunities",
  },
  actions: [
    {
      type: "email",
      label: "Email",
      value: "husseein.almasri.dev@gmail.com",
      href: "mailto:husseein.almasri.dev@gmail.com",
      buttonLabel: "Send Email",
      external: false,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/hussein-almasri-53a7aa350",
      href: "https://www.linkedin.com/in/hussein-almasri-53a7aa350/",
      buttonLabel: "Visit Profile",
      external: true,
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/hussein-almasri",
      href: "https://github.com/hussein-almasri",
      buttonLabel: "View Projects",
      external: true,
    },
    {
      type: "resume",
      label: "Resume",
      value: "Download CV",
      href: window.SiteConfig.cvPath,
      buttonLabel: "Download CV",
      external: false,
      download: window.SiteConfig.cvFilename,
    },
  ],
  facts: [
    "Available for Internship",
    "Open to Freelance Projects",
    "Usually replies within 24 hours",
    "Based in Jordan",
  ],
  closing:
    "Looking forward to building meaningful software with great people.",
};

window.contact = contact;
