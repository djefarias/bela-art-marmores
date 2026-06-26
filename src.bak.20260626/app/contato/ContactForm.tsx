"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.mensagem) {
      return;
    }
    const whatsappMessage = encodeURIComponent(
      `Olá, me chamo ${formData.nome}.\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\n\n${formData.mensagem}`
    );
    window.open(
      `https://wa.me/5544998078099?text=${whatsappMessage}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-marble-700 mb-1"
          >
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            required
            value={formData.nome}
            onChange={(e) =>
              setFormData({ ...formData, nome: e.target.value })
            }
            className="w-full px-4 py-3 border border-marble-200 bg-white text-marble-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-700 focus:border-transparent transition-all"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-marble-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-marble-200 bg-white text-marble-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-700 focus:border-transparent transition-all"
            placeholder="seu@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-marble-700 mb-1"
          >
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            id="telefone"
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            className="w-full px-4 py-3 border border-marble-200 bg-white text-marble-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-700 focus:border-transparent transition-all"
            placeholder="(44) 99999-9999"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-marble-700 mb-1"
          >
            Mensagem *
          </label>
          <textarea
            id="mensagem"
            required
            rows={5}
            value={formData.mensagem}
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
            className="w-full px-4 py-3 border border-marble-200 bg-white text-marble-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-700 focus:border-transparent transition-all resize-none"
            placeholder="Conte-nos sobre seu projeto..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {submitted ? "Mensagem Enviada!" : "Enviar via WhatsApp"}
      </button>
      {submitted && (
        <p className="text-green-600 text-sm mt-2">
          Redirecionando para o WhatsApp...
        </p>
      )}
    </form>
  );
}
