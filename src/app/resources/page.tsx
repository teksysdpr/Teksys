import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Insights, case studies, industry notes, and downloads to support digital transformation in construction and project management.",
};

const resourceSections = [
  {
    id: "insights",
    icon: "◆",
    title: "Insights",
    description:
      "Perspectives and articles on digital transformation, BIM adoption, ERP for construction, and project efficiency strategies.",
    items: [
      "Why construction organizations need structured digital platforms",
      "BIM beyond modeling — driving project coordination with design intelligence",
      "From spreadsheets to ERP: operational transformation in project-driven businesses",
      "DPR as a management tool — reporting discipline for better control",
    ],
  },
  {
    id: "case-studies",
    icon: "◇",
    title: "Case Studies",
    description:
      "Real examples of how project-driven organizations are using Teksys platforms to improve efficiency, visibility, and control.",
    items: [
      "How a real estate developer improved BIM coordination with TeksysBIM",
      "EPC contractor gains operational control using TeksysERP workflows",
      "Project monitoring transformation using TeksysDPR for infrastructure delivery",
    ],
  },
  {
    id: "industry-notes",
    icon: "▣",
    title: "Industry Notes",
    description:
      "Focused reference notes for project directors, PMO heads, and digital transformation leads in construction and real estate.",
    items: [
      "Digital maturity in Indian construction: where organizations stand",
      "BIM adoption stages for EPC contractors",
      "Selecting the right ERP for a project-driven business",
      "Target vs actual: the missing reporting layer in construction",
    ],
  },
  {
    id: "faqs",
    icon: "▤",
    title: "Frequently Asked Questions",
    description:
      "Common questions about the Teksys platforms, implementation approach, and integration possibilities.",
    items: [
      "What types of organizations benefit most from Teksys platforms?",
      "Can the three portals be used independently?",
      "How long does implementation typically take?",
      "Is TeksysERP suitable for mid-sized project organizations?",
      "How does TeksysDPR differ from standard project management tools?",
    ],
  },
  {
    id: "downloads-brochures",
    icon: "▥",
    title: "Downloads & Brochures",
    description:
      "Platform overviews, solution summaries, and product brochures for TeksysBIM, TeksysERP, and TeksysDPR.",
    items: [
      "TeksysBIM Platform Overview (PDF)",
      "TeksysERP Solution Summary (PDF)",
      "TeksysDPR Product Brochure (PDF)",
      "Teksys Digital Ecosystem Overview (PDF)",
    ],
  },
  {
    id: "getting-started",
    icon: "▦",
    title: "Getting Started",
    description:
      "Guides and orientation resources for teams beginning their digital transformation journey with Teksys.",
    items: [
      "Where to start: choosing the right Teksys platform for your organization",
      "Preparing your team for BIM implementation",
      "ERP readiness checklist for construction organizations",
      "Building a reporting discipline with TeksysDPR",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site">
          <div className="eyebrow">Resources</div>
          <h1 className="page-title" style={{ maxWidth: "820px", marginTop: "6px" }}>
            Resources for Digital Construction and Project Efficiency
          </h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "680px" }}>
            Insights, case studies, guides, and downloads to support your digital transformation journey in
            construction and project management.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container-site">
          <div style={{ display: "grid", gap: "48px" }}>
            {resourceSections.map((section) => (
              <div key={section.id} id={section.id}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "22px" }}>
                  <span style={{ color: "var(--accent)", fontSize: "1.3rem", lineHeight: 1, marginTop: "4px" }}>
                    {section.icon}
                  </span>
                  <div>
                    <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
                      {section.title}
                    </h2>
                    <p className="lead" style={{ marginTop: "8px", fontSize: "0.96rem" }}>
                      {section.description}
                    </p>
                  </div>
                </div>
                <div className="feature-grid-2">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="glass-card"
                      style={{
                        padding: "16px 18px",
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        opacity: 0.75,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          flexShrink: 0,
                          marginTop: "8px",
                        }}
                      />
                      <p style={{ margin: 0, color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                        {item}
                        <span
                          style={{
                            marginLeft: "8px",
                            fontSize: "0.7rem",
                            color: "var(--text-3)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          — Coming Soon
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ maxWidth: "680px", marginInline: "auto" }}>
              Want to explore the Teksys platforms directly?
            </h2>
            <p className="lead" style={{ maxWidth: "580px", margin: "16px auto 26px" }}>
              Learn more about TeksysBIM, TeksysERP, and TeksysDPR — or get in touch to discuss the right
              starting point for your organization.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/portals" className="btn-primary">
                Explore Portals
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
