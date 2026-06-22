import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { heroStack } from "@/lib/constants";

export function Hero() {
  const t = useTranslations("Hero");
  const tMeta = useTranslations("Metadata");

  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t("eyebrow")}
      </p>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {tMeta("name")}
      </h1>

      <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed text-pretty">
        {t.rich("description", {
          ai: (chunks) => <span className="text-brand font-medium">{chunks}</span>,
        })}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <a href="#work">{t("viewWork")}</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">{t("getInTouch")}</a>
        </Button>
      </div>

      <ul className="text-muted-foreground mt-10 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs">
        {heroStack.map((item) => (
          <li key={item} className="border-border rounded-md border px-2.5 py-1">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
