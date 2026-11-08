import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";
import { localizeProject } from "@/data/projects.ar";
import ProjectIcon from "@/components/ProjectIcon";
import { getDictionary, getLang } from "@/lib/preferences";

export default function Hero() {
  const t = getDictionary();
  const lang = getLang();
  const apps = projects
    .filter((project) => project.published && project.icon)
    .map((project) => localizeProject(project, lang));

  return (
    <section id="home" className="hero-sky">
      {apps.map((app) => (
        <Link
          key={app.slug}
          href={`/projects/${app.slug}`}
          className={`hero-app hero-app--${app.slug}`}
        >
          <ProjectIcon project={app} size={152} className="hero-app-art" />
          <span className="text-[0.8rem] font-normal text-muted">{app.title}</span>
        </Link>
      ))}

      <div className="hero-pitch">
        <p className="mb-4 font-normal text-accent-light">{t.hero.who}</p>
        <h1 className="text-balance text-[2.3rem] font-medium leading-[1.2] tracking-tight sm:text-5xl lg:text-[3.9rem] rtl:leading-[1.32]">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-[34em] text-balance text-muted sm:text-lg">
          {t.hero.lead}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/#projects"
            className="btn-shine inline-flex min-h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dark"
          >
            {t.hero.viewProjects}
          </Link>
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex min-h-12 items-center rounded-full border border-charcoal-border bg-charcoal-light px-7 text-sm font-medium transition-colors hover:border-accent"
          >
            {t.hero.downloadCv}
          </a>
        </div>
      </div>
    </section>
  );
}
