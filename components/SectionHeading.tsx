import type { CSSProperties } from "react";
import SplitText from "@/components/SplitText";

interface SectionHeadingProps {
  title: string;
  description?: string;
  /** Gap below the heading block, before the section's content starts. Defaults to 28px. */
  spacing?: string;
}

// Reused at the top of every homepage section. As it scrolls into view the
// title rises word by word, then the description follows.
export default function SectionHeading({
  title,
  description,
  spacing = "mb-7",
}: SectionHeadingProps) {
  return (
    <div data-reveal="split" className={`${spacing} max-w-2xl`}>
      <h2
        className="text-balance text-3xl font-medium tracking-tight text-ink"
        style={{ "--d": "90ms" } as CSSProperties}
      >
        <SplitText text={title} />
      </h2>
      {description ? (
        <div className="split-part" style={{ "--i": 6 } as CSSProperties}>
          <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
        </div>
      ) : null}
    </div>
  );
}
