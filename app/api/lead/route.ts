import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  message?: string;
};

const PLACEHOLDER_WEBHOOK_URL = "IDE_ILLESZD_BE_A_WEBHOOK_URLT";

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.phone || !payload.email) {
    return NextResponse.json({ error: "Hianyzo kotelezo mezo." }, { status: 400 });
  }

  const webhookUrl = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl === PLACEHOLDER_WEBHOOK_URL || !webhookUrl.startsWith("https://")) {
    return NextResponse.json({ error: "A webhook URL nincs beallitva." }, { status: 500 });
  }

  const lead = {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    city: payload.city ?? "",
    message: payload.message ?? ""
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });

    if (!response.ok) {
      return NextResponse.json({ error: "A webhook nem fogadta az ajanlatkerest." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Nem sikerult kapcsolodni a webhookhoz." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
