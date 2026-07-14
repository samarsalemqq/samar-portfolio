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

export const defaultTechIcon: IconType = Code2;

export function getTechIcon(name: string): IconType {
  return techIcons[name] ?? defaultTechIcon;
}
