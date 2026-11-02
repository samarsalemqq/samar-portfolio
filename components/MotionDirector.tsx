"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

// Drives the homepage's scroll motion from one place: reveals ([data-reveal]),
// the Experience timeline's scroll-linked fill ([data-scrub] gets --scrub)
// and the pointer spotlight on cards ([data-spot]). Does nothing under
// reduced motion.
export default function MotionDirector() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.dataset.motionReady = "true";
    if (reduce) {
      delete root.dataset.motion;
      return;
    }
    root.dataset.motion = "on";

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => revealObserver.observe(element));

    const scrubs = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      // 0 when the top reaches 85% of the screen, 1 when the bottom reaches 45%.
      scrubs.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const start = vh * 0.85;
        const end = vh * 0.45;
        const p = (start - rect.top) / (start - end + rect.height);
        element.style.setProperty("--scrub", clamp(p, 0, 1).toFixed(3));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // Cards light up where the pointer is.
    const cleanups: Array<() => void> = [];
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer) {
      document.querySelectorAll<HTMLElement>("[data-spot]").forEach((card) => {
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
        };
        card.addEventListener("pointermove", move);
        cleanups.push(() => card.removeEventListener("pointermove", move));
      });
    }

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
