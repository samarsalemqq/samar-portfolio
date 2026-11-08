import { siteConfig } from "@/data/siteConfig";
import BackToTopButton from "@/components/BackToTopButton";
import { Github, Linkedin } from "lucide-react";
import { getDictionary } from "@/lib/preferences";

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-charcoal-light hover:text-ink";

// Minimal footer: name, copyright, GitHub + LinkedIn, and a back-to-top button.
export default function Footer() {
  const t = getDictionary();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-border">
      <div className="container-site flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          {t.name} &copy; {year}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.a11y.github}
            className={iconLink}
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.a11y.linkedin}
            className={iconLink}
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>

          <BackToTopButton label={t.a11y.backToTop} />
        </div>
      </div>
    </footer>
  );
}
