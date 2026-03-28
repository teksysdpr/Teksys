import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { siteMeta } from "@/lib/site-data";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Teksys — One Digital Ecosystem for BIM, ERP, and Project Control",
    template: "%s | Teksys",
  },
  description:
    "Teksys is the corporate digital ecosystem brand connecting TeksysBIM, TeksysERP, and TeksysDPR for design intelligence, operational intelligence, and execution intelligence.",
  keywords: [
    "BIM",
    "ERP",
    "project monitoring",
    "EPC",
    "real estate",
    "construction technology",
    "digital transformation",
    "project control",
    "TeksysBIM",
    "TeksysERP",
    "TeksysDPR",
  ],
  metadataBase: new URL(siteMeta.siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteMeta.siteUrl,
    siteName: "Teksys",
    title: "Teksys — One Digital Ecosystem for BIM, ERP, and Project Control",
    description:
      "Where Design, Operations, and Execution Work as One. Teksys connects BIM, ERP, and DPR into one digital ecosystem for project-driven organizations.",
  },
  icons: {
    icon: "/assets/teksys-main-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="page-shell">
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
