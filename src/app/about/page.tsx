import type { Metadata } from "next";
import Link from "next/link";
import { industries, whyTeksys } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Teksys is a domain-focused digital ecosystem brand for project-driven businesses across real estate, EPC, and infrastructure.",
};

const approach = [
  {
    title: "Domain-First Thinking",
    description:
      "We design digital systems around real project operating patterns, not abstract software templates.",
  },
  {
    title: "Platform-Led Structure",
    description:
      "TeksysBIM, TeksysERP, and TeksysDPR are independent products that map clearly to design, operations, and execution layers.",
  },
  {
    title: "Practical Implementation",
    description:
      "We focus on adoption-ready implementation with practical workflows, governance structures, and measurable outcomes.",
  },
  {
    title: "Connected Transformation",
    description:
      "Organizations can start with one platform and progressively expand into an integrated digital ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site" style={{ maxWidth: "900px" }}>
          <div className="eyebrow">About</div>
          <h1 className="page-title">Engineering Digital Clarity for Project-Driven Businesses</h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "760px" }}>
            Teksys helps project organizations connect design intelligence, operational control, and execution
            visibility through a domain-focused digital ecosystem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site split-layout">
          <article className="glass-card info-card">
            <h3>Who We Are</h3>
            <p>
              Teksys is a corporate digital solutions brand focused on project-driven industries. Our operating model
              blends platform capability with implementation depth so teams can move from fragmented systems to
              structured digital control.
            </p>
          </article>
          <article className="glass-card info-card">
            <h3>What We Solve</h3>
            <p>
              Most organizations struggle with disconnected design information, operational workflows, and execution
              reporting. Teksys bridges these gaps through BIM, ERP, and DPR layers that can work independently and
              together.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-site">
          <div style={{ maxWidth: "760px", marginBottom: "24px" }}>
            <div className="eyebrow">Our Industry Focus</div>
            <h2 className="section-title">Built for complex delivery environments</h2>
          </div>
          <div className="feature-grid-3">
            {industries.map((industry) => (
              <article key={industry.title} className="glass-card industry-card">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div style={{ maxWidth: "760px", marginBottom: "24px" }}>
            <div className="eyebrow">Our Digital Approach</div>
            <h2 className="section-title">How Teksys delivers practical digital outcomes</h2>
          </div>
          <div className="feature-grid-2">
            {approach.map((item) => (
              <article key={item.title} className="glass-card info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Why Teksys</div>
            <h2 className="section-title">Why organizations partner with us</h2>
          </div>
          <ul className="why-list">
            {whyTeksys.map((point) => (
              <li key={point}>
                <span />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title">Looking for a serious digital partner for project environments?</h2>
            <p className="lead" style={{ margin: "14px auto 24px", maxWidth: "730px" }}>
              We can discuss your current operating context and propose a practical ecosystem roadmap.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/portals" className="btn-secondary">
                Explore Portals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
