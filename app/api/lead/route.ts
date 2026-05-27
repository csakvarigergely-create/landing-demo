import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.phone || !payload.email || !payload.city) {
    return NextResponse.json({ error: "Hiányzó kötelező mező." }, { status: 400 });
  }

  const lead = {
    ...payload,
    source: "klimapont-gyor-landing",
    createdAt: new Date().toISOString()
  };

  if (process.env.LEAD_WEBHOOK_URL) {
    await fetch(process.env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });
  }

  return NextResponse.json({ ok: true });
}
