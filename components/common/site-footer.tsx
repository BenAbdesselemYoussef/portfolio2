import { FileText, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const socials = [
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail, external: false },
  { href: siteConfig.links.github, label: "GitHub", icon: GitHubIcon, external: true },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: LinkedInIcon, external: true },
  { href: siteConfig.resumeHref, label: "Résumé", icon: FileText, external: true },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div>
          <p className="text-sm font-medium">{siteConfig.name}</p>
          <p className="text-muted-foreground font-mono text-xs">
            {siteConfig.role} · © {year}
          </p>
        </div>

        <nav className="flex items-center gap-1" aria-label="Social links">
          {socials.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="text-muted-foreground hover:text-foreground hover:bg-accent inline-flex size-9 items-center justify-center rounded-md transition-colors"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon className="size-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
