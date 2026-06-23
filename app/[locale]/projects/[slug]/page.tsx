import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/common/jsonLd";
import { CaseStudy } from "@/components/sections/caseStudy";
import { projects } from "@/content/projects";
import { localize } from "@/i18n/routing";
import { alternatesFor, projectJsonLd, socialMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = localize(project.title, locale);
  const description = localize(project.summary, locale);
  const path = `/projects/${slug}`;
  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    ...socialMetadata({ locale, path, title, description }),
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);
  if (!project?.caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <JsonLd data={projectJsonLd(project, locale)} />
      <CaseStudy project={project} />
    </main>
  );
}
