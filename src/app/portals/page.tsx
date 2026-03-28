import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { platforms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portals | Teksys",
  description:
    "Explore TeksysBIM, TeksysERP, and TeksysDPR — three specialized platforms built to improve efficiency across design, operations, and project execution.",
};

const portals = [
  ...platforms.map((item) => ({
    id: item.id === "bim" ? "teksysbim" : item.id === "erp" ? "teksyserp" : "teksysdpr",
    name: item.name,
    pillar: item.pillar,
    colorHex: item.color,
    tagline: item.tagline,
    description: item.description,
    portal: item.portal,
    portalCta: item.portalCta,
    capabilities:
      item.id === "bim"
        ? [
            "BIM modeling and coordination across architecture, structure, and MEP",
            "Clash and design review support with clearer project communication",
            "Model-backed design intelligence for project and developer teams",
            "CAD to BIM workflows for scalable digital transition",
          ]
        : item.id === "erp"
          ? [
              "Procurement, inventory, contracts, finance, HR, and CRM workflows",
              "Stronger operational governance and process compliance control",
              "Cross-functional visibility for business and project operations",
              "Scalable enterprise workflows aligned to project-driven business models",
            ]
          : [
              "Daily progress reporting with target vs actual performance tracking",
              "Delay and variance visibility for management decision support",
              "Execution dashboards with activity-level monitoring and control",
              "Structured reporting discipline across site and PMO layers",
            ],
  })),
];

export default function PortalsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site">
          <div className="eyebrow">Portals</div>
          <h1 className="page-title" style={{ marginTop: "14px", maxWidth: "780px", marginInline: "auto" }}>
            Explore the Teksys Digital Ecosystem
          </h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "640px", marginInline: "auto" }}>
            Teksys brings together three specialized platforms that strengthen design intelligence, business
            workflows, and execution control across the construction lifecycle.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "30px", justifyContent: "center" }}>
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

      <section className="section">
        <div className="container-site" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {portals.map((portal) => (
            <article key={portal.id} id={portal.id} className="glass-card portal-card" style={{ scrollMarginTop: "80px" }}>
              {/* Colored top accent */}
              <div className="portal-card-accent" style={{ background: portal.colorHex }} />

              <div className="portal-card-body">
                {/* Left column */}
                <div className="portal-card-left">
                  {/* Portal logo image */}
                  {platforms.find((p) => `teksys${p.id}` === portal.id) && (
                    <div className="portal-logo-box" style={{ marginBottom: "16px" }}>
                      <Image
                        src={platforms.find((p) => `teksys${p.id}` === portal.id)!.logoImage}
                        alt={portal.name}
                        width={220}
                        height={56}
                      />
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span
                      className="portal-card-badge"
                      style={{ color: portal.colorHex, borderColor: portal.colorHex + "44", background: portal.colorHex + "12" }}
                    >
                      {portal.name}
                    </span>
                    <span className="portal-card-pillar" style={{ color: portal.colorHex, textTransform: "none" }}>
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
                  <p className="portal-cap-heading">Platform Capabilities</p>
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

      <section className="section section-muted">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Connected Model</div>
            <h2 className="section-title">Independent Platforms. Unified Digital Trajectory.</h2>
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

      <section className="section">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ maxWidth: "680px", marginInline: "auto" }}>
              Need guidance on which platform to start with?
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
