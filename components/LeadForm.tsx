"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setState("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.phone || !data.email || !data.city) {
      setError("Kérjük, töltsd ki a név, telefonszám, email és település mezőket.");
      setState("error");
      return;
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Sikertelen küldés");
      }

      form.reset();
      setState("success");
    } catch {
      setError("Most nem sikerült elküldeni. Kérjük, hívj minket telefonon.");
      setState("error");
    }
  }

  return (
    <form className="grid gap-4 rounded-2xl bg-white p-5 text-ink shadow-lift" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          Név
          <input name="name" type="text" placeholder="Minta Péter" required />
        </label>
        <label className="field">
          Telefonszám
          <input name="phone" type="tel" placeholder="+36 30 123 4567" required />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field">
          Email
          <input name="email" type="email" placeholder="nev@email.hu" required />
        </label>
        <label className="field">
          Település
          <input name="city" type="text" placeholder="Győr, Győrújbarát, Abda..." required />
        </label>
      </div>
      <label className="field">
        Rövid üzenet
        <textarea name="message" rows={4} placeholder="Például: nappaliba szeretnék klímát, vagy tisztítást kérek a meglévő készülékre." />
      </label>

      {error ? <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {state === "success" ? (
        <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          Köszönjük, megkaptuk az ajánlatkérést. Rövidesen visszahívunk.
        </p>
      ) : null}

      <button className="btn-primary min-h-[52px] w-full" disabled={state === "loading"} type="submit">
        {state === "loading" ? "Küldés folyamatban..." : "Gyors árajánlatot kérek"}
      </button>
    </form>
  );
}
