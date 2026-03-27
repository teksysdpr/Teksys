import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Teksys is structured for real estate, EPC, infrastructure, industrial projects, and consultant-led project delivery environments.",
};

const industryHighlights: Record<string, string[]> = {
  "Real Estate Developers": [
    "Developer-side visibility across design, commercial, and execution status",
    "Better alignment between planning assumptions and delivery realities",
    "Structured reporting for management and stakeholder decision-making",
  ],
  "EPC Contractors": [
    "Workflow governance for procurement, contracts, and site execution",
    "Improved reporting discipline across multi-package project teams",
    "Better control over operational and delivery performance trends",
  ],
  "Infrastructure Companies": [
    "Milestone-level monitoring and package performance visibility",
    "Structured execution reporting for complex field environments",
    "Management control through target tracking and delay analytics",
  ],
  "Industrial Projects": [
    "Integrated visibility for technically intensive engineering workflows",
    "Coordination support across design, operations, and execution teams",
    "Decision-ready reporting for plant and industrial delivery programs",
  ],
  "PMC / Consultant Teams": [
    "Stronger structure for technical reviews and progress governance",
    "Improved quality of reporting for client and management interfaces",
    "Faster issue escalation with transparent project information flow",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site" style={{ maxWidth: "900px" }}>
          <div className="eyebrow">Industries</div>
          <h1 className="page-title">Industry-Specific Thinking for Complex Delivery Environments</h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "760px" }}>
            Teksys solutions are shaped around how project organizations actually function across design coordination,
            operational governance, execution control, and management reporting.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site" style={{ display: "grid", gap: "18px" }}>
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="glass-card"
              id={industry.title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}
            >
              <div style={{ padding: "24px", display: "grid", gap: "14px" }}>
                <h2 className="section-title" style={{ fontSize: "clamp(1.35rem,2.2vw,1.95rem)" }}>
                  {industry.title}
                </h2>
                <p className="lead">{industry.description}</p>
                <ul className="why-list">
                  {industryHighlights[industry.title]?.map((point) => (
                    <li key={point}>
                      <span />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title">Need an industry-specific digital roadmap?</h2>
            <p className="lead" style={{ margin: "14px auto 24px", maxWidth: "700px" }}>
              We can recommend a phased model based on your sector, project mix, and current operating maturity.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="/portals" className="btn-secondary">
                Visit Portals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
