"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import type { ProjectDomain } from "@/content/types";
import { localize } from "@/i18n/routing";
import { projectDomains } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Filter = ProjectDomain | "all";

export function ProjectsGrid() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  // Only show filters for domains that actually appear in the data.
  const domains = projectDomains.filter((d) => projects.some((p) => p.domain.includes(d)));
  const filtered = filter === "all" ? projects : projects.filter((p) => p.domain.includes(filter));

  const filters: Filter[] = ["all", ...domains];

  return (
    <section id="work" className="border-border/60 scroll-mt-16 border-t py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t("eyebrow")}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t("title")}</h2>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={t("title")}>
        {filters.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(f)}
              className={cn(
                "focus-visible:ring-ring cursor-pointer rounded-full border px-3 py-1 font-mono text-xs transition-colors outline-none focus-visible:ring-2",
                isActive
                  ? "border-brand text-brand bg-brand/5 font-medium"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30",
              )}
            >
              {f === "all" ? t("filterAll") : t(`domains.${f}`)}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.slug}
            className="border-border/60 bg-card/40 flex h-full flex-col rounded-xl border p-5"
          >
            <h3 className="text-base font-semibold">{localize(project.title, locale)}</h3>

            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.domain.map((d) => (
                <li
                  key={d}
                  className="text-brand/90 bg-brand/10 rounded px-2 py-0.5 font-mono text-[0.7rem]"
                >
                  {t(`domains.${d}`)}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mt-3 text-sm text-pretty">
              {localize(project.summary, locale)}
            </p>

            <ul className="text-muted-foreground mt-4 flex flex-wrap gap-1.5 font-mono text-xs">
              {project.stack.map((item) => (
                <li key={item} className="border-border rounded border px-1.5 py-0.5">
                  {item}
                </li>
              ))}
            </ul>

            {project.links?.repo ? (
              <Button asChild variant="outline" size="sm" className="mt-6 w-fit">
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="size-4" />
                  {t("viewRepo")}
                </a>
              </Button>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
