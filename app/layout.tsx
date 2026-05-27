import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klíma Komfort - klímaszerelés gyors kivitelezéssel",
  description:
    "Modern hűtés-fűtés megoldások lakossági és üzleti ügyfeleknek. Ingyenes felmérés, garanciás telepítés, gyors kiszállás.",
  openGraph: {
    title: "Klíma Komfort - klímaszerelés gyors kivitelezéssel",
    description:
      "Ingyenes felmérés, garanciás telepítés és gyors kiszállás Győrben és környékén.",
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
