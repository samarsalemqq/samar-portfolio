import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TimelineCard from "@/components/TimelineCard";

// Work history data. Edit or add entries here — TimelineCard handles the layout.
const experience = [
  {
    company: "King Salman Global Academy for Arabic Language",
    role: "Software Engineer",
    description:
      "Building mobile applications with API integration, WebView-based games, and TestFlight/Android deployment.",
    tech: ["React Native", "Expo", "REST APIs", "TestFlight"],
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
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
