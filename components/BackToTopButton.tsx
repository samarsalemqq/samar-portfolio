"use client";

import { ArrowUp } from "lucide-react";

// Small floating-style button at the bottom of the footer that scrolls
// smoothly back to the top of the page.
export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-border bg-charcoal-light text-gray-300 transition-colors hover:border-accent/50 hover:text-white"
    >
      <ArrowUp size={18} />
    </button>
  );
}
