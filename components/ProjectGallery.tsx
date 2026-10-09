import Image from "next/image";
import { useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import type { Project, ProjectMedia } from "@/data/projects";
export function ProjectGallery({ project }: { project: Project }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [media, setMedia] = useState<ProjectMedia | null>(null);
  if (!project.media) return null;
  return (
    <section
      className="project-gallery"
      aria-label={`${project.title} product images`}
    >
      <div className="gallery-heading">
        <p className="eyebrow">A CLOSER LOOK / REAL PRODUCT VISUALS</p>
        <p>Select an image to enlarge.</p>
      </div>
      <div className="gallery-grid">
        {[project.media, ...(project.supportingMedia || [])].map((item) => (
          <button
            key={item.src}
            className="gallery-item"
            onClick={() => {
              setMedia(item);
              dialog.current?.showModal();
            }}
          >
            <div className="gallery-image">
              <Image src={item.src} alt={item.alt} width={1440} height={900} />
              <Expand size={19} />
            </div>
            <span>{item.caption}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="media-dialog"
        aria-label={media?.caption || "Project image"}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label="Close enlarged image"
          autoFocus
        >
          <X />
          Close
        </button>
        {media && (
          <>
            <Image src={media.src} alt={media.alt} width={1600} height={1000} />
            <p>{media.caption}</p>
            <small>Source: {media.source}</small>
          </>
        )}
      </dialog>
    </section>
  );
}
