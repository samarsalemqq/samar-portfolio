// Shared TypeScript types for project data.
// Edit this file if you need to add new fields to a project.

export interface ProjectLinks {
  /** GitHub repository URL. Leave as "#" if the repo is private. */
  github: string;
  /** App Store / live demo / play store URL. Leave as "#" if not available. */
  live: string;
}

export interface Project {
  /** URL-friendly unique id, used for /projects/[slug] */
  slug: string;
  /** Card + page title */
  title: string;
  /** e.g. "iOS Application", "Professional Project" — the descriptive type of work */
  category: string;
  /**
   * The status badge shown on the card and detail page. Must be one of the
   * standard badges: "Featured Project", "Published on App Store",
   * "Professional Project", "Currently Developing", "Graduation Project".
   * Reserve "UI/UX Case Study" for design-only projects (e.g. Talaq) —
   * every other project should read as a software engineering project.
   */
  status: string;
  /** Short list of technologies, shown as icon badges (see data/techIcons.tsx) */
  tech: string[];
  /** Short description shown on the project card */
  description: string;
  /** Short role label shown on the project card, e.g. "iOS Developer" */
  roleTitle: string;
  /** Longer overview shown at the top of the project detail page */
  overview: string;
  /** The problem this project set out to solve */
  problem: string;
  /** How the project solved that problem */
  solution: string;
  /** Your role on the project, in more detail (shown on the detail page) */
  role: string;
  /** Key features, shown as a bullet list */
  features: string[];
  /** Challenges faced during the project */
  challenges: string;
  /** What you learned building it */
  learnings: string;
  /** Cover image shown on the project card, path relative to /public */
  cover: string;
  /** Screenshot gallery shown on the project detail page */
  gallery: string[];
  /** External links */
  links: ProjectLinks;
  /** Show in the "Featured Projects" highlight state */
  featured?: boolean;
}
