// All interface copy in both languages. Project text lives in projects.ts
// (English) and projects.ar.ts (Arabic).

export type Lang = "en" | "ar";
export type Theme = "dark" | "light";

const en = {
  name: "Samar Alqahtani",
  title: "Software Engineer",
  metaDescription:
    "Portfolio of Samar Alqahtani, a Saudi software engineer building iOS apps, React Native experiences, and UI/UX-driven products.",
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    about: "About",
    skills: "Skills",
    contact: "Contact",
  },
  a11y: {
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    email: "Send an email",
    switchLanguage: "Switch to Arabic",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    projectGithub: "GitHub repository",
    projectLive: "App Store",
  },
  languageToggle: "العربية",
  hero: {
    who: "Samar Alqahtani, Software Engineer",
    headline: "I design and build mobile apps",
    lead: "Native iOS with SwiftUI, and cross-platform with React Native.",
    viewProjects: "View my projects",
    downloadCv: "Download CV",
  },
  projects: {
    title: "Selected projects",
    description:
      "Mobile applications and digital products I've built through professional work and personal projects.",
    viewProject: "View project",
    viewCaseStudy: "View case study",
  },
  projectStatus: {
    "Featured Project": "Featured project",
    "Published on App Store": "Published on App Store",
    "Graduation Project": "Graduation project",
  } as Record<string, string>,
  projectPage: {
    back: "Back to projects",
    viewCode: "View code",
    overview: "Overview",
    myRole: "My role and responsibilities",
    keyFeatures: "Key features",
    challenges: "Technical challenges",
    learnings: "What I gained from the experience",
    screenshots: "Screenshots",
    screenshotAlt: "screenshot",
    notFound: "Project not found",
  },
  experience: {
    title: "Where I've worked",
    items: [
      {
        company: "King Salman Global Academy for Arabic Language",
        current: true,
        roles: [
          {
            role: "Mobile Application Developer",
            period: "Jun 2026 – Present",
            description:
              "I design and develop mobile apps and improve existing ones by shipping new features, refining interfaces and user experience, and building organized, scalable components with React Native, Expo, and TypeScript. I integrate apps with APIs and third-party services, test features and fix bugs, and manage releases and prepare them for publishing through TestFlight and the App Store, in collaboration with the design, development, and backend teams.",
            tech: ["React Native", "Expo", "TypeScript", "REST APIs", "SDK Integration", "Git", "TestFlight", "App Store"],
          },
          {
            role: "Mobile Application Developer Trainee (Tamheer)",
            period: "Nov 2025 – May 2026",
            description:
              "Contributed to designing and developing several mobile apps, including redesigning and improving their interfaces and user experience, and building organized, scalable code structures that make apps easier to maintain and extend. Also developed interactive features, integrated apps with REST APIs and Firebase services, and tested API requests and responses with Postman, through to preparing and releasing the apps.",
            tech: ["React Native", "TypeScript", "Swift", "REST APIs", "Firebase", "Postman", "Figma"],
          },
        ],
      },
      {
        company: "Saudi Electricity Company",
        current: false,
        roles: [
          {
            role: "IT Intern",
            period: "Mar 2025 – May 2025",
            description:
              "Completed a rotational co-op internship across several technical departments, including computer networks, cybersecurity, the data center, and web development. Gained hands-on experience monitoring networks, detecting faults, and reporting them through ticketing systems, along with learning about IT infrastructure, servers, and smart metering systems, and how technical work and operations run across departments.",
            tech: ["Networking", "Cybersecurity", "Data Center", "Web Development", "Network Monitoring", "Ticketing Systems", "IT Infrastructure"],
          },
        ],
      },
    ],
  },
  about: {
    title: "A little about me",
    body: "I'm an Information Technology graduate and Software Engineer passionate about building thoughtful digital products that solve real-world problems. My experience spans mobile application development, UI/UX design, and API integration, with hands-on experience building both native iOS and cross-platform applications. I enjoy continuously learning new technologies, exploring cloud computing and AI, and creating software that is reliable, intuitive, and built with users in mind.",
  },
  skills: {
    title: "Tools & technologies",
    description: "What I reach for when designing and building products.",
    pauseMotion: "Stop the movement",
    playMotion: "Start the movement",
    groups: {
      mobile: "Mobile development",
      frontend: "Frontend",
      backend: "Backend & databases",
      cloud: "Cloud (AWS)",
      design: "UI/UX",
      tools: "Tools",
    },
  },
  contact: {
    title: "Let's take your idea to the App Store",
    body: "Hiring for your team, or have an app to build? I can carry it from the first design to release.",
    email: "Email me",
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or may have moved.",
    home: "Back to home",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  name: "سمر القحطاني",
  title: "مهندسة برمجيات",
  metaDescription:
    "الملف المهني لسمر القحطاني، مهندسة برمجيات سعودية تبني تطبيقات iOS وتطبيقات React Native ومنتجات تقوم على تصميم تجربة المستخدم.",
  nav: {
    home: "الرئيسية",
    projects: "المشاريع",
    experience: "الخبرات",
    about: "عني",
    skills: "المهارات",
    contact: "تواصل",
  },
  a11y: {
    backToTop: "العودة إلى الأعلى",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    github: "حساب GitHub",
    linkedin: "حساب LinkedIn",
    email: "إرسال بريد إلكتروني",
    switchLanguage: "Switch to English",
    toLight: "التبديل إلى المظهر الفاتح",
    toDark: "التبديل إلى المظهر الداكن",
    projectGithub: "مستودع GitHub",
    projectLive: "App Store",
  },
  languageToggle: "EN",
  hero: {
    who: "سمر القحطاني، مهندسة برمجيات",
    headline: "أصمّم وأطوّر تطبيقات الجوال",
    lead: "تطبيقات iOS أصلية بـSwiftUI، وتطبيقات متعددة المنصات بـReact Native.",
    viewProjects: "شاهد مشاريعي",
    downloadCv: "حمّل السيرة الذاتية",
  },
  projects: {
    title: "مشاريع مختارة",
    description: "تطبيقات جوال ومنتجات رقمية بنيتها في عملي وفي مشاريعي الشخصية.",
    viewProject: "عرض المشروع",
    viewCaseStudy: "عرض دراسة الحالة",
  },
  projectStatus: {
    "Featured Project": "مشروع مميز",
    "Published on App Store": "منشور على App Store",
    "Graduation Project": "مشروع تخرج",
  },
  projectPage: {
    back: "العودة إلى المشاريع",
    viewCode: "عرض الكود",
    overview: "نظرة عامة",
    myRole: "دوري ومسؤولياتي",
    keyFeatures: "أبرز المزايا",
    challenges: "التحديات التقنية",
    learnings: "ما اكتسبته من التجربة",
    screenshots: "لقطات من التطبيق",
    screenshotAlt: "لقطة شاشة",
    notFound: "المشروع غير موجود",
  },
  experience: {
    title: "أين عملت",
    items: [
      {
        company: "مجمع الملك سلمان العالمي للغة العربية",
        current: true,
        roles: [
          {
            role: "مطوّرة تطبيقات جوال",
            period: "يونيو 2026 – حتى الآن",
            description:
              "أعمل على تصميم وتطوير تطبيقات الجوال وتحسين التطبيقات القائمة، من خلال تنفيذ مزايا جديدة، وتطوير الواجهات وتجربة المستخدم، وبناء مكونات برمجية منظمة وقابلة للتوسع باستخدام React Native وExpo وTypeScript. أعمل على تكامل التطبيقات مع واجهات API والخدمات الخارجية، واختبار الوظائف ومعالجة الأخطاء، وإدارة إصدارات التطبيقات وتجهيزها للنشر عبر TestFlight وApp Store، بالتعاون مع فرق التصميم والتطوير والخدمات الخلفية.",
            tech: ["React Native", "Expo", "TypeScript", "REST APIs", "SDK Integration", "Git", "TestFlight", "App Store"],
          },
          {
            role: "متدربة تطوير تطبيقات الجوال (تمهير)",
            period: "نوفمبر 2025 – مايو 2026",
            description:
              "شاركت في تصميم وتطوير عدة تطبيقات جوال، شمل ذلك إعادة تصميم وتحسين الواجهات وتجربة المستخدم، وبناء هياكل برمجية منظمة وقابلة للتوسع تسهّل صيانة التطبيقات وإضافة مزايا جديدة. كما عملت على تطوير وظائف تفاعلية، وتكامل التطبيقات مع واجهات REST APIs وخدمات Firebase، واختبار طلبات واستجابات API باستخدام Postman، وصولًا إلى تجهيز التطبيقات وإطلاقها.",
            tech: ["React Native", "TypeScript", "Swift", "REST APIs", "Firebase", "Postman", "Figma"],
          },
        ],
      },
      {
        company: "الشركة السعودية للكهرباء",
        current: false,
        roles: [
          {
            role: "متدربة تقنية معلومات",
            period: "مارس 2025 – مايو 2025",
            description:
              "أكملت تدريبًا تعاونيًا بنظام التدوير بين عدة أقسام تقنية، شملت شبكات الحاسب والأمن السيبراني ومركز البيانات وتطوير الويب. اكتسبت خبرة عملية في مراقبة الشبكات ورصد الأعطال والإبلاغ عنها عبر أنظمة التذاكر، إلى جانب التعرّف على البنية التحتية التقنية والخوادم وأنظمة العدادات الذكية، والتعرّف على طبيعة العمل والعمليات التقنية في مختلف الأقسام.",
            tech: ["Networking", "Cybersecurity", "Data Center", "Web Development", "Network Monitoring", "Ticketing Systems", "IT Infrastructure"],
          },
        ],
      },
    ],
  },
  about: {
    title: "نبذة عني",
    body: "خريجة تقنية معلومات ومهندسة برمجيات، شغوفة ببناء منتجات رقمية مدروسة تحل مشكلات حقيقية. تشمل خبرتي تطوير تطبيقات الجوال وتصميم الواجهات وتجربة المستخدم وربط واجهات البرمجة، مع خبرة عملية في بناء تطبيقات iOS الأصلية والتطبيقات متعددة المنصات. أستمتع بتعلّم التقنيات الجديدة باستمرار، واستكشاف الحوسبة السحابية والذكاء الاصطناعي، وصناعة برمجيات موثوقة وسهلة الاستخدام تضع المستخدم في المقام الأول.",
  },
  skills: {
    title: "الأدوات والتقنيات",
    description: "ما أعتمد عليه في تصميم المنتجات وبنائها.",
    pauseMotion: "إيقاف الحركة",
    playMotion: "تشغيل الحركة",
    groups: {
      mobile: "تطوير الجوال",
      frontend: "الواجهات الأمامية",
      backend: "الخوادم وقواعد البيانات",
      cloud: "الحوسبة السحابية (AWS)",
      design: "تصميم الواجهات وتجربة المستخدم",
      tools: "الأدوات",
    },
  },
  contact: {
    title: "لنوصل فكرتك إلى App Store",
    body: "سواء كنت تبحث عن مطوّرة لفريقك أو لديك تطبيق تريد بناءه، أتولّاه من أول تصميم حتى الإطلاق.",
    email: "راسلني",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    body: "الصفحة التي تبحث عنها غير موجودة أو ربما نُقلت.",
    home: "العودة إلى الرئيسية",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, ar };
