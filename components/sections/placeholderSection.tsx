import { useTranslations } from "next-intl";

import type { SectionId } from "@/lib/types";

// Temporary stand-in for the real Work/About/Contact sections (issues #12–16).
// Kept as its own component so the page stays a thin shell.
export function PlaceholderSection({ id }: { id: SectionId }) {
  const t = useTranslations("Sections");

  return (
    <section id={id} className="border-border/60 scroll-mt-16 border-t py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t(`${id}Eyebrow`)}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t(`${id}Title`)}</h2>
      <p className="text-muted-foreground mt-3 max-w-xl text-pretty">{t(`${id}Body`)}</p>
    </section>
  );
}
