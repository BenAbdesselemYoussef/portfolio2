import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { heroStack } from "@/lib/constants";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";

// One social card per locale for the home page.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const hero = await getTranslations({ locale, namespace: "Hero" });

  return renderOgImage({
    locale,
    eyebrow: hero("eyebrow"),
    title: meta("name"),
    subtitle: meta("description"),
    tags: [...heroStack],
  });
}
