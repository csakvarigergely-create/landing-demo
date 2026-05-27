"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["#szolgaltatasok", "Szolgáltatások"],
    ["#bizalom", "Miért minket?"],
    ["#velemenyek", "Vélemények"],
    ["#ajanlat", "Kapcsolat"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl transition-shadow">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Klíma Komfort főoldal">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-aqua via-blue to-slate-800 text-sm font-black text-white shadow-soft">
            KK
          </span>
          <span className="grid leading-tight">
            <strong className="text-ink">Klíma Komfort</strong>
            <small className="text-xs text-muted">Győr és környéke</small>
          </span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menü megnyitása"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 lg:flex" aria-label="Fő navigáció">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-aqua">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+36701234567" className="font-bold text-ink transition hover:text-aqua">
            +36 70 123 4567
          </a>
          <a href="#ajanlat" className="btn-primary min-h-11 px-4">
            Ingyenes ajánlatkérés
          </a>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${open ? "grid" : "hidden"} mx-4 mb-4 gap-2 rounded-2xl border border-line bg-white p-3 shadow-soft lg:hidden`}
        aria-label="Mobil navigáció"
      >
        {links.map(([href, label]) => (
          <a key={href} href={href} className="rounded-xl px-3 py-3 text-ink" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#ajanlat" className="btn-primary mt-1" onClick={() => setOpen(false)}>
          Ingyenes ajánlatkérés
        </a>
      </nav>
    </header>
  );
}
