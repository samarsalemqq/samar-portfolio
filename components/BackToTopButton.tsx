"use client";

import { ArrowUp } from "lucide-react";

// Small floating-style button at the bottom of the footer that scrolls
// smoothly back to the top of the page.
export default function BackToTopButton({ label }: { label: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border bg-charcoal-light text-soft transition-colors hover:border-accent/50 hover:text-ink"
    >
      <ArrowUp size={18} />
    </button>
  );
}
