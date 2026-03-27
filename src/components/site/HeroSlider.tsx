"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export const heroSlides = [
  {
    id: "bim",
    portal: "TeksysBIM",
    colorHex: "#7df5b5",
    tag: "Design Intelligence",
    headline: "Design Intelligence for Better Coordination",
    text: "Model coordination, design visibility, and BIM-led project understanding.",
    image: "/images/portals/bim-slide-1.png",
    href: "/portals#teksysbim",
    externalHref: "https://bim.teksys.in",
  },
  {
    id: "erp",
    portal: "TeksysERP",
    colorHex: "#93cdf6",
    tag: "Operational Intelligence",
    headline: "Operational Efficiency Across Business Workflows",
    text: "Procurement, contracts, inventory, finance, and HR — connected and controlled.",
    image: "/images/portals/erp-slide-1.png",
    href: "/portals#teksyserp",
    externalHref: "https://erp.teksys.in",
  },
  {
    id: "dpr",
    portal: "TeksysDPR",
    colorHex: "#d4f7a6",
    tag: "Execution Intelligence",
    headline: "Execution Visibility That Drives Project Control",
    text: "Progress tracking, target vs actual, delay analysis, and management reporting.",
    image: "/images/portals/dpr-slide-1.png",
    href: "/portals#teksysdpr",
    externalHref: "https://dpr.teksys.in",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => setActive((p) => (p + 1) % heroSlides.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, next]);

  const slide = heroSlides[active];

  return (
    <div
      className="portal-slider-panel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`portal-slide${i === active ? " portal-slide-active" : ""}`}
          aria-hidden={i !== active}
        >
          {/* Background: real image or CSS mock */}
          {!imgErrors[s.id] ? (
            <div className="portal-slide-imgwrap">
              <Image
                src={s.image}
                alt={`${s.portal} portal`}
                fill
                className="portal-slide-img"
                onError={() => setImgErrors((e) => ({ ...e, [s.id]: true }))}
                priority={i === 0}
              />
            </div>
          ) : (
            <PortalMock portal={s.portal} color={s.colorHex} tag={s.tag} />
          )}

          {/* Gradient overlay */}
          <div className="portal-slide-overlay" />

          {/* Bottom content strip */}
          <div className="portal-slide-content">
            <div className="portal-slide-tag" style={{ color: s.colorHex, borderColor: s.colorHex + "44" }}>
              {s.portal}
            </div>
            <p className="portal-slide-headline">{s.headline}</p>
            <p className="portal-slide-subtext">{s.text}</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <Link href={s.href} className="btn-secondary btn-sm">Learn More</Link>
              <a
                href={s.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
                style={{ borderColor: s.colorHex + "55", color: s.colorHex }}
              >
                Visit ↗
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button type="button" className="pslider-arrow pslider-prev" onClick={prev} aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button type="button" className="pslider-arrow pslider-next" onClick={next} aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="pslider-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`pslider-dot${i === active ? " pslider-dot-active" : ""}`}
            style={i === active ? { background: slide.colorHex } : {}}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* CSS mock-up shown when portal screenshot is not yet available */
function PortalMock({ portal, color, tag }: { portal: string; color: string; tag: string }) {
  return (
    <div className="portal-mock">
      {/* Mock top bar */}
      <div className="pmock-topbar">
        <div className="pmock-dot" style={{ background: color }} />
        <div className="pmock-dot" style={{ background: color, opacity: 0.5 }} />
        <div className="pmock-dot" style={{ background: color, opacity: 0.25 }} />
        <div style={{ flex: 1 }} />
        <span className="pmock-label" style={{ color }}>{portal}</span>
      </div>
      {/* Mock sidebar + content */}
      <div className="pmock-body">
        <div className="pmock-sidebar">
          {[85, 60, 72, 48, 68, 55].map((_, j) => (
            <div key={j} className="pmock-nav-item" style={j === 0 ? { background: color + "22", borderColor: color + "55" } : {}} />
          ))}
        </div>
        <div className="pmock-content">
          <div className="pmock-heading" style={{ background: color + "33" }} />
          <div className="pmock-cards">
            {[color + "22", color + "11", color + "18", color + "0e"].map((bg, j) => (
              <div key={j} className="pmock-card" style={{ background: bg, borderColor: color + "33" }}>
                <div className="pmock-card-bar" style={{ background: color, width: `${[70, 45, 85, 55][j]}%`, opacity: 0.6 }} />
              </div>
            ))}
          </div>
          <div className="pmock-table">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="pmock-row" style={{ opacity: 1 - j * 0.15 }}>
                <div className="pmock-cell" style={{ flex: 2, background: color + "18" }} />
                <div className="pmock-cell" style={{ background: color + "12" }} />
                <div className="pmock-cell" style={{ background: color + "0e" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tag label centered */}
      <div className="pmock-tag" style={{ color, borderColor: color + "44" }}>{tag}</div>
    </div>
  );
}
