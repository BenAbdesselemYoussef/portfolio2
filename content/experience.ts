import { experienceSchema, validateCollection } from "@/content/schema";

// Sourced from the CV. Validated against experienceSchema at build time.
// Translatable fields carry en/fr/ar; company names, dates, and tech stay literal.
export const experience = validateCollection(
  experienceSchema,
  [
    {
      company: "Planisphere Systems",
      role: {
        en: "Full-Stack Developer",
        fr: "Développeur Full-Stack",
        ar: "مطوّر ويب متكامل",
      },
      start: "2025-09",
      end: "present",
      highlights: [
        {
          en: "Built a PowerPoint MCP server with a React add-in and Python backend, integrating LLM capabilities for AI-driven slide manipulation and tooling.",
          fr: "Conçu un serveur MCP pour PowerPoint avec un add-in React et un backend Python, intégrant des capacités LLM pour la manipulation de diapositives pilotée par l'IA et l'outillage.",
          ar: "بنيت خادم MCP لـ PowerPoint مع إضافة React وخلفية Python، مدمجًا قدرات نماذج اللغة لمعالجة الشرائح وأدواتها المدفوعة بالذكاء الاصطناعي.",
        },
        {
          en: "Developed the backend of a multi-tenant SaaS marketplace (Node.js) with tenant isolation via per-tenant database scoping, request-middleware segregation, and role-based access control.",
          fr: "Développé le backend d'une marketplace SaaS multi-tenant (Node.js) avec isolation des locataires via un cloisonnement de base de données par locataire, une ségrégation des middlewares de requêtes et un contrôle d'accès basé sur les rôles.",
          ar: "طوّرت الخلفية لسوق SaaS متعدّد المستأجرين (Node.js) مع عزل المستأجرين عبر تحديد نطاق قاعدة بيانات لكل مستأجر، وفصل وسطاء الطلبات، والتحكّم في الوصول حسب الأدوار.",
        },
        {
          en: "Built CI/CD pipelines, containerized backend services with Docker, and automated deployments using Docker Compose and GitHub Actions.",
          fr: "Mis en place des pipelines CI/CD, conteneurisé les services backend avec Docker et automatisé les déploiements avec Docker Compose et GitHub Actions.",
          ar: "أنشأت مسارات CI/CD، وحوّلت خدمات الخلفية إلى حاويات باستخدام Docker، وأتمتت عمليات النشر باستخدام Docker Compose و GitHub Actions.",
        },
        {
          en: "Built a cross-market analysis platform for forex, crypto, and stocks with real-time data pipelines and AI models (LSTM, TFT, Random Forest, XGBoost) for pattern detection and trend forecasting.",
          fr: "Construit une plateforme d'analyse multi-marchés (forex, crypto et actions) avec des pipelines de données en temps réel et des modèles d'IA (LSTM, TFT, Random Forest, XGBoost) pour la détection de motifs et la prévision de tendances.",
          ar: "بنيت منصّة تحليل متعدّدة الأسواق للفوركس والعملات الرقمية والأسهم مع مسارات بيانات فوريّة ونماذج ذكاء اصطناعي (LSTM، TFT، Random Forest، XGBoost) لاكتشاف الأنماط والتنبّؤ بالاتجاهات.",
        },
      ],
      stack: [
        "Node.js",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Python",
        "MCP",
        "Anthropic API",
        "Gemini API",
        "OpenAI API",
        "MySQL",
        "MongoDB",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      company: "Forvis Mazars",
      role: {
        en: "Full-Stack Developer",
        fr: "Développeur Full-Stack",
        ar: "مطوّر ويب متكامل",
      },
      location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie", ar: "تونس العاصمة، تونس" },
      start: "2024-11",
      end: "2025-05",
      highlights: [
        {
          en: "Refined React components in the Mazars UI library, improving the experience across internal applications.",
          fr: "Amélioré des composants React de la bibliothèque Mazars UI, optimisant l'expérience sur les applications internes.",
          ar: "حسّنت مكوّنات React في مكتبة Mazars UI، ممّا حسّن التجربة عبر التطبيقات الداخلية.",
        },
        {
          en: "Wrote Jest unit tests to prevent component regressions.",
          fr: "Écrit des tests unitaires Jest pour prévenir les régressions de composants.",
          ar: "كتبت اختبارات وحدة باستخدام Jest لمنع تراجع المكوّنات.",
        },
        {
          en: "Built and maintained an audit-campaign management application that automates auditor workflows, used by 500+ auditors.",
          fr: "Développé et maintenu une application de gestion des campagnes d'audit qui automatise les flux de travail des auditeurs, utilisée par plus de 500 auditeurs.",
          ar: "بنيت وصُنت تطبيقًا لإدارة حملات التدقيق يُؤتمت سير عمل المدقّقين، يستخدمه أكثر من 500 مدقّق.",
        },
        {
          en: "Contributed to a survey application built with SurveyJS, handling 20,000+ responses per campaign with targeted form distribution.",
          fr: "Contribué à une application de sondage construite avec SurveyJS, gérant plus de 20 000 réponses par campagne avec une distribution de formulaires ciblée.",
          ar: "ساهمت في تطبيق استبيانات مبني بـ SurveyJS، يعالج أكثر من 20٬000 إجابة لكل حملة مع توزيع نماذج موجّه.",
        },
        {
          en: "Configured user groups and permissions in Strapi to manage access control.",
          fr: "Configuré des groupes d'utilisateurs et des permissions dans Strapi pour gérer le contrôle d'accès.",
          ar: "أعددت مجموعات المستخدمين والأذونات في Strapi لإدارة التحكّم في الوصول.",
        },
      ],
      stack: [
        "Next.js",
        "Tailwind CSS",
        "SurveyJS",
        "Azure",
        "Mazars UI",
        "Strapi",
        "MySQL",
        "GitLab",
        "Scrum",
        "Jira",
        "Jest",
      ],
    },
    {
      company: "Acoba",
      role: {
        en: "Frontend Web Developer",
        fr: "Développeur Web Frontend",
        ar: "مطوّر واجهات أمامية",
      },
      location: { en: "Monastir, Tunisia", fr: "Monastir, Tunisie", ar: "المنستير، تونس" },
      start: "2022-11",
      end: "2024-04",
      highlights: [
        {
          en: "Maintained a video-on-demand (VOD) streaming and playback system serving 150,000+ concurrent users.",
          fr: "Maintenu un système de streaming et de lecture vidéo à la demande (VOD) servant plus de 150 000 utilisateurs simultanés.",
          ar: "صُنت نظام بثّ وتشغيل فيديو عند الطلب (VOD) يخدم أكثر من 150٬000 مستخدم متزامن.",
        },
        {
          en: "Built a dashboard to manage and monitor 1,000+ cameras per user, using a modular architecture for high API loads and scalability.",
          fr: "Conçu un tableau de bord pour gérer et superviser plus de 1 000 caméras par utilisateur, avec une architecture modulaire pour des charges d'API élevées et la scalabilité.",
          ar: "بنيت لوحة تحكّم لإدارة ومراقبة أكثر من 1٬000 كاميرا لكل مستخدم، باستخدام بنية معيارية لأحمال API عالية وقابلية للتوسّع.",
        },
        {
          en: "Developed reusable React components (tables, forms, wizards) for custom requirements.",
          fr: "Développé des composants React réutilisables (tableaux, formulaires, assistants) pour des besoins sur mesure.",
          ar: "طوّرت مكوّنات React قابلة لإعادة الاستخدام (جداول، نماذج، معالجات) لمتطلّبات مخصّصة.",
        },
        {
          en: "Centralized state management with Redux Toolkit and React Context, improving data consistency.",
          fr: "Centralisé la gestion d'état avec Redux Toolkit et React Context, améliorant la cohérence des données.",
          ar: "وحّدت إدارة الحالة باستخدام Redux Toolkit و React Context، ممّا حسّن اتّساق البيانات.",
        },
        {
          en: "Secured applications against known vulnerabilities including DDoS, SQL injection, and CSRF.",
          fr: "Sécurisé les applications contre des vulnérabilités connues, notamment DDoS, injection SQL et CSRF.",
          ar: "أمّنت التطبيقات ضدّ الثغرات المعروفة بما في ذلك DDoS وحقن SQL و CSRF.",
        },
      ],
      stack: [
        "Next.js",
        "React MUI",
        "Tailwind CSS",
        "Redux Toolkit",
        "CASL",
        "Node.js",
        "Redis",
        "Socket.IO",
        "JWT",
        "AWS",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      company: "Open Eyes Consulting",
      role: {
        en: "Full-Stack Developer",
        fr: "Développeur Full-Stack",
        ar: "مطوّر ويب متكامل",
      },
      location: { en: "Monastir, Tunisia", fr: "Monastir, Tunisie", ar: "المنستير، تونس" },
      start: "2022-02",
      end: "2022-10",
      highlights: [
        {
          en: "Developed a real-time chat module and notification system based on the QuickBlox BaaS.",
          fr: "Développé un module de chat en temps réel et un système de notifications basés sur le BaaS QuickBlox.",
          ar: "طوّرت وحدة محادثة فوريّة ونظام إشعارات يعتمدان على خدمة QuickBlox (BaaS).",
        },
        {
          en: "Integrated Figma designs into production-ready, responsive interfaces with pixel-perfect precision.",
          fr: "Intégré des maquettes Figma en interfaces responsives prêtes pour la production, au pixel près.",
          ar: "حوّلت تصاميم Figma إلى واجهات متجاوبة جاهزة للإنتاج بدقّة متناهية على مستوى البكسل.",
        },
        {
          en: "Optimized application performance through conditional loading and React memoization.",
          fr: "Optimisé les performances de l'application via le chargement conditionnel et la mémoïsation React.",
          ar: "حسّنت أداء التطبيق عبر التحميل الشرطي والتخزين المؤقّت (memoization) في React.",
        },
        {
          en: "Enhanced search with Elasticsearch fuzzy matching to support partial and abbreviated creator names, improving relevance.",
          fr: "Amélioré la recherche avec la correspondance floue d'Elasticsearch pour gérer les noms de créateurs partiels et abrégés, augmentant la pertinence.",
          ar: "حسّنت البحث باستخدام المطابقة التقريبية في Elasticsearch لدعم أسماء المنشئين الجزئية والمختصرة، ممّا رفع جودة النتائج.",
        },
      ],
      stack: [
        "React",
        "Redux Toolkit",
        "Redux Saga",
        "QuickBlox",
        "Node.js",
        "Elasticsearch",
        "Firebase",
        "MySQL",
        "GitLab",
      ],
    },
  ],
  "experience",
);
