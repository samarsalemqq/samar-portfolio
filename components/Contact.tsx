import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { getDictionary } from "@/lib/preferences";

const outlineLink =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal-border text-muted transition-colors hover:border-accent hover:text-ink";

// The page's finale: one clear way to reach out, plus GitHub and LinkedIn.
export default function Contact() {
  const t = getDictionary();

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

        <h2 className="text-balance text-4xl font-medium tracking-tight text-ink">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
          {t.contact.body}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-shine inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dark"
          >
            <Mail size={17} aria-hidden="true" />
            {t.contact.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.a11y.github}
            className={outlineLink}
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.a11y.linkedin}
            className={outlineLink}
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
