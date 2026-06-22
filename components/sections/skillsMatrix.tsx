import { useLocale, useTranslations } from "next-intl";

import { skills } from "@/content/skills";
import { localize } from "@/i18n/routing";

export function SkillsMatrix() {
  const t = useTranslations("Skills");
  const locale = useLocale();

  return (
    <section id="skills" className="border-border/60 scroll-mt-16 border-t py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t("eyebrow")}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t("title")}</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category.en}
            className="border-border/60 bg-card/40 rounded-xl border p-5"
          >
            <h3 className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
              {localize(group.category, locale)}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
              {group.items.map((item) => (
                <li key={item} className="border-border rounded border px-2 py-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
