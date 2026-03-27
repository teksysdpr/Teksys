import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portals | Teksys",
  description:
    "Explore TeksysBIM, TeksysERP, and TeksysDPR — three specialized platforms built to improve efficiency across design, operations, and project execution.",
};

const portals = [
  {
    id: "teksysbim",
    name: "TeksysBIM",
    pillar: "Design Intelligence",
    colorHex: "#7df5b5",
    tagline: "Design Intelligence for Coordinated Construction Delivery",
    description:
      "TeksysBIM helps construction and engineering teams transform CAD and design information into intelligent BIM workflows — improving coordination quality, review readiness, and downstream decision-making across the project lifecycle.",
    portal: "https://bim.teksys.in",
    portalCta: "Visit TeksysBIM",
    capabilities: [
      "BIM coordination and clash detection support across disciplines",
      "Model-based design review with structured feedback and approvals",
      "Level of Development (LOD) tracking across design stages",
      "CAD to BIM conversion workflows and review readiness checks",
      "BIM Execution Plan structure and deliverable tracking",
      "Design data connected to downstream project decisions",
    ],
  },
  {
    id: "teksyserp",
    name: "TeksysERP",
    pillar: "Operational Intelligence",
    colorHex: "#93cdf6",
    tagline: "Operational Control Across the Full Business Workflow",
    description:
      "TeksysERP supports project-driven companies with integrated controls across procurement, inventory, contracts, finance, HR, CRM, and process automation — giving leadership and operations teams stronger governance and real-time business visibility.",
    portal: "https://erp.teksys.in",
    portalCta: "Visit TeksysERP",
    capabilities: [
      "Procurement workflows with vendor management and approval controls",
      "Inventory and stores: material tracking, indent and stock movement",
      "Contract administration with milestones, payments, and compliance",
      "Finance and accounting linked to projects, budgets, and payments",
      "HR, attendance, leave management, and payroll for project teams",
      "CRM and business development pipeline management",
    ],
  },
  {
    id: "teksysdpr",
    name: "TeksysDPR",
    pillar: "Execution Intelligence",
    colorHex: "#d4f7a6",
    tagline: "Execution Visibility That Drives Project Control",
    description:
      "TeksysDPR provides structured daily progress reporting, delay monitoring, target achievement tracking, and decision-ready project control dashboards — creating reporting discipline and real-time visibility for delivery teams and project leadership.",
    portal: "https://dpr.teksys.in",
    portalCta: "Visit TeksysDPR",
    capabilities: [
      "Daily progress reporting with resources, work done, and observations",
      "Target vs actual tracking across activities, packages, and projects",
      "Delay identification, root cause analysis, and escalation workflows",
      "Management dashboards with key metrics, milestones, and alerts",
      "Schedule monitoring across milestones and critical path activities",
      "Standardized reporting cadence and accountability for site teams",
    ],
  },
];

export default function PortalsPage() {
  return (
    <>
      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-site" style={{ maxWidth: "860px" }}>
          <div className="eyebrow">The Teksys Portals</div>
          <h1 className="page-title">Three Portals. One Connected Digital Ecosystem.</h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "700px" }}>
            TeksysBIM, TeksysERP, and TeksysDPR each solve a distinct layer of project-driven efficiency.
            Use one platform to start — or connect all three as your digital foundation grows.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "26px" }}>
            {portals.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="btn-ghost btn-sm"
                style={{ borderColor: p.colorHex + "55", color: p.colorHex }}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTAL CARDS ───────────────────────────────── */}
      <section className="section">
        <div className="container-site" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {portals.map((portal) => (
            <article key={portal.id} id={portal.id} className="glass-card portal-card" style={{ scrollMarginTop: "80px" }}>
              {/* Colored top accent */}
              <div className="portal-card-accent" style={{ background: portal.colorHex }} />

              <div className="portal-card-body">
                {/* Left column */}
                <div className="portal-card-left">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span
                      className="portal-card-badge"
                      style={{ color: portal.colorHex, borderColor: portal.colorHex + "44", background: portal.colorHex + "12" }}
                    >
                      {portal.name}
                    </span>
                    <span className="portal-card-pillar" style={{ color: portal.colorHex }}>
                      {portal.pillar}
                    </span>
                  </div>
                  <h2 className="portal-card-title">{portal.tagline}</h2>
                  <p className="portal-card-desc">{portal.description}</p>
                  <div className="card-actions" style={{ marginTop: "22px" }}>
                    <a
                      href={portal.portal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-sm"
                    >
                      {portal.portalCta} ↗
                    </a>
                    <Link href="/contact" className="btn-secondary btn-sm">
                      Book a Demo
                    </Link>
                  </div>
                </div>

                {/* Right column: capabilities */}
                <div className="portal-card-right">
                  <p className="portal-cap-heading">Key Capabilities</p>
                  <ul className="portal-cap-list">
                    {portal.capabilities.map((cap) => (
                      <li key={cap} className="portal-cap-item">
                        <span className="portal-cap-dot" style={{ background: portal.colorHex }} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM CONNECTION ───────────────────────── */}
      <section className="section section-muted">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Connected Model</div>
            <h2 className="section-title">Independent Products. Unified Digital Trajectory.</h2>
            <p className="lead" style={{ marginTop: "12px" }}>
              Each portal delivers value on its own. Together they form a complete digital foundation for
              project-driven organizations.
            </p>
          </div>
          <div className="ecosystem-flow">
            {portals.map((p, i) => (
              <div key={p.id} style={{ display: "contents" }}>
                <article className="glass-card ecosystem-node" style={{ borderColor: p.colorHex + "44" }}>
                  <h3 style={{ color: p.colorHex }}>{p.name}</h3>
                  <p>{p.pillar}</p>
                </article>
                {i < portals.length - 1 && <div className="ecosystem-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="section">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ maxWidth: "640px", marginInline: "auto" }}>
              Need guidance on which portal to start with?
            </h2>
            <p className="lead" style={{ maxWidth: "560px", margin: "14px auto 26px" }}>
              We can map your priorities and recommend the right first platform with a phased expansion path.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Book a Demo</Link>
              <Link href="/solutions" className="btn-secondary">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
