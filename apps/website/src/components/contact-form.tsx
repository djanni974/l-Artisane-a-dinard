"use client";

import { useState, useEffect, type FormEvent } from "react";
import { IconSend, IconCheck, IconAlertCircle } from "@tabler/icons-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let token = sessionStorage.getItem("csrf-token");
    if (!token) {
      token = crypto.randomUUID();
      sessionStorage.setItem("csrf-token", token);
    }
    setCsrfToken(token);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Erreur lors de l'envoi.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <IconCheck className="h-6 w-6 text-green-600" stroke={2} />
        </div>
        <h3 className="mb-2 font-serif text-xl font-medium text-[#2d4a4a]">
          Message envoyé !
        </h3>
        <p className="text-sm text-[#2d4a4a]/70">
          Pauline vous répondra dans les meilleurs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[#b8983e] transition-colors hover:text-[#8a6f2a]"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8983e]">
        Écrivez-nous
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-describedby={status === "error" ? "form-error" : undefined}
      >
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-medium text-[#2d4a4a]/70"
          >
            Votre nom *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Marie Dupont"
            aria-invalid={submitted && status === "error" ? true : undefined}
            className="w-full rounded-xl border border-[#2d4a4a]/10 bg-[#f5ebe0]/30 px-4 py-3 text-sm text-[#2d4a4a] placeholder:text-[#2d4a4a]/30 transition-colors focus:border-[#b8983e]/50 focus:outline-none focus:ring-2 focus:ring-[#b8983e]/10"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-xs font-medium text-[#2d4a4a]/70"
          >
            Votre email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="marie@exemple.fr"
            aria-invalid={submitted && status === "error" ? true : undefined}
            className="w-full rounded-xl border border-[#2d4a4a]/10 bg-[#f5ebe0]/30 px-4 py-3 text-sm text-[#2d4a4a] placeholder:text-[#2d4a4a]/30 transition-colors focus:border-[#b8983e]/50 focus:outline-none focus:ring-2 focus:ring-[#b8983e]/10"
          />
        </div>

        {/* Phone (optional) */}
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-xs font-medium text-[#2d4a4a]/70"
          >
            Téléphone{" "}
            <span className="font-normal text-[#2d4a4a]/60">(optionnel)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            className="w-full rounded-xl border border-[#2d4a4a]/10 bg-[#f5ebe0]/30 px-4 py-3 text-sm text-[#2d4a4a] placeholder:text-[#2d4a4a]/30 transition-colors focus:border-[#b8983e]/50 focus:outline-none focus:ring-2 focus:ring-[#b8983e]/10"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-medium text-[#2d4a4a]/70"
          >
            Votre message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            placeholder="Je souhaiterais prendre rendez-vous pour..."
            aria-invalid={submitted && status === "error" ? true : undefined}
            className="w-full resize-none rounded-xl border border-[#2d4a4a]/10 bg-[#f5ebe0]/30 px-4 py-3 text-sm text-[#2d4a4a] placeholder:text-[#2d4a4a]/30 transition-colors focus:border-[#b8983e]/50 focus:outline-none focus:ring-2 focus:ring-[#b8983e]/10"
          />
        </div>

        {/* Error message */}
        {status === "error" && (
          <div
            id="form-error"
            role="alert"
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            <IconAlertCircle className="h-4 w-4 shrink-0" stroke={1.5} />
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2d4a4a] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1d3535] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Envoi en cours…
            </>
          ) : (
            <>
              <IconSend className="h-4 w-4" stroke={1.5} />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
