import { Cloud, Code2, Database } from "lucide-react";
import { SiApple, SiReact } from "react-icons/si";

// Hero illustration: a glowing phone mockup with floating tech tiles
// (Apple, React, code, cloud, data) over a faint grid. Pure markup and CSS
// (the motion lives in app/globals.css under "Tech phone"), so it adds no
// client JavaScript. People who ask for reduced motion get a still image.
export default function TechPhone({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`tech-phone relative aspect-square ${className}`}>
      {/* Faint grid that fades out toward the edges */}
      <div className="tech-grid absolute inset-0" />

      {/* Soft gold glow behind the phone */}
      <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />

      {/* Phone */}
      <div className="tech-phone-body absolute left-1/2 top-1/2 flex h-[82%] w-[44%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[1.75rem] border border-charcoal-border bg-gradient-to-b from-charcoal-lighter to-charcoal p-[6%] shadow-[0_0_50px_-12px_rgba(217,164,65,0.45)]">
        {/* Dynamic island */}
        <div className="mx-auto h-[3.5%] w-[38%] rounded-full bg-charcoal" />

        {/* Status dots */}
        <div className="mt-[10%] flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
        </div>

        {/* Search bar */}
        <div className="mt-[8%] h-[9%] rounded-xl border border-charcoal-border bg-charcoal-light" />

        {/* Content card */}
        <div className="mt-[6%] flex-[0_0_22%] rounded-xl border border-accent/25 bg-accent/10 p-[8%]">
          <div className="h-1.5 w-3/4 rounded-full bg-accent/60" />
          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-gray-600" />
          <div className="mt-2 h-1.5 w-2/3 rounded-full bg-gray-700" />
        </div>

        {/* Tiles */}
        <div className="mt-[6%] grid grid-cols-3 gap-[6%]">
          <div className="aspect-square rounded-lg bg-charcoal-light" />
          <div className="aspect-square rounded-lg bg-charcoal-light" />
          <div className="aspect-square rounded-lg bg-charcoal-light" />
        </div>

        {/* Primary button */}
        <div className="mt-auto h-[9%] rounded-xl bg-gradient-to-r from-accent-dark to-accent-light shadow-[0_0_24px_-4px_rgba(217,164,65,0.6)]" />
      </div>

      {/* Floating tech tiles, all in the site's gold */}
      <div className="tech-tile left-[4%] top-[16%]" style={{ animationDelay: "0s" }}>
        <SiApple className="h-1/2 w-1/2 text-accent" />
      </div>
      <div className="tech-tile right-[4%] top-[6%]" style={{ animationDelay: "-1.2s" }}>
        <SiReact className="h-1/2 w-1/2 text-accent" />
      </div>
      <div className="tech-tile bottom-[18%] left-[6%]" style={{ animationDelay: "-2.4s" }}>
        <Code2 className="h-1/2 w-1/2 text-accent" strokeWidth={2.25} />
      </div>
      <div className="tech-tile right-[2%] top-[40%]" style={{ animationDelay: "-0.6s" }}>
        <Cloud className="h-1/2 w-1/2 text-accent" strokeWidth={2.25} />
      </div>
      <div className="tech-tile bottom-[6%] right-[6%]" style={{ animationDelay: "-3.1s" }}>
        <Database className="h-1/2 w-1/2 text-accent" strokeWidth={2.25} />
      </div>
    </div>
  );
}
