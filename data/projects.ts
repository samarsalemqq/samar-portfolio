import { Project } from "@/types/project";


export const projects: Project[] = [
 {
  slug: "suhail",
  title: "Suhail",
  category: "iOS Application",
  status: "Featured Project",
  published: true,

  tech: [
    "SwiftUI",
    "Localization",
    "Lottie",
    "Figma",
  ],

  description:
    "An off-road safety application that helps travelers prepare their trip details and keeps trusted contacts informed during emergencies.",

  roleTitle: "iOS Developer & UI/UX Contributor",

  overview:
    "Suhail is an off-road safety application designed for travelers heading into remote areas. Users can register their trip, vehicle information, expected return time, and emergency contacts before departure. If a traveler becomes overdue and no recent location updates are available, trusted contacts can receive an emergency SMS or WhatsApp message containing the latest available location and trip details. The application was developed collaboratively during the Apple Developer Academy, selected for the graduation showcase, and published on the App Store.",

  problem:
    "Off-road travelers may lose connectivity or become overdue without having a simple way to share essential trip information with family or trusted contacts. In an emergency, missing route, vehicle, and location details can delay the response process.",

  solution:
    "Suhail provides a structured way to register off-road trips before departure and keeps important information ready when needed. It supports background trip monitoring, emergency alerts, local safety notifications, and access to recorded trip details in both Arabic and English.",

  role:
    "I developed major parts of the iOS interface using SwiftUI, translated the provided design system into reusable UI components, and created reusable page templates that made navigation and screen integration easier to maintain. I also implemented Arabic and English localization, integrated Lottie for the splash experience, used mock data while developing and testing the interfaces, and contributed to improving parts of the application flow and logic. The project was developed collaboratively during the Apple Developer Academy.",

  features: [
    "Off-road trip registration and management",
    "Automatic emergency alerts through SMS or WhatsApp",
    "Background trip monitoring",
    "Context-aware local safety notifications",
    "Local trip history with recorded routes",
    "Arabic and English localization",
  ],

  challenges:
    "One of my main challenges was translating a complete design system into reusable SwiftUI components and page templates while keeping the navigation flow consistent across the application. The interfaces also needed to remain clear and easy to use in stressful, low-connectivity situations.",

  learnings:
    "This project strengthened my experience in building reusable SwiftUI components, structuring screens through page templates, implementing localization, working with mock data during UI development, and collaborating with a multidisciplinary team on application flows and logic.",

  cover: "/images/projects/suhail-cover.png",
  overviewImage: "/images/projects/suhail-overview.png",
  roleImage: "/images/projects/Code.png",

  gallery: [
    "/images/projects/suhail-1.png",
    "/images/projects/suhail-2.png",
    "/images/projects/suhail-3.png",
  ],

  links: {
    github: "https://github.com/ArwaAlkadi/Suhail",
    live: "https://apps.apple.com/sa/app/suhail/id6775820204",
  },

  featured: true,
},
  {
    slug: "steepish",
    title: "Steepish",
      published: false,
    category: "iOS Application",
    status: "Published on App Store",
    tech: ["SwiftUI", "iOS"],
    description:
      "A published iOS application designed and developed during the Apple Developer Academy.",
    roleTitle: "iOS Developer",
    overview:
      "Steepish is an iOS application designed and built end-to-end during the Apple Developer Academy program, taken from an initial concept all the way through to a public App Store release.",
    problem:
      "The Academy program asked for a complete app taken from concept to a real, public App Store release — not just a prototype — which meant every decision had to hold up under App Store review and real users.",
    solution:
      "I scoped a focused concept, designed and built it entirely in SwiftUI, and carried it through Apple's review process to a genuine App Store release.",
    role:
      "I designed the interface and built the entire app in SwiftUI, then handled the App Store submission and release process.",
    features: [
      "Clean, focused SwiftUI interface",
      "Smooth, native iOS interactions",
      "Built and shipped through the full App Store review process",
    ],
    challenges:
      "Shipping a real app to the App Store meant paying close attention to Apple's Human Interface Guidelines and review requirements, and iterating on the UI until it felt genuinely native rather than just functional.",
    learnings:
      "This was my first full App Store release, and it taught me the realities of shipping software: polish, edge cases, and the review process, not just building a feature.",
    cover: "/images/projects/steepish-cover.png",
    gallery: [
      "/images/projects/steepish-1.png",
      "/images/projects/steepish-2.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
    featured: true,
  },
  {
    slug: "riyadh-dictionary",
    title: "Riyadh Dictionary",
      published: false,
    category: "Mobile Application",
    status: "Professional Project",
    tech: ["React Native", "Expo", "REST APIs"],
    description:
      "An interactive Arabic dictionary application with smart search, audio pronunciation, language games, and API integration.",
    roleTitle: "React Native Developer",
    overview:
      "Riyadh Dictionary is a mobile application that makes exploring the Arabic language interactive and accessible. It combines smart search, spoken pronunciation, and games so users can look up words and actually practice using them.",
    problem:
      "Existing Arabic dictionary tools tend to be static and text-only, which makes them slow to search and doesn't help users actually practice pronunciation or retain new words.",
    solution:
      "We built a fast, interactive dictionary with smart search and audio pronunciation, then layered in language games so looking up a word turns into practicing it.",
    role:
      "I worked on the React Native/Expo mobile app, integrating REST APIs for search and pronunciation and building the game and navigation experience.",
    features: [
      "Smart search across a large Arabic word database",
      "Audio pronunciation for entries",
      "Built-in language games to reinforce learning",
      "REST API integration for dictionary and audio data",
      "Smooth navigation optimized for everyday use",
    ],
    challenges:
      "Keeping search fast and pronunciation audio in sync with the correct dictionary entry, while handling the nuances of Arabic text (diacritics, right-to-left layout) inside a React Native app.",
    learnings:
      "I gained practical experience integrating REST APIs at scale in React Native, and handling RTL-aware UI in a production mobile app.",
    cover: "/images/projects/riyadh-dictionary-cover.png",
    gallery: [
      "/images/projects/riyadh-dictionary-1.png",
      "/images/projects/riyadh-dictionary-2.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
    featured: true,
  },
  {
    slug: "language-games",
    title: "Language Games",
      published: false,
    category: "Mobile Application",
    status: "Currently Developing",
    tech: ["React Native", "Expo", "WebView", "JSON"],
    description:
      "A mobile application containing more than 100 Arabic language games with search, categories, favorites, and WebView integration.",
    roleTitle: "React Native Developer",
    overview:
      "Language Games is a mobile app that bundles more than 100 Arabic language games into a single, organized experience, with search, categories, and favorites so users can quickly find the game they want to play.",
    problem:
      "A hundred-plus browser-based language games scattered across separate pages are hard to discover, and there's no consistent way to search, favorite, or come back to the ones a user actually likes.",
    solution:
      "I'm building a single React Native app shell that loads each game through WebView, backed by a JSON-driven catalog with search, categories, and favorites, so the whole library feels like one native experience.",
    role:
      "I am building the React Native/Expo app shell, the category and favorites system, and the WebView layer that loads individual game content.",
    features: [
      "Library of 100+ Arabic language games",
      "Search and category filtering",
      "Favorites list for quick access",
      "WebView integration for game content",
      "JSON-driven content structure for easy updates",
    ],
    challenges:
      "Structuring over a hundred games in a way that stays fast to search and browse, and keeping the WebView game experience feeling native rather than like an embedded browser.",
    learnings:
      "This project deepened my understanding of WebView-based architectures in React Native and how to structure large, JSON-driven content libraries cleanly.",
    cover: "/images/projects/language-games-cover.png",
    overviewImage: "/images/projects/language-games-1.png",
    roleImage: "/images/projects/language-games-2.png",
    gallery: [
      "/images/projects/language-games-1.png",
      "/images/projects/language-games-2.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    slug: "stepaware",
    title: "StepAware",
      published: false,
    category: "Hardware & Mobile",
    status: "Graduation Project",
    tech: ["Arduino", "Sensors", "GPS", "Telegram Bot"],
    description:
      "A smart bracelet designed to help visually impaired users navigate safely using ultrasonic sensors and emergency location sharing.",
    roleTitle: "Hardware & Mobile Developer",
    overview:
      "StepAware is a smart bracelet built for my graduation project, designed to help visually impaired users move around more safely. Ultrasonic sensors detect nearby obstacles, and a GPS module paired with a Telegram bot can share the user's live location in an emergency.",
    problem:
      "Visually impaired users often lack an affordable, wearable way to detect nearby obstacles and quickly share their location with family or caregivers if they need help.",
    solution:
      "StepAware pairs ultrasonic obstacle detection with GPS tracking in a low-power wearable bracelet, and uses a Telegram bot to instantly share the wearer's live location in an emergency.",
    role:
      "I worked on the hardware and firmware (Arduino, ultrasonic sensors, GPS module) as well as the Telegram bot integration for emergency alerts.",
    features: [
      "Ultrasonic obstacle detection with haptic/audio feedback",
      "GPS-based location tracking",
      "Telegram bot for emergency location sharing",
      "Low-power wearable hardware design",
    ],
    challenges:
      "Balancing sensor accuracy, battery life, and wearable comfort, while making sure the emergency alert flow was fast and reliable when it mattered most.",
    learnings:
      "StepAware gave me hands-on experience combining embedded hardware with a mobile-facing service (Telegram), and designing assistive technology around real accessibility needs.",
    cover: "/images/projects/stepaware-cover.png",
    gallery: [
      "/images/projects/stepaware-1.png",
      "/images/projects/stepaware-2.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },
  {
    slug: "talaq",
    title: "Talaq",
      published: false,
    category: "UI/UX Design",
    status: "UI/UX Case Study",
    tech: ["Figma", "User Research", "Wireframes", "Prototyping"],
    description:
      "A speech training application concept designed to support people with stuttering through personalized exercises and AI-based evaluation.",
    roleTitle: "UI/UX Designer",
    overview:
      "Talaq is a UI/UX case study for a speech training app concept aimed at people who stutter, offering personalized exercises with AI-based evaluation of progress. The project was completed as part of my UI/UX work at Tuwaiq Academy.",
    problem:
      "People who stutter often avoid speech therapy tools that feel clinical or judgmental, which makes it hard to practice consistently in a low-pressure, private setting.",
    solution:
      "Talaq concepts a personalized, encouraging speech-training experience — exercises tailored to the user with AI-based evaluation of progress — designed through user research, wireframes, and usability testing rather than assumptions.",
    role:
      "I led user research, user flows, wireframing, prototyping, and usability testing for the full concept.",
    features: [
      "Personalized speech exercise plans",
      "AI-based evaluation of exercise attempts",
      "Progress tracking over time",
      "Accessible, low-pressure interface design",
    ],
    challenges:
      "Designing an interface that felt encouraging rather than clinical, for a sensitive and personal use case, required extra care during user research and usability testing.",
    learnings:
      "Talaq strengthened my end-to-end UX process — from research and wireframes through to prototyping and usability testing — especially for sensitive, human-centered products.",
    cover: "/images/projects/talaq-cover.png",
    gallery: [
      "/images/projects/talaq-1.png",
      "/images/projects/talaq-2.png",
    ],
    links: {
      github: "#",
      live: "#",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
