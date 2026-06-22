import { setRequestLocale } from "next-intl/server";

import { ExperienceTimeline } from "@/components/sections/experienceTimeline";
import { Hero } from "@/components/sections/hero";
import { PlaceholderSection } from "@/components/sections/placeholderSection";
import { ProjectsGrid } from "@/components/sections/projectsGrid";
import { SkillsMatrix } from "@/components/sections/skillsMatrix";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <Hero />
      <ProjectsGrid />
      <ExperienceTimeline />
      <SkillsMatrix />
      <PlaceholderSection id="contact" />
    </main>
  );
}
