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
        en: "A collaborative workspace where rich-text documents, Kanban boards, and diagrams live side by side — with sharing, per-member permissions, and AI-powered tagging.",
        fr: "Un espace de travail collaboratif où documents enrichis, tableaux Kanban et diagrammes cohabitent — avec partage, permissions par membre et étiquetage assisté par IA.",
        ar: "مساحة عمل تعاونية تجتمع فيها المستندات الغنية ولوحات كانبان والمخططات — مع المشاركة وصلاحيات لكل عضو ووسم مدعوم بالذكاء الاصطناعي.",
      },
      image: "/projects/collabcanvas.png",
      domain: ["saas", "ai", "frontend"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "TipTap", "React Flow", "dnd-kit"],
      links: { repo: "https://github.com/BenAbdesselemYoussef/collabcanvas" },
      featured: true,
      caseStudy: {
        problem: {
          en: "Teams scatter their work across separate tools — one app for documents, another for planning boards, another for diagrams — leaving files, links, and permissions fragmented and hard to share.",
          fr: "Les équipes éparpillent leur travail entre plusieurs outils — une app pour les documents, une autre pour les tableaux, une autre pour les diagrammes — laissant fichiers, liens et permissions fragmentés et difficiles à partager.",
          ar: "تُوزّع الفرق عملها على أدوات منفصلة — تطبيق للمستندات وآخر للوحات التخطيط وثالث للمخططات — ممّا يجعل الملفات والروابط والصلاحيات مبعثرة ويصعب مشاركتها.",
        },
        approach: {
          en: "Bring it into one workspace: rich-text documents, Kanban boards, and node diagrams side by side, organized into workspaces, shared by link with per-member roles, and lightly augmented with AI that suggests tags from a document's content.",
          fr: "Tout réunir dans un seul espace : documents enrichis, tableaux Kanban et diagrammes côte à côte, organisés en espaces, partagés par lien avec des rôles par membre, et enrichis par une IA qui suggère des étiquettes à partir du contenu.",
          ar: "جمع كل ذلك في مساحة عمل واحدة: مستندات غنية ولوحات كانبان ومخططات عُقدية جنبًا إلى جنب، منظَّمة ضمن مساحات، تُشارَك عبر رابط بأدوار لكل عضو، ومدعومة بذكاء اصطناعي يقترح وسومًا من المحتوى.",
        },
        architecture: [
          {
            en: "Rich-text documents on TipTap (ProseMirror) with a full formatting toolbar, a node diagram canvas (React Flow), and a drag-and-drop Kanban board (dnd-kit).",
            fr: "Documents enrichis sur TipTap (ProseMirror) avec barre d'outils complète, un canevas de diagrammes à nœuds (React Flow) et un tableau Kanban en glisser-déposer (dnd-kit).",
            ar: "مستندات غنية على TipTap (ProseMirror) مع شريط أدوات كامل، ولوحة مخططات عُقدية (React Flow)، ولوحة كانبان بالسحب والإفلات (dnd-kit).",
          },
          {
            en: "Sharing with per-member roles and link-access modes, plus AI tagging that suggests tags from a document's content.",
            fr: "Partage avec rôles par membre et modes d'accès par lien, plus un étiquetage par IA qui suggère des étiquettes à partir du contenu d'un document.",
            ar: "مشاركة بأدوار لكل عضو وأوضاع وصول عبر الرابط، إضافةً إلى وسم بالذكاء الاصطناعي يقترح وسومًا من محتوى المستند.",
          },
          {
            en: "Next.js App Router styled with Tailwind CSS on a clean, dark theme.",
            fr: "Next.js App Router stylé avec Tailwind CSS sur un thème sombre et épuré.",
            ar: "Next.js App Router منسَّق بـ Tailwind CSS بمظهر داكن وأنيق.",
          },
        ],
        outcome: {
          en: "A unified workspace covering documents, boards, diagrams, sharing, and AI tagging in a single app — removing the constant context-switching between point tools.",
          fr: "Un espace de travail unifié couvrant documents, tableaux, diagrammes, partage et étiquetage par IA dans une seule app — supprimant les changements de contexte permanents entre outils spécialisés.",
          ar: "مساحة عمل موحَّدة تغطّي المستندات واللوحات والمخططات والمشاركة والوسم بالذكاء الاصطناعي في تطبيق واحد — ممّا يلغي التنقّل المستمر بين الأدوات المتخصّصة.",
        },
      },
    },
    {
      slug: "project-zenith",
      title: { en: "Project Zenith", fr: "Project Zenith", ar: "Project Zenith" },
      summary: {
        en: "A Jira/ClickUp-style project and issue tracker: plan work in sprints, track issues across a board, list, and backlog, and report on progress from a charts dashboard.",
        fr: "Un traqueur de projets et de tickets façon Jira/ClickUp : planifiez par sprints, suivez les tickets via un tableau, une liste et un backlog, et reportez l'avancement sur un tableau de bord.",
        ar: "أداة لتتبّع المشاريع والمهام بأسلوب Jira/ClickUp: خطّط العمل ضمن سباقات، وتابع المهام عبر لوحة وقائمة وقائمة أعمال، واعرض التقدّم على لوحة بيانات.",
      },
      image: "/projects/project-zenith.png",
      domain: ["saas", "data", "frontend"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "dnd-kit", "Recharts"],
      links: { repo: "https://github.com/BenAbdesselemYoussef/zenith" },
      featured: true,
      caseStudy: {
        problem: {
          en: "Teams lose the thread when issues, sprints, and progress live across scattered tools and status updates — it's hard to see what's in flight and what's blocking a release.",
          fr: "Les équipes perdent le fil quand tickets, sprints et avancement vivent dans des outils et des mises à jour éparpillés — difficile de voir ce qui est en cours et ce qui bloque une livraison.",
          ar: "تضيع الفرق وسط الفوضى عندما تتوزّع المهام والسباقات والتقدّم على أدوات وتحديثات مبعثرة — فيصعب معرفة ما يجري وما يعيق الإصدار.",
        },
        approach: {
          en: "An issue tracker built around issues — type, priority, story points, assignee, labels — with a drag-and-drop board, a grouped list, a sprint backlog, a reporting dashboard, and a rich issue detail panel for subtasks and comments.",
          fr: "Un traqueur centré sur les tickets — type, priorité, points, assigné, étiquettes — avec un tableau en glisser-déposer, une liste groupée, un backlog de sprint, un tableau de bord et un panneau de détail riche (sous-tâches, commentaires).",
          ar: "أداة تتمحور حول المهام — النوع والأولوية والنقاط والمكلَّف والوسوم — مع لوحة بالسحب والإفلات، وقائمة مجمَّعة، وقائمة أعمال للسباق، ولوحة بيانات، ولوحة تفاصيل غنية للمهام الفرعية والتعليقات.",
        },
        architecture: [
          {
            en: "A drag-and-drop board across statuses (dnd-kit), plus list and backlog views reading from the same set of issues.",
            fr: "Un tableau en glisser-déposer par statut (dnd-kit), plus des vues liste et backlog basées sur le même ensemble de tickets.",
            ar: "لوحة بالسحب والإفلات حسب الحالة (dnd-kit)، إضافةً إلى عرضَي القائمة وقائمة الأعمال من المهام نفسها.",
          },
          {
            en: "A reporting dashboard with Recharts: status breakdown, sprint velocity, burndown, and workload by assignee.",
            fr: "Un tableau de bord avec Recharts : répartition des statuts, vélocité de sprint, burndown et charge par assigné.",
            ar: "لوحة بيانات بـ Recharts: توزيع الحالات، وسرعة السباق، ومخطّط الإنجاز، وعبء العمل لكل مكلَّف.",
          },
          {
            en: "An issue detail side panel with fields, a subtask checklist, and a comment thread. Next.js App Router and Tailwind CSS.",
            fr: "Un panneau de détail avec champs, liste de sous-tâches et fil de commentaires. Next.js App Router et Tailwind CSS.",
            ar: "لوحة تفاصيل جانبية بالحقول وقائمة مهام فرعية وسلسلة تعليقات. Next.js App Router وTailwind CSS.",
          },
        ],
        outcome: {
          en: "A focused issue tracker where a board, list, backlog, and dashboard all read from one set of issues — so a team can plan a sprint and see its health at a glance.",
          fr: "Un traqueur de tickets cohérent où tableau, liste, backlog et tableau de bord partagent les mêmes tickets — pour planifier un sprint et voir sa santé d'un coup d'œil.",
          ar: "أداة تتبّع متماسكة تشترك فيها اللوحة والقائمة وقائمة الأعمال ولوحة البيانات في المهام ذاتها — لتخطيط السباق ورؤية حالته بنظرة واحدة.",
        },
      },
    },
    {
      slug: "shotmaker",
      title: { en: "Shotmaker", fr: "Shotmaker", ar: "Shotmaker" },
      summary: {
        en: "A shoot-day shot tracker for production crews: set the shooting order by drag-and-drop, mark shots filmed or abandoned, and track essential vs optional shots so you know when a session can wrap.",
        fr: "Un suivi de plans pour les équipes de tournage : définissez l'ordre de tournage par glisser-déposer, marquez les plans filmés ou abandonnés, et distinguez plans essentiels et optionnels pour savoir quand une session peut se terminer.",
        ar: "أداة لتتبّع اللقطات لطواقم الإنتاج: حدّد ترتيب التصوير بالسحب والإفلات، وأشّر اللقطات المصوَّرة أو المُلغاة، وميّز بين اللقطات الأساسية والاختيارية لتعرف متى يمكن إنهاء الجلسة.",
      },
      image: "/projects/shotmaker.png",
      domain: ["ai", "frontend"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "dnd-kit"],
      links: { repo: "https://github.com/BenAbdesselemYoussef/shotmaker" },
      featured: true,
      caseStudy: {
        problem: {
          en: "On set, a crew needs to know what to film next, what's already in the can, and which shots actually matter — but that lives on scattered call sheets and in people's heads.",
          fr: "Sur le plateau, l'équipe doit savoir quoi filmer ensuite, ce qui est déjà tourné et quels plans comptent vraiment — mais tout cela vit sur des feuilles de service éparses et dans les têtes.",
          ar: "على موقع التصوير، يحتاج الطاقم لمعرفة ما يُصوَّر تاليًا، وما تمّ تصويره، وأي اللقطات تهمّ فعلًا — لكن ذلك مبعثر على أوراق العمل وفي الأذهان.",
        },
        approach: {
          en: "A shot tracker per session: drag shots to set the shooting order, mark each To film / Filmed / Abandoned with one tap, and flag shots Essential or Optional so the session is 'ready to wrap' once the must-haves are done.",
          fr: "Un suivi de plans par session : glissez les plans pour définir l'ordre, marquez chacun À filmer / Filmé / Abandonné en un geste, et étiquetez-les Essentiel ou Optionnel pour qu'une session soit « prête » une fois les indispensables tournés.",
          ar: "تتبّع للقطات لكل جلسة: اسحب اللقطات لترتيب التصوير، وأشّر كلًّا منها «للتصوير / مصوَّرة / مُلغاة» بنقرة، وصنّفها أساسية أو اختيارية لتصبح الجلسة «جاهزة للإنهاء» بمجرّد إنجاز الأساسيات.",
        },
        architecture: [
          {
            en: "Storyboard and list views with drag-to-reorder (dnd-kit); filmed shots dim with a check, abandoned shots are struck through.",
            fr: "Vues storyboard et liste avec réordonnancement par glisser-déposer (dnd-kit) ; les plans filmés s'estompent avec une coche, les abandonnés sont barrés.",
            ar: "عرضا اللوحة القصصية والقائمة مع إعادة الترتيب بالسحب (dnd-kit)؛ تخفت اللقطات المصوَّرة بعلامة صح، وتُشطب المُلغاة.",
          },
          {
            en: "A per-session readiness model: essential shots drive a 'ready to wrap' state, while optional shots are a bonus, not a blocker.",
            fr: "Un modèle de préparation par session : les plans essentiels déclenchent l'état « prêt », les optionnels sont un bonus, pas un blocage.",
            ar: "نموذج جاهزية لكل جلسة: اللقطات الأساسية تحدّد حالة «جاهز للإنهاء»، والاختيارية إضافة لا عائق.",
          },
          {
            en: "A shot detail panel with status and priority controls, plus a light AI assist to draft a description. Next.js App Router and Tailwind CSS.",
            fr: "Un panneau de détail avec contrôles de statut et de priorité, plus une assistance IA légère pour rédiger une description. Next.js App Router et Tailwind CSS.",
            ar: "لوحة تفاصيل للقطة مع التحكّم بالحالة والأولوية، إضافةً إلى مساعدة ذكاء اصطناعي خفيفة لصياغة الوصف. Next.js App Router وTailwind CSS.",
          },
        ],
        outcome: {
          en: "A clear shoot-day view where the crew always knows the next shot, what's done, and whether the essentials are covered — without a spreadsheet.",
          fr: "Une vue claire du jour de tournage où l'équipe sait toujours le prochain plan, ce qui est fait et si les essentiels sont couverts — sans tableur.",
          ar: "رؤية واضحة ليوم التصوير يعرف فيها الطاقم دائمًا اللقطة التالية، وما أُنجز، وهل غُطّيت الأساسيات — دون جداول بيانات.",
        },
      },
    },
    {
      slug: "streamline-crm",
      title: { en: "Streamline CRM", fr: "Streamline CRM", ar: "Streamline CRM" },
      summary: {
        en: "A lightweight CRM for small teams: manage contacts, move leads through a Kanban pipeline, and stay on top of tasks — with due-date tracking, rich-text notes, attachments, and an activity log on every record.",
        fr: "Un CRM léger pour petites équipes : gérez les contacts, faites avancer les leads dans un pipeline Kanban et maîtrisez les tâches — avec échéances, notes enrichies, pièces jointes et journal d'activité sur chaque fiche.",
        ar: "نظام إدارة علاقات عملاء خفيف للفرق الصغيرة: أدِر جهات الاتصال، وحرّك الفرص عبر مسار كانبان، وتابع المهام — مع تواريخ الاستحقاق والملاحظات الغنية والمرفقات وسجلّ نشاط لكل سجلّ.",
      },
      image: "/projects/streamline-crm.png",
      domain: ["saas", "data", "frontend"],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "dnd-kit", "Recharts", "TipTap", "date-fns"],
      links: { repo: "https://github.com/BenAbdesselemYoussef/streamline-crm" },
      featured: true,
      caseStudy: {
        problem: {
          en: "Small teams outgrow spreadsheets for sales: contacts, deals, and follow-up tasks drift apart, and it's hard to see the pipeline or what's overdue.",
          fr: "Les petites équipes dépassent le tableur pour la vente : contacts, opportunités et relances se dispersent, et il devient difficile de voir le pipeline ou ce qui est en retard.",
          ar: "تتجاوز الفرق الصغيرة جداول البيانات في المبيعات: تتشتّت جهات الاتصال والصفقات ومهام المتابعة، فيصعب رؤية المسار أو ما فات موعده.",
        },
        approach: {
          en: "One lightweight CRM: a searchable contact directory, a drag-and-drop lead pipeline, a task center with overdue alerts, and an executive dashboard — with notes, attachments, and an activity log on every record.",
          fr: "Un seul CRM léger : un annuaire de contacts cherchable, un pipeline de leads en glisser-déposer, un centre de tâches avec alertes de retard et un tableau de bord — avec notes, pièces jointes et journal d'activité sur chaque fiche.",
          ar: "نظام واحد خفيف: دليل جهات اتصال قابل للبحث، ومسار فرص بالسحب والإفلات، ومركز مهام بتنبيهات التأخّر، ولوحة تنفيذية — مع ملاحظات ومرفقات وسجلّ نشاط لكل سجلّ.",
        },
        architecture: [
          {
            en: "A drag-and-drop lead pipeline across stages (dnd-kit) with per-stage deal counts and value totals.",
            fr: "Un pipeline de leads en glisser-déposer par étape (dnd-kit) avec compteurs et valeurs totales par étape.",
            ar: "مسار فرص بالسحب والإفلات عبر المراحل (dnd-kit) مع عدد الصفقات وإجمالي القيمة لكل مرحلة.",
          },
          {
            en: "An executive dashboard (Recharts) with KPIs, pipeline-by-stage, upcoming tasks, and recent activity; due dates flagged overdue via date-fns.",
            fr: "Un tableau de bord (Recharts) avec KPIs, pipeline par étape, tâches à venir et activité récente ; échéances en retard signalées via date-fns.",
            ar: "لوحة تنفيذية (Recharts) بمؤشّرات أداء، ومسار حسب المرحلة، ومهام قادمة، ونشاط حديث؛ وتواريخ استحقاق مُعلَّمة كمتأخّرة عبر date-fns.",
          },
          {
            en: "Detail panels with Tiptap rich-text notes, file attachments, and a chronological activity log. Next.js App Router and Tailwind CSS.",
            fr: "Des panneaux de détail avec notes enrichies Tiptap, pièces jointes et journal d'activité chronologique. Next.js App Router et Tailwind CSS.",
            ar: "لوحات تفاصيل بملاحظات Tiptap الغنية، ومرفقات ملفات، وسجلّ نشاط زمني. Next.js App Router وTailwind CSS.",
          },
        ],
        outcome: {
          en: "A single place to manage contacts, push deals through the pipeline, and never miss a follow-up — with a dashboard that shows pipeline value and overdue work at a glance.",
          fr: "Un seul endroit pour gérer les contacts, faire avancer les opportunités et ne jamais manquer une relance — avec un tableau de bord montrant valeur du pipeline et retards d'un coup d'œil.",
          ar: "مكان واحد لإدارة جهات الاتصال ودفع الصفقات عبر المسار وعدم تفويت أي متابعة — مع لوحة تُظهر قيمة المسار والأعمال المتأخّرة بنظرة واحدة.",
        },
      },
    },
  ],
  "projects",
);
