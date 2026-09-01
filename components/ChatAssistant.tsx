"use client";

import { useState } from "react";
import { chatQuestions } from "@/lib/content";

export function ChatAssistant() {
  const [answer, setAnswer] = useState(chatQuestions[0].answer);

  return (
    <section className="container-section" id="asszisztens">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <p className="eyebrow">Gyors kérdések</p>
        <h2 className="heading-lg">Néhány kérdés, ami szinte mindig felmerül.</h2>
        <p className="mt-5 text-lg text-muted">
          Összeszedtük a leggyakoribb kérdéseket, amiket felmérés vagy telepítés előtt szoktak feltenni. A pontos választ mindig a helyszín és az igények alapján adjuk meg.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {chatQuestions.map((item) => (
            <button
              key={item.question}
              type="button"
              className="rounded-full border border-line bg-transparent px-4 py-2 text-sm font-black text-ink transition duration-300 ease-premium hover:border-aqua hover:text-aqua"
              aria-pressed={answer === item.answer}
              onClick={() => setAnswer(item.answer)}
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>

      <div className="border-y border-line py-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-sm font-black text-white">?</span>
          <div>
            <strong>Rövid válasz</strong>
            <p className="text-sm text-muted">felmérés előtt hasznos lehet</p>
          </div>
        </div>
        <p className="max-w-2xl text-xl leading-9 text-ink" aria-live="polite">
          {answer}
        </p>
      </div>
      </div>
    </section>
  );
}
