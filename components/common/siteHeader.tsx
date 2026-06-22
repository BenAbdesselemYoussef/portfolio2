"use client";

import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/common/languageSwitcher";
import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { Link, usePathname } from "@/i18n/navigation";
import { getDirection } from "@/i18n/routing";
import { sectionIds } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const pathname = usePathname();

  // Section anchors scroll within the home page; from a sub-page (e.g. a case
  // study) they need to navigate home first. usePathname() is locale-stripped.
  const onHome = pathname === "/";
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/${locale}#${id}`);

  // Drawer enters from the inline-end side (flips for RTL).
  const sheetSide = getDirection(locale) === "rtl" ? "left" : "right";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors",
        scrolled
          ? "border-border/60 bg-background/80 border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          {siteConfig.name.split(" ")[0]}
          <span className="text-brand">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label={t("primary")}>
          {sectionIds.map((id) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={sectionHref(id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(id)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t("openMenu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={sheetSide} className="w-72">
              <SheetHeader>
                <SheetTitle className="text-start font-mono text-sm">{t("menuTitle")}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4" aria-label={t("mobile")}>
                {sectionIds.map((id) => {
                  const isActive = active === id;
                  return (
                    <SheetClose asChild key={id}>
                      <a
                        href={sectionHref(id)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-base transition-colors",
                          isActive
                            ? "text-foreground bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                      >
                        {t(id)}
                      </a>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
