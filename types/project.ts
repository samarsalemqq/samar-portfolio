// Shared TypeScript types for project data.
// Edit this file if you need to add new fields to a project.

export interface ProjectLinks {
  github: string;
  live: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  icon?: string;
  /** The icon is a transparent logo rather than an app icon: no rounded corners. */
  iconIsLogo?: boolean;
  published: boolean;

  overviewImage?: string;
  roleImage?: string;  
  status: string;
  tech: string[];
  /** Shorter list for the homepage card. Falls back to tech. */
  cardTech?: string[];
  description: string;
  roleTitle: string;
  overview: string;
  problem: string;
  solution: string;
  /** A paragraph about the role, or use responsibilities for a bullet list. */
  role?: string;
  responsibilities?: string[];
  /** Fuller status line for the project page. Falls back to the status badge. */
  pageStatus?: string;
  features: string[];
  challenges: string;
  learnings: string;
  cover: string;
  gallery: string[];
  links: ProjectLinks;
  featured?: boolean;

}
