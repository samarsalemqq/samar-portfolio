interface TimelineCardProps {
  company: string;
  role: string;
  description: string;
  /** Optional tech chips shown under the description (e.g. React Native, Expo). */
  tech?: string[];
  isLast?: boolean;
}

// Reusable card used for every entry in the Experience timeline.
export default function TimelineCard({
  company,
  role,
  description,
  tech,
  isLast = false,
}: TimelineCardProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.15)]" />
        {!isLast && <span className="mt-2 w-px flex-1 bg-charcoal-border" />}
      </div>

      <div className="mb-10 flex-1 rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-colors hover:border-accent/40 sm:p-7">
        <h3 className="text-lg font-semibold text-white">{company}</h3>
        <p className="mt-1 text-sm font-medium text-accent-light">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {description}
        </p>
        {tech && tech.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-charcoal-lighter px-3 py-1 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
