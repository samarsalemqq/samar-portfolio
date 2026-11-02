import Link from "next/link";
import type { CSSProperties } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import TechPhone from "@/components/TechPhone";
import SplitText from "@/components/SplitText";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="home"
      className="group container-site relative isolate flex flex-col justify-center py-16 lg:min-h-[640px] lg:py-24"
    >
      {/* Soft glow in gold, blue and teal behind everything */}
      <div aria-hidden="true" className="aurora">
        <span className="aurora-blob aurora-blob--gold" />
        <span className="aurora-blob aurora-blob--blue" />
        <span className="aurora-blob aurora-blob--teal" />
      </div>

      {/* Phone illustration: centered above the text on phones, on the right on desktop */}
      {/* The wrapper does the positioning; the fade-up animation sits on the
          inner element so its transform can't undo the vertical centering. */}
      <div className="mx-auto mb-8 w-64 sm:w-72 lg:absolute lg:right-6 lg:top-1/2 lg:mb-0 lg:w-80 lg:-translate-y-1/2 xl:right-16 xl:w-96">
        <TechPhone className="w-full animate-fade-up" />
      </div>

      <p className="rise-in mb-3 text-lg font-medium text-accent-light sm:text-xl">
        Software Engineer
      </p>

      <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        <SplitText text={siteConfig.name} by="letters" partClassName="hero-letter" />
      </h1>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/#projects"
          style={delay(750)}
          className="rise-in btn-shine group/btn inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
        >
          View My Projects
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover/btn:translate-x-0.5"
          />
        </Link>
        <a
          href={siteConfig.cvPath}
          download
          style={delay(830)}
          className="rise-in inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
        >
          <Download size={16} aria-hidden="true" />
          Download CV
        </a>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
          style={delay(930)}
          className="rise-in inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Github size={19} />
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile"
          style={delay(1000)}
          className="rise-in inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Linkedin size={19} />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Send an email"
          style={delay(1070)}
          className="rise-in inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Mail size={19} />
        </a>
      </div>
    </section>
  );
}
