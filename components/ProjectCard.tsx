import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import ProjectIcon from "@/components/ProjectIcon";
import { getDictionary } from "@/lib/preferences";

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-charcoal-lighter hover:text-ink";

// Project card used in the Selected Projects grid: the app icon and name,
// then what it is, then the links. Screenshots live on the project page.
export default function ProjectCard({ project }: { project: Project }) {
  const t = getDictionary();
  const isCaseStudy = project.status === "UI/UX Case Study";
  // A link set to "#" in data/projects.ts means "no link" (for example a
  // private repo), so its icon is not shown at all.
  const hasGithubLink =
    Boolean(project.links.github) && project.links.github !== "#";
  const hasLiveLink =
    Boolean(project.links.live) && project.links.live !== "#";

  return (
    <article
      data-spot
      className="spot flex h-full flex-col rounded-3xl border border-charcoal-border bg-charcoal-light p-6 transition-colors duration-300 hover:border-accent sm:p-7"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-4">
          <ProjectIcon project={project} size={136} className="h-16 w-16 shrink-0" />
          <div>
            <h3 className="text-2xl font-medium leading-tight text-ink">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="mt-1 text-sm font-normal text-accent-light">
              {project.roleTitle}
            </p>
          </div>
        </div>

        <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

        <p className="mt-4 text-sm font-normal text-muted">
          {t.projectStatus[project.status] ?? project.status}
        </p>

        <ul dir="ltr" className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.86rem] font-normal text-muted rtl:justify-end">
          {(project.cardTech ?? project.tech).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-11 items-center rounded-full border border-charcoal-border px-5 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            {isCaseStudy ? t.projects.viewCaseStudy : t.projects.viewProject}
          </Link>

          <div className="flex items-center gap-1">
            {hasGithubLink ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title}: ${t.a11y.projectGithub}`}
                className={iconLink}
              >
                <Github size={18} aria-hidden="true" />
              </a>
            ) : null}
            {hasLiveLink ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title}: ${t.a11y.projectLive}`}
                className={iconLink}
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
