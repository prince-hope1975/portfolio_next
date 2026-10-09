import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/projects";
export default function About() {
  return (
    <SiteLayout
      title="About me"
      description="Meet Prince Charles, a senior full-stack engineer and hands-on technical lead based in Nigeria."
      path="/about"
    >
      <section className="page-shell inner-page">
        <p className="eyebrow">THE PERSON BEHIND THE SYSTEMS</p>
        <h1 className="page-title">
          Curious by nature.
          <br />
          <span className="outline-text">Engineer by practice.</span>
        </h1>
        <div className="bio-grid">
          <div className="portrait-wrap">
            <Image
              src="/me.png"
              alt="Prince Charles"
              width={600}
              height={650}
              priority
            />
            <span className="portrait-caption">
              PRINCE CHARLES / NIGERIA, UTC+1
            </span>
            <span className="portrait-star" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="bio-copy">
            <p className="eyebrow">HELLO, I’M PRINCE.</p>
            <h2>
              I like seeing
              <br />
              the whole picture.
            </h2>
            <p>
              I’m Charles-Amachree Prince, a senior full-stack engineer and
              technical lead. I work across React and Next.js interfaces,
              Node.js and TypeScript services, and the workflows connecting
              them.
            </p>
            <p>
              At Retink Media, I help build simplecx and lead a team of 5–6
              developers through architecture, planning, code reviews, and
              releases. My work also spans fashion tooling, commerce, and
              decentralized applications.
            </p>
            <p>
              I care about the details people experience and the systems they
              rely on. A thoughtful interface and a dependable backend belong in
              the same conversation.
            </p>
            <a
              className="button button-orange"
              href="/prince-charles-resume.pdf"
              download
            >
              Download resume <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="bio-facts">
          <div>
            <span className="eyebrow">MY FOUNDATION</span>
            <h3>
              Electrical & Electronics
              <br />
              Engineering
            </h3>
            <p>
              B.Eng. · Afe Babalola University
              <br />
              2018–2023
            </p>
          </div>
          <div>
            <span className="eyebrow">MY TOOLKIT</span>
            <h3>Product to production.</h3>
            <p>
              TypeScript · React · Next.js · Node.js
              <br />
              PostgreSQL · Redis · Python · Docker
            </p>
          </div>
          <div>
            <span className="eyebrow">MY APPROACH</span>
            <h3>
              Think broadly.
              <br />
              Build deliberately.
            </h3>
            <p>
              Product thinking, clear contracts,
              <br />
              and hands-on engineering delivery.
            </p>
          </div>
        </div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE JOURNEY</p>
            <h2>Built along the way.</h2>
          </div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <Reveal key={item.company}>
              <div className="experience-row full-experience">
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.detail}</p>
                </div>
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
