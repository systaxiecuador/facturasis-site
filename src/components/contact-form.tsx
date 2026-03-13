"use client";

import { FormEvent, useState } from "react";

const whatsappBase = "https://wa.me/593984256908?text=";

export function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappMessage = [
      "Hola, quiero informacion sobre soluciones de software de Facturasis.",
      "",
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Email: ${email}`,
      `Mensaje: ${message}`,
    ].join("\n");

    window.open(
      `${whatsappBase}${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setStatus("Abrimos WhatsApp con tu mensaje listo para enviar.");
    event.currentTarget.reset();
  };

  return (
    <form className="contact-card space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-shell">
          <span>Nombre</span>
          <input name="name" type="text" placeholder="Tu nombre" required />
        </label>
        <label className="field-shell">
          <span>Empresa</span>
          <input name="company" type="text" placeholder="Nombre de tu negocio" required />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-shell">
          <span>Email</span>
          <input name="email" type="email" placeholder="tu@email.com" required />
        </label>
        <label className="field-shell">
          <span>Canal preferido</span>
          <input type="text" value="WhatsApp" readOnly aria-label="Canal preferido" />
        </label>
      </div>
      <label className="field-shell">
        <span>Mensaje</span>
        <textarea
          name="message"
          placeholder="Cuéntanos que proceso quieres digitalizar."
          rows={5}
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="cta-primary w-full justify-center sm:w-auto" type="submit">
          Solicitar informacion
        </button>
        <p className="text-sm text-slate-300">{status || "Respuesta directa por WhatsApp."}</p>
      </div>
    </form>
  );
}
