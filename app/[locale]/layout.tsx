import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";

import { SiteFooter } from "@/components/common/siteFooter";
import { SiteHeader } from "@/components/common/siteHeader";
import { ThemeProvider } from "@/components/themeProvider";
import { getDirection, routing } from "@/i18n/routing";
import { cairo, geistMono, geistSans } from "@/lib/fonts";
import { alternatesFor, socialMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0e1014" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("title"), template: `%s — ${t("name")}` },
    description: t("description"),
    alternates: alternatesFor(locale),
    robots: { index: true, follow: true },
    ...socialMetadata({ locale, title: t("title"), description: t("description") }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <div className="flex flex-1 flex-col">{children}</div>
            <SiteFooter />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
