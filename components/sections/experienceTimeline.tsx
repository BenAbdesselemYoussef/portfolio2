import { useLocale, useTranslations } from "next-intl";

import { experience } from "@/content/experience";
import { localize } from "@/i18n/routing";

function formatMonth(iso: string, locale: string): string {
  const [year, month] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(
    new Date(year, month - 1),
  );
}

export function ExperienceTimeline() {
  const t = useTranslations("Experience");
  const locale = useLocale();

  return (
    <section id="about" className="border-border/60 scroll-mt-16 border-t py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t("eyebrow")}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t("title")}</h2>

      <ol className="border-border/60 mt-10 space-y-12 border-s ps-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative">
            <span className="bg-brand ring-background absolute -start-[1.7rem] top-1.5 size-2 rounded-full ring-4" />

            <p className="text-muted-foreground font-mono text-xs">
              {formatMonth(job.start, locale)} –{" "}
              {job.end === "present" ? t("present") : formatMonth(job.end, locale)}
            </p>

            <h3 className="mt-1 text-base font-semibold">
              {localize(job.role, locale)}
              <span className="text-muted-foreground font-normal"> · {job.company}</span>
            </h3>
            {job.location ? (
              <p className="text-muted-foreground text-sm">{localize(job.location, locale)}</p>
            ) : null}

            <ul className="text-muted-foreground marker:text-brand/50 mt-3 list-disc space-y-1.5 ps-5 text-sm">
              {job.highlights.map((highlight) => (
                <li key={highlight.en} className="text-pretty">
                  {localize(highlight, locale)}
                </li>
              ))}
            </ul>

            <ul className="text-muted-foreground mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
              {job.stack.map((item) => (
                <li key={item} className="border-border rounded border px-1.5 py-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
