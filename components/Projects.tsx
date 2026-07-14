import { FolderKanban } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import ComingSoonCard from "@/components/ComingSoonCard";


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
  {projects
    .filter((project) => project.published)
    .map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
      <ComingSoonCard />
</div>
    </section>
  );
}
