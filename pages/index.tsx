import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Workflow,
  PanelsTopLeft,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SystemAssembly } from "@/components/SystemAssembly";
import { ProjectCard } from "@/components/ProjectCard";

import { Reveal } from "@/components/Reveal";
import { featuredProjects, experience } from "@/data/projects";
export default function Home() {
  return (
    <SiteLayout
      title="Full-stack engineer & technical lead"
      description="Prince Charles is a senior full-stack engineer and technical lead building expressive interfaces, backend services, and AI workflows."
    >
      <section className="hero page-shell">
        <div className="hero-kicker">
          <span className="eyebrow">
            <span className="status-dot" /> FULL-STACK ENGINEER / TECHNICAL LEAD
          </span>
          <span className="eyebrow hero-location">
            BASED IN NIGERIA · UTC+1
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              Prince
              <br />
              <span>
                Charles<span className="name-dot">.</span>
              </span>
            </h1>
            <div className="hero-summary">
              <p>
                I build interfaces, services, and the workflows between them.
              </p>
            </div>
            <p className="hero-detail">
              Building products across AI, commerce, and the web.
            </p>
            <div className="hero-actions">
              <a className="button button-orange" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="text-link"
                href="/prince-charles-resume.pdf"
                download
              >
                Download resume <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <SystemAssembly />
        </div>
        <div className="hero-bottom">
          <span>FRONTEND / BACKEND / ORCHESTRATION</span>
          <a href="#work">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <div className="work-divider page-shell">
        <span>SELECTED WORK, 2022—2026</span>
        <span>EXPLORE THE WORK ↓</span>
      </div>
      <section id="work" className="work-section page-shell">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Selected work.
                <br />
                <span className="muted-heading">Connected by craft.</span>
              </h2>
            </div>
            <p>
              Real products. Different challenges.
              <br />
              My contribution, from product to production.
            </p>
          </div>
        </Reveal>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="about-strip page-shell">
        <Reveal className="about-strip-grid">
          <div>
            <p className="eyebrow">02 / HOW I WORK</p>
            <h2>
              From interface
              <br />
              <span className="orange-text">to infrastructure.</span>
            </h2>
            <Link passHref href="/about" className="text-link">
              More about me <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="capability-list">
            {[
              {
                icon: PanelsTopLeft,
                title: "Interfaces that make sense.",
                text: "React, Next.js, and TypeScript. Interfaces built around the person using them.",
              },
              {
                icon: Braces,
                title: "Services that hold together.",
                text: "APIs, data models, and integrations that keep the product connected.",
              },
              {
                icon: Workflow,
                title: "Workflows that finish the job.",
                text: "AI processing, asynchronous jobs, and the path from input to useful output.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <div className="capability-item" key={title}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span>0{i + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="experience-section page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>
              Hands-on work.
              <span className="muted-heading"> Technical leadership.</span>
            </h2>
          </div>
          <a className="text-link" href="/prince-charles-resume.pdf" download>
            The full story <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="experience-list">
          {experience.slice(0, 4).map((item) => (
            <Reveal key={item.company}>
              <div className="experience-row">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <span className="eyebrow">{item.dates}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
