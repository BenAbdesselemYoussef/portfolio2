"use client";

import { Check, Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "@/i18n/navigation";
import { localeLabels, routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("Language");
  const activeLocale = useLocale();
  const pathname = usePathname();

  // Use a full navigation (plain anchor) rather than a soft client nav. Changing
  // locale changes <html lang/dir>, which would otherwise re-render the theme
  // script on the client (React 19 forbids client-rendered <script> tags).
  const suffix = pathname === "/" ? "" : pathname;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("label")}>
          <Languages className="size-5" />
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => {
          const isActive = locale === activeLocale;
          return (
            <DropdownMenuItem key={locale} asChild>
              <a
                href={`/${locale}${suffix}`}
                hrefLang={locale}
                lang={locale}
                aria-current={isActive ? "true" : undefined}
                className={cn("justify-between", isActive && "text-brand font-medium")}
              >
                {localeLabels[locale]}
                {isActive && <Check className="size-4" />}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
