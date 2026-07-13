"use client";

import { useEffect, useRef } from "react";

// A very subtle light that follows the cursor within the parent section.
// Purely decorative (pointer-events-none, aria-hidden) and only visible
// while hovering, so it never gets in the way of reading or clicking.
// Requires the parent element to have `relative group` in its className.
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const parent = glow?.parentElement;
    if (!glow || !parent) return;

    const handleMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      glow.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      glow.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(480px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(139,92,246,0.12), transparent 70%)",
      }}
    />
  );
}
