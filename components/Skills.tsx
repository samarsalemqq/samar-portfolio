import type { CSSProperties } from "react";
import { Smartphone, Code2, Server, Cloud, Palette, Wrench, Sparkles } from "lucide-react";
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
    title: "Backend & Databases",
    icon: Server,
    skills: ["REST APIs", "Firebase", "Firebase Firestore", "SQL", "JSON"],
  },
  {
    title: "Cloud (AWS)",
    icon: Cloud,
    skills: ["AWS Lambda", "Amazon S3", "DynamoDB", "IAM"],
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

// Every skill once, for the slow strip above the cards.
const allSkills = skillGroups.flatMap((group) => group.skills);

export default function Skills() {
  return (
    <section id="skills" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & technologies"
        description="What I reach for when designing and building products."
        icon={Sparkles}
      />

      {/* Decorative: the same skills are listed in the cards below. The strip
          holds its badges twice so the loop has no seam. */}
      <div aria-hidden="true" className="marquee mb-10">
        <div className="marquee-track">
          {[...allSkills, ...allSkills].map((skill, index) => (
            <TechBadge key={`${skill}-${index}`} name={skill} size="md" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <div
            key={title}
            data-reveal
            data-spot
            className="spot rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            style={{ "--d": `${(index % 3) * 90}ms` } as CSSProperties}
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
