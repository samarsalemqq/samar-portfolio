import type { IconType } from "react-icons";
import {
  SiSwift,
  SiExpo,
  SiReact,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiXcode,
  SiHtml5,
  SiCss3,
  SiVisualstudiocode,
  SiArduino,
  SiTelegram,
  SiApple,
} from "react-icons/si";
import {
  Layers,
  Database,
  Webhook,
  FileJson,
  MapPin,
  LocateFixed,
  AppWindow,
  Layout,
  ClipboardCheck,
  Users,
  Rocket,
  Activity,
  Satellite,
  Code2,
} from "lucide-react";

// Maps a technology name (as used in data/projects.ts and Skills.tsx) to an
// icon. Prefer official brand icons (Simple Icons, via react-icons/si) and
// fall back to a Lucide icon when no official logo exists.
//
// To add a new technology: add a "Name": Icon entry below. Anything not
// found here falls back to a generic code icon, so nothing ever breaks.
export const techIcons: Record<string, IconType> = {
  // Mobile
  Swift: SiSwift,
  SwiftUI: Layers,
  SwiftData: Database,
  "React Native": SiReact,
  Expo: SiExpo,
  iOS: SiApple,

  // Frontend
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,

  // Backend & APIs
  "REST APIs": Webhook,
  "REST API": Webhook,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Firebase: SiFirebase,
  JSON: FileJson,

  // Databases
  SQL: Database,
  "Firebase Firestore": SiFirebase,

  // UI/UX
  Figma: SiFigma,
  Wireframing: Layout,
  Wireframes: Layout,
  Prototyping: Layers,
  Prototypes: Layers,
  "Usability Testing": ClipboardCheck,
  "User Research": Users,

  // Tools
  Git: SiGit,
  GitHub: SiGithub,
  Xcode: SiXcode,
  "VS Code": SiVisualstudiocode,
  Postman: SiPostman,
  TestFlight: Rocket,

  // Hardware / misc project tech
  Arduino: SiArduino,
  Sensors: Activity,
  GPS: Satellite,
  "Telegram Bot": SiTelegram,
  WebView: AppWindow,
  MapKit: MapPin,
  CoreLocation: LocateFixed,
};

// Generic fallback used for any technology name not found in the map above.
export const defaultTechIcon: IconType = Code2;

export function getTechIcon(name: string): IconType {
  return techIcons[name] ?? defaultTechIcon;
}
