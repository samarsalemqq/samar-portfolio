import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Small icon shown inside the eyebrow pill, giving each section a quick visual identity. */
  icon?: LucideIcon;
  /** Gap below the heading block, before the section's content starts. Defaults to 48px. */
  spacing?: string;
}

// Reused at the top of every homepage section for a consistent, premium look.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  spacing = "mb-12",
}: SectionHeadingProps) {
  return (
    <div className={`${spacing} max-w-2xl animate-fade-up`}>
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent-light">
        {Icon ? <Icon size={14} aria-hidden="true" /> : null}
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-gray-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
