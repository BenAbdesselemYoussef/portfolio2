import { skillGroupSchema, validateCollection } from "@/content/schema";

// Grouped as in the CV's "Key Skills" section. Category labels are localized;
// the items are tech tokens kept literal (proper nouns, not translated).
// Validated against skillGroupSchema at build time.
export const skills = validateCollection(
  skillGroupSchema,
  [
    {
      category: {
        en: "Core Development",
        fr: "Développement",
        ar: "التطوير الأساسي",
      },
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Next.js",
        "React.js",
        "Node.js",
        "Flask",
        "FastAPI",
        "Redux Toolkit",
        "TanStack",
        "Redis",
        "Tailwind CSS",
      ],
    },
    {
      category: {
        en: "AI & Data",
        fr: "IA & Données",
        ar: "الذكاء الاصطناعي والبيانات",
      },
      items: [
        "Anthropic",
        "OpenAI",
        "Gemini",
        "Puppeteer",
        "Playwright",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Supabase",
      ],
    },
    {
      category: {
        en: "Cloud & Automation",
        fr: "Cloud & Automatisation",
        ar: "السحابة والأتمتة",
      },
      items: [
        "AWS",
        "Azure",
        "GitHub",
        "GitLab",
        "GitHub Actions",
        "GitLab Pipelines",
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Jest",
        "Vitest",
        "Pytest",
      ],
    },
    {
      category: {
        en: "Methodologies",
        fr: "Méthodologies",
        ar: "المنهجيات",
      },
      items: ["Scrum", "TDD"],
    },
  ],
  "skills",
);
