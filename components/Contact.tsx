import { Mail, Linkedin, Github, Download } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Premium, centered contact CTA — no form, just direct ways to reach out.
export default function Contact() {
  return (
    <section id="contact" className="container-site py-7 text-center sm:py-9 lg:py-12">
      <p className="mb-4 animate-fade-up text-sm font-medium uppercase tracking-widest text-accent-light">
        Contact
      </p>
      <h2 className="animate-fade-up text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Let&apos;s work together
      </h2>
      <p
        className="mx-auto mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-gray-400"
        style={{ animationDelay: "80ms" }}
      >
        Have a role or a project in mind? I&apos;d love to hear from you —
        reach out through any of the channels below.
      </p>

      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
        style={{ animationDelay: "160ms" }}
      >
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
        >
          <Mail size={17} aria-hidden="true" />
          Email Me
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
        >
          <Linkedin size={17} aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
        >
          <Github size={17} aria-hidden="true" />
          GitHub
        </a>
        <a
          href={siteConfig.cvPath}
          download
          className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
        >
          <Download size={17} aria-hidden="true" />
          Download CV
        </a>
      </div>
    </section>
  );
}
