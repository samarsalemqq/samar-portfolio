import Link from "next/link";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CursorGlow from "@/components/CursorGlow";
import WavingPhone from "@/components/WavingPhone";

export default function Hero() {
  return (
    <section
      id="home"
      className="group container-site relative flex flex-col justify-center overflow-hidden py-16 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
      />
      <CursorGlow />

      {/* The waving phone: small above the text on phones, large on the right on desktop */}
      <WavingPhone className="relative mb-6 w-24 animate-fade-up lg:absolute lg:right-12 lg:top-1/2 lg:mb-0 lg:w-64 lg:-translate-y-1/2 xl:right-24" />

        <p className="mb-3 animate-fade-up text-lg font-medium text-accent-light sm:text-xl">
        Software Engineer
      </p>

      <h1
        className="animate-fade-up text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
        style={{ animationDelay: "80ms" }}
      >
        {siteConfig.name}
      </h1>

      <p
        className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-gray-400 sm:text-xl"
        style={{ animationDelay: "160ms" }}
      >
        I build mobile apps for Arabic speakers, in SwiftUI and React Native.
        My latest, Suhail, is an off-road safety app live on the App Store.
      </p>

      <div
        className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <Link
          href="/#projects"
          className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
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
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
        >
          <Download size={16} aria-hidden="true" />
          Download CV
        </a>
      </div>

      <div
        className="mt-10 flex items-center gap-3 animate-fade-up"
        style={{ animationDelay: "320ms" }}
      >
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Github size={19} />
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Linkedin size={19} />
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label="Send an email"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal-border text-gray-400 transition-colors hover:border-accent/40 hover:text-white"
        >
          <Mail size={19} />
        </a>
      </div>
    </section>
  );
}
