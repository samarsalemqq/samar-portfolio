"use client";

import { useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

// The slow strip of skills, with a button beside it that stops and restarts
// the movement. The strip is decorative: the same skills are listed in the
// cards below. Under reduced motion it never moves, so the button is hidden.
export default function SkillsMarquee({
  pauseLabel,
  playLabel,
  children,
}: {
  pauseLabel: string;
  playLabel: string;
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  const label = paused ? playLabel : pauseLabel;

  return (
    <div className="mb-10 flex items-center gap-3">
      <div aria-hidden="true" className={`marquee min-w-0 flex-1 ${paused ? "is-paused" : ""}`}>
        <div className="marquee-track">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((prev) => !prev)}
        aria-label={label}
        title={label}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal-border text-muted transition-colors hover:border-accent hover:text-ink motion-reduce:hidden"
      >
        {paused ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}
      </button>
    </div>
  );
}
