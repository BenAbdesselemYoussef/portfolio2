import { notFound } from "next/navigation";

import { projects } from "@/content/projects";
import { localize } from "@/i18n/routing";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";

// One social card per project (locale comes from the parent [locale] segment).
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const alt = "Case study";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return renderOgImage({
    locale,
    eyebrow: siteConfig.name,
    title: localize(project.title, locale),
    subtitle: localize(project.summary, locale),
    tags: project.stack,
  });
}
