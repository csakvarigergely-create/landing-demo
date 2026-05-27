import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "KlímaPont Győr - klímaszerelés és tisztítás Győrben",
  description:
    "Klíma telepítés, tisztítás és karbantartás Győrben és 30 km-es körzetben. 24 órán belüli kapcsolatfelvétel, ingyenes felmérés, 5 év garancia.",
  openGraph: {
    title: "KlímaPont Győr - klímaszerelés és tisztítás Győrben",
    description: "Ingyenes felmérés, korrekt árak és garanciás klímaszerelés Győrben és környékén.",
    images: ["/assets/klima-hero-premium.png"],
    locale: "hu_HU",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
