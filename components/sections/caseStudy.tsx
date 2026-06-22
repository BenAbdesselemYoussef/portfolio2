import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { GitHubIcon } from "@/components/icons";
import { ProjectImage } from "@/components/projectImage";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { localize } from "@/i18n/routing";

export function CaseStudy({ project }: { project: Project }) {
  const t = useTranslations("CaseStudy");
  const tp = useTranslations("Projects");
  const locale = useLocale();

  const study = project.caseStudy;
  if (!study) return null;

  return (
    <article>
      <Link
        href="/#work"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
      >
        <ArrowLeft className="size-3.5 rtl:rotate-180" />
        {t("back")}
      </Link>

      <ProjectImage
        src={project.image}
        title={localize(project.title, locale)}
        sizes="(min-width: 768px) 768px, 100vw"
        className="border-border/60 mt-6 aspect-[2/1] w-full rounded-xl border"
      />

      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {localize(project.title, locale)}
        </h1>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.domain.map((d) => (
            <li
              key={d}
              className="text-brand/90 bg-brand/10 rounded px-2 py-0.5 font-mono text-[0.7rem]"
            >
              {tp(`domains.${d}`)}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mt-4 text-lg text-pretty">
          {localize(project.summary, locale)}
        </p>

        <ul className="text-muted-foreground mt-5 flex flex-wrap gap-1.5 font-mono text-xs">
          {project.stack.map((item) => (
            <li key={item} className="border-border rounded border px-1.5 py-0.5">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links?.repo ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="size-4" />
                {tp("viewRepo")}
              </a>
            </Button>
          ) : null}
          {project.links?.demo ? (
            <Button asChild size="sm">
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                {tp("viewDemo")}
                <ExternalLink className="size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </header>

      <div className="mt-12 space-y-10">
        <Section label={t("problem")}>
          <p className="text-pretty">{localize(study.problem, locale)}</p>
        </Section>

        <Section label={t("approach")}>
          <p className="text-pretty">{localize(study.approach, locale)}</p>
        </Section>

        <Section label={t("architecture")}>
          <ul className="marker:text-brand/50 list-disc space-y-2 ps-5">
            {study.architecture.map((item) => (
              <li key={item.en} className="text-pretty">
                {localize(item, locale)}
              </li>
            ))}
          </ul>
        </Section>

        <Section label={t("outcome")}>
          <p className="text-pretty">{localize(study.outcome, locale)}</p>
        </Section>
      </div>
    </article>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {label}
      </h2>
      <div className="text-foreground/90 mt-3 leading-relaxed">{children}</div>
    </section>
  );
}
