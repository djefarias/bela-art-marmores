'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaGem, FaCheckCircle } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';

const SERVICE_TYPES = [
  'Bancada de Granito',
  'Bancada de Quartzo',
  'Pia / Lavatório',
  'Escada',
  'Área Gourmet',
  'Mesa',
  'Revestimento',
  'Projeto Personalizado',
  'Outro',
];

const IMG = {
  hero: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
};

export default function OrcamentoClient() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    city: '',
    serviceType: '',
    measurements: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const msgParts = [
      `*Novo Pedido de Orçamento - Bela Art Marmoraria*`,
      ``,
      `*Nome:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      `*WhatsApp:* ${form.whatsapp || form.phone}`,
      `*Cidade:* ${form.city}`,
      `*Tipo de Serviço:* ${form.serviceType}`,
      `*Medidas:* ${form.measurements || 'A definir'}`,
      `*Mensagem:* ${form.message || '—'}`,
    ];

    const url = `https://wa.me/5544999999999?text=${encodeURIComponent(msgParts.join('\n'))}`;
    window.open(url, '_blank');

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  if (sent) {
    return (
      <>
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMG.hero})` }}
          />
          <div className="absolute inset-0 bg-preto/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-preto/60 via-transparent to-preto" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium uppercase tracking-wider mb-6">
              <FaGem size={12} />
              Orçamento Enviado
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              <span className="text-gradient-gold">Obrigado!</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mx-auto">
              Seu pedido de orçamento foi enviado. Responderemos em breve pelo WhatsApp.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium btn-gold-outline rounded-xl"
              >
                Voltar para Home
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        />
        <div className="absolute inset-0 bg-preto/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-preto/60 via-transparent to-preto" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium uppercase tracking-wider mb-6">
            <FaGem size={12} />
            Orçamento
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Solicite seu{' '}
            <span className="text-gradient-gold">Orçamento</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Preencha os dados abaixo e receba uma proposta personalizada para seu projeto em pedra natural.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Orçamento</span>
          </nav>
        </div>
      </div>

      {/* ===== FORM ===== */}
      <SectionWrapper>
        <section className="py-20 bg-grafite">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-preto/40 border border-white/5 rounded-2xl p-8 sm:p-10">
              {/* Steps */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-dourado flex items-center justify-center">
                    <span className="text-preto text-xs font-bold">1</span>
                  </div>
                  <span className="text-white text-sm font-medium">Dados</span>
                </div>
                <div className="h-px w-12 bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-dourado/20 border border-dourado/30 flex items-center justify-center">
                    <span className="text-dourado text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-400 text-sm">Serviço</span>
                </div>
                <div className="h-px w-12 bg-white/10" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-dourado/20 border border-dourado/30 flex items-center justify-center">
                    <span className="text-dourado text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-400 text-sm">Envio</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Phone + WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2">Telefone *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                      className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                      placeholder="(44) 99999-9999 (se diferente)"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2">Cidade *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                    placeholder="Paranavaí, PR"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2">Tipo de Serviço *</label>
                  <select
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    required
                    className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300 appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='%23D4AF37'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1.25rem center',
                    }}
                  >
                    <option value="" disabled>Selecione o tipo de serviço</option>
                    {SERVICE_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Measurements */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2">Medidas (opcional)</label>
                  <input
                    type="text"
                    value={form.measurements}
                    onChange={(e) => setForm({ ...form, measurements: e.target.value })}
                    className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                    placeholder="Ex: 3m x 0.60m (ou 'a definir')"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-2">Detalhes do Projeto</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300 resize-none"
                    placeholder="Descreva seu projeto, cores desejadas, prazo, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 text-base font-bold text-white btn-red rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    'Enviando...'
                  ) : (
                    <>
                      <FaWhatsapp size={20} />
                      Enviar Orçamento via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Ao enviar, você será redirecionado ao WhatsApp com todos os dados preenchidos.
                  Seu orçamento é gratuito e sem compromisso.
                </p>
              </form>
            </div>

            {/* Trust markers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: FaCheckCircle, text: 'Orçamento gratuito' },
                { icon: FaCheckCircle, text: 'Sem compromisso' },
                { icon: FaCheckCircle, text: 'Resposta em até 24h' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <Icon className="text-dourado flex-shrink-0" size={14} />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== CTA ALTERNATE ===== */}
      <section className="py-16 bg-preto">
        <div className="max-w-lg mx-auto px-4 text-center">
          <FaWhatsapp className="mx-auto text-green-400 mb-3" size={28} />
          <p className="text-gray-400 text-sm">
            Prefere falar diretamente?{' '}
            <a
              href="https://wa.me/5544999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dourado hover:text-dourado-claro transition-colors duration-300"
            >
              Chame no WhatsApp agora
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
