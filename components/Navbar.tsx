"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Small icon-only button shared by the desktop social row (GitHub/LinkedIn/Email).
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-charcoal-light hover:text-white"
    >
      <Icon size={18} />
    </a>
  );
}

// Section ids the nav links point to, derived from siteConfig so this never
// drifts out of sync with the actual nav items.
const sectionIds = siteConfig.nav.map((item) => item.href.replace("/#", ""));

// Sticky navbar with a mobile-friendly slide-down menu and a scrollspy
// indicator that highlights whichever section is currently in view.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Add a subtle background/border once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view so the matching nav link can
  // light up — the small touch that makes the nav feel alive rather than
  // just a static list of links.
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
          ? "border-b border-white/[0.08] bg-charcoal/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-site flex items-center justify-between py-4"
        aria-label="Primary"
      >
        <Link
          href="/#home"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name}, back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-sm font-semibold text-white shadow-sm shadow-accent/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            {siteConfig.initials}
          </span>
          <span className="hidden text-sm font-medium text-gray-400 transition-colors group-hover:text-white sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links, with a small underline that lights up for the
            section currently in view */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const isActive = activeId === item.href.replace("/#", "");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-1 lg:flex">
          <IconButton href={siteConfig.github} label="GitHub profile" icon={Github} />
          <IconButton href={siteConfig.linkedin} label="LinkedIn profile" icon={Linkedin} />
          <IconButton href={`mailto:${siteConfig.email}`} label="Send an email" icon={Mail} />

          <a
            href={siteConfig.cvPath}
            download
            className="group/cv ml-3 inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-4 py-2 text-sm font-medium text-white transition-all hover:border-accent/50 hover:bg-charcoal-lighter"
          >
            <Download
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/cv:translate-y-0.5"
            />
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-charcoal-border bg-charcoal px-6 pb-6 lg:hidden animate-fade-in"
        >
          <ul className="flex flex-col gap-1 pt-4">
            {siteConfig.nav.map((item, index) => {
              const isActive = activeId === item.href.replace("/#", "");
              return (
                <li
                  key={item.href}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-charcoal-light hover:text-white ${
                      isActive ? "text-white" : "text-gray-200"
                    }`}
                  >
                    <item.icon
                      size={18}
                      className={isActive ? "text-accent-light" : "text-gray-500"}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex items-center gap-2">
            <IconButton href={siteConfig.github} label="GitHub profile" icon={Github} />
            <IconButton href={siteConfig.linkedin} label="LinkedIn profile" icon={Linkedin} />
            <IconButton href={`mailto:${siteConfig.email}`} label="Send an email" icon={Mail} />
          </div>

          <a
            href={siteConfig.cvPath}
            download
            onClick={closeMenu}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-4 py-3 text-sm font-medium text-white"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        </div>
      ) : null}
    </header>
  );
}
