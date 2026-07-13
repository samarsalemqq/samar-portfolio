import { Award, Building2, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// Non-degree programs — kept separate from Education and Experience since
// they're neither a formal degree nor a job.
const programs = [
  {
    institution: "Apple Developer Academy",
    program: "iOS development, SwiftUI & user-centered design",
    duration: "9-Month Program",
    icon: Award,
  },
  {
    institution: "Tuwaiq Academy",
    program: "UI/UX Design Bootcamp",
    duration: undefined,
    icon: Building2,
  },
];

// Modern horizontal cards for programs and bootcamps outside of formal
// education or paid work experience.
export default function ProfessionalPrograms() {
  return (
    <section
      id="professional-programs"
      className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
    >
      <SectionHeading eyebrow="Programs" title="Professional Programs" icon={Award} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {programs.map(({ institution, program, duration, icon: Icon }, index) => (
          <div
            key={institution}
            className="animate-fade-up rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-colors hover:border-accent/40"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
              <Icon size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-semibold text-white">{institution}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{program}</p>
            {duration ? (
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-charcoal-border px-3 py-1 text-xs text-gray-400">
                <Calendar size={12} aria-hidden="true" />
                {duration}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
