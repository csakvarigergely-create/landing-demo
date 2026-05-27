"use client";

import { useState } from "react";
import { chatQuestions } from "@/lib/content";

export function ChatAssistant() {
  const [answer, setAnswer] = useState(chatQuestions[0].answer);

  return (
    <section className="section-grid items-center" id="asszisztens">
      <div>
        <p className="eyebrow">Gyors segítség</p>
        <h2 className="heading-lg">AI asszisztens segít a megfelelő klíma kiválasztásában</h2>
        <p className="mt-5 text-lg text-muted">
          Kattints egy gyakori kérdésre. Ez nem váltja ki a felmérést, de segít elindulni.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {chatQuestions.map((item) => (
            <button key={item.question} type="button" className="pill" onClick={() => setAnswer(item.answer)}>
              {item.question}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-white/88 p-5 shadow-lift">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-sm font-black text-white">AI</span>
          <div>
            <strong>Klíma asszisztens</strong>
            <p className="text-sm text-muted">előzetes tájékoztatás</p>
          </div>
        </div>
        <div className="rounded-2xl bg-soft p-4">
          <p className="rounded-2xl bg-white p-4 text-muted shadow-soft">{answer}</p>
        </div>
      </div>
    </section>
  );
}
