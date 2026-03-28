/**
 * CustomerLogoSlider — horizontal auto-scrolling marquee.
 *
 * Data-driven from the `customerLogos` array in site-data.ts.
 * To replace dummy logos with real ones (e.g. from an admin/control-panel
 * integration), update only that array — no component changes needed.
 *
 * For admin/CMS integration: expose `customerLogos` as a CMS collection
 * (e.g. Contentful, Sanity, or a Next.js API route) and pass the fetched
 * data in as a prop or via a data-fetching wrapper around this component.
 */

import { customerLogos } from "@/lib/site-data";

export default function CustomerLogoSlider() {
  // Duplicate items for seamless CSS marquee loop
  const items = [...customerLogos, ...customerLogos];

  return (
    <section className="logo-marquee-section">
      <p className="logo-marquee-title">Trusted by Visionary Clients and Growing Businesses</p>

      <div className="logo-marquee-track-wrapper">
        <div className="logo-marquee-track" aria-hidden="true">
          {items.map((logo, i) => (
            <div key={`${logo.id}-${i}`} className="logo-item">
              <span className="logo-item-abbr">{logo.abbr}</span>
              <span className="logo-item-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
