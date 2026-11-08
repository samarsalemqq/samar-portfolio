import Image from "next/image";
import type { Project } from "@/types/project";

// A project's app icon, or its logo when it has no app icon.
export default function ProjectIcon({
  project,
  size,
  className = "",
}: {
  project: Project;
  size: number;
  className?: string;
}) {
  if (!project.icon) return null;
  return (
    <Image
      src={project.icon}
      alt=""
      width={size}
      height={size}
      className={`${project.iconIsLogo ? "object-contain" : "app-icon"} ${className}`}
    />
  );
}
