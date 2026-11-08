import type { CSSProperties } from "react";

export interface TimelineRole {
  role: string;
  /** Optional date range, e.g. "Jun 2026 – Present". */
  period?: string;
  description: string;
  /** Optional tech chips shown under the description (e.g. React Native, Expo). */
  tech?: string[];
}

interface TimelineCardProps {
  company: string;
  /** One or more roles held at this company, newest first. */
  roles: TimelineRole[];
  isLast?: boolean;
  /** The job you hold now: its dot on the timeline pulses. */
  current?: boolean;
  /** Position in the timeline, used to stagger the entrance. */
  index?: number;
}

// Reusable card used for every entry in the Experience timeline.
// A company with several roles (e.g. trainee, then hired) shows them
// stacked inside one card, newest first.
export default function TimelineCard({
  company,
  roles,
  isLast = false,
  current = false,
  index = 0,
}: TimelineCardProps) {
  const isMultiRole = roles.length > 1;

  return (
    // Rises in on scroll; its stretch of the rail fills with gold as the
    // card scrolls past.
    <div
      data-reveal
      data-scrub
      className="relative flex gap-6"
      style={{ "--d": `${index * 120}ms` } as CSSProperties}
    >
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
        {!isLast && (
          <span className="relative mt-2 w-px flex-1 bg-charcoal-border">
            <span
              aria-hidden="true"
              className="rail-fill absolute inset-0 bg-gradient-to-b from-accent to-accent/30"
            />
          </span>
        )}
      </div>

      <div
        data-spot
        className="spot mb-10 flex-1 rounded-2xl border border-charcoal-border bg-charcoal-light p-6 transition-colors hover:border-accent/40 sm:p-7"
      >
        <h3 className="text-lg font-medium text-ink">{company}</h3>

        <div className={isMultiRole ? "mt-4 space-y-6" : ""}>
          {roles.map((item, index) => (
            <div
              key={`${item.role}-${item.period ?? index}`}
              className={
                isMultiRole
                  ? "relative border-s border-charcoal-border ps-5"
                  : ""
              }
            >
              {isMultiRole ? (
                <span
                  aria-hidden="true"
                  className={`absolute -start-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                    index === 0 ? "bg-accent" : "bg-charcoal-border"
                  }`}
                />
              ) : null}
              <p
                className={`text-sm font-medium text-accent-light ${
                  isMultiRole ? "" : "mt-1"
                }`}
              >
                {item.role}
              </p>
              {item.period ? (
                <p className="mt-0.5 text-xs text-muted">{item.period}</p>
              ) : null}
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.tech && item.tech.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-charcoal-lighter px-3 py-1 text-xs text-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
