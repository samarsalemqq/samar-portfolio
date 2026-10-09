
export default function WavingCat({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="A cat waving hello"
      className={`cat text-accent ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Speech bubble */}
      <g transform="translate(14 -10)">
      <g className="cat-bubble">
        <path
          d="M150 22h58a14 14 0 0 1 14 14v26a14 14 0 0 1-14 14h-34l-14 14v-14h-10a14 14 0 0 1-14-14V36a14 14 0 0 1 14-14z"
          className="fill-charcoal-lighter"
        />
        <text
          x="179"
          y="59"
          textAnchor="middle"
          stroke="none"
          fill="currentColor"
          fontSize="28"
          fontWeight="700"
        >
          hi!
        </text>
      </g>
      </g>

      {/* Tail */}
      <path
        className="cat-tail"
        d="M146 196c26 6 46-6 44-28-1-12-12-18-20-12"
      />

      {/* Body */}
      <path
        d="M62 214c-6-34 6-68 38-68s44 34 38 68z"
        className="fill-charcoal-lighter"
      />

      {/* Waving paw (rotates around the shoulder) */}
      <g className="cat-paw">
        <path
          d="M70 164c-16-10-30-30-34-52a11 11 0 0 1 21-5c5 16 15 30 27 39"
          className="fill-charcoal-lighter"
        />
      </g>

      {/* Resting paw */}
      <path d="M112 214v-22a9 9 0 0 1 18 0v22" className="fill-charcoal-lighter" />

      {/* Head */}
      <path
        d="M58 60 54 24l30 18a52 52 0 0 1 32 0l30-18-4 36a46 46 0 1 1-84 0z"
        className="fill-charcoal-lighter"
      />

      {/* Face */}
      <g className="cat-eyes" fill="currentColor" stroke="none">
        <ellipse cx="82" cy="84" rx="6" ry="8" />
        <ellipse cx="118" cy="84" rx="6" ry="8" />
      </g>
      <path d="M96 100h8l-4 5z" fill="currentColor" strokeWidth="2" />
      <path d="M100 105c0 6-7 9-12 6m12-6c0 6 7 9 12 6" strokeWidth="3" />
      <path d="M64 96 44 92m20 12-20 4m92-12 20-4m-20 12 20 4" strokeWidth="2.5" />
    </svg>
  );
}
