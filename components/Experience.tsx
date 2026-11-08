import SectionHeading from "@/components/SectionHeading";
import TimelineCard from "@/components/TimelineCard";
import { getDictionary } from "@/lib/preferences";

// Work history lives in data/i18n.ts, in both languages. TimelineCard
// handles the layout.
export default function Experience() {
  const { experience } = getDictionary();

  return (
    <section id="experience" className="container-site py-14 lg:py-20">
      <SectionHeading title={experience.title} />

      <div className="max-w-2xl">
        {experience.items.map((item, index) => (
          <TimelineCard
            key={item.company}
            company={item.company}
            roles={item.roles}
            current={item.current}
            isLast={index === experience.items.length - 1}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
