import { siteConfig } from "@/config/site";

interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image: string;
  jobTitle: string;
  description: string;
  sameAs: string[];
  knowsAbout: string[];
  alumniOf?: {
    "@type": string;
    name: string;
  };
  email: string;
}

interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
  };
}

interface PortfolioSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  mainEntity: {
    "@type": string;
    name: string;
    description: string;
  };
}

function PersonJsonLd() {
  const personSchema: PersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter],
    knowsAbout: [
      "Flutter",
      "Dart",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Mobile Development",
      "Web Development",
      "Software Engineering",
    ],
    email: siteConfig.links.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

function WebsiteJsonLd() {
  const websiteSchema: WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

function PortfolioJsonLd() {
  const portfolioSchema: PortfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${siteConfig.author.name} - Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ProfilePage",
      name: siteConfig.author.name,
      description: siteConfig.author.bio,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
    />
  );
}

export function StructuredData() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <PortfolioJsonLd />
    </>
  );
}
