import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TimelineCard from "@/components/TimelineCard";

// Work history data. Edit or add entries here — TimelineCard handles the layout.
const experience = [
  {
    company: "King Salman Global Academy for Arabic Language",
    role: "Mobile Application Developer",
    description:
      "Designed and built the Riyadh Dictionary app, from the UI redesign in Figma to its App Store release. Developed cross-platform apps in React Native and TypeScript, integrated REST APIs and Firebase, and shipped builds through TestFlight and App Store Connect.",
    tech: ["React Native", "TypeScript", "Expo", "REST APIs", "Firebase", "Figma", "App Store"],
    current: false,
  },
    {
    company: "Saudi Electricity Company",
    role: "IT Intern",
    description:
      "Completed an 8-week rotational internship across the networks, cybersecurity, data center, and web teams.",
    tech: ["Networking", "Cybersecurity", "Data Center", "Web"],
    current: false,
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
            role={item.role}
            description={item.description}
            tech={item.tech}
            current={item.current}
            isLast={index === experience.length - 1}
          />
        ))}
        
      </div>
    </section>
  );
}
