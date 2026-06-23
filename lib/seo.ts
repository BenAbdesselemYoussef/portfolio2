import type { Metadata } from "next";

import type { Project } from "@/content/types";
import { localize, routing } from "@/i18n/routing";
import { siteConfig, siteUrl } from "@/lib/site";

// Map our locale codes to Open Graph locale tags (og:locale).
const ogLocales: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
};

// Absolute URL for a site-relative path (path should start with "/" or be "").
export function absoluteUrl(path = ""): string {
  return `${siteUrl}${path}`;
}

// The localized path for a route, e.g. localePath("en", "/projects/x") -> "/en/projects/x".
// `path` is the route *after* the locale segment ("" for the home page).
export function localePath(locale: string, path = ""): string {
  return `/${locale}${path}`;
}

/**
 * Canonical + hreflang alternates for a route across every locale.
 * `path` is the route after the locale segment ("" for home, "/projects/slug" for a case study).
 */
export function alternatesFor(locale: string, path = ""): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = absoluteUrl(localePath(l, path));
  }
  languages["x-default"] = absoluteUrl(localePath(routing.defaultLocale, path));
  return { canonical: absoluteUrl(localePath(locale, path)), languages };
}

/**
 * Shared Open Graph + Twitter metadata. The page's image is supplied by the
 * file-based `opengraph-image` convention, so it is intentionally omitted here.
 */
export function socialMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: absoluteUrl(localePath(locale, path)),
      locale: ogLocales[locale] ?? "en_US",
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocales[l] ?? l),
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// --- Structured data (JSON-LD) ----------------------------------------------

// The author/Person + WebSite graph for the home page.
export function homeJsonLd(locale: string, description: string) {
  const home = absoluteUrl(localePath(locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description,
        email: `mailto:${siteConfig.email}`,
        url: home,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteConfig.name,
        url: home,
        inLanguage: locale,
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}

// A CreativeWork + breadcrumb graph for a project case study.
export function projectJsonLd(project: Project, locale: string) {
  const path = `/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: localize(project.title, locale),
        description: localize(project.summary, locale),
        url: absoluteUrl(localePath(locale, path)),
        inLanguage: locale,
        keywords: project.stack.join(", "),
        author: { "@id": `${siteUrl}/#person` },
        ...(project.image ? { image: absoluteUrl(project.image) } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteConfig.name,
            item: absoluteUrl(localePath(locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: localize(project.title, locale),
            item: absoluteUrl(localePath(locale, path)),
          },
        ],
      },
    ],
  };
}
