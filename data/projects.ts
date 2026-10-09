import { Project } from "@/types/project";


export const projects: Project[] = [
 {
  slug: "suhail",
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
    title: "Riyadh Dictionary",
    published: true,
    category: "Mobile Application",
    status: "App Store & Google Play",
    tech: [
      "UI/UX Design",
      "Figma",
      "React Native",
      "Expo",
      "TypeScript",
      "REST APIs",
      "Core ML",
      "iOS Share Extension",
      "CocoaPods",
    ],
    description:
      "A redesign of معجم الرياض, the King Salman Global Academy's Contemporary Arabic Lexicon of 120,000+ entries, rebuilt for iOS and Android with voice search, camera lookup, and a native iOS Share Extension.",
    roleTitle: "Product Designer & React Native Developer",
    overview:
      "Riyadh Dictionary (معجم الرياض) is the mobile app for the King Salman Global Academy for Arabic Language's Contemporary Arabic Lexicon, more than 120,000 entries. I redesigned the existing app and developed new features for it, then built the redesigned version for iOS and Android in React Native, Expo, and TypeScript. Beyond typing a word, you can search by voice, point the camera at text or an object and let on-device Core ML find the match, or look a word up from inside another app through a native iOS Share Extension. The app is available on the App Store and Google Play.",
    problem:
      "The dictionary held a world-class Arabic dataset, but the mobile experience didn't do it justice: navigation felt heavy, entries were hard to scan, and every lookup meant stopping to type. A large, standards-based lexicon deserved an interface as considered as its content.",
    solution:
      "I rebuilt the product from the ground up — redesigning every core screen around how people actually search, then implementing it on a clean, layered React Native architecture. Word entries were restructured for fast scanning, Arabic and right-to-left typography were treated as a first-class concern, and three quicker ways in — voice, Share Extension, and camera recognition — were layered on so the dictionary meets users where they already are.",
    role:
      "I worked across the redesign and the build. On the design side, I reworked the information architecture, navigation, and core screens into an Arabic-first, right-to-left interface. On the build side, I developed the app in React Native, Expo, and TypeScript, integrated the Riyadh Contemporary Arabic Lexicon REST API, and organized the code into reusable components, hooks, and API services. I also integrated the native iOS pieces: the Share Extension and the Core ML camera recognition.",
    features: [
      "Redesigned Arabic-first interface with right-to-left navigation",
      "Word details: meanings, examples, synonyms, antonyms, and word type",
      "Arabic voice search",
      "Browse by letter and filter by word type",
      "Favorites for saved words",
      "Native iOS Share Extension: look up a word from any other app",
      "Camera lookup with on-device Core ML",
    ],
    challenges:
      "Designing for Arabic meant giving typography, diacritics, right-to-left navigation, and dense linguistic entries careful attention, so that information stays easy to scan. On the build side, the Share Extension and camera recognition required working with native iOS code alongside an Expo-based React Native app. And as features grew, keeping API services, response mapping, hooks, screens, and components organized kept data handling clearly separate from the interface.",
    learnings:
      "Taking an existing product through a redesign to a release on both stores taught me to design with the platform's constraints in mind, and to build with the intent of the design intact. I also went deeper on Arabic-first mobile design, structured React Native architecture, and bringing native iOS features into an Expo app.",
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
