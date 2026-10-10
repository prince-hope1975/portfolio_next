import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Database,
  Network,
  ShoppingBag,
} from "lucide-react";
import type { Project } from "@/data/projects";
export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.media)
    return (
      <figure
        className={`project-visual visual-${project.slug} ${large ? "visual-large" : ""}`}
      >
        {project.slug === "drapon" ? (
          <div className="garment-spread">
            <div className="garment-input">
              <span>01 / THE INPUT</span>
              <Image
                src={project.supportingMedia![0].src}
                alt={project.supportingMedia![0].alt}
                width={600}
                height={800}
              />
            </div>
            <ArrowRight className="garment-arrow" />
            <div className="garment-output">
              <span>02 / THE CUTOUT</span>
              <Image
                src={project.media.src}
                alt={project.media.alt}
                width={600}
                height={800}
              />
            </div>
            <div className="garment-note">
              From a photograph.
              <br />
              <i>To a usable garment.</i>
            </div>
          </div>
        ) : (
          <div className="screen-frame">
            <div className="screen-bar">
              <span />
              <span />
              <span />
              <small>simplecx / Content Studio</small>
            </div>
            <Image
              src={project.media.src}
              alt={project.media.alt}
              width={1533}
              height={724}
              sizes={
                large
                  ? "(max-width: 700px) 90vw, 1280px"
                  : "(max-width: 700px) 90vw, 1000px"
              }
            />
          </div>
        )}
        <figcaption>
          {project.media.caption}
          <ArrowDownRight size={15} />
        </figcaption>
      </figure>
    );
  return (
    <figure
      className={`project-visual architecture-visual visual-${project.slug} ${large ? "visual-large" : ""}`}
    >
      <span className="architecture-label">ARCHITECTURE ILLUSTRATION</span>
      {project.slug === "alswap" ? (
        <div className="commerce-architecture">
          <ShoppingBag size={35} strokeWidth={1} />
          <h3>
            Commerce,
            <br />
            <i>connected.</i>
          </h3>
          <div className="order-route">
            {["Storefront", "Order", "Payment", "Inventory"].map((s, i) => (
              <div key={s}>
                <span>0{i + 1}</span>
                <strong>{s}</strong>
                {i < 3 && <ArrowRight size={18} />}
              </div>
            ))}
          </div>
          <span className="architecture-foot">
            COMMERCE / A CONNECTED OPERATION
          </span>
        </div>
      ) : (
        <div className="atlas-architecture">
          <Network size={40} strokeWidth={1} />
          <h3>
            Community.
            <br />
            <i>Proposals.</i>
            <br />
            Typed connections.
          </h3>
          <div className="atlas-route">
            <span>USER INTERFACE</span>
            <ArrowRight />
            <span>tRPC CONTRACT</span>
            <ArrowRight />
            <Database size={22} />
          </div>
          <span className="architecture-foot">
            ATLAS DAO / TYPED CONNECTIONS
          </span>
        </div>
      )}
      <figcaption>
        Conceptual workflow / curated from project implementation
      </figcaption>
    </figure>
  );
}
