import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-${project.slug}`}>
      <Link
        passHref
        href={`/projects/${project.slug}`}
        className="project-image-link"
        aria-label={`Read ${project.title} case study`}
      >
        <ProjectVisual project={project} />
        <span className="project-hover-arrow">
          <ArrowUpRight />
        </span>
      </Link>
      <div className="project-copy">
        <div className="project-meta">
          <span className="eyebrow">
            0{index + 1} / {project.category}
          </span>
          <span className="project-year">{project.year}</span>
        </div>
        <Link
          passHref
          href={`/projects/${project.slug}`}
          className="project-title"
        >
          <h3>{project.title}</h3>
          <ArrowUpRight />
        </Link>
        <p>{project.description}</p>
        <div className="project-skills">
          {project.tags.slice(0, 3).join(" / ")}
        </div>
        <Link
          passHref
          href={`/projects/${project.slug}`}
          className="text-link project-read"
        >
          Explore project <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
