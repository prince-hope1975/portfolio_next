import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { NextSeo } from "next-seo";
import { Header } from "./header";
import { siteOrigin } from "@/lib/site";
export function SiteLayout({
  children,
  title,
  description,
  path = "/",
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  path?: string;
}) {
  return (
    <>
      <NextSeo
        title={`${title} — Prince Charles`}
        description={description}
        canonical={siteOrigin ? `${siteOrigin}${path}` : undefined}
        openGraph={{
          title: `${title} — Prince Charles`,
          description,
          url: siteOrigin ? `${siteOrigin}${path}` : undefined,
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <p className="eyebrow">LET’S BUILD SOMETHING USEFUL.</p>
            <a className="footer-title" href="mailto:amachreeprince7@gmail.com">
              Have a project
              <br />
              in mind?
              <ArrowUpRight />
            </a>
          </div>
          <div className="footer-links">
            <a href="mailto:amachreeprince7@gmail.com">
              Email <ArrowUpRight size={17} />
            </a>
            <a
              href="https://github.com/prince-hope1975"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/princeam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Linkedin size={17} />
            </a>
            <a href="/prince-charles-resume.pdf" download>
              Download resume <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link passHref href="/" className="wordmark">
            prince<span className="wordmark-star">✳</span>
          </Link>
          <span>© {new Date().getFullYear()} Prince Charles</span>
          <span>Interfaces / Services / Workflows</span>
        </div>
      </footer>
    </>
  );
}
