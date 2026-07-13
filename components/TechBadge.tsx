import { getTechIcon } from "@/data/techIcons";

interface TechBadgeProps {
  name: string;
  /** Slightly larger, more padded variant used on the project detail page. */
  size?: "sm" | "md";
}

// A single technology badge: official brand icon (or a sensible Lucide
// fallback) plus the name, in a soft rounded pill. Used on project cards,
// project detail pages, and the Skills section — one component, one look.
export default function TechBadge({ name, size = "sm" }: TechBadgeProps) {
  const Icon = getTechIcon(name);
  const isMd = size === "md";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-charcoal-border bg-charcoal-lighter text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-light ${
        isMd ? "px-3.5 py-2 text-sm" : "px-3 py-1.5 text-xs"
      }`}
    >
      <Icon size={isMd ? 16 : 13} aria-hidden="true" />
      {name}
    </span>
  );
}
