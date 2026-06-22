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
    // TODO(#5): confirm the exact LinkedIn vanity URL.
    linkedin: "https://www.linkedin.com/in/youssefbenabdesselem",
  },
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
