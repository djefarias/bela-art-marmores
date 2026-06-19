"use client";

import { useState, FormEvent } from "react";

const serviceTypes = [
  "Bancada de Cozinha",
  "Bancada de Banheiro",
  "Bancada de Área de Serviço",
  "Pia sob Medida",
  "Lavatório",
  "Escada",
  "Área Gourmet",
  "Mesa",
  "Revestimento",
  "Projeto Personalizado",
  "Outro",
];

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    whatsapp: "",
    cidade: "",
    tipoServico: "",
    medidas: "",
    mensagem: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone || !formData.tipoServico) {
      return;
    }

    const messageParts = [
      `*Novo Pedido de Orçamento - Bela Art Mármores*`,
      ``,
      `*Nome:* ${formData.nome}`,
      `*Telefone:* ${formData.telefone}`,
      formData.whatsapp ? `*WhatsApp:* ${formData.whatsapp}` : "",
      formData.cidade ? `*Cidade:* ${formData.cidade}` : "",
      `*Tipo de Serviço:* ${formData.tipoServico}`,
      formData.medidas ? `*Medidas Aproximadas:* ${formData.medidas}` : "",
      formData.mensagem ? `\n*Mensagem:*\n${formData.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappMessage = encodeURIComponent(messageParts);
    window.open(
      `https://wa.me/5544998078099?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full px-4 py-3 border border-marble-200 bg-white text-marble-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-700 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-marble-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={labelClass}>
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            required
            value={formData.nome}
            onChange={(e) =>
              setFormData({ ...formData, nome: e.target.value })
            }
            className={inputClass}
            placeholder="Seu nome"
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="telefone" className={labelClass}>
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            required
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            className={inputClass}
            placeholder="(44) 99999-9999"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            className={inputClass}
            placeholder="(44) 99999-9999"
          />
        </div>

        {/* Cidade */}
        <div>
          <label htmlFor="cidade" className={labelClass}>
            Cidade
          </label>
          <input
            type="text"
            id="cidade"
            value={formData.cidade}
            onChange={(e) =>
              setFormData({ ...formData, cidade: e.target.value })
            }
            className={inputClass}
            placeholder="Paranavaí"
          />
        </div>

        {/* Tipo de Serviço */}
        <div>
          <label htmlFor="tipoServico" className={labelClass}>
            Tipo de Serviço *
          </label>
          <select
            id="tipoServico"
            required
            value={formData.tipoServico}
            onChange={(e) =>
              setFormData({ ...formData, tipoServico: e.target.value })
            }
            className={inputClass}
          >
            <option value="">Selecione...</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Medidas */}
        <div className="sm:col-span-2">
          <label htmlFor="medidas" className={labelClass}>
            Medidas Aproximadas
          </label>
          <input
            type="text"
            id="medidas"
            value={formData.medidas}
            onChange={(e) =>
              setFormData({ ...formData, medidas: e.target.value })
            }
            className={inputClass}
            placeholder="Ex: 3,00m x 0,60m (comprimento x largura)"
          />
        </div>

        {/* Mensagem */}
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className={labelClass}>
            Detalhes do Projeto
          </label>
          <textarea
            id="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
            className={`${inputClass} resize-none`}
            placeholder="Conte mais sobre seu projeto: cor desejada, estilo, prazo, etc."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enviar Orçamento via WhatsApp
      </button>
      <p className="text-marble-500 text-xs mt-2">
        * Ao enviar, você será redirecionado para o WhatsApp para confirmar o
        envio. Seus dados não serão armazenados em nosso site.
      </p>
    </form>
  );
}
