import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/common/jsonLd";
import { ContactForm } from "@/components/sections/contactForm";
import { ExperienceTimeline } from "@/components/sections/experienceTimeline";
import { Hero } from "@/components/sections/hero";
import { ProjectsGrid } from "@/components/sections/projectsGrid";
import { SkillsMatrix } from "@/components/sections/skillsMatrix";
import { homeJsonLd } from "@/lib/seo";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <JsonLd data={homeJsonLd(locale, t("description"))} />
      <Hero />
      <ProjectsGrid />
      <ExperienceTimeline />
      <SkillsMatrix />
      <ContactForm />
    </main>
  );
}
