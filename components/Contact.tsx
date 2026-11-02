import { Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// The page's finale: a glowing panel with one clear way to reach out. The
// other links (LinkedIn, GitHub, CV) already live in the hero and navbar.
export default function Contact() {
  return (
    <section id="contact" className="container-site py-7 sm:py-9 lg:py-12">
      <div
        data-reveal
        className="relative isolate overflow-hidden rounded-[2rem] border border-charcoal-border bg-charcoal-light px-6 py-16 text-center sm:py-20"
      >
        <div aria-hidden="true" className="aurora">
          <span className="aurora-blob aurora-blob--gold" />
          <span className="aurora-blob aurora-blob--blue" />
          <span className="aurora-blob aurora-blob--teal" />
        </div>

        <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent-light">
          <Mail size={14} aria-hidden="true" />
          Contact
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-400">
          My inbox is always open.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="btn-shine mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
        >
          <Mail size={17} aria-hidden="true" />
          Email Me
        </a>
      </div>
    </section>
  );
}
