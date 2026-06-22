import { projectSchema, validateCollection } from "@/content/schema";

// Selected projects. Titles are brand names (kept identical across locales);
// summaries are localized. Domains drive the grid's filter chips; stack tokens
// stay literal. Validated against projectSchema at build time.
export const projects = validateCollection(
  projectSchema,
  [
    {
      slug: "collabcanvas",
      title: { en: "CollabCanvas", fr: "CollabCanvas", ar: "CollabCanvas" },
      summary: {
        en: "A collaborative workspace for rich-text documents, Kanban boards, and diagrams — with file uploads, shareable links, permission controls, and AI-powered tagging.",
        fr: "Un espace de travail collaboratif pour documents enrichis, tableaux Kanban et diagrammes — avec import de fichiers, liens partageables, gestion des permissions et étiquetage assisté par IA.",
        ar: "مساحة عمل تعاونية للمستندات الغنية ولوحات كانبان والمخططات — مع رفع الملفات وروابط قابلة للمشاركة وإدارة الصلاحيات ووسم مدعوم بالذكاء الاصطناعي.",
      },
      domain: ["saas", "ai", "frontend"],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TipTap",
        "React Flow",
        "Firebase",
        "Genkit",
        "Zod",
      ],
      links: { repo: "https://github.com/BenAbdesselemYoussef/collabcanvas" },
      featured: true,
    },
    {
      slug: "project-zenith",
      title: { en: "Project Zenith", fr: "Project Zenith", ar: "Project Zenith" },
      summary: {
        en: "A project-management dashboard with milestone tracking, progress indicators, asset management, and team roles — built for a clean, modular overview of every project.",
        fr: "Un tableau de bord de gestion de projet avec suivi des jalons, indicateurs de progression, gestion des ressources et rôles d'équipe — pour une vue claire et modulaire de chaque projet.",
        ar: "لوحة تحكم لإدارة المشاريع مع تتبّع المعالم ومؤشرات التقدّم وإدارة الأصول وأدوار الفريق — لعرض واضح ومنظَّم لكل مشروع.",
      },
      domain: ["saas", "data"],
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Firebase",
        "Genkit",
        "Recharts",
        "Zod",
      ],
      links: { repo: "https://github.com/BenAbdesselemYoussef/zenith" },
      featured: true,
    },
    {
      slug: "shotmaker",
      title: { en: "Shotmaker", fr: "Shotmaker", ar: "Shotmaker" },
      summary: {
        en: "An AI-assisted planner for video shoots: organize sessions and shot lists, generate shot descriptions and titles with AI, and reorder everything with drag-and-drop.",
        fr: "Un planificateur assisté par IA pour les tournages vidéo : organisez les sessions et listes de plans, générez descriptions et titres de plans par IA, et réorganisez le tout par glisser-déposer.",
        ar: "أداة تخطيط مدعومة بالذكاء الاصطناعي لتصوير الفيديو: نظّم الجلسات وقوائم اللقطات، وولّد أوصاف وعناوين اللقطات بالذكاء الاصطناعي، وأعد ترتيب كل شيء بالسحب والإفلات.",
      },
      domain: ["ai", "frontend"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit", "Google AI", "dnd-kit", "Zod"],
      links: { repo: "https://github.com/BenAbdesselemYoussef/shotmaker" },
      featured: true,
    },
  ],
  "projects",
);
