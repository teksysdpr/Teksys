import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/site/HeroSlider";
import CustomerLogoSlider from "@/components/site/CustomerLogoSlider";
import { platforms, solutionItems } from "@/lib/site-data";

/* ─── Portal impact (3 pillars) ─────────────────────────── */
const portalImpact = [
  {
    id: "design-intelligence",
    label: "Design Intelligence",
    name: "TeksysBIM",
    color: "var(--bim)",
    summary:
      "Improve design clarity, coordination, and digital readiness through BIM-led information structures.",
  },
  {
    id: "workflow-control",
    label: "Workflow Control",
    name: "TeksysERP",
    color: "var(--erp)",
    summary:
      "Connect operational processes such as procurement, contracts, inventory, finance, HR, and approvals with greater discipline and speed.",
  },
  {
    id: "execution-visibility",
    label: "Execution Visibility",
    name: "TeksysDPR",
    color: "var(--dpr)",
    summary:
      "Track progress, compare target vs actual, identify issues earlier, and strengthen reporting for project control.",
  },
];

/* ─── Resource cards ─────────────────────────────────────── */
const resourceCards = [
  {
    id: "insights",
    title: "Insights",
    description: "Short-form thinking on digital construction, coordination, reporting, and operational control.",
    href: "/resources#insights",
    tag: "Knowledge",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Illustrative examples of how connected platforms can improve project outcomes.",
    href: "/resources#case-studies",
    tag: "Outcomes",
  },
  {
    id: "industry-notes",
    title: "Industry Notes",
    description: "Practical viewpoints on process gaps, inefficiencies, and digital transformation opportunities.",
    href: "/resources#industry-notes",
    tag: "Field Notes",
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "Clear answers to common questions around BIM, ERP, DPR, and connected platform use.",
    href: "/resources#faqs",
    tag: "Support",
  },
  {
    id: "downloads",
    title: "Downloads / Brochures",
    description: "Future-ready space for brochures, presentations, capability notes, and customer material.",
    href: "/resources#downloads-brochures",
    tag: "Collateral",
  },
];

/* ─── Benefit points ─────────────────────────────────────── */
const benefitPoints = [
  "Better coordination across teams",
  "Stronger workflow control",
  "Better reporting discipline",
  "Improved target vs actual visibility",
  "Faster access to project information",
  "Smarter digital decision-making",
];

/* ─── Page ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── 1. Full-Width Hero Slider ─────────────────────── */}
      <section className="fw-hero-section">
        <HeroSlider />
      </section>

      {/* ── 2. Brand positioning strip ───────────────────── */}
      <section className="section section-tight-top">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 34px" }}>
            <div className="eyebrow">One Digital Ecosystem</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "16px" }}>
              Where Design, Operations, and Execution Work as One
            </h2>
            <p className="lead">
              Teksys helps project-driven organizations connect BIM, operational workflows, and project control
              into a more visible, efficient, and coordinated digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Portal impact: 3 pillars ──────────────────── */}
      <section className="section section-muted">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 32px" }}>
            <div className="eyebrow">How Teksys Works</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "14px" }}>
              How Teksys Improves Construction Efficiency
            </h2>
            <p className="lead">
              Construction businesses often struggle because design information, business workflows, and site
              execution are handled in disconnected systems. Teksys brings these layers together through
              specialized digital platforms that improve visibility, coordination, and control.
            </p>
          </div>
          <div className="portal-impact-grid">
            {portalImpact.map((item) => (
              <article key={item.id} className="glass-card portal-impact-card">
                <p className="portal-impact-name" style={{ color: item.color }}>
                  {item.label}
                </p>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Portals section — portal logo cards ───────── */}
      <section className="section">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Portals</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "14px" }}>
              Three Portals. One Connected Digital Ecosystem.
            </h2>
            <p className="lead">
              Each Teksys portal is designed to strengthen a different layer of the project lifecycle. Together,
              they create a more connected digital foundation for project-driven businesses.
            </p>
          </div>
          <div className="portals-section-grid">
            {platforms.map((platform) => (
              <article key={platform.id} className="glass-card portal-logo-card">
                {/* Portal logo image — clickable to portal */}
                <a
                  href={platform.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-logo-img-wrap"
                  aria-label={`Visit ${platform.name}`}
                >
                  <div className="portal-logo-box">
                    <Image
                      src={platform.logoImage}
                      alt={platform.name}
                      width={220}
                      height={56}
                    />
                  </div>
                </a>

                <div>
                  <p className="portal-logo-pillar" style={{ color: platform.color }}>
                    {platform.pillar}
                  </p>
                  <h3 className="portal-logo-card-title">{platform.summary}</h3>
                </div>

                <p className="portal-logo-card-desc">{platform.description}</p>

                <div className="card-actions">
                  <Link href={platform.internalHref} className="btn-ghost btn-sm">
                    Explore
                  </Link>
                  <a
                    href={platform.portal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm"
                  >
                    Visit Portal ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Solutions section ─────────────────────────── */}
      <section className="section section-soft">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Solutions</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "14px" }}>
              Solutions Designed for Project-Driven Businesses
            </h2>
            <p className="lead">
              Teksys is built for organizations that need clearer coordination between design, operations, and
              execution. Our solution layers help teams move from fragmented processes to connected digital
              workflows.
            </p>
          </div>
          <div className="solutions-grid">
            {solutionItems.map((item) => (
              <article key={item.id} className="glass-card solution-item-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{ marginTop: "14px" }}>
                  <Link href={`/solutions#${item.id}`} className="btn-ghost btn-sm">
                    View Solution
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Resources section ─────────────────────────── */}
      <section className="section">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 36px" }}>
            <div className="eyebrow">Resources</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "14px" }}>
              Resources for Digital Construction and Project Efficiency
            </h2>
            <p className="lead">
              Teksys is building not just digital platforms, but a stronger knowledge layer for organizations
              navigating construction digitization.
            </p>
          </div>
          <div className="resources-grid">
            {resourceCards.map((card) => (
              <article key={card.id} className="glass-card resource-card">
                <span className="resource-card-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div>
                  <Link href={card.href} className="btn-ghost btn-sm">
                    Open Resource
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Benefits / Impact section ─────────────────── */}
      <section className="section section-muted">
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 32px" }}>
            <div className="eyebrow">Impact</div>
            <h2 className="section-title" style={{ marginTop: "14px", marginBottom: "14px" }}>
              Why Teksys Matters to the Construction Sector
            </h2>
            <p className="lead">
              The value of digital transformation is not only in automation. It is in stronger coordination,
              faster visibility, and better control across the lifecycle of a project-driven organization.
            </p>
          </div>
          <div className="benefits-grid">
            {benefitPoints.map((point) => (
              <article key={point} className="benefit-block">
                <span className="benefit-dot" />
                <p>{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Customer logo slider ───────────────────────── */}
      <CustomerLogoSlider />

      {/* ── 9. CTA band ──────────────────────────────────── */}
      <section className="section section-cta-band">
        <div className="container-site">
          <div className="cta-band-inner">
            <h2 className="section-title" style={{ maxWidth: "680px" }}>
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
    </>
  );
}
