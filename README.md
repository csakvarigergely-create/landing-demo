# Klíma Komfort landing oldal

Next.js + Tailwind alapú, konverzió fókuszú klímaszerelő landing oldal magyar piacra.

## Futtatás

```bash
npm install
npm run dev
```

Helyi cím:

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Lead webhook

Az ajánlatkérő űrlap az `/api/lead` route-ra küld. Ha van külső CRM, Make, Zapier vagy saját webhook, állítsd be:

```text
LEAD_WEBHOOK_URL=https://...
```

Ha nincs webhook beállítva, az API akkor is sikeres választ ad, így a frontend működése tesztelhető.

## Assetek

Képek:

- `public/assets/klima-hero-premium.png`
- `public/assets/klima-outdoor-work.png`
- `public/assets/klima-work-reference.png`

## Élesítés előtt cserélendő

- Cégnév
- Telefonszám
- Email
- Cégadatok
- Valódi Google értékelések
- Szolgáltatási területek
- Webhook URL
