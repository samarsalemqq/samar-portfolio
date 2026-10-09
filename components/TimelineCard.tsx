interface TimelineCardProps {
  company: string;
  role: string;
  description: string;
  /** Optional tech chips shown under the description (e.g. React Native, Expo). */
  tech?: string[];
  isLast?: boolean;
  /** The job you hold now: its dot on the timeline pulses. */
  current?: boolean;
}

// Reusable card used for every entry in the Experience timeline.
export default function TimelineCard({
  company,
  role,
  description,
  tech,
  isLast = false,
  current = false,
}: TimelineCardProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <span className="relative mt-1.5 flex h-3 w-3 shrink-0">
          {/* Pulsing ring, only on the current job. Hidden for people who
              ask their device for reduced motion. */}
          {current ? (
            <span
              aria-hidden="true"
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden"
            />
          ) : null}
          <span className="relative h-3 w-3 rounded-full bg-accent shadow-[0_0_0_4px_rgba(217,164,65,0.15)]" />
        </span>
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
