import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";
const filters = ["All work", "AI & workflows", "Commerce", "Web3"];
export default function Projects() {
  const [filter, setFilter] = useState(0);
  const projects = featuredProjects.filter(
    (project) =>
      filter === 0 ||
      (filter === 1 && ["simplecx", "drapon"].includes(project.slug)) ||
      (filter === 2 && project.slug === "alswap") ||
      (filter === 3 && project.slug === "atlas-dao"),
  );
  return (
    <SiteLayout
      title="Selected work"
      description="Explore Prince Charles’s work across AI media, fashion systems, commerce, and decentralized products."
      path="/projects"
    >
      <section className="page-shell inner-page">
        <p className="eyebrow">THE WORK / 2021 — TODAY</p>
        <h1 className="page-title">
          Selected projects.
          <br />
          <span className="outline-text">Built across the stack.</span>
        </h1>
        <div className="page-intro">
          <p>
            Four different products. The same curiosity about how
            <br className="desktop-break" /> thoughtful interfaces and connected
            systems work together.
          </p>
          <span className="eyebrow">04 SELECTED PROJECTS</span>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((label, i) => (
            <button
              key={label}
              aria-pressed={filter === i}
              onClick={() => setFilter(i)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard
                project={project}
                index={featuredProjects.indexOf(project)}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
