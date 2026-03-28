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

const steps = [
  { id: 1, label: "Organisation", sublabel: "Who you are" },
  { id: 2, label: "Contact",      sublabel: "How to reach you" },
  { id: 3, label: "Requirement",  sublabel: "What you need" },
];

const sidebarStats = [
  { value: "3", label: "Portals" },
  { value: "10+", label: "Industries served" },
  { value: "24h", label: "Response time" },
];

const trustItems = [
  { icon: "◆", text: "BIM coordination, modeling, and digital design support" },
  { icon: "◇", text: "ERP for procurement, contracts, finance, and operations" },
  { icon: "▣", text: "DPR execution tracking, progress control, and reporting" },
  { icon: "▤", text: "Phased digital transformation roadmap guidance" },
];

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update =
    (field: keyof ContactForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  function nextStep() {
    setStep((s) => Math.min(s + 1, 3));
  }
  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
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
      if (!res.ok) throw new Error(data?.message || "Failed to submit enquiry.");

      setSubmitted(true);
      setForm(initialForm);
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit enquiry.");
    } finally {
      setBusy(false);
    }
  }

  const stepValid: Record<number, boolean> = {
    1: !!form.name.trim() && !!form.company.trim(),
    2: !!form.mobile.trim() && !!form.email.trim(),
    3: !!form.message.trim(),
  };

  return (
    <>
      {/* ── Page hero ───────────────────────────────────── */}
      <section className="page-hero">
        <div className="container-site" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ borderColor: "rgba(184,170,255,0.4)", background: "rgba(184,170,255,0.08)", color: "#b8aaff" }}>
            TeksysDPR · Contact
          </div>
          <h1 className="page-title" style={{ marginTop: "14px", maxWidth: "720px", marginInline: "auto" }}>
            Let&apos;s Discuss Your Digital Priorities
          </h1>
          <p className="lead" style={{ marginTop: "16px", maxWidth: "600px", marginInline: "auto" }}>
            Submit your enquiry and our team will reach out with the right digital roadmap for your organisation.
          </p>
        </div>
      </section>

      {/* ── Main contact layout ─────────────────────────── */}
      <section className="section">
        <div className="container-site">
          <div className="cf-shell">

            {/* ── LEFT: Sidebar ────────────────────────── */}
            <aside className="cf-sidebar">

              {/* Stat strip */}
              <div className="cf-stat-strip">
                {sidebarStats.map((s) => (
                  <div key={s.label} className="cf-stat">
                    <span className="cf-stat-value">{s.value}</span>
                    <span className="cf-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Trust items */}
              <div className="cf-trust-block">
                <p className="cf-trust-heading">What we help with</p>
                {trustItems.map((t) => (
                  <div key={t.text} className="cf-trust-item">
                    <span className="cf-trust-icon">{t.icon}</span>
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>

              {/* Contact meta */}
              <div className="cf-meta">
                <p className="cf-meta-heading">Reach us directly</p>
                <a href="mailto:contact@teksys.in" className="cf-meta-link">contact@teksys.in</a>
                <a href={`tel:${siteMeta.phone.replace(/\s+/g, "")}`} className="cf-meta-link">{siteMeta.phone}</a>
                <p className="cf-meta-address">{siteMeta.address}</p>
              </div>

              {/* Portal quick links */}
              <div className="cf-portal-links">
                <p className="cf-meta-heading">Our Portals</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { name: "TeksysBIM", href: siteMeta.portals.bim, color: "#52dfb0" },
                    { name: "TeksysERP", href: siteMeta.portals.erp, color: "#7fc4f5" },
                    { name: "TeksysDPR", href: siteMeta.portals.dpr, color: "#b8aaff" },
                  ].map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cf-portal-link"
                      style={{ borderColor: p.color + "33", color: p.color }}
                    >
                      <span className="cf-portal-dot" style={{ background: p.color }} />
                      {p.name}
                      <span className="cf-portal-arrow">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── RIGHT: Multi-step form ────────────────── */}
            <div className="cf-form-panel">

              {/* Step progress */}
              <div className="cf-stepper">
                {steps.map((s, i) => (
                  <div key={s.id} className="cf-step-wrap">
                    <div className={`cf-step${step === s.id ? " cf-step-active" : ""}${step > s.id ? " cf-step-done" : ""}`}>
                      <div className="cf-step-circle">
                        {step > s.id ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span>{s.id}</span>
                        )}
                      </div>
                      <div className="cf-step-labels">
                        <span className="cf-step-name">{s.label}</span>
                        <span className="cf-step-sub">{s.sublabel}</span>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`cf-step-connector${step > s.id ? " cf-step-connector-done" : ""}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="cf-progress-track">
                <div
                  className="cf-progress-fill"
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {/* Success state */}
              {submitted ? (
                <div className="cf-success">
                  <div className="cf-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="cf-success-title">Enquiry Submitted</h3>
                  <p className="cf-success-msg">
                    Thank you. Your enquiry has been received. Our team will reach out within 24 hours with the right next step for your organisation.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginTop: "24px" }}>
                    <button className="btn-primary btn-sm" onClick={() => setSubmitted(false)}>
                      New Enquiry
                    </button>
                    <Link href="/portals" className="btn-ghost btn-sm">
                      Explore Portals
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Step 1 — Organisation */}
                  {step === 1 && (
                    <div className="cf-step-body">
                      <div className="cf-step-header">
                        <span className="cf-step-tag">Step 1 of 3</span>
                        <h2 className="cf-step-title">Organisation Details</h2>
                        <p className="cf-step-desc">Tell us who you are and where you work.</p>
                      </div>
                      <div className="cf-fields">
                        <div className="cf-field-row">
                          <div className="cf-field-group">
                            <label className="field-label">Full Name <span className="cf-required">*</span></label>
                            <input
                              className="field"
                              required
                              value={form.name}
                              onChange={update("name")}
                              placeholder="Your full name"
                              autoFocus
                            />
                          </div>
                          <div className="cf-field-group">
                            <label className="field-label">Company / Organisation <span className="cf-required">*</span></label>
                            <input
                              className="field"
                              required
                              value={form.company}
                              onChange={update("company")}
                              placeholder="Organisation name"
                            />
                          </div>
                        </div>
                        <div className="cf-field-row">
                          <div className="cf-field-group">
                            <label className="field-label">Your Role</label>
                            <input
                              className="field"
                              value={form.role}
                              onChange={update("role")}
                              placeholder="e.g. Project Director, CTO"
                            />
                          </div>
                          <div className="cf-field-group">
                            <label className="field-label">Industry Sector</label>
                            <select className="field" value={form.industry} onChange={update("industry")}>
                              <option value="">Select your sector</option>
                              {industryOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Contact */}
                  {step === 2 && (
                    <div className="cf-step-body">
                      <div className="cf-step-header">
                        <span className="cf-step-tag">Step 2 of 3</span>
                        <h2 className="cf-step-title">Contact Details</h2>
                        <p className="cf-step-desc">How should we reach you?</p>
                      </div>
                      <div className="cf-fields">
                        <div className="cf-field-row">
                          <div className="cf-field-group">
                            <label className="field-label">Mobile Number <span className="cf-required">*</span></label>
                            <input
                              className="field"
                              required
                              type="tel"
                              value={form.mobile}
                              onChange={update("mobile")}
                              placeholder="+91 98765 43210"
                              autoFocus
                            />
                          </div>
                          <div className="cf-field-group">
                            <label className="field-label">Email Address <span className="cf-required">*</span></label>
                            <input
                              className="field"
                              required
                              type="email"
                              value={form.email}
                              onChange={update("email")}
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>

                        {/* Summary card from step 1 */}
                        <div className="cf-summary-card">
                          <p className="cf-summary-label">Submitted for</p>
                          <p className="cf-summary-value">{form.name}{form.company ? ` · ${form.company}` : ""}</p>
                          {form.role && <p className="cf-summary-meta">{form.role}{form.industry ? ` · ${form.industry}` : ""}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 — Requirement */}
                  {step === 3 && (
                    <div className="cf-step-body">
                      <div className="cf-step-header">
                        <span className="cf-step-tag">Step 3 of 3</span>
                        <h2 className="cf-step-title">Your Requirement</h2>
                        <p className="cf-step-desc">What digital outcome are you looking for?</p>
                      </div>
                      <div className="cf-fields">
                        <div className="cf-field-group">
                          <label className="field-label">Interested In</label>
                          <div className="cf-option-grid">
                            {contactOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                className={`cf-option-btn${form.interestedIn === opt ? " cf-option-btn-active" : ""}`}
                                onClick={() => setForm((prev) => ({ ...prev, interestedIn: opt }))}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="cf-field-group">
                          <label className="field-label">Describe Your Requirement <span className="cf-required">*</span></label>
                          <textarea
                            className="field"
                            rows={5}
                            required
                            value={form.message}
                            onChange={update("message")}
                            placeholder="Describe the process gaps, outcomes you need, or the platforms you want to explore..."
                            style={{ resize: "vertical" }}
                            autoFocus
                          />
                        </div>

                        {/* Full summary */}
                        <div className="cf-summary-card">
                          <p className="cf-summary-label">Submitting for</p>
                          <p className="cf-summary-value">{form.name} · {form.company}</p>
                          <p className="cf-summary-meta">{form.mobile} · {form.email}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error */}
                  {error && <div className="contact-notice-err" style={{ margin: "0 28px 16px" }}>{error}</div>}

                  {/* Navigation */}
                  <div className="cf-nav">
                    {step > 1 ? (
                      <button type="button" className="btn-ghost btn-sm" onClick={prevStep}>
                        ← Back
                      </button>
                    ) : (
                      <span />
                    )}
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span className="cf-nav-hint">{step < 3 ? `${3 - step} step${3 - step > 1 ? "s" : ""} remaining` : "Ready to submit"}</span>
                      {step < 3 ? (
                        <button
                          type="button"
                          className="btn-primary btn-sm"
                          onClick={nextStep}
                          disabled={!stepValid[step]}
                        >
                          Continue →
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn-primary"
                          disabled={busy || !stepValid[3]}
                        >
                          {busy ? "Submitting…" : "Submit Enquiry"}
                        </button>
                      )}
                    </div>
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
