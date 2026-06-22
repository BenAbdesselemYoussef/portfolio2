import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { PlaceholderSection } from "@/components/sections/placeholderSection";
import { sectionIds } from "@/lib/constants";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <Hero />
      {sectionIds.map((id) => (
        <PlaceholderSection key={id} id={id} />
      ))}
    </main>
  );
}
