import { FileText, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import type { SectionId } from "@/lib/types";

// In-page sections (also the nav anchors and translation keys).
export const sectionIds: readonly SectionId[] = ["work", "about", "contact"];

// Technologies shown under the hero.
export const heroStack = ["Next.js", "TypeScript", "Node.js", "Python", "LLMs", "AWS"] as const;

// Footer social links. `key` is also the Footer translation key.
export const socialLinks = [
  { key: "email", href: `mailto:${siteConfig.email}`, icon: Mail, external: false },
  { key: "github", href: siteConfig.links.github, icon: GitHubIcon, external: true },
  { key: "linkedin", href: siteConfig.links.linkedin, icon: LinkedInIcon, external: true },
  { key: "resume", href: siteConfig.resumeHref, icon: FileText, external: true },
] as const;
