import { useTranslations } from "next-intl";

import { socialLinks } from "@/lib/constants";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const tMeta = useTranslations("Metadata");
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div>
          <p className="text-sm font-medium">{tMeta("name")}</p>
          <p className="text-muted-foreground font-mono text-xs">
            {t("role")} · <bdi>© {year}</bdi>
          </p>
        </div>

        <nav className="flex items-center gap-1" aria-label={t("socials")}>
          {socialLinks.map(({ key, href, icon: Icon, external }) => {
            const label = t(key);
            return (
              <a
                key={key}
                href={href}
                aria-label={label}
                title={label}
                className="text-muted-foreground hover:text-foreground hover:bg-accent inline-flex size-9 items-center justify-center rounded-md transition-colors"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
