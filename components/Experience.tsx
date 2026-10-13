import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TimelineCard, { type TimelineRole } from "@/components/TimelineCard";

// Work history data. Edit or add entries here — TimelineCard handles the layout.
// List roles at the same company newest first; they share one card.
const experience: { company: string; roles: TimelineRole[]; current: boolean }[] = [
  {
    company: "King Salman Global Academy for Arabic Language",
    current: true,
    roles: [
      {
        role: "Mobile Application Developer",
        period: "Jun 2026 – Present",
        description:
          "Build mobile apps and ship new features end to end with React Native, Expo, and TypeScript. Test apps and fix bugs to keep releases stable, ship builds through TestFlight and the App Store, and collaborate with designers, developers, and the backend team.",
        tech: ["React Native", "Expo", "TypeScript", "TestFlight", "App Store"],
      },
      {
        role: "Mobile Application Developer Trainee (Tamheer)",
        period: "Nov 2025 – May 2026",
        description:
          "Designed and built the Riyadh Dictionary app, from the UI redesign in Figma to its App Store release. Developed cross-platform features in React Native and TypeScript and integrated REST APIs and Firebase.",
        tech: ["React Native", "TypeScript", "REST APIs", "Firebase", "Figma"],
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
          "Completed an 8-week rotational internship across the networks, cybersecurity, data center, and web teams.",
        tech: ["Networking", "Cybersecurity", "Data Center", "Web"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" icon={Briefcase} />

      <div className="max-w-2xl animate-fade-up">
        {experience.map((item, index) => (
          <TimelineCard
            key={item.company}
            company={item.company}
            roles={item.roles}
            current={item.current}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
