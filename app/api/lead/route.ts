import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  message?: string;
};

const PLACEHOLDER_WEBHOOK_URL = "IDE_ILLESZD_BE_A_WEBHOOK_URLT";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Ervenytelen keres." }, { status: 400 });
  }

  const lead = {
    name: asTrimmedString(payload.name, 100),
    phone: asTrimmedString(payload.phone, 30),
    email: asTrimmedString(payload.email, 254),
    city: asTrimmedString(payload.city, 100),
    message: asTrimmedString(payload.message, 2000)
  };
  const phoneDigits = lead.phone.replace(/\D/g, "");

  if (!lead.name || !lead.phone || !lead.email || !lead.city) {
    return NextResponse.json({ error: "Hianyzo kotelezo mezo." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(lead.email) || phoneDigits.length < 9 || phoneDigits.length > 15) {
    return NextResponse.json({ error: "Ervenytelen kapcsolati adat." }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL ?? process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl === PLACEHOLDER_WEBHOOK_URL || !webhookUrl.startsWith("https://")) {
    return NextResponse.json({ error: "A webhook URL nincs beallitva." }, { status: 500 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(15_000)
    });

    if (!response.ok) {
      return NextResponse.json({ error: "A webhook nem fogadta az ajanlatkerest." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Nem sikerult kapcsolodni a webhookhoz." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
