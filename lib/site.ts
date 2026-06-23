// Production origin, no trailing slash. Set NEXT_PUBLIC_SITE_URL at deploy time
// (e.g. the Render URL); falls back to localhost for local dev. Drives
// metadataBase, canonical/hreflang links, the sitemap, and absolute OG URLs.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const siteConfig = {
  name: "Youssef Ben Abdesselem",
  role: "Full-Stack Developer",
  email: "youssefbenabdesselem@gmail.com",
  // Interim: links to the committed PDF on GitHub. Issue #17 replaces this with
  // an on-site /resume route + viewer.
  resumeHref:
    "https://github.com/BenAbdesselemYoussef/portfolio2/blob/main/resume/Youssef_Ben_Abdesselem_Resume_2026-04-23.pdf",
  links: {
    github: "https://github.com/BenAbdesselemYoussef",
    linkedin: "https://www.linkedin.com/in/youssef-ben-abdesselem-3249a519a/",
  },
} as const;
