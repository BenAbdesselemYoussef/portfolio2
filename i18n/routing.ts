import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "ar"],
  defaultLocale: "en",
  // Every locale is prefixed: /en, /fr, /ar. "/" redirects to the detected locale.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function getDirection(locale: string): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

// Resolve a per-locale text record for the active locale (falls back to English).
export function localize(text: Record<Locale, string>, locale: string): string {
  return text[locale as Locale] ?? text.en;
}
