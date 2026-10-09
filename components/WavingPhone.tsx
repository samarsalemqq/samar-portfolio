// A small line-drawn phone that waves hello, with a code symbol on its
// screen. Pure SVG and CSS (the animations live in app/globals.css under
// "Waving phone"), so it adds no dependencies. It waves a few times when the
// page loads and again whenever you hover it; people who ask their device
// for reduced motion get a still phone.
export default function WavingPhone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="10 44 200 200"
      role="img"
      aria-label="A phone waving hello"
      className={`mascot text-accent ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="mascot-body">
        {/* Waving arm (rotates around the shoulder) */}
        <g className="mascot-arm">
          <path d="M72 150c-18-6-30-22-34-42" />
          <circle cx="37" cy="102" r="8" className="fill-charcoal-lighter" />
        </g>

        {/* Resting arm */}
        <path d="M168 150c14 6 20 18 18 30" />
        <circle cx="185" cy="186" r="8" className="fill-charcoal-lighter" />

        {/* Phone */}
        <rect
          x="72"
          y="58"
          width="96"
          height="170"
          rx="22"
          className="fill-charcoal-lighter"
        />
        <path d="M108 74h24" />

        {/* Face */}
        <g className="mascot-eyes" fill="currentColor" stroke="none">
          <ellipse cx="104" cy="118" rx="6" ry="8" />
          <ellipse cx="136" cy="118" rx="6" ry="8" />
        </g>
        <path d="M106 140q14 12 28 0" />

        {/* Code symbol on the screen */}
        <path d="M106 176l-11 11 11 11m28-22 11 11-11 11m-8-26-12 30" strokeWidth="3.5" />
      </g>
    </svg>
  );
}
