import type { Metadata } from "next";
import Link from "next/link";
import { services, solutionItems } from "@/lib/site-data";

export const metadata: Metadata = {
  description:
    "Teksys solutions are designed around real project operating conditions across BIM, ERP, project controls, and management analytics.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site" style={{ maxWidth: "900px" }}>
          <div className="eyebrow">Solutions</div>
          <h1 className="page-title">Solutions Designed Around How Projects Actually Run</h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "760px" }}>
            Teksys solutions are built for practical project environments where design intelligence, operations, and
            execution reporting must work as one connected system.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div style={{ maxWidth: "760px", marginBottom: "22px" }}>
            <div className="eyebrow">Core Solution Layers</div>
            <h2 className="section-title">BIM, ERP, control, and executive visibility under one framework</h2>
          </div>
          <div className="feature-grid-2">
            {solutionItems.map((item) => (
              <article key={item.id} id={item.id} className="glass-card info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Solution Coverage</div>
            <h2 className="section-title">From platform enablement to integrated transformation</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              Each solution can be adopted independently, but the long-term value comes from connecting these layers
              into one digital operating model.
            </p>
          </div>
          <ul className="why-list">
            <li>
              <span />
              <p>BIM Design Intelligence for model-driven coordination and visibility.</p>
            </li>
            <li>
              <span />
              <p>Construction ERP for operational workflows and business process governance.</p>
            </li>
            <li>
              <span />
              <p>Project Monitoring &amp; Control for execution discipline and management insight.</p>
            </li>
            <li>
              <span />
              <p>Executive Dashboards for decision-grade MIS and performance clarity.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 34px" }}>
            <div className="eyebrow">Domain-Led Services</div>
            <h2 className="section-title">Implementation services that make solutions operational</h2>
          </div>
          <div className="feature-grid-4">
            {services.map((service) => (
              <article key={service.title} className="glass-card service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title">Need help choosing the right digital starting point?</h2>
            <p className="lead" style={{ maxWidth: "720px", margin: "14px auto 24px" }}>
              We can help you prioritize the right solution layer based on your current process maturity and delivery
              priorities.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Book a Demo
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
