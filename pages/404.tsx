import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
export default function NotFound() {
  return (
    <SiteLayout
      title="Page not found"
      description="This page could not be found."
    >
      <section className="page-shell inner-page">
        <p className="eyebrow">404 / A LOOSE CONNECTION</p>
        <h1 className="page-title">
          This path
          <br />
          <span className="outline-text">ends here.</span>
        </h1>
        <p className="page-intro">There’s more to explore back at the start.</p>
        <Link passHref href="/" className="button button-orange">
          Back home <ArrowUpRight size={17} />
        </Link>
      </section>
    </SiteLayout>
  );
}
