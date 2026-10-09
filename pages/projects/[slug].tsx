import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectVisual } from "@/components/ProjectVisual";
import { LayerShowcase } from "@/components/LayerShowcase";
import { featuredProjects, type Project } from "@/data/projects";
export default function CaseStudy({ project }: { project: Project }) {
  const next =
    featuredProjects[
      (featuredProjects.findIndex((p) => p.slug === project.slug) + 1) %
        featuredProjects.length
    ];
  return (
    <SiteLayout
      title={project.title}
      description={project.description}
      path={`/projects/${project.slug}`}
    >
      <article className="page-shell case-study">
        <Link passHref href="/projects" className="text-link back-link">
          <ArrowLeft size={16} /> All work
        </Link>
        <div className="case-kicker">
          <span className="eyebrow">{project.category}</span>
          <span className="eyebrow">{project.year}</span>
        </div>
        <h1 className="case-title">
          {project.title}
          <span className="orange-text">.</span>
        </h1>
        <div className="case-intro">
          <h2>{project.headline}</h2>
          <div className="tech-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <ProjectVisual project={project} large />
        <ProjectGallery project={project} />
        <div className="case-body">
          <aside>
            <span className="eyebrow">PROJECT NOTES</span>
            <p>
              Product engineering
              <br />
              Frontend / Backend
            </p>
            {project.link && (
              <a
                className="text-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source <ArrowUpRight size={16} />
              </a>
            )}
          </aside>
          <div>
            <section>
              <p className="eyebrow">01 / THE PROBLEM</p>
              <h2>A reason to build.</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <p className="eyebrow">02 / MY CONTRIBUTION</p>
              <h2>Connecting the pieces.</h2>
              <p>{project.contribution}</p>
            </section>
            <section>
              <p className="eyebrow">03 / THE APPROACH</p>
              <h2>Inside the system.</h2>
              <ol className="approach-list">
                {project.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          </div>
        </div>
        {project.slug === "simplecx" ? (
          <LayerShowcase />
        ) : (
          <div className="case-flow">
            <p className="eyebrow">CONCEPTUAL WORKFLOW</p>
            <div>
              {project.flow.map((step, i) => (
                <div className="case-flow-step" key={step}>
                  <span className="eyebrow">0{i + 1}</span>
                  <strong>{step}</strong>
                  {i !== 3 && <ArrowRight size={20} />}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="case-outcome">
          <p className="eyebrow">04 / THE RESULT</p>
          <h2>Built to connect.</h2>
          <p>{project.outcome}</p>
        </div>
        <Link passHref href={`/projects/${next.slug}`} className="next-project">
          <div>
            <span className="eyebrow">NEXT PROJECT</span>
            <h2>{next.title}</h2>
          </div>
          <ArrowUpRight />
        </Link>
      </article>
    </SiteLayout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: featuredProjects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = featuredProjects.find((p) => p.slug === params?.slug);
  return project ? { props: { project } } : { notFound: true };
};
