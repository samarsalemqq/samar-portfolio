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
  published: boolean;

  overviewImage?: string;
  roleImage?: string;  
  status: string;
  tech: string[];
  description: string;
  roleTitle: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenges: string;
  learnings: string;
  cover: string;
  gallery: string[];
  links: ProjectLinks;
  featured?: boolean;

}
