import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
}

function normalizeMobile(value: string) {
  return value.replace(/\D/g, "");
}

function isValidMobile(value: string) {
  const digits = normalizeMobile(value);
  return digits.length >= 10 && digits.length <= 15;
}

function extractErrorMessage(data: unknown, fallback = "Failed to submit enquiry."): string {
  if (!data) return fallback;
  if (typeof data === "string") return data;
  const d = data as Record<string, unknown>;
  if (typeof d.message === "string" && d.message.trim()) return d.message;
  if (typeof d.detail === "string" && d.detail.trim()) return d.detail;
  if (Array.isArray(d.detail)) {
    const first = d.detail[0];
    if (typeof first === "string") return first;
    if (first?.msg) return String(first.msg);
    return d.detail.map((item: unknown) => (item as Record<string, unknown>)?.msg || JSON.stringify(item)).join("; ");
  }
  if (typeof d.detail === "object" && d.detail !== null) {
    const detail = d.detail as Record<string, unknown>;
    if (detail.msg) return String(detail.msg);
    try { return JSON.stringify(detail); } catch { return fallback; }
  }
  return fallback;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const company = String(body?.company || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();
    const mobileRaw = String(body?.mobile || body?.phone || "").trim();
    const mobile = normalizeMobile(mobileRaw);
    const interestedIn = String(body?.interestedIn || "").trim();
    const role = String(body?.role || "").trim();
    const industry = String(body?.industry || "").trim();

    if (!name) {
      return NextResponse.json({ message: "Please enter your full name." }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ message: "Please enter your email address." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }
    if (mobileRaw && !isValidMobile(mobileRaw)) {
      return NextResponse.json(
        { message: "Please enter a valid mobile number with 10 to 15 digits." },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json({ message: "Please describe your requirement." }, { status: 400 });
    }

    const backendUrl = process.env.CONTACT_FORM_API_URL || "";

    if (!backendUrl) {
      return NextResponse.json(
        { message: "Contact API is not configured on the server." },
        { status: 500 }
      );
    }

    const upstreamRes = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        company,
        email,
        mobile,
        phone: mobile,
        role,
        industry,
        interested_in: interestedIn,
        portal: "Teksys Website",
        message,
      }),
    });

    const rawText = await upstreamRes.text();
    let data: unknown = null;
    try { data = rawText ? JSON.parse(rawText) : null; } catch { data = rawText; }

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { message: extractErrorMessage(data) },
        { status: upstreamRes.status }
      );
    }

    const d = data as Record<string, unknown> | null;
    return NextResponse.json(
      {
        message:
          typeof d?.message === "string" && d.message.trim()
            ? d.message
            : "Thank you. Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}
