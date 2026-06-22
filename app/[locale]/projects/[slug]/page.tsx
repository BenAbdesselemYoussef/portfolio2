import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { CaseStudy } from "@/components/sections/caseStudy";
import { projects } from "@/content/projects";
import { localize } from "@/i18n/routing";

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
  return {
    title: localize(project.title, locale),
    description: localize(project.summary, locale),
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
      <CaseStudy project={project} />
    </main>
  );
}
