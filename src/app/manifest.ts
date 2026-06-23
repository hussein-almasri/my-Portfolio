import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hussein Almasri | Portfolio",
    short_name: "H.A Portfolio",
    description:
      "Flutter Developer and Software Engineering Student passionate about building modern mobile applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#6366f1",
    orientation: "any",
    scope: "/",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
    categories: ["portfolio", "technology", "developer"],
    lang: "en",
    dir: "ltr",
  };
}
