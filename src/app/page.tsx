import Link from "next/link";
import { industries, platforms, services, valueHighlights, whyTeksys } from "@/lib/site-data";

const featurePoints = [
  "BIM-led design intelligence",
  "Connected business workflows",
  "Real-time project visibility",
  "Better target vs actual tracking",
  "Stronger reporting and control",
  "Scalable digital ecosystem for project-driven teams",
];

const quickCards = [
  {
    title: "TeksysBIM",
    subtitle: "Design Intelligence",
    description: "Model coordination, BIM workflows, and design-led project clarity.",
    href: "/portals#teksysbim",
  },
  {
    title: "TeksysERP",
    subtitle: "Operational Intelligence",
    description: "Business workflows across procurement, contracts, inventory, finance, and HR.",
    href: "/portals#teksyserp",
  },
  {
    title: "TeksysDPR",
    subtitle: "Execution Intelligence",
    description: "Progress, targets, delays, and dashboard visibility for project control.",
    href: "/portals#teksysdpr",
  },
  {
    title: "Integrated Digital Transformation",
    subtitle: "Connected Strategy",
    description: "One ecosystem approach linking design, operations, and execution.",
    href: "/solutions#integrated-digital-transformation",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-hero section-hero-curved">
        <div className="container-site">
          <div className="hero-grid-main">
            <div>
              <div className="eyebrow">Teksys Digital Ecosystem</div>
              <h1 className="hero-title">One Digital Ecosystem for BIM, ERP, and Project Control</h1>
              <p className="lead" style={{ marginTop: "18px", maxWidth: "700px" }}>
                Teksys helps EPC companies, real estate developers, infrastructure teams, and project-driven
                organizations connect design intelligence, operational workflows, and execution visibility through
                specialized digital platforms.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                <Link href="/solutions" className="btn-primary">
                  Explore Solutions
                </Link>
                <Link href="/portals" className="btn-secondary">
                  Visit Our Portals
                </Link>
              </div>
            </div>

            <div className="hero-visual-shell">
              <div className="hero-visual-card">
                <p className="hero-visual-label">BIM / Design Intelligence</p>
                <div className="hero-visual-line" />
                <p className="hero-visual-copy">Model-led coordination, review clarity, and design intelligence.</p>
              </div>
              <div className="hero-visual-card">
                <p className="hero-visual-label">ERP / Operational Intelligence</p>
                <div className="hero-visual-line" />
                <p className="hero-visual-copy">Connected workflows across procurement, finance, contracts, and HR.</p>
              </div>
              <div className="hero-visual-card">
                <p className="hero-visual-label">DPR / Execution Intelligence</p>
                <div className="hero-visual-line" />
                <p className="hero-visual-copy">Target tracking, progress visibility, delays, and dashboard control.</p>
              </div>
            </div>
          </div>

          <div className="support-strip">
            From BIM and business operations to project monitoring and management control — Teksys connects the full
            project journey.
          </div>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container-site">
          <div className="quick-card-grid">
            {quickCards.map((card) => (
              <article key={card.title} className="glass-card quick-platform-card">
                <p className="quick-platform-kicker">{card.subtitle}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link href={card.href} className="btn-ghost btn-sm">
                  Explore →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Value Introduction</div>
            <h2 className="section-title">Built for the Realities of Project-Driven Business</h2>
            <p className="lead" style={{ marginTop: "14px" }}>
              Most project organizations struggle because design, operations, execution, and management reporting are
              disconnected. Teksys brings these layers into a structured digital ecosystem that improves coordination,
              visibility, accountability, and decision-making.
            </p>
          </div>
          <div className="value-pill-grid">
            {valueHighlights.map((item) => (
              <div key={item} className="value-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Feature Benefits</div>
            <h2 className="section-title">Digital capability that improves control quality</h2>
          </div>
          <div className="benefit-grid-modern">
            {featurePoints.map((point) => (
              <div key={point} className="benefit-modern-card">
                <span className="benefit-modern-icon">◈</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 34px" }}>
            <div className="eyebrow">Platform Spotlight</div>
            <h2 className="section-title">Three Specialized Platforms. One Stronger Digital Foundation.</h2>
          </div>
          <div className="feature-grid-3">
            {platforms.map((platform) => (
              <article key={platform.id} className="glass-card platform-card">
                <span className="platform-label">{platform.name}</span>
                <h3 className="platform-title">{platform.name}</h3>
                <p className="platform-subtitle">{platform.tagline}</p>
                <p className="platform-summary">{platform.summary}</p>
                <div className="card-actions">
                  <Link href={platform.solutionHref} className="btn-secondary btn-sm">
                    Explore
                  </Link>
                  <a href={platform.portal} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                    Visit Portal
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 32px" }}>
            <div className="eyebrow">Industries</div>
            <h2 className="section-title">Focused on the Industries Where Control Matters Most</h2>
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
        <div className="container-site split-layout">
          <div>
            <div className="eyebrow">Why Teksys</div>
            <h2 className="section-title">Why Companies Choose Teksys</h2>
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

      <section className="section section-muted">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 30px" }}>
            <div className="eyebrow">Ecosystem Flow</div>
            <h2 className="section-title">Start with One Platform. Expand into a Connected Ecosystem.</h2>
          </div>
          <div className="ecosystem-flow">
            <article className="glass-card ecosystem-node">
              <h3>TeksysBIM</h3>
              <p>Design intelligence</p>
            </article>
            <div className="ecosystem-arrow">→</div>
            <article className="glass-card ecosystem-node">
              <h3>TeksysERP</h3>
              <p>Operational intelligence</p>
            </article>
            <div className="ecosystem-arrow">→</div>
            <article className="glass-card ecosystem-node">
              <h3>TeksysDPR</h3>
              <p>Execution intelligence</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta-band">
        <div className="container-site">
          <div className="cta-band-inner">
            <h2 className="section-title" style={{ maxWidth: "760px" }}>
              Ready to digitize design, operations, or project execution?
            </h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Book a Demo
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 34px" }}>
            <div className="eyebrow">Domain-Led Services</div>
            <h2 className="section-title">Solutions Backed by Domain-Led Services</h2>
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
    </>
  );
}
