import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteMeta } from "@/lib/site-data";

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterColumn({ title, links }: { title: string; links: FooterItem[] }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {links.map((link) =>
          link.external ? (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container-site footer-main">
        <div className="footer-brand">
          <Link href="/" style={{ display: "inline-flex", marginBottom: "18px" }}>
            <Image
              src="/assets/teksys-main-logo.png"
              alt="Teksys"
              width={160}
              height={44}
              style={{ width: "auto", height: "36px" }}
            />
          </Link>
          <p className="body-sm" style={{ maxWidth: "340px", marginBottom: "16px" }}>
            Teksys delivers domain-focused digital solutions for EPC, infrastructure, and real estate organizations.
          </p>
          <p className="body-sm" style={{ maxWidth: "360px" }}>
            Teksys helps project-driven organizations derive more value from BIM, ERP, and DPR through design intelligence, operational control, and execution visibility.
          </p>
        </div>

        <FooterColumn title="Home" links={footerLinks.home} />
        <FooterColumn title="Portals" links={footerLinks.portals} />
        <FooterColumn title="Solutions" links={footerLinks.solutions} />
        <FooterColumn title="Resources" links={footerLinks.resources} />
      </div>

      <div className="container-site footer-note">
        <span>© {new Date().getFullYear()} Teksys. All rights reserved.</span>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <span>{siteMeta.phone}</span>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
