"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteMeta, contactOptions } from "@/lib/site-data";

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

const trustItems = [
  "BIM coordination, modeling, and digital design support",
  "ERP implementation for project-driven business operations",
  "DPR execution tracking, reporting, and progress control",
  "Phased digital transformation roadmap guidance",
];

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const update =
    (field: keyof ContactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setNotice("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          mobile: form.mobile,
          role: form.role,
          industry: form.industry,
          interestedIn: form.interestedIn,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit enquiry.");
      }

      setNotice(data?.message || "Thank you. Your enquiry has been submitted successfully.");
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit enquiry.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container-site" style={{ textAlign: "center" }}>
          <div className="eyebrow">Contact</div>
          <h1 className="page-title" style={{ marginTop: "14px", maxWidth: "720px", marginInline: "auto" }}>
            Let&apos;s Discuss Your Digital Priorities
          </h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "620px", marginInline: "auto" }}>
            Whether your priority is BIM, ERP, DPR, or integrated transformation, we can help you identify the right
            digital path for your organization.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="contact-panel-wrap">
            {/* Left info panel */}
            <div className="contact-panel-left">
              <p className="contact-panel-left-kicker">Talk to us</p>
              <h2>Start Your Digital Transformation with the Right Platform</h2>
              <p>
                Tell us about your organization, process gaps, or rollout priorities. We will help you identify the
                right first platform and a phased digital expansion path.
              </p>

              <div className="contact-trust-list">
                {trustItems.map((item) => (
                  <div key={item} className="contact-trust-item">
                    <span className="contact-trust-dot" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="contact-meta">
                <span>{siteMeta.address}</span>
                <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
                <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`}>{siteMeta.phone}</a>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                  <a className="btn-secondary btn-sm" href={siteMeta.portals.bim} target="_blank" rel="noopener noreferrer">
                    TeksysBIM ↗
                  </a>
                  <a className="btn-secondary btn-sm" href={siteMeta.portals.erp} target="_blank" rel="noopener noreferrer">
                    TeksysERP ↗
                  </a>
                  <a className="btn-secondary btn-sm" href={siteMeta.portals.dpr} target="_blank" rel="noopener noreferrer">
                    TeksysDPR ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="contact-panel-right">
              <h2 className="contact-form-title">Submit an Enquiry</h2>
              <p className="contact-form-sub">
                Share your requirement details and our team will reach out with the right next step.
              </p>

              {notice ? (
                <div className="contact-notice-ok">{notice}</div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
                  <div className="form-grid-2">
                    <div>
                      <label className="field-label">Full Name *</label>
                      <input className="field" required value={form.name} onChange={update("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="field-label">Company *</label>
                      <input className="field" required value={form.company} onChange={update("company")} placeholder="Organization name" />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label className="field-label">Mobile Number *</label>
                      <input className="field" required value={form.mobile} onChange={update("mobile")} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="field-label">Email Address *</label>
                      <input className="field" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label className="field-label">Role</label>
                      <input className="field" value={form.role} onChange={update("role")} placeholder="Your designation" />
                    </div>
                    <div>
                      <label className="field-label">Industry</label>
                      <select className="field" value={form.industry} onChange={update("industry")}>
                        <option value="">Select Industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Interested In</label>
                    <select className="field" value={form.interestedIn} onChange={update("interestedIn")}>
                      <option value="">Select Option</option>
                      {contactOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="field-label">Message *</label>
                    <textarea
                      className="field"
                      rows={5}
                      required
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Describe your requirement or the outcome you want to achieve"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {error && <div className="contact-notice-err">{error}</div>}

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button type="submit" className="btn-primary" disabled={busy}>
                      {busy ? "Submitting..." : "Submit Enquiry"}
                    </button>
                    <Link href="/portals" className="btn-secondary">
                      View Portals
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
