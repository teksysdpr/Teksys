import type { Metadata } from "next";
import ContactPageClient from "@/components/site/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let’s discuss your digital priorities across BIM, ERP, DPR, and integrated transformation.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
