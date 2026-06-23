import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { routing } from "@/i18n/routing";
import { absoluteUrl, localePath } from "@/lib/seo";

// Every locale × route, each entry carrying hreflang alternates for the others.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...projects.map((project) => `/projects/${project.slug}`)];

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, absoluteUrl(localePath(l, path))]),
        ),
      },
    })),
  );
}
