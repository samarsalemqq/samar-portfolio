import { Smartphone, Code2, Server, Database, Palette, Wrench, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TechBadge from "@/components/TechBadge";

// Skills grouped by category. Edit the arrays below to update the site.
const skillGroups = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Swift", "SwiftUI", "React Native", "Expo"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["REST APIs", "Firebase", "JSON"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "Firebase Firestore"],
  },
  {
    title: "UI/UX",
    icon: Palette,
    skills: ["Figma", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Xcode", "VS Code", "Postman", "TestFlight"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & technologies"
        description="What I reach for when designing and building products."
        icon={Sparkles}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <div
            key={title}
            className="animate-fade-up rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
