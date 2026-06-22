import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

const sections = ["work", "about", "contact"] as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <Hero />
      {sections.map((id) => (
        <PlaceholderSection key={id} id={id} />
      ))}
    </main>
  );
}
