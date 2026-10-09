import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <header className="site-header">
      <Link
        passHref
        href="/"
        className="wordmark"
        aria-label="Prince Charles home"
      >
        prince<span className="wordmark-star">✳</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="site-navigation"
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Main navigation"
      >
        {[
          ["/projects", "Selected work"],
          ["/about", "About me"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname.startsWith(href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <a className="header-contact" href="mailto:amachreeprince7@gmail.com">
        Let’s talk <ArrowUpRight size={16} />
      </a>
    </header>
  );
}
