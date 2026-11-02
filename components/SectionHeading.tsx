import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import SplitText from "@/components/SplitText";

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
// As it scrolls into view the eyebrow appears, the title rises word by word,
// then the description follows.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  spacing = "mb-12",
}: SectionHeadingProps) {
  return (
    <div data-reveal="split" className={`${spacing} max-w-2xl`}>
      <div className="split-part">
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          {Icon ? <Icon size={14} aria-hidden="true" /> : null}
          {eyebrow}
        </p>
      </div>
      <h2
        className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        style={{ "--d": "90ms" } as CSSProperties}
      >
        <SplitText text={title} />
      </h2>
      {description ? (
        <div className="split-part" style={{ "--i": 6 } as CSSProperties}>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      ) : null}
    </div>
  );
}
