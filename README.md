# KlimaPont Gyor landing oldal

Next.js + Tailwind alapu, konverzio fokuszu klimaszerelo landing oldal magyar piacra.

## Futtatas

```bash
npm install
npm run dev
```

Helyi cim:

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Lead webhook

Az ajanlatkero urlap az `/api/lead` route-ra kuld. A route a Make webhook fele csak ezeket a mezoket tovabbitja:

- `name`
- `phone`
- `email`
- `message`

Vercelben vagy `.env.local` fajlban ezt az env valtozot allitsd be:

```text
NEXT_PUBLIC_LEAD_WEBHOOK_URL=https://...
```

Ha nincs valos HTTPS webhook beallitva, az API hibat ad vissza, igy eles kornyezetben nem veszhet el csendben ajanlatkeres.

## Assetek

Kepek:

- `public/assets/klima-hero-real-hvac.png`
- `public/assets/klima-outdoor-real-install.png`
- `public/assets/klima-work-reference.png`

## Elesites elott cserelendo

- Telefonszam
- Email
- Cegadatok
- Valodi Google ertekelesek
- Szolgaltatasi teruletek
- Make webhook URL
