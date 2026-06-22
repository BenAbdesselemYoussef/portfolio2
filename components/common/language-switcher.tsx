"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeLabels, routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("Language");
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("label")}>
          <Languages className="size-5" />
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            disabled={locale === activeLocale}
            onClick={() => router.replace(pathname, { locale })}
          >
            {localeLabels[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
