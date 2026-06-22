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
      caseStudy: {
        problem: {
          en: "Teams scatter their work across separate tools — one app for documents, another for planning boards, another for diagrams — leaving files, links, and permissions fragmented and hard to share.",
          fr: "Les équipes éparpillent leur travail entre plusieurs outils — une app pour les documents, une autre pour les tableaux de planification, une autre pour les diagrammes — laissant fichiers, liens et permissions fragmentés et difficiles à partager.",
          ar: "تُوزّع الفرق عملها على أدوات منفصلة — تطبيق للمستندات وآخر للوحات التخطيط وثالث للمخططات — ممّا يجعل الملفات والروابط والصلاحيات مبعثرة ويصعب مشاركتها.",
        },
        approach: {
          en: "Bring it into one workspace: rich-text documents, Kanban boards, and node diagrams side by side, organized into workspaces and projects, shared by link with per-member permissions, and lightly augmented with AI that suggests tags from a document's content.",
          fr: "Tout réunir dans un seul espace : documents enrichis, tableaux Kanban et diagrammes côte à côte, organisés en espaces et projets, partagés par lien avec des permissions par membre, et enrichis par une IA qui suggère des étiquettes à partir du contenu d'un document.",
          ar: "جمع كل ذلك في مساحة عمل واحدة: مستندات غنية ولوحات كانبان ومخططات عُقدية جنبًا إلى جنب، منظَّمة ضمن مساحات ومشاريع، تُشارَك عبر رابط مع صلاحيات لكل عضو، ومدعومة بذكاء اصطناعي يقترح وسومًا انطلاقًا من محتوى المستند.",
        },
        architecture: [
          {
            en: "Rich-text editing built on TipTap (ProseMirror) with image, placeholder, and text-align extensions, plus Markdown import/export via showdown and html-to-md.",
            fr: "Édition de texte enrichi basée sur TipTap (ProseMirror) avec extensions image, placeholder et alignement, plus import/export Markdown via showdown et html-to-md.",
            ar: "تحرير نص غني مبني على TipTap (ProseMirror) مع إضافات الصور والعناصر النائبة ومحاذاة النص، إضافةً إلى استيراد/تصدير Markdown عبر showdown وhtml-to-md.",
          },
          {
            en: "A node-based diagram canvas powered by React Flow (@xyflow/react).",
            fr: "Un canevas de diagrammes à nœuds propulsé par React Flow (@xyflow/react).",
            ar: "لوحة مخططات عُقدية مدعومة بـ React Flow (@xyflow/react).",
          },
          {
            en: "Firebase for authentication, file storage, and persistence; Genkit on Google AI for content-based smart tagging.",
            fr: "Firebase pour l'authentification, le stockage de fichiers et la persistance ; Genkit sur Google AI pour l'étiquetage intelligent basé sur le contenu.",
            ar: "Firebase للمصادقة وتخزين الملفات والاستمرارية؛ وGenkit على Google AI للوسم الذكي المعتمد على المحتوى.",
          },
          {
            en: "Next.js App Router with a shadcn/Radix UI layer styled in Tailwind CSS.",
            fr: "Next.js App Router avec une couche d'UI shadcn/Radix stylée en Tailwind CSS.",
            ar: "Next.js App Router مع طبقة واجهة shadcn/Radix منسَّقة بـ Tailwind CSS.",
          },
        ],
        outcome: {
          en: "A unified workspace prototype that covers document creation, organization, sharing, permissions, and AI tagging in a single app — removing the constant context-switching between point tools.",
          fr: "Un prototype d'espace de travail unifié couvrant la création de documents, l'organisation, le partage, les permissions et l'étiquetage par IA dans une seule app — supprimant les changements de contexte permanents entre outils spécialisés.",
          ar: "نموذج أوّلي لمساحة عمل موحَّدة يغطّي إنشاء المستندات وتنظيمها ومشاركتها والصلاحيات والوسم بالذكاء الاصطناعي في تطبيق واحد — ممّا يلغي التنقّل المستمر بين الأدوات المتخصّصة.",
        },
      },
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
      caseStudy: {
        problem: {
          en: "Project status is hard to read at a glance when milestones, assets, and team roles all live in different places — progress gets buried in updates and scattered files.",
          fr: "L'état d'un projet est difficile à saisir d'un coup d'œil quand jalons, ressources et rôles d'équipe vivent à des endroits différents — l'avancement se perd dans les mises à jour et des fichiers éparpillés.",
          ar: "يصعب إدراك حالة المشروع بنظرة واحدة عندما تكون المعالم والأصول وأدوار الفريق في أماكن مختلفة — فيضيع التقدّم وسط التحديثات والملفات المبعثرة.",
        },
        approach: {
          en: "A dashboard-first project tool: project overviews with key metrics, milestone tracking with progress bars and status, finished-milestone notes, asset management for files and links, and team profiles with role assignments — all in a clean, card-based layout.",
          fr: "Un outil de projet pensé pour le tableau de bord : vues d'ensemble avec métriques clés, suivi des jalons avec barres de progression et statut, notes de jalons terminés, gestion des ressources (fichiers et liens) et profils d'équipe avec affectation des rôles — le tout dans une présentation claire en cartes.",
          ar: "أداة مشاريع تتمحور حول لوحة التحكم: نظرات عامة بمقاييس أساسية، وتتبّع المعالم بأشرطة تقدّم وحالات، وملاحظات للمعالم المنجزة، وإدارة الأصول للملفات والروابط، وملفات تعريف للفريق مع إسناد الأدوار — ضمن تخطيط واضح قائم على البطاقات.",
        },
        architecture: [
          {
            en: "Next.js App Router dashboard with Recharts for metric and progress visualization.",
            fr: "Tableau de bord Next.js App Router avec Recharts pour la visualisation des métriques et de la progression.",
            ar: "لوحة تحكم Next.js App Router مع Recharts لعرض المقاييس والتقدّم بصريًا.",
          },
          {
            en: "Supabase as the primary data backend, with Firebase in the stack and Genkit/Google AI available for assistive features.",
            fr: "Supabase comme backend de données principal, avec Firebase dans la stack et Genkit/Google AI disponibles pour des fonctionnalités assistées.",
            ar: "Supabase كخلفية بيانات أساسية، مع Firebase ضمن الحزمة وGenkit/Google AI متاحَين لميزات مساعِدة.",
          },
          {
            en: "A modular, card-based UI on shadcn/Radix and Tailwind CSS, with forms validated by Zod.",
            fr: "Une UI modulaire en cartes sur shadcn/Radix et Tailwind CSS, avec formulaires validés par Zod.",
            ar: "واجهة معيارية قائمة على البطاقات مبنية على shadcn/Radix وTailwind CSS، مع نماذج يتحقّق منها Zod.",
          },
        ],
        outcome: {
          en: "A modular project dashboard that surfaces overviews, milestone progress, finished-milestone notes, assets, and member assignments in one place — turning scattered status into a single readable view.",
          fr: "Un tableau de bord de projet modulaire qui réunit vues d'ensemble, progression des jalons, notes de jalons terminés, ressources et affectations des membres au même endroit — transformant un statut éparpillé en une vue unique et lisible.",
          ar: "لوحة مشاريع معيارية تُبرز النظرات العامة وتقدّم المعالم وملاحظات المعالم المنجزة والأصول وإسناد الأعضاء في مكان واحد — محوِّلةً الحالة المبعثرة إلى عرض واحد واضح.",
        },
      },
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
      caseStudy: {
        problem: {
          en: "Planning a video shoot means tracking many sessions and shot lists, and writing a clear description for every shot by hand is slow, repetitive work during prep.",
          fr: "Planifier un tournage implique de gérer de nombreuses sessions et listes de plans, et rédiger à la main une description claire pour chaque plan est un travail lent et répétitif pendant la préparation.",
          ar: "يعني التخطيط لتصوير فيديو متابعة العديد من الجلسات وقوائم اللقطات، وكتابة وصف واضح لكل لقطة يدويًا عملٌ بطيء ومتكرّر أثناء التحضير.",
        },
        approach: {
          en: "An AI-assisted planner: organize shoots into sessions and shot lists, generate shot titles, descriptions, and quick facts with AI, and reorder shots fluidly with drag-and-drop.",
          fr: "Un planificateur assisté par IA : organisez les tournages en sessions et listes de plans, générez titres, descriptions et informations rapides par IA, et réorganisez les plans de façon fluide par glisser-déposer.",
          ar: "أداة تخطيط مدعومة بالذكاء الاصطناعي: نظّم عمليات التصوير في جلسات وقوائم لقطات، وولّد عناوين اللقطات وأوصافها ومعلوماتها السريعة بالذكاء الاصطناعي، وأعد ترتيب اللقطات بسلاسة عبر السحب والإفلات.",
        },
        architecture: [
          {
            en: "Genkit flows on Google AI for the assistive features: generate-shot-description, generate-description-from-title, an AI fact assistant, and quick fact insertion.",
            fr: "Des flux Genkit sur Google AI pour les fonctions assistées : génération de description de plan, génération de description à partir du titre, un assistant de faits IA et l'insertion rapide de faits.",
            ar: "تدفّقات Genkit على Google AI لميزات المساعدة: توليد وصف اللقطة، وتوليد الوصف من العنوان، ومساعد حقائق بالذكاء الاصطناعي، وإدراج الحقائق السريع.",
          },
          {
            en: "Drag-and-drop ordering of sessions and shots via dnd-kit, with client-side session persistence.",
            fr: "Réorganisation des sessions et des plans par glisser-déposer via dnd-kit, avec persistance des sessions côté client.",
            ar: "ترتيب الجلسات واللقطات بالسحب والإفلات عبر dnd-kit، مع حفظ الجلسات على جانب العميل.",
          },
          {
            en: "Next.js App Router with a shadcn/Radix UI layer in Tailwind CSS, with inputs validated by Zod.",
            fr: "Next.js App Router avec une couche d'UI shadcn/Radix en Tailwind CSS, avec entrées validées par Zod.",
            ar: "Next.js App Router مع طبقة واجهة shadcn/Radix بـ Tailwind CSS، مع مدخلات يتحقّق منها Zod.",
          },
        ],
        outcome: {
          en: "A working shot-planning tool where AI drafts shot copy and facts, cutting the manual writing during shoot prep and letting the plan be reshaped in seconds.",
          fr: "Un outil de planification de plans fonctionnel où l'IA rédige le texte et les faits des plans, réduisant l'écriture manuelle pendant la préparation et permettant de remodeler le plan en quelques secondes.",
          ar: "أداة عملية لتخطيط اللقطات يصوغ فيها الذكاء الاصطناعي نصوص اللقطات وحقائقها، ممّا يقلّل الكتابة اليدوية أثناء التحضير ويتيح إعادة تشكيل الخطة في ثوانٍ.",
        },
      },
    },
  ],
  "projects",
);
