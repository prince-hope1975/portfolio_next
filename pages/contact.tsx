import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
export default function Contact() {
  const [copyState, setCopyState] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("amachreeprince7@gmail.com");
      setCopyState("Email copied");
    } catch {
      setCopyState("Copy unavailable. Use the email link to get in touch.");
    }
  }
  return (
    <SiteLayout
      title="Let’s connect"
      description="Contact Prince Charles for senior engineering opportunities and thoughtful product conversations."
      path="/contact"
    >
      <section className="page-shell contact-page">
        <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
        <h1 className="contact-title">
          A big idea?
          <br />A tough problem?
          <br />
          <span className="orange-text">Let’s talk.</span>
        </h1>
        <div className="contact-bottom">
          <div>
            <p>
              I’m interested in teams building useful products
              <br className="desktop-break" /> and making room for thoughtful
              engineering.
            </p>
            <div className="contact-email-row">
              <a
                className="contact-email"
                href="mailto:amachreeprince7@gmail.com"
              >
                amachreeprince7@gmail.com <ArrowUpRight />
              </a>
              <button
                className="copy-email"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copyState === "Email copied" ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
            <p className="copy-status" role="status">
              {copyState}
            </p>
          </div>
          <div className="contact-details">
            <span className="eyebrow">BASED IN</span>
            <p>Nigeria · UTC+1</p>
            <span className="eyebrow">FIND ME ELSEWHERE</span>
            <a
              href="https://github.com/prince-hope1975"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/princeam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
