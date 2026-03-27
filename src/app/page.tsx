import Link from "next/link";
import HeroSlider from "@/components/site/HeroSlider";
import { platforms, solutionItems, whyTeksys } from "@/lib/site-data";

const portalImpact = [
  {
    id: "bim",
    name: "TeksysBIM",
    color: "#7df5b5",
    headline: "Design Coordination & Model Intelligence",
    description:
      "Improves design visibility, coordination quality, and BIM-led project understanding for construction teams.",
    href: "/portals#teksysbim",
  },
  {
    id: "erp",
    name: "TeksysERP",
    color: "#93cdf6",
    headline: "Operational Workflow & Business Control",
    description:
      "Improves business process efficiency across procurement, contracts, inventory, finance, HR, and operations.",
    href: "/portals#teksyserp",
  },
  {
    id: "dpr",
    name: "TeksysDPR",
    color: "#d4f7a6",
    headline: "Project Monitoring & Execution Visibility",
    description:
      "Improves progress tracking, target vs actual analysis, delay identification, and management reporting.",
    href: "/portals#teksysdpr",
  },
];

const resources = [
  { icon: "◆", title: "Insights", description: "Articles on digital transformation for construction and real estate.", tag: "Articles", href: "/resources#insights" },
  { icon: "◇", title: "Case Studies", description: "How organizations use Teksys platforms to improve efficiency.", tag: "Case Studies", href: "/resources#case-studies" },
  { icon: "▣", title: "Industry Notes", description: "Focused notes on BIM, ERP for construction, and project management.", tag: "Industry", href: "/resources#industry-notes" },
  { icon: "▤", title: "FAQs", description: "Common questions about Teksys platforms, implementation, and support.", tag: "FAQs", href: "/resources#faqs" },
  { icon: "▥", title: "Downloads & Brochures", description: "Product overviews and summaries for all three Teksys portals.", tag: "Downloads", href: "/resources#downloads" },
  { icon: "▦", title: "Getting Started", description: "Guides for teams beginning their digital transformation journey.", tag: "Guides", href: "/resources#getting-started" },
];

const benefits = [
  "Better coordination across design, operations, and execution teams",
  "Stronger workflow control and process governance",
  "Better reporting discipline across projects and business units",
  "Improved target vs actual visibility for project management",
  "Faster access to project information for leadership and teams",
  "Smarter digital decision-making at every project stage",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section-hero">
        <div className="container-site">
          <div className="hero-grid">
            {/* Left: master message */}
            <div>
              <div className="eyebrow">Teksys Digital Ecosystem</div>
              <h1 className="hero-title">
                Digital Platforms That Improve Efficiency Across the Construction Sector
              </h1>
              <p className="lead" style={{ marginTop: "18px", maxWidth: "540px" }}>
                From BIM and business operations to daily progress reporting and management visibility,
                Teksys connects the systems that help project-driven organizations work smarter.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "26px" }}>
                <Link href="/portals" className="btn-primary">
                  Explore Portals
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  View Solutions
                </Link>
              </div>
              <div className="support-strip">
                TeksysBIM · TeksysERP · TeksysDPR — three specialized portals, one connected
                digital ecosystem for construction-sector efficiency.
              </div>
            </div>

            {/* Right: portal screenshot slider */}
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* ── SECTION 1: PORTAL IMPACT ─────────────────────── */}
      <section className="section">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Portal Impact Overview</div>
            <h2 className="section-title">How the Teksys Portals Improve Construction Efficiency</h2>
          </div>
          <div className="portal-impact-grid">
            {portalImpact.map((item) => (
              <article key={item.id} className="glass-card portal-impact-card">
                <div className="portal-impact-name" style={{ color: item.color }}>{item.name}</div>
                <h3>{item.headline}</h3>
                <p>{item.description}</p>
                <div style={{ marginTop: "16px" }}>
                  <Link
                    href={item.href}
                    className="btn-ghost btn-sm"
                    style={{ fontSize: "0.78rem", borderColor: item.color + "44", color: item.color }}
                  >
                    Explore {item.name} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: PORTALS ───────────────────────────── */}
      <section className="section section-muted" id="portals">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
            <div className="eyebrow">The Teksys Portals</div>
            <h2 className="section-title">Three Portals. One Connected Digital Ecosystem.</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              Each portal is built for a specific efficiency layer — and they connect into a shared digital
              foundation for construction-sector organizations.
            </p>
          </div>
          <div className="portals-section-grid">
            {platforms.map((platform) => (
              <article key={platform.id} className="glass-card portal-section-card">
                <span className="portal-section-card-name">{platform.name}</span>
                <h3>{platform.tagline}</h3>
                <p>{platform.description}</p>
                <div className="card-actions" style={{ marginTop: "6px" }}>
                  <Link href={platform.internalHref} className="btn-secondary btn-sm">Explore</Link>
                  <a href={platform.portal} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm">
                    Visit Portal ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SOLUTIONS ─────────────────────────── */}
      <section className="section" id="solutions">
        <div className="container-site">
          <div style={{ maxWidth: "760px", marginBottom: "34px" }}>
            <div className="eyebrow">Solutions</div>
            <h2 className="section-title">Solutions Designed for Project-Driven Businesses</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              Domain-focused solutions aligned to EPC, infrastructure, and real estate delivery — practical,
              structured, and built for adoption.
            </p>
          </div>
          <div className="solutions-grid">
            {solutionItems.map((item) => (
              <article key={item.id} className="glass-card solution-item-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link href="/solutions" className="btn-secondary btn-sm">View All Solutions →</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: RESOURCES ─────────────────────────── */}
      <section className="section section-soft" id="resources">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 34px" }}>
            <div className="eyebrow">Resources</div>
            <h2 className="section-title">Resources for Digital Construction and Project Efficiency</h2>
          </div>
          <div className="resources-grid">
            {resources.map((item) => (
              <Link key={item.title} href={item.href} className="glass-card resource-card">
                <div className="resource-card-icon" style={{ color: "var(--accent)" }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="resource-card-tag">{item.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY TEKSYS ────────────────────────── */}
      <section className="section section-muted">
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Why Teksys</div>
            <h2 className="section-title">Why Teksys Matters to the Construction Sector</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              {whyTeksys[0]}. Built to create measurable improvements in how project organizations work.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/about" className="btn-ghost btn-sm">About Teksys →</Link>
            </div>
          </div>
          <div className="benefits-grid" style={{ alignContent: "start" }}>
            {benefits.map((b) => (
              <div key={b} className="benefit-block">
                <div className="benefit-dot" />
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container-site">
          <div className="cta-panel" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ maxWidth: "720px", marginInline: "auto" }}>
              Ready to strengthen efficiency across design, operations, or project execution?
            </h2>
            <p className="lead" style={{ maxWidth: "640px", margin: "16px auto 26px" }}>
              Let us help you identify the right starting point — whether it is BIM coordination, ERP
              implementation, DPR discipline, or a connected transformation roadmap.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
              <Link href="/portals" className="btn-primary">Explore Portals</Link>
              <Link href="/contact" className="btn-secondary">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
