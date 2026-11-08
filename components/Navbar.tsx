"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Download, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { dictionaries, type Dictionary, type Lang, type Theme } from "@/data/i18n";

const navId = (href: string) => href.replace("/#", "") as keyof Dictionary["nav"];
const sectionIds = siteConfig.nav.map((item) => navId(item.href));

const toolClass =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-full px-2.5 text-sm text-muted transition-colors hover:bg-charcoal-light hover:text-ink";

function saveCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

// Small icon-only link used in the mobile menu's social row.
function IconButton({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-charcoal-light hover:text-ink"
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}

// Sticky navbar with a mobile-friendly slide-down menu, a scrollspy
// indicator, and the language and theme buttons.
export default function Navbar({
  lang,
  theme: initialTheme,
}: {
  lang: Lang;
  theme: Theme;
}) {
  const t = dictionaries[lang];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    saveCookie("theme", next);
  };

  // The server renders the text, so the page is refreshed in the new language.
  const toggleLanguage = () => {
    saveCookie("lang", lang === "en" ? "ar" : "en");
    router.refresh();
  };

  // Add a subtle background/border once the user scrolls past the hero, and
  // keep the reading-progress line under the bar in step with the page.
  const progressRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty(
        "--scroll",
        (max > 0 ? window.scrollY / max : 0).toFixed(4)
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view so the matching nav link can light up.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu whenever a link is clicked.
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-charcoal-border/60 bg-charcoal/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="relative flex items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <Link
          href="/#home"
          className="text-base font-medium text-ink"
          aria-label={`${t.name}, ${t.a11y.backToTop}`}
        >
          {t.name}
        </Link>

        {/* Desktop links, centered in the bar, with a small underline that
            lights up for the section currently in view */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const id = navId(item.href);
            const isActive = activeId === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative py-1 text-sm transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                  <span
                    className={`absolute -bottom-0.5 start-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.a11y.switchLanguage}
            className={toolClass}
          >
            {t.languageToggle}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.a11y.toLight : t.a11y.toDark}
            className={toolClass}
          >
            {theme === "dark" ? (
              <Sun size={19} aria-hidden="true" />
            ) : (
              <Moon size={19} aria-hidden="true" />
            )}
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            className={`${toolClass} lg:hidden`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <span
        ref={progressRef}
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent-dark via-accent to-accent"
      />

      {/* Mobile menu */}
      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-charcoal-border bg-charcoal px-6 pb-6 lg:hidden animate-fade-in"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {siteConfig.nav.map((item, index) => {
              const id = navId(item.href);
              const isActive = activeId === id;
              return (
                <li
                  key={item.href}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-md px-3 py-3 text-base transition-colors hover:bg-charcoal-light hover:text-ink ${
                      isActive ? "text-ink" : "text-soft"
                    }`}
                  >
                    <item.icon
                      size={18}
                      className={isActive ? "text-accent-light" : "text-muted"}
                      aria-hidden="true"
                    />
                    {t.nav[id]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center gap-2">
            <IconButton href={siteConfig.github} label={t.a11y.github} icon={Github} />
            <IconButton href={siteConfig.linkedin} label={t.a11y.linkedin} icon={Linkedin} />
            <IconButton href={`mailto:${siteConfig.email}`} label={t.a11y.email} icon={Mail} />
          </div>

          <a
            href={siteConfig.cvPath}
            download
            onClick={closeMenu}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-4 py-3 text-sm font-medium text-ink"
          >
            <Download size={16} aria-hidden="true" />
            {t.hero.downloadCv}
          </a>
        </div>
      ) : null}
    </header>
  );
}
