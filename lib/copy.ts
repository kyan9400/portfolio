import type { Locale } from "@/lib/types";

type CopyDictionary = {
  dir: "ltr" | "rtl";
  nav: string[];
  navHome: string;
  navContact: string;
  brandMonogram: string;
  brandName: string;
  heroAvailability: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHeadlineTop: string;
  heroHeadlineFocus: string;
  heroHeadlineBottom: string;
  heroStatement: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroStats: { value: string; label: string }[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutHighlights: { label: string; value: string }[];
  aboutFocusTitle: string;
  aboutFocusItems: string[];
  systemsEyebrow: string;
  systemsTitle: string;
  systemsItems: string[];
  systemMapEyebrow: string;
  systemMapTitle: string;
  systemMapDescription: string;
  mapLayers: { label: string; detail: string }[];
  layerPrefix: string;
  activeLabel: string;
  idleLabel: string;
  flowLabel: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectsCta: string;
  projectsBadge: string;
  projectsEmpty: string;
  githubReposEyebrow: string;
  githubReposTitle: string;
  githubReposDescription: string;
  githubReposViewMore: string;
  githubReposViewGithub: string;
  githubReposError: string;
  githubReposEmpty: string;
  skillsEyebrow: string;
  skillsTitle: string;
  skillsDescription: string;
  skillsGroups: { name: string; items: string[] }[];
  experienceEyebrow: string;
  experienceTitle: string;
  experienceDescription: string;
  experienceItems: { period: string; title: string; company: string; impact: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: string;
  contactEmailLabel: string;
  contactCvLabel: string;
  cvDownloads: { code: string; file: string; label: string }[];
  githubLabel: string;
  linkedinLabel: string;
  footerBuiltWith: string;
  languageLabel: string;
  heroResponseTime: string;
  proofStripLabel: string;
  proofStripItems: string[];
  signature: {
    eyebrow: string;
    title: string;
    summary: string;
    problemTitle: string;
    problem: string;
    constraintsTitle: string;
    constraints: string[];
    solutionTitle: string;
    solution: string;
    architectureTitle: string;
    architecture: { name: string; detail: string }[];
    metricsTitle: string;
    metrics: { value: string; label: string }[];
    lessonsTitle: string;
    lessons: string[];
  };
  howIWork: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  };
  projectHoverCta: string;
  skipToContent: string;
  notFoundTitle: string;
  notFoundBody: string;
  notFoundCta: string;
  // Services section
  servicesEyebrow: string;
  servicesTitle: string;
  servicesItems: { title: string; description: string }[];
  // Available for Work CTA
  availableTitle: string;
  availableBody: string;
  availableBtnContact: string;
  availableBtnCv: string;
  availableBtnProjects: string;
  // Credibility highlights
  credibilityEyebrow: string;
  credibilityTitle: string;
  credibilityItems: { title: string; body: string }[];
  // GitHub filters & search
  githubSearchPlaceholder: string;
  githubFilterCategories: string[];
  // Contact improvements
  contactFormTitle: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormProjectType: string;
  contactFormMessage: string;
  contactFormSend: string;
  contactLocation: string;
  contactAvailableText: string;
  // Navbar & project detail labels
  navCvLabel: string;
  projectProblemLabel: string;
  projectSolutionLabel: string;
  projectResultLabel: string;
  projectViewCaseStudy: string;
  projectLiveDemo: string;
  projectViewGithubLabel: string;
  projectBackLabel: string;
  projectTechStackLabel: string;
  projectWhatItDoesLabel: string;
  projectKeyFeaturesLabel: string;
};

export const copyByLocale: Record<Locale, CopyDictionary> = {
  en: {
    dir: "ltr",
    nav: ["About", "Systems", "Projects", "Repositories", "Skills", "Experience"],
    navHome: "Home",
    navContact: "Contact",
    brandMonogram: "AA",
    brandName: "Alhassan",
    heroAvailability: "Available for new opportunities",
    heroEyebrow: "Software & DevOps Engineer · Web & AI Systems",
    heroTitle: "Alhassan Alfarran",
    heroHeadlineTop: "Building intelligent",
    heroHeadlineFocus: "web, AI & delivery",
    heroHeadlineBottom: "that actually ship.",
    heroStatement:
      "I design and ship intelligent software where product UX, backend architecture, and AI reasoning work as one integrated system. I also own delivery: CI/CD, containers, observability, and production operations—comfortable contributing as a DevOps engineer on cross-functional teams.",
    heroPrimaryCta: "Explore case studies",
    heroSecondaryCta: "Get in touch",
    heroStats: [
      { value: "5+", label: "Years building" },
      { value: "20+", label: "Shipped projects" },
      { value: "AI", label: "Native systems" },
      { value: "3", label: "Languages spoken" }
    ],
    aboutEyebrow: "About",
    aboutTitle: "Engineer with system-level instincts.",
    aboutBody:
      "I build software with system-level thinking: clear interfaces, scalable services, and measurable outcomes. My work combines frontend architecture, API design, data modeling, AI integration, and DevOps practices so releases stay predictable and systems stay observable in production.",
    aboutHighlights: [
      { label: "Based in", value: "Russia · Remote" },
      { label: "Experience", value: "5+ years engineering" },
      { label: "Domain", value: "Web · Backend · AI · DevOps" },
      { label: "Languages", value: "EN · RU · AR" }
    ],
    aboutFocusTitle: "Currently focused",
    aboutFocusItems: [
      "Designing AI-native product surfaces",
      "Backend that stays fast under real load",
      "Retrieval pipelines and LLM orchestration",
      "CI/CD, containers, and production readiness",
      "Polished and accessible web interfaces"
    ],
    systemsEyebrow: "What I Build",
    systemsTitle: "Systems I Build",
    systemsItems: [
      "AI-powered web applications with production-ready workflows",
      "Data-driven systems for analytics and operational decisions",
      "Intelligent dashboards with API and pipeline orchestration",
      "Automation tools that reduce repetitive manual execution",
      "Release pipelines, environments, and operational guardrails"
    ],
    systemMapEyebrow: "How I Build",
    systemMapTitle: "A clear map of how I build systems.",
    systemMapDescription:
      "Every product I ship is composed of four layers - each tuned, observable, and replaceable.",
    mapLayers: [
      { label: "UI Layer", detail: "React / Next.js interfaces optimized for product velocity and clarity." },
      { label: "API Layer", detail: "Node.js services with explicit contracts and modular domain boundaries." },
      { label: "Data Layer", detail: "Relational and document models tuned for analytics and throughput." },
      { label: "AI Layer", detail: "LLM/ML components for retrieval, automation, and reasoning workflows." }
    ],
    layerPrefix: "Layer",
    activeLabel: "Active",
    idleLabel: "Idle",
    flowLabel: "data flows top to bottom",
    projectsEyebrow: "Selected Work",
    projectsTitle: "Projects & repositories.",
    projectsSubtitle:
      "A concise catalog: scope, stack, and links—structured so you can scan fast and dive when you need detail.",
    projectsCta: "View details",
    projectsBadge: "Project",
    projectsEmpty: "Selected projects will appear here.",
    githubReposEyebrow: "GitHub",
    githubReposTitle: "All Repositories",
    githubReposDescription: "Browse all my public work on GitHub.",
    githubReposViewMore: "View more",
    githubReposViewGithub: "View on GitHub",
    githubReposError: "Unable to load repositories.",
    githubReposEmpty: "No public repositories to show.",
    skillsEyebrow: "Capabilities",
    skillsTitle: "Stack I reach for.",
    skillsDescription:
      "Pragmatic toolkit across product engineering and delivery: UI, services, data, AI, and DevOps.",
    skillsGroups: [
      {
        name: "Web Engineering",
        items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Performance"]
      },
      {
        name: "Backend Systems",
        items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Redis", "Auth & Sessions"]
      },
      {
        name: "AI & Data Systems",
        items: ["Python", "LLM integration", "RAG workflows", "Embeddings", "Inference", "Data pipelines"]
      },
      {
        name: "DevOps & Delivery",
        items: ["Linux", "Docker", "CI/CD", "GitHub Actions", "Kubernetes (basics)", "IaC basics", "Monitoring & logging"]
      },
      {
        name: "Tools & Infrastructure",
        items: ["Git", "Vercel", "Testing", "Scripting", "Secrets & config", "Observability"]
      }
    ],
    experienceEyebrow: "Experience",
    experienceTitle: "Where I have shipped.",
    experienceDescription:
      "A short timeline of where I have built, broken, and rebuilt production systems.",
    experienceItems: [
      {
        period: "2024 - 2025",
        title: "Software Engineer",
        company: "OKKP System",
        impact:
          "Redesigned API and query patterns, achieving 60% performance improvement on core workflows and stabilizing production load."
      },
      {
        period: "2020 - Present",
        title: "Software Engineer",
        company: "Freelance · Product",
        impact:
          "Built end-to-end web and AI systems including Gradio products, RAG document search, and operational analytics dashboards."
      }
    ],
    contactEyebrow: "Contact",
    contactTitle: "Let's build something meaningful.",
    contactDescription:
      "Open to software engineering, DevOps/platform, and serious product collaborations across web, AI, and delivery.",
    contactEmailLabel: "Send an email",
    contactCvLabel: "Download CV",
    cvDownloads: [
      { code: "EN", label: "English", file: "/cv/Alhassan_Alfarran_CV_EN1.pdf" },
      { code: "RU", label: "Русский", file: "/cv/Alhassan_Alfarran_CV_RU1.pdf" },
      { code: "AR", label: "العربية", file: "/cv/Alhassan_Alfarran_CV_AR1.pdf" }
    ],
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    footerBuiltWith: "Built with Next.js, Tailwind, and Framer Motion",
    languageLabel: "Language",
    heroResponseTime: "Typically replies within 48h",
    proofStripLabel: "Trusted across",
    proofStripItems: ["Shipped at OKKP", "Freelance products", "Open source"],
    signature: {
      eyebrow: "Signature Case Study",
      title: "Cutting query latency by 60% under real production load.",
      summary:
        "A focused look at how I rebuilt a slow, growing-pains API into a predictable, observable service — without rewriting the product.",
      problemTitle: "Problem",
      problem:
        "The core API was hitting hard p95 latency spikes as traffic grew. Page loads stalled, search felt sluggish, and on-call paging happened on every release.",
      constraintsTitle: "Constraints",
      constraints: [
        "No downtime — migrate behind feature flags",
        "Keep the existing client contract stable",
        "Tight schedule, small team, production traffic",
        "Limited room to add new infrastructure"
      ],
      solutionTitle: "Solution",
      solution:
        "Replaced N+1 query patterns with explicit join shapes, added composite indexes for the hot paths, introduced caching for read-heavy endpoints, and shipped a thin observability layer to see latency budgets in real time.",
      architectureTitle: "Architecture",
      architecture: [
        { name: "Edge", detail: "Cached read endpoints with short TTL and stale-while-revalidate." },
        { name: "API", detail: "Versioned controllers, typed boundaries, no logic in routes." },
        { name: "Data", detail: "Composite indexes, prepared statements, connection pooling." },
        { name: "Telemetry", detail: "Structured logs + p95 dashboards per endpoint." }
      ],
      metricsTitle: "Metrics",
      metrics: [
        { value: "−60%", label: "p95 latency" },
        { value: "−80%", label: "DB CPU at peak" },
        { value: "0", label: "downtime during rollout" },
        { value: "100%", label: "contract preserved" }
      ],
      lessonsTitle: "Lessons learned",
      lessons: [
        "Measure first — the slowest endpoint is rarely the one people complain about.",
        "Backwards-compatible migrations buy trust and let you ship in small steps.",
        "Observability is part of the feature, not an afterthought."
      ]
    },
    howIWork: {
      eyebrow: "How I Work",
      title: "A small set of habits, applied consistently.",
      description: "No process theatre — just the patterns I actually rely on.",
      items: [
        {
          title: "PR review",
          body: "Small, focused diffs. Comments on intent and trade-offs, not style. Block on correctness and clarity, not taste."
        },
        {
          title: "Definition of done",
          body: "Tested behavior, observable in production, documented for the next person, no known sharp edges left behind."
        },
        {
          title: "Incidents",
          body: "Stop the bleeding first, then write an honest postmortem. The fix is the easy part — the system change is the work."
        },
        {
          title: "Documentation",
          body: "A short README per service: what it does, how to run it, where it can break. Updated with the change, not after."
        }
      ]
    },
    projectHoverCta: "View project",
    skipToContent: "Skip to content",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you’re looking for doesn’t exist or has moved.",
    notFoundCta: "Back to home",
    servicesEyebrow: "What I Can Build",
    servicesTitle: "What I Can Build For You",
    servicesItems: [
      { title: "Full-stack SaaS platforms", description: "Admin dashboards, CRM systems, booking systems, authentication, RBAC, and scalable backend APIs." },
      { title: "AI-powered web systems", description: "RAG search, document analysis, automation tools, local LLM workflows, and AI-assisted business systems." },
      { title: "Business dashboards", description: "Analytics panels, charts, reports, KPIs, Excel/PDF export, and operational monitoring tools." },
      { title: "Production-ready websites", description: "Portfolio websites, landing pages, company websites, SEO-ready pages, and high-performance interfaces." }
    ],
    availableTitle: "Available for freelance, remote, and contract work.",
    availableBody: "I build full-stack web apps, dashboards, and AI-powered business tools.",
    availableBtnContact: "Contact Me",
    availableBtnCv: "Download CV",
    availableBtnProjects: "View Projects",
    credibilityEyebrow: "Why Work With Me",
    credibilityTitle: "What I Bring to the Table",
    credibilityItems: [
      { title: "Full-stack delivery", body: "Frontend, backend, database, authentication, dashboards, deployment, and documentation." },
      { title: "Business-oriented engineering", body: "I focus on systems that solve real operational problems, not just visual interfaces." },
      { title: "AI and automation focus", body: "Experience with RAG search, document processing, local LLM workflows, and practical automation." }
    ],
    githubSearchPlaceholder: "Search repositories...",
    githubFilterCategories: ["All", "Frontend", "Full-stack", "AI", "Dashboard", "Backend", "Blockchain"],
    contactFormTitle: "Send a message",
    contactFormName: "Your name",
    contactFormEmail: "Your email",
    contactFormProjectType: "Project type",
    contactFormMessage: "Tell me about your project...",
    contactFormSend: "Send message",
    contactLocation: "Moscow / Remote",
    contactAvailableText: "Open to freelance and remote work",
    navCvLabel: "CV",
    projectProblemLabel: "Problem",
    projectSolutionLabel: "Solution",
    projectResultLabel: "Result",
    projectViewCaseStudy: "View Case Study",
    projectLiveDemo: "Live Demo",
    projectViewGithubLabel: "GitHub",
    projectBackLabel: "Back to projects",
    projectTechStackLabel: "Tech Stack",
    projectWhatItDoesLabel: "What it does",
    projectKeyFeaturesLabel: "Key Features"
  },
  ru: {
    dir: "ltr",
    nav: ["Обо мне", "Системы", "Проекты", "Репозитории", "Навыки", "Опыт"],
    navHome: "Главная",
    navContact: "Контакты",
    brandMonogram: "АА",
    brandName: "Альхассан",
    heroAvailability: "Открыт к новым возможностям",
    heroEyebrow: "Инженер ПО и DevOps · веб и AI-системы",
    heroTitle: "Альхассан Альфарран",
    heroHeadlineTop: "Создаю интеллектуальные",
    heroHeadlineFocus: "веб, AI и поставку в прод",
    heroHeadlineBottom: "которые реально работают в продакшене.",
    heroStatement:
      "Проектирую и запускаю интеллектуальное ПО, где UX продукта, серверная архитектура и AI-слой работают как единая система. Занимаюсь доставкой: CI/CD, контейнеры, наблюдаемость и эксплуатация — могу работать как DevOps-инженер в кросс-функциональной команде.",
    heroPrimaryCta: "Смотреть кейсы",
    heroSecondaryCta: "Связаться",
    heroStats: [
      { value: "5+", label: "Лет разработки" },
      { value: "20+", label: "Запущенных проектов" },
      { value: "AI", label: "Интеллектуальные системы" },
      { value: "3", label: "Языка" }
    ],
    aboutEyebrow: "Обо мне",
    aboutTitle: "Инженер с системным мышлением.",
    aboutBody:
      "Строю продукты с системным подходом: понятные интерфейсы, масштабируемые сервисы и измеримый результат. Объединяю фронтенд-архитектуру, дизайн API, моделирование данных, AI-интеграции и практики DevOps, чтобы релизы были предсказуемыми, а системы — прозрачными в проде.",
    aboutHighlights: [
      { label: "Локация", value: "Россия · удалённо" },
      { label: "Опыт", value: "5+ лет инженерии" },
      { label: "Домен", value: "Веб · бэкенд · AI · DevOps" },
      { label: "Языки", value: "EN · RU · AR" }
    ],
    aboutFocusTitle: "Сейчас в фокусе",
    aboutFocusItems: [
      "AI-ориентированные продуктовые интерфейсы",
      "Бэкенд, который держит нагрузку",
      "RAG-пайплайны и оркестрация LLM",
      "CI/CD, контейнеры и готовность к продакшену",
      "Аккуратные и доступные веб-интерфейсы"
    ],
    systemsEyebrow: "Что я строю",
    systemsTitle: "Системы, которые я создаю",
    systemsItems: [
      "Веб-приложения с AI и рабочими бизнес-процессами",
      "Системы на данных для аналитики и решений",
      "Интеллектуальные дашборды с API и пайплайнами",
      "Автоматизация, снижающая ручной труд",
      "Пайплайны релизов, окружения и эксплуатационные практики"
    ],
    systemMapEyebrow: "Подход",
    systemMapTitle: "Карта: как я строю системы.",
    systemMapDescription:
      "Каждый продукт — четыре настраиваемых слоя: их можно наблюдать и поэтапно улучшать.",
    mapLayers: [
      { label: "Слой UI", detail: "Интерфейсы на React/Next.js для быстрых итераций и ясного UX." },
      { label: "Слой API", detail: "Сервисы на Node.js с явными контрактами и модульными доменами." },
      { label: "Слой данных", detail: "Модели под аналитику, нагрузку и целостность данных." },
      { label: "Слой AI", detail: "LLM/ML: поиск, автоматизация, рассуждение в продуктах." }
    ],
    layerPrefix: "Слой",
    activeLabel: "Активен",
    idleLabel: "Ожидание",
    flowLabel: "поток данных сверху вниз",
    projectsEyebrow: "Избранное",
    projectsTitle: "Проекты и репозитории.",
    projectsSubtitle:
      "Краткий каталог: задача, стек и ссылки — удобно просмотреть и открыть детали при необходимости.",
    projectsCta: "Подробнее",
    projectsBadge: "Проект",
    projectsEmpty: "Здесь появятся избранные проекты.",
    githubReposEyebrow: "GitHub",
    githubReposTitle: "Все репозитории",
    githubReposDescription: "Публичные репозитории на GitHub.",
    githubReposViewMore: "Показать ещё",
    githubReposViewGithub: "На GitHub",
    githubReposError: "Не удалось загрузить репозитории.",
    githubReposEmpty: "Нет публичных репозиториев для отображения.",
    skillsEyebrow: "Навыки",
    skillsTitle: "Технический стек.",
    skillsDescription: "Инструменты для продукта и доставки: UI, сервисы, данные, AI и DevOps.",
    skillsGroups: [
      {
        name: "Веб-инженерия",
        items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Производительность"]
      },
      {
        name: "Бэкенд",
        items: ["Node.js", "REST API", "PostgreSQL", "MongoDB", "Redis", "Авторизация"]
      },
      {
        name: "AI и данные",
        items: ["Python", "Интеграции LLM", "RAG", "Эмбеддинги", "Inference", "Пайплайны данных"]
      },
      {
        name: "DevOps и поставка",
        items: ["Linux", "Docker", "CI/CD", "GitHub Actions", "Kubernetes (база)", "IaC (база)", "Мониторинг и логи"]
      },
      {
        name: "Инструменты и инфраструктура",
        items: ["Git", "Vercel", "Тесты", "Скрипты", "Секреты и конфиги", "Наблюдаемость"]
      }
    ],
    experienceEyebrow: "Опыт",
    experienceTitle: "Где я строил.",
    experienceDescription: "Краткая хронология production-систем.",
    experienceItems: [
      {
        period: "2024 — 2025",
        title: "Инженер-программист",
        company: "OKKP System",
        impact:
          "Переработал API и запросы: около +60% к скорости ключевых сценариев и стабильнее нагрузка в проде."
      },
      {
        period: "2020 — сейчас",
        title: "Инженер-программист",
        company: "Фриланс · продукты",
        impact:
          "End-to-end веб и AI: Gradio, RAG-поиск по документам, операционные дашборды."
      }
    ],
    contactEyebrow: "Контакты",
    contactTitle: "Сделаем что-то по-настоящему полезное.",
    contactDescription:
      "Открыт к ролям инженера ПО, DevOps/платформы и серьёзным коллаборациям в вебе, AI и доставке.",
    contactEmailLabel: "Написать на почту",
    contactCvLabel: "Скачать резюме",
    cvDownloads: [
      { code: "EN", label: "Английский", file: "/cv/Alhassan_Alfarran_CV_EN1.pdf" },
      { code: "RU", label: "Русский", file: "/cv/Alhassan_Alfarran_CV_RU1.pdf" },
      { code: "AR", label: "Арабский", file: "/cv/Alhassan_Alfarran_CV_AR1.pdf" }
    ],
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    footerBuiltWith: "Собрано на Next.js, Tailwind и Framer Motion",
    languageLabel: "Язык",
    heroResponseTime: "Обычно отвечаю в течение 48 часов",
    proofStripLabel: "Знаком по",
    proofStripItems: ["Работа в OKKP", "Фриланс-продукты", "Open source"],
    signature: {
      eyebrow: "Ключевой кейс",
      title: "Снизил p95-задержку на 60% под реальной нагрузкой.",
      summary:
        "Подробный разбор: как медленный API под растущим трафиком превратился в предсказуемый и наблюдаемый сервис без переписывания продукта.",
      problemTitle: "Задача",
      problem:
        "Основной API проседал по p95 при росте трафика. Страницы тормозили, поиск был вялым, дежурный оператор просыпался почти на каждом релизе.",
      constraintsTitle: "Ограничения",
      constraints: [
        "Без простоя — миграция за фича-флагами",
        "Сохранить контракт клиента",
        "Сжатые сроки, небольшая команда, прод-трафик",
        "Минимум новой инфраструктуры"
      ],
      solutionTitle: "Решение",
      solution:
        "Убрал N+1, добавил составные индексы на горячие пути, ввёл кеш для тяжёлых чтений и тонкий слой наблюдаемости — чтобы видеть бюджет задержки в реальном времени.",
      architectureTitle: "Архитектура",
      architecture: [
        { name: "Edge", detail: "Кеш чтений с коротким TTL и stale-while-revalidate." },
        { name: "API", detail: "Версионированные контроллеры, типизированные границы, никакой логики в роутах." },
        { name: "Данные", detail: "Составные индексы, prepared-запросы, пул соединений." },
        { name: "Телеметрия", detail: "Структурные логи и p95-дашборды по каждому эндпоинту." }
      ],
      metricsTitle: "Метрики",
      metrics: [
        { value: "−60%", label: "p95 задержки" },
        { value: "−80%", label: "CPU БД на пике" },
        { value: "0", label: "простоя при выкатке" },
        { value: "100%", label: "контракт сохранён" }
      ],
      lessonsTitle: "Выводы",
      lessons: [
        "Сначала измерять — самый медленный эндпоинт редко тот, на который жалуются.",
        "Обратно-совместимые миграции дают доверие и возможность катить маленькими шагами.",
        "Наблюдаемость — часть фичи, а не задача «потом»."
      ]
    },
    howIWork: {
      eyebrow: "Как я работаю",
      title: "Небольшой набор привычек — последовательно.",
      description: "Никакого процессного театра — только реальные практики.",
      items: [
        {
          title: "Ревью PR",
          body: "Маленькие, сфокусированные диффы. Комментирую намерение и компромиссы, а не стиль. Блокирую за корректность и ясность, не за вкус."
        },
        {
          title: "Definition of Done",
          body: "Поведение покрыто тестами, видно в продакшене, описано для следующего человека, без скрытых острых углов."
        },
        {
          title: "Инциденты",
          body: "Сначала остановить кровь, потом честный постмортем. Фикс — это просто; изменение системы — настоящая работа."
        },
        {
          title: "Документация",
          body: "Короткий README на сервис: что делает, как запустить, где сломается. Обновляется вместе с изменением, не после."
        }
      ]
    },
    projectHoverCta: "Открыть проект",
    skipToContent: "Перейти к содержимому",
    notFoundTitle: "Страница не найдена",
    notFoundBody: "Такой страницы не существует или она была перемещена.",
    notFoundCta: "На главную",
    servicesEyebrow: "Что я строю",
    servicesTitle: "Что я могу создать для вас",
    servicesItems: [
      { title: "Full-stack SaaS-платформы", description: "Админ-панели, CRM-системы, системы бронирования, авторизация, RBAC и масштабируемые backend API." },
      { title: "AI-powered веб-системы", description: "RAG-поиск, анализ документов, инструменты автоматизации, локальные LLM-процессы и AI-системы для бизнеса." },
      { title: "Бизнес-дашборды", description: "Аналитические панели, графики, отчёты, KPI, экспорт в Excel/PDF и инструменты операционного мониторинга." },
      { title: "Production-ready сайты", description: "Портфолио, лендинги, корпоративные сайты, SEO-ready страницы и производительные интерфейсы." }
    ],
    availableTitle: "Открыт для freelance, remote и contract работы.",
    availableBody: "Я создаю full-stack веб-приложения, дашборды и AI-инструменты для бизнеса.",
    availableBtnContact: "Связаться",
    availableBtnCv: "Скачать CV",
    availableBtnProjects: "Смотреть проекты",
    credibilityEyebrow: "Почему я",
    credibilityTitle: "Что я привношу",
    credibilityItems: [
      { title: "Full-stack разработка", body: "Frontend, backend, базы данных, авторизация, дашборды, деплой и документация." },
      { title: "Инженерия с фокусом на бизнес", body: "Я создаю системы, которые решают реальные операционные задачи, а не только красивые интерфейсы." },
      { title: "AI и автоматизация", body: "Опыт с RAG-поиском, обработкой документов, локальными LLM-процессами и практической автоматизацией." }
    ],
    githubSearchPlaceholder: "Поиск репозиториев...",
    githubFilterCategories: ["Все", "Frontend", "Full-stack", "AI", "Дашборды", "Backend", "Blockchain"],
    contactFormTitle: "Отправить сообщение",
    contactFormName: "Ваше имя",
    contactFormEmail: "Ваш email",
    contactFormProjectType: "Тип проекта",
    contactFormMessage: "Расскажите о вашем проекте...",
    contactFormSend: "Отправить",
    contactLocation: "Москва / удалённо",
    contactAvailableText: "Открыт для фриланса и удалённой работы",
    navCvLabel: "CV",
    projectProblemLabel: "Задача",
    projectSolutionLabel: "Решение",
    projectResultLabel: "Результат",
    projectViewCaseStudy: "Смотреть кейс",
    projectLiveDemo: "Демо",
    projectViewGithubLabel: "GitHub",
    projectBackLabel: "Назад к проектам",
    projectTechStackLabel: "Стек",
    projectWhatItDoesLabel: "Что делает",
    projectKeyFeaturesLabel: "Ключевые функции"
  },
  ar: {
    dir: "rtl",
    nav: ["نبذة", "الأنظمة", "المشاريع", "المستودعات", "المهارات", "الخبرة"],
    navHome: "الرئيسية",
    navContact: "تواصل",
    brandMonogram: "حا",
    brandName: "الحسن",
    heroAvailability: "متاح لفرص جديدة",
    heroEyebrow: "مهندس برمجيات وعمليات تطوير · ويب وأنظمة ذكاء اصطناعي",
    heroTitle: "الحسن الفران",
    heroHeadlineTop: "أبني",
    heroHeadlineFocus: "ويب وذكاء اصطناعي وتسليم آمن",
    heroHeadlineBottom: "تعمل بثبات في الإنتاج.",
    heroStatement:
      "أصمم وأطلق برمجيات ذكية يجمع فيها تجربة المستخدم، وهندسة الخلفية، وطبقة الذكاء الاصطناعي في نظام واحد متكامل. أعمل أيضاً على التسليم: CI/CD، الحاويات، المراقبة والتشغيل — جاهز للمساهمة كمهندس DevOps ضمن فريق متعدد التخصصات.",
    heroPrimaryCta: "استكشف المشاريع",
    heroSecondaryCta: "تواصل معي",
    heroStats: [
      { value: "+5", label: "سنوات خبرة" },
      { value: "+20", label: "مشروع منجز" },
      { value: "AI", label: "أنظمة ذكية" },
      { value: "3", label: "لغات" }
    ],
    aboutEyebrow: "نبذة",
    aboutTitle: "مهندس بعقلية الأنظمة.",
    aboutBody:
      "أبني المنتجات بوضوح في الواجهات، وقابلية التوسع في الخدمات، ونتائج قابلة للقياس. أجمع هندسة الواجهات، تصميم واجهات API، نمذجة البيانات، تكاملات الذكاء الاصطناعي، وممارسات DevOps حتى تبقى الإصدارات متوقعة والأنظمة قابلة للمراقبة في الإنتاج.",
    aboutHighlights: [
      { label: "الموقع", value: "روسيا · عن بُعد" },
      { label: "الخبرة", value: "أكثر من 5 سنوات" },
      { label: "المجال", value: "ويب · خلفية · ذكاء اصطناعي · DevOps" },
      { label: "اللغات", value: "EN · RU · AR" }
    ],
    aboutFocusTitle: "التركيز الحالي",
    aboutFocusItems: [
      "واجهات منتجات مدعومة بالذكاء الاصطناعي",
      "خلفية سريعة تحت الضغط الحقيقي",
      "خطوط RAG وتنسيق نماذج LLM",
      "CI/CD والحاويات والجاهزية للإنتاج",
      "واجهات ويب مصقولة وسهلة الوصول"
    ],
    systemsEyebrow: "ما أبنيه",
    systemsTitle: "أنظمة أعمل عليها",
    systemsItems: [
      "تطبيقات ويب مع ذكاء اصطناعي وجداول عمل فعلية",
      "أنظمة تعتمد على البيانات للتحليلات والقرار",
      "لوحات ذكية مع API وخطوط بيانات",
      "أتمتة تقلل العمل اليدوي المتكرر",
      "خطوط إصدار وبيئات وضوابط تشغيلية"
    ],
    systemMapEyebrow: "المنهج",
    systemMapTitle: "خريطة: كيف أبني الأنظمة.",
    systemMapDescription: "كل منتج أربع طبقات يمكن مراقبتها وتطويرها تدريجياً.",
    mapLayers: [
      { label: "طبقة الواجهة", detail: "واجهات React/Next.js لسرعة التطوير وتجربة واضحة." },
      { label: "طبقة API", detail: "خدمات Node.js بعقود صريحة وحدود نطاق منطقية." },
      { label: "طبقة البيانات", detail: "نماذج للأداء والتحليلات وسلامة البيانات." },
      { label: "طبقة الذكاء", detail: "LLM/ML: بحث، أتمتة، استدلال داخل المنتج." }
    ],
    layerPrefix: "طبقة",
    activeLabel: "نشط",
    idleLabel: "خامل",
    flowLabel: "تدفق البيانات من الأعلى للأسفل",
    projectsEyebrow: "أعمال مختارة",
    projectsTitle: "المشاريع والمستودعات.",
    projectsSubtitle:
      "فهرس موجز: النطاق، التقنيات، والروابط — سهل المراجعة مع إمكانية التعمق عند الحاجة.",
    projectsCta: "التفاصيل",
    projectsBadge: "مشروع",
    projectsEmpty: "ستُعرض المشاريع المختارة هنا.",
    githubReposEyebrow: "GitHub",
    githubReposTitle: "جميع المستودعات",
    githubReposDescription: "تصفح أعمالي العامة على GitHub.",
    githubReposViewMore: "عرض المزيد",
    githubReposViewGithub: "عرض على GitHub",
    githubReposError: "تعذّر تحميل المستودعات.",
    githubReposEmpty: "لا توجد مستودعات عامة للعرض.",
    skillsEyebrow: "المهارات",
    skillsTitle: "الأدوات التي أعتمد عليها.",
    skillsDescription: "أدوات للمنتج والتسليم: واجهة، خدمات، بيانات، ذكاء اصطناعي، وDevOps.",
    skillsGroups: [
      {
        name: "هندسة الويب",
        items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "تحسين الأداء"]
      },
      {
        name: "الخلفية",
        items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Redis", "المصادقة"]
      },
      {
        name: "الذكاء والبيانات",
        items: ["Python", "تكامل LLM", "RAG", "التضمينات", "Inference", "خطوط البيانات"]
      },
      {
        name: "DevOps والتسليم",
        items: ["Linux", "Docker", "CI/CD", "GitHub Actions", "Kubernetes (أساسيات)", "بنية ككود (أساسيات)", "المراقبة والسجلات"]
      },
      {
        name: "الأدوات والبنية",
        items: ["Git", "Vercel", "الاختبارات", "السكربتات", "الأسرار والإعدادات", "المراقبة"]
      }
    ],
    experienceEyebrow: "الخبرة",
    experienceTitle: "أين بنيت.",
    experienceDescription: "خط زمني مختصر لأنظمة إنتاج حقيقية.",
    experienceItems: [
      {
        period: "2024 — 2025",
        title: "مهندس برمجيات",
        company: "OKKP System",
        impact:
          "إعادة تصميم واجهات API وأنماط الاستعلام؛ تحسن كبير في الأداء واستقرار أفضل تحت الحمل."
      },
      {
        period: "2020 — الآن",
        title: "مهندس برمجيات",
        company: "عمل حر · منتجات",
        impact: "أنظمة ويب وذكاء اصطناعي متكاملة: Gradio، بحث RAG، لوحات تشغيلية."
      }
    ],
    contactEyebrow: "تواصل",
    contactTitle: "لنصمم شيئاً ذا أثر حقيقي.",
    contactDescription:
      "متاح لأدوار هندسة البرمجيات وDevOps/المنصة وتعاونات منتجية جدية في الويب والذكاء الاصطناعي والتسليم.",
    contactEmailLabel: "إرسال بريد",
    contactCvLabel: "تحميل السيرة الذاتية",
    cvDownloads: [
      { code: "EN", label: "الإنجليزية", file: "/cv/Alhassan_Alfarran_CV_EN1.pdf" },
      { code: "RU", label: "الروسية", file: "/cv/Alhassan_Alfarran_CV_RU1.pdf" },
      { code: "AR", label: "العربية", file: "/cv/Alhassan_Alfarran_CV_AR1.pdf" }
    ],
    githubLabel: "جيت هب",
    linkedinLabel: "لينكدإن",
    footerBuiltWith: "مبني بـ Next.js و Tailwind و Framer Motion",
    languageLabel: "اللغة",
    heroResponseTime: "عادةً أرد خلال 48 ساعة",
    proofStripLabel: "حضور موثوق في",
    proofStripItems: ["العمل في OKKP", "منتجات عمل حر", "مفتوح المصدر"],
    signature: {
      eyebrow: "دراسة الحالة المميزة",
      title: "خفّض زمن الاستجابة p95 بنسبة 60% تحت ضغط حقيقي.",
      summary:
        "نظرة مركّزة على إعادة بناء واجهة API بطيئة لتصبح خدمة متوقعة وقابلة للمراقبة، دون إعادة كتابة المنتج.",
      problemTitle: "المشكلة",
      problem:
        "تذبذب حاد في زمن p95 مع نمو الحركة. تحميل الصفحات بطيء، البحث ثقيل، واستدعاءات الطوارئ في كل إصدار.",
      constraintsTitle: "القيود",
      constraints: [
        "بدون توقف — الترحيل خلف أعلام مزايا",
        "الحفاظ على عقد العميل القائم",
        "وقت ضيق وفريق صغير وحركة إنتاج فعلية",
        "هامش محدود لإضافة بنية تحتية جديدة"
      ],
      solutionTitle: "الحل",
      solution:
        "استبدلت أنماط N+1 بأشكال join واضحة، وأضفت فهارس مركّبة للمسارات الساخنة، وأدخلت تخزيناً مؤقتاً للقراءات الكثيفة، وطبقة مراقبة خفيفة لرؤية ميزانية التأخير لحظياً.",
      architectureTitle: "العمارة",
      architecture: [
        { name: "Edge", detail: "تخزين مؤقت للقراءة بـ TTL قصير و stale-while-revalidate." },
        { name: "API", detail: "متحكمات مُصدرة، حدود مكتوبة الأنواع، لا منطق داخل المسارات." },
        { name: "البيانات", detail: "فهارس مركّبة، استعلامات مُعدّة، تجميع اتصالات." },
        { name: "القياس", detail: "سجلات منظمة ولوحات p95 لكل نقطة نهاية." }
      ],
      metricsTitle: "النتائج",
      metrics: [
        { value: "−60%", label: "زمن p95" },
        { value: "−80%", label: "CPU قاعدة البيانات في الذروة" },
        { value: "0", label: "توقف خلال النشر" },
        { value: "100%", label: "العقد محفوظ" }
      ],
      lessonsTitle: "الدروس المستفادة",
      lessons: [
        "القياس أولاً — النقطة الأبطأ نادراً هي التي يشكو منها الناس.",
        "الترحيلات المتوافقة عكسياً تكسب الثقة وتسمح بالتسليم على دفعات صغيرة.",
        "المراقبة جزء من الميزة وليست لاحقة."
      ]
    },
    howIWork: {
      eyebrow: "كيف أعمل",
      title: "مجموعة عادات صغيرة — تُطبَّق بانتظام.",
      description: "بلا مظاهر إجرائية — فقط ما أعتمد عليه فعلاً.",
      items: [
        {
          title: "مراجعة PR",
          body: "تغييرات صغيرة ومركّزة. تعليقات على النية والمقايضات لا على الأسلوب. أوقف الدمج للصحة والوضوح، لا للذوق."
        },
        {
          title: "تعريف الإنجاز",
          body: "سلوك مُختبَر، قابل للملاحظة في الإنتاج، موثَّق للشخص التالي، بلا حواف حادة معروفة."
        },
        {
          title: "الحوادث",
          body: "أولاً نوقف النزيف، ثم تقرير مراجعة صادق. الإصلاح هو الجزء السهل؛ تغيير النظام هو العمل الحقيقي."
        },
        {
          title: "التوثيق",
          body: "README قصير لكل خدمة: ما تفعله، كيف تشغّلها، أين قد تنكسر. يُحدَّث مع التغيير لا بعده."
        }
      ]
    },
    projectHoverCta: "افتح المشروع",
    skipToContent: "تخطَّ إلى المحتوى",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundBody: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    notFoundCta: "العودة للرئيسية",
    servicesEyebrow: "ما أبنيه",
    servicesTitle: "ما يمكنني بناؤه لك",
    servicesItems: [
      { title: "منصات SaaS متكاملة", description: "لوحات تحكم، أنظمة CRM، أنظمة حجز، مصادقة، صلاحيات RBAC، وواجهات API قابلة للتوسع." },
      { title: "أنظمة ويب مدعومة بالذكاء الاصطناعي", description: "بحث RAG، تحليل مستندات، أدوات أتمتة، تشغيل LLM محلي، وأنظمة أعمال ذكية." },
      { title: "لوحات مؤشرات للأعمال", description: "لوحات تحليل، رسوم بيانية، تقارير، مؤشرات أداء، تصدير Excel/PDF، ومراقبة تشغيلية." },
      { title: "مواقع جاهزة للإنتاج", description: "مواقع بورتفوليو، صفحات هبوط، مواقع شركات، صفحات محسنة للسيو، وواجهات عالية الأداء." }
    ],
    availableTitle: "متاح للعمل الحر، والعمل عن بُعد، والعقود.",
    availableBody: "أبني تطبيقات ويب متكاملة، لوحات تحكم، وأدوات أعمال مدعومة بالذكاء الاصطناعي.",
    availableBtnContact: "تواصل معي",
    availableBtnCv: "تحميل السيرة الذاتية",
    availableBtnProjects: "عرض المشاريع",
    credibilityEyebrow: "لماذا أنا",
    credibilityTitle: "ما أقدمه",
    credibilityItems: [
      { title: "تطوير Full-stack", body: "واجهات أمامية، خلفية، قواعد بيانات، مصادقة، لوحات تحكم، نشر، وتوثيق." },
      { title: "هندسة موجهة للأعمال", body: "أركز على بناء أنظمة تحل مشاكل تشغيلية حقيقية، وليس مجرد واجهات جميلة." },
      { title: "تركيز على الذكاء الاصطناعي والأتمتة", body: "خبرة في بحث RAG، معالجة المستندات، تشغيل LLM محلي، والأتمتة العملية." }
    ],
    githubSearchPlaceholder: "ابحث في المستودعات...",
    githubFilterCategories: ["الكل", "الواجهة الأمامية", "Full-stack", "الذكاء الاصطناعي", "لوحات التحكم", "الخلفية", "Blockchain"],
    contactFormTitle: "إرسال رسالة",
    contactFormName: "اسمك",
    contactFormEmail: "بريدك الإلكتروني",
    contactFormProjectType: "نوع المشروع",
    contactFormMessage: "أخبرني عن مشروعك...",
    contactFormSend: "إرسال الرسالة",
    contactLocation: "موسكو / عن بُعد",
    contactAvailableText: "متاح للعمل الحر والعمل عن بُعد",
    navCvLabel: "CV",
    projectProblemLabel: "المشكلة",
    projectSolutionLabel: "الحل",
    projectResultLabel: "النتيجة",
    projectViewCaseStudy: "عرض دراسة الحالة",
    projectLiveDemo: "عرض حي",
    projectViewGithubLabel: "GitHub",
    projectBackLabel: "العودة للمشاريع",
    projectTechStackLabel: "التقنيات",
    projectWhatItDoesLabel: "ما يفعله",
    projectKeyFeaturesLabel: "الميزات الرئيسية"
  }
};
