import { Project } from "@/types/project";


export const projects: Project[] = [
 {
  slug: "suhail",
  icon: "/images/projects/icons/suhail-icon.png",
  title: "Suhail",
  category: "iOS Application",
  status: "Featured Project",
  published: true,

  tech: [
    "UI/UX Design",
    "Figma",
    "SwiftUI",
    "Localization",
    "Lottie",
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
    icon: "/images/projects/icons/riyadh-dictionary-icon.png",
    title: "Riyadh Dictionary",
    published: true,
    category: "Mobile Application",
    status: "Published on App Store",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Swift",
      "Core ML",
      "REST APIs",
      "Firebase",
      "AsyncStorage",
      "Figma",
      "Git",
    ],
    cardTech: [
      "React Native",
      "TypeScript",
      "Swift",
      "REST APIs",
      "Firebase",
      "AsyncStorage",
      "Figma",
    ],
    description:
      "A redesign and rebuild of the Riyadh Contemporary Arabic Lexicon app from the King Salman Global Academy for Arabic Language, with more than 120,000 linguistic entries. The work covered improving the user experience, rebuilding the interfaces, and developing interactive features including voice search and camera lookup, along with a native iOS Share Extension, and integrating the app with APIs and local storage services.",
    roleTitle: "Mobile App Developer & UI/UX Designer",
    overview:
      "A redesign and rebuild of the Riyadh Contemporary Arabic Lexicon app from the King Salman Global Academy for Arabic Language, with more than 120,000 linguistic entries. I rebuilt the app's experience and interfaces and developed a new version with React Native, Expo, and TypeScript, adding smart search features and integrating native iOS technologies to deliver a complete language experience.",
    problem:
      "The dictionary held a world-class Arabic dataset, but the mobile experience didn't do it justice: navigation felt heavy, entries were hard to scan, and every lookup meant stopping to type. A large, standards-based lexicon deserved an interface as considered as its content.",
    solution:
      "I rebuilt the product from the ground up — redesigning every core screen around how people actually search, then implementing it on a clean, layered React Native architecture. Word entries were restructured for fast scanning, Arabic and right-to-left typography were treated as a first-class concern, and three quicker ways in — voice, Share Extension, and camera recognition — were layered on so the dictionary meets users where they already are.",
    responsibilities: [
      "Redesigned the user experience, information architecture, navigation, and interfaces, accounting for Arabic language requirements and RTL support.",
      "Developed the app on an organized, scalable code architecture using reusable components, Hooks, and independent services.",
      "Connected the app to REST APIs and handled data and responses.",
      "Developed and integrated native iOS features using Swift and Core ML.",
      "Built new features and improved existing functionality and usability.",
    ],
    features: [
      "Search for words and their meanings, examples, synonyms, and antonyms.",
      "Arabic voice search.",
      "Camera search that recognizes text and objects using on-device Core ML.",
      "A native iOS Share Extension for looking up words directly from other apps.",
      "Browse words by letter and categorize them by word type.",
      "Save words to favorites.",
    ],
    challenges:
      "Combining React Native development with native iOS technologies in an Expo-based app, especially when building the Share Extension and integrating Core ML. Handling such a large body of linguistic content also called for an easy-to-use Arabic experience and an app structure that stays maintainable and scalable as features keep being added.",
    learnings:
      "I grew my experience across the mobile app lifecycle, from redesigning the product to developing it, integrating its services, and releasing it. I also deepened my knowledge of React Native architecture, native iOS component development, and building solutions that combine cross-platform and native technologies.",
    pageStatus: "Published on App Store, with development and improvements ongoing.",
    cover: "/images/projects/riyadh-dictionary-cover.png",
    gallery: [
      "/images/projects/riyadh-dictionary-1.png",
      "/images/projects/riyadh-dictionary-2.png",
      "/images/projects/riyadh-dictionary-3.png",
    ],
    // Repo is private, so github stays "#".
    links: {
      github: "#",
      live: "https://apps.apple.com/sa/app/%D9%85%D8%B9%D8%AC%D9%85-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/id6464643339",
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
 icon: "/images/projects/icons/stepaware-icon.png",
 iconIsLogo: true,
title: "StepAware",
published: true,
category: "IoT & Embedded Systems",
status: "Graduation Project",

tech: [
  "Arduino",
  "Ultrasonic Sensors",
  "GPS",
  "Telegram Bot",
],

description:
  "A smart wearable bracelet designed to improve safe navigation and emergency response for blind people.",

roleTitle:
  "Hardware & Software Developer",

overview:
  "StepAware is a smart wearable bracelet developed as my graduation project to support blind people in navigating their surroundings more safely. The system combines ultrasonic sensors for obstacle detection with GPS tracking and Telegram integration, allowing emergency contacts to receive the user's live location when assistance is needed.",

problem:
  "Blind people can face difficulties detecting nearby obstacles and quickly sharing their location during emergency situations, limiting their independence and delaying assistance.",

solution:
  "StepAware combines obstacle detection, GPS tracking, and emergency communication in a wearable device. The bracelet detects nearby obstacles, alerts the user instantly, and sends the current location to trusted contacts through a Telegram bot when emergency assistance is required.",

role:
  "I designed and developed the embedded system using Arduino, integrated ultrasonic sensors and the GPS module, implemented Telegram Bot communication for emergency alerts, and participated in testing and improving the overall user experience.",

features: [
  "Real-time obstacle detection",
  "Ultrasonic sensor integration",
  "GPS location tracking",
  "Emergency SOS functionality",
  "Telegram Bot notifications",
  "Wearable assistive technology",
],

challenges:
  "Developing a reliable wearable device required balancing sensor accuracy, power consumption, hardware limitations, and fast emergency communication while keeping the solution practical for everyday use.",

learnings:
  "This project strengthened my understanding of embedded systems, IoT development, hardware and software integration, sensor-based applications, and designing technology that improves accessibility and user independence.",

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
