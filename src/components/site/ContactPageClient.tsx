"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { contactOptions, siteMeta } from "@/lib/site-data";

type ContactForm = {
  name: string;
  company: string;
  role: string;
  industry: string;
  mobile: string;
  email: string;
  interestedIn: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  company: "",
  role: "",
  industry: "",
  mobile: "",
  email: "",
  interestedIn: "",
  message: "",
};

const industryOptions = [
  "Real Estate Developers",
  "EPC Contractors",
  "Infrastructure Companies",
  "Industrial Projects",
  "PMC / Consultant Teams",
  "Other",
];

const trustPanels = [
  "Corporate brand positioning across BIM, ERP, and DPR",
  "Domain-led implementation orientation for project industries",
  "Structured roadmap support for phased digital transformation",
];

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "ready">("idle");

  const updateField =
    (field: keyof ContactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Enquiry from Teksys website — ${form.interestedIn || "General Consultation"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nRole: ${form.role}\nIndustry: ${form.industry}\nMobile Number: ${form.mobile}\nEmail: ${form.email}\nInterested In: ${form.interestedIn}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("ready"), 700);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container-site" style={{ maxWidth: "900px" }}>
          <div className="eyebrow">Contact</div>
          <h1 className="page-title">Let&apos;s Discuss Your Digital Priorities</h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "760px" }}>
            Whether your priority is BIM, ERP, DPR, or integrated transformation, we can help you identify the right
            digital path for your business context.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site split-layout">
          <aside style={{ display: "grid", gap: "14px" }}>
            <article className="glass-card info-card">
              <h3>Contact Information</h3>
              <p style={{ marginBottom: "6px" }}>{siteMeta.address}</p>
              <p style={{ marginBottom: "6px" }}>
                <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
              </p>
              <p>
                <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`}>{siteMeta.phone}</a>
              </p>
            </article>

            <article className="glass-card info-card">
              <h3>Why Engage Teksys</h3>
              <ul className="why-list">
                {trustPanels.map((item) => (
                  <li key={item}>
                    <span />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card info-card">
              <h3>Portal Access</h3>
              <p style={{ marginBottom: "10px" }}>
                You can directly visit our specialized platforms for product-level exploration.
              </p>
              <div className="card-actions">
                <a className="btn-secondary btn-sm" href={siteMeta.portals.bim} target="_blank" rel="noopener noreferrer">
                  TeksysBIM
                </a>
                <a className="btn-secondary btn-sm" href={siteMeta.portals.erp} target="_blank" rel="noopener noreferrer">
                  TeksysERP
                </a>
                <a className="btn-secondary btn-sm" href={siteMeta.portals.dpr} target="_blank" rel="noopener noreferrer">
                  TeksysDPR
                </a>
              </div>
            </article>
          </aside>

          <div className="glass-card contact-form">
            <h2 className="section-title" style={{ fontSize: "clamp(1.3rem,2.2vw,1.9rem)", marginBottom: "8px" }}>
              Structured Enquiry Form
            </h2>
            <p className="body-sm" style={{ marginBottom: "18px" }}>
              Share your requirement details and our team will reach out with the right next step.
            </p>

            {status === "ready" ? (
              <div className="glass-card info-card" style={{ background: "rgba(22, 36, 27, 0.8)" }}>
                <h3>Mail draft prepared</h3>
                <p style={{ marginBottom: "14px" }}>
                  Your email client should open with the full enquiry details. If it did not open, use the button
                  below to reset and try again.
                </p>
                <button type="button" className="btn-secondary" onClick={() => setStatus("idle")}>
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Name *</label>
                    <input className="field" required value={form.name} onChange={updateField("name")} />
                  </div>
                  <div>
                    <label className="field-label">Company *</label>
                    <input className="field" required value={form.company} onChange={updateField("company")} />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Role</label>
                    <input className="field" value={form.role} onChange={updateField("role")} />
                  </div>
                  <div>
                    <label className="field-label">Industry</label>
                    <select className="field" value={form.industry} onChange={updateField("industry")}>
                      <option value="">Select Industry</option>
                      {industryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div>
                    <label className="field-label">Mobile Number *</label>
                    <input className="field" required value={form.mobile} onChange={updateField("mobile")} />
                  </div>
                  <div>
                    <label className="field-label">Email *</label>
                    <input
                      className="field"
                      type="email"
                      required
                      value={form.email}
                      onChange={updateField("email")}
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label">Interested In</label>
                  <select className="field" value={form.interestedIn} onChange={updateField("interestedIn")}>
                    <option value="">Select Option</option>
                    {contactOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="field-label">Message</label>
                  <textarea
                    className="field"
                    rows={5}
                    value={form.message}
                    onChange={updateField("message")}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button type="submit" className="btn-primary" disabled={status === "sending"}>
                    {status === "sending" ? "Preparing..." : "Submit Enquiry"}
                  </button>
                  <Link href="/portals" className="btn-secondary">
                    Visit Portals
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
