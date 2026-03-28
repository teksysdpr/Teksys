"use client";

import { useState, useEffect, useCallback, useRef, type TouchEvent } from "react";

/**
 * Slide data — images are h1.jpg / h2.jpg / h3.jpg only.
 * Each slide links to its respective portal.
 */
export const heroSlides = [
  {
    id: "dpr",
    eyebrow: "One Digital Ecosystem for BIM, ERP, and Project Control",
    portalLabel: "TeksysDPR",
    headline: "Digital Platforms That Improve Efficiency Across the Construction Sector",
    subtext:
      "Teksys connects design, operations, and execution through specialized digital platforms built for modern project-driven businesses.",
    image: "/images/hero-slider/h1.jpg",
    portalHref: "https://dpr.teksys.in",
    ctaText: "Explore DPR Platform",
  },
  {
    id: "erp",
    eyebrow: "One Digital Ecosystem for BIM, ERP, and Project Control",
    portalLabel: "TeksysERP",
    headline: "Smarter Coordination Across the Project Lifecycle",
    subtext:
      "From design intelligence to workflow control, Teksys helps teams work with stronger clarity, speed, and alignment.",
    image: "/images/hero-slider/h2.jpg",
    portalHref: "https://erp.teksys.in",
    ctaText: "Explore ERP Platform",
  },
  {
    id: "bim",
    eyebrow: "One Digital Ecosystem for BIM, ERP, and Project Control",
    portalLabel: "TeksysBIM",
    headline: "A Connected Digital Foundation for Modern Construction",
    subtext:
      "Teksys enables better visibility, better decisions, and better control across complex project environments.",
    image: "/images/hero-slider/h3.jpg",
    portalHref: "https://bim.teksys.in",
    ctaText: "Explore BIM Platform",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const next = useCallback(() => setActive((p) => (p + 1) % heroSlides.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 5500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, next]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    setPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    const startY = touchStartYRef.current;
    const touch = event.changedTouches[0];
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setPaused(false);
    if (startX === null || startY === null) return;
    const dx = startX - touch.clientX;
    const dy = Math.abs(startY - touch.clientY);
    if (Math.abs(dx) < 42 || dy > 72) return;
    if (dx > 0) next();
    else prev();
  };

  const navigateToPortal = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fw-hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartXRef.current = null;
        touchStartYRef.current = null;
        setPaused(false);
      }}
    >
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`fw-hero-slide${i === active ? " fw-hero-slide-active" : ""}`}
          aria-hidden={i !== active}
          style={{ backgroundImage: `url(${s.image})` }}
          onClick={() => navigateToPortal(s.portalHref)}
          role="button"
          tabIndex={i === active ? 0 : -1}
          aria-label={`Visit ${s.portalLabel} portal`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigateToPortal(s.portalHref);
          }}
        >
          {/* No overlays — clean image, whole slide is the portal link */}
        </div>
      ))}

      {/* Prev arrow */}
      <button
        type="button"
        className="fw-pslider-arrow fw-pslider-prev"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        type="button"
        className="fw-pslider-arrow fw-pslider-next"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="fw-pslider-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`fw-pslider-dot${i === active ? " fw-pslider-dot-active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setActive(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar — restarts on each slide change */}
      <div className="fw-hero-progress">
        <div
          key={`progress-${active}`}
          className="fw-hero-progress-bar"
          style={{ animationDuration: paused ? "0s" : "5.5s" }}
        />
      </div>
    </div>
  );
}
