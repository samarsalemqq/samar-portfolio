import Link from "next/link";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Award,
  Clock,
  Building2,
  GraduationCap,
  Palette,
  Rocket,
  UserRound,
} from "lucide-react";
import { Project } from "@/types/project";
import TechBadge from "@/components/TechBadge";

// One icon per standard status badge, so it reads at a glance. Falls back to
// Rocket for anything unrecognized (shouldn't happen if data/projects.ts
// sticks to the documented set of statuses).
const statusIcons: Record<string, typeof Award> = {
  "Featured Project": Award,
  "Published on App Store": Rocket,
  "TestFlight Beta": Rocket,
  "Professional Project": Building2,
  "Currently Developing": Clock,
  "Graduation Project": GraduationCap,
  "UI/UX Case Study": Palette,
};

// Project card used in the Selected Work list. Text only, no image: the
// app's name is the largest thing on the card, and the screenshots live on
// the project page. Each card is a full-width row with everything in one
// column: category and status, name, description, role, technologies, then
// the links.
export default function ProjectCard({ project }: { project: Project }) {
  const StatusIcon = statusIcons[project.status] ?? Rocket;
  const isCaseStudy = project.status === "UI/UX Case Study";
  // A link set to "#" in data/projects.ts means "no link" (for example a
  // private repo), so its icon is not shown at all.
  const hasGithubLink =
    Boolean(project.links.github) && project.links.github !== "#";
  const hasLiveLink =
    Boolean(project.links.live) && project.links.live !== "#";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="text-xs font-medium uppercase tracking-wide text-accent-light">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-charcoal-border px-3 py-1 text-[11px] font-medium text-gray-400">
            <StatusIcon size={13} aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <Link href={`/projects/${project.slug}`} className="mt-5 w-fit">
          <h3 className="text-3xl font-semibold tracking-tight text-white transition-colors group-hover:text-accent-light sm:text-4xl">
            {project.title}
          </h3>
        </Link>

        {/* Fixed to 3 lines so every card takes up the same vertical space
            here, regardless of how long the description text is. */}
        <p className="mt-3 line-clamp-3 leading-relaxed text-gray-400">
          {project.description}
        </p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500">
          <UserRound size={14} aria-hidden="true" />
          {project.roleTitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Footer actions: GitHub / Live are real external links, and the
            "view project" link points to the detail page. Kept as siblings
            (not nested) since a link can't contain another link. mt-auto
            pins this row to the bottom of the card — no divider line, just
            the space above it. */}
        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-1.5">
            {hasGithubLink ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-charcoal-lighter hover:text-white"
            >
              <Github size={17} />
            </a>
            ) : null}
            {hasLiveLink ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} live link or App Store`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-charcoal-lighter hover:text-white"
            >
              <ExternalLink size={17} />
            </a>
            ) : null}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-accent-light"
          >
            {isCaseStudy ? "View case study" : "View project"}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
