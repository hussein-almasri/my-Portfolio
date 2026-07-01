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
      value: "hasoon04h@gmail.com",
      href: "mailto:hasoon04h@gmail.com",
      buttonLabel: "Send Email",
      external: false,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/hussein-almasri",
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
      href: "/assets/files/cv.pdf",
      buttonLabel: "Download CV",
      external: false,
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
