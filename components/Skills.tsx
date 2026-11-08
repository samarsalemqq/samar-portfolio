import type { CSSProperties } from "react";
import { Smartphone, Code2, Server, Cloud, Palette, Wrench } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import TechBadge from "@/components/TechBadge";
import SkillsMarquee from "@/components/SkillsMarquee";
import { getDictionary } from "@/lib/preferences";

// Skills grouped by category. Edit the arrays below to update the site.
const skillGroups = [
  {
    key: "mobile",
    icon: Smartphone,
    skills: ["Swift", "SwiftUI", "React Native", "Expo"],
  },
  {
    key: "frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    key: "backend",
    icon: Server,
    skills: ["REST APIs", "Firebase", "Firebase Firestore", "SQL", "JSON"],
  },
  {
    key: "cloud",
    icon: Cloud,
    skills: ["AWS Lambda", "Amazon S3", "DynamoDB", "IAM"],
  },
  {
    key: "design",
    icon: Palette,
    skills: ["Figma", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Xcode", "VS Code", "Postman", "TestFlight"],
  },
] as const;

// Every skill once, for the slow strip above the cards.
const allSkills = skillGroups.flatMap((group) => group.skills);

export default function Skills() {
  const { skills: copy } = getDictionary();

  return (
    <section id="skills" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading
        title={copy.title}
        description={copy.description}
      />

      {/* The strip holds its badges twice so the loop has no seam. */}
      <SkillsMarquee pauseLabel={copy.pauseMotion} playLabel={copy.playMotion}>
        {[...allSkills, ...allSkills].map((skill, index) => (
          <TechBadge key={`${skill}-${index}`} name={skill} size="md" />
        ))}
      </SkillsMarquee>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ key, icon: Icon, skills }, index) => (
          <div
            key={key}
            data-reveal
            data-spot
            className="spot rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            style={{ "--d": `${(index % 3) * 90}ms` } as CSSProperties}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="font-medium text-ink">{copy.groups[key]}</h3>
            </div>
            <div dir="ltr" className="flex flex-wrap gap-2 rtl:justify-end">
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
