import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// Formal degree(s). Add more objects here if you complete further education.
const degrees = [
  {
    institution: "Imam Mohammad Ibn Saud Islamic University",
    program: "Bachelor of Information Technology",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <SectionHeading eyebrow="Education" title="Education" icon={GraduationCap} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {degrees.map(({ institution, program }, index) => (
          <div
            key={institution}
            className="animate-fade-up rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-colors hover:border-accent/40"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
              <GraduationCap size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-white">{institution}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{program}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
