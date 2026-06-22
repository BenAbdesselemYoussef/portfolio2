"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
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
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

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
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />

          {/* Mobile drawer */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left font-mono text-sm">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4" aria-label="Mobile">
                {navLinks.map((link) => {
                  const isActive = active === link.href.replace("#", "");
                  return (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-base transition-colors",
                          isActive
                            ? "text-foreground bg-accent"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                      >
                        {link.label}
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
