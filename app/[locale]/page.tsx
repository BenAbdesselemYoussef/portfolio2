import { setRequestLocale } from "next-intl/server";

import { ExperienceTimeline } from "@/components/sections/experienceTimeline";
import { Hero } from "@/components/sections/hero";
import { PlaceholderSection } from "@/components/sections/placeholderSection";
import { SkillsMatrix } from "@/components/sections/skillsMatrix";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <Hero />
      <PlaceholderSection id="work" />
      <ExperienceTimeline />
      <SkillsMatrix />
      <PlaceholderSection id="contact" />
    </main>
  );
}
