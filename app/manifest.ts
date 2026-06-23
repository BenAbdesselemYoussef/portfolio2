import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.role}`,
    short_name: "Youssef BA",
    description: "Full-Stack Engineer building scalable, real-time, and AI-powered systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e1014",
    theme_color: "#0e1014",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
