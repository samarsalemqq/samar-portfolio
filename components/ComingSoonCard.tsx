import { Clock3 } from "lucide-react";

export default function ComingSoonCard() {
  return (
    <article className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-2xl hover:shadow-accent/10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal-lighter">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-charcoal-lighter to-charcoal-light blur-md" />
      </div>
 
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3 opacity-50 blur-sm">
          <span className="block h-3 w-20 rounded-full bg-gray-400" />
          <span className="block h-5 w-24 rounded-full border border-charcoal-border" />
        </div>
 
        {/* Blurred title */}
        <span className="mt-4 block h-6 w-3/4 rounded-md bg-gray-300 opacity-40 blur-sm" />
 
        <div className="mt-3 space-y-2 opacity-30 blur-sm">
          <span className="block h-3 w-full rounded bg-gray-400" />
          <span className="block h-3 w-full rounded bg-gray-400" />
          <span className="block h-3 w-2/3 rounded bg-gray-400" />
        </div>
 
        {/* Blurred role line */}
        <span className="mt-3 block h-3 w-1/3 rounded bg-gray-500 opacity-30 blur-sm" />
 
        {/* Blurred tech tags */}
        <div className="mt-4 flex flex-wrap gap-2 opacity-40 blur-sm">
          <span className="block h-6 w-16 rounded-full bg-charcoal-lighter" />
          <span className="block h-6 w-20 rounded-full bg-charcoal-lighter" />
          <span className="block h-6 w-14 rounded-full bg-charcoal-lighter" />
        </div>
 
       
        <div className="mt-auto h-9 pt-5" aria-hidden="true" />
      </div>
 
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-charcoal/65 px-6 text-center">
    <Clock3
    size={35}
    strokeWidth={1.7}
    className="text-accent-light"
    aria-hidden="true"
  />

  <p className="text-xl font-semibold text-white sm:text-2xl">
    Coming Soon
  </p>

  <p className="max-w-xs text-sm leading-relaxed text-gray-400">
    More projects are on the way.
  </p>
</div>
    </article>
  );
}
 