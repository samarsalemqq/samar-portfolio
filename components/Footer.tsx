import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import BackToTopButton from "@/components/BackToTopButton";

// Minimal footer: name, copyright, GitHub + LinkedIn, and a back-to-top button.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-border">
      <div className="container-site flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-500">
          {siteConfig.name} &copy; {year}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-gray-400 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
          </a>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
