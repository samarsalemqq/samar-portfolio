import { FolderKanban } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

// This is the largest and most visual section on the site — it sits right
// below the Hero so visitors land on real work before anything else.
//
// One consistent grid for every project: 1 column on mobile, 2 equal
// columns from tablet up. `items-stretch` (the grid default) makes every
// card in a row match the tallest card's height — ProjectCard then pins its
// own footer to the bottom so the layout stays aligned regardless of
// description length. No project gets a different size or layout; the only
// thing that sets a project apart (e.g. Suhail) is its status badge.
export default function Projects() {
  return (
    <section id="projects" className="container-site py-14 lg:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Selected Work"
        description="A mix of published apps, professional work, and design case studies — from idea to shipped product."
        icon={FolderKanban}
        spacing="mb-8"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
