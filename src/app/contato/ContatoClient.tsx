'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGem, FaPaperPlane } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80',
};

export default function ContatoClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const msg = `Olá! Me chamo ${form.name}.%0A%0A${form.message}%0A%0ATelefone: ${form.phone}%0AEmail: ${form.email}`;
    const url = `https://wa.me/5544999999999?text=${msg}`;
    window.open(url, '_blank');
    setTimeout(() => setSending(false), 1000);
  };

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
            Contato
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Fale{' '}
            <span className="text-gradient-gold">Conosco</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha o canal mais conveniente.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Contato</span>
          </nav>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* === FORM === */}
            <SectionWrapper>
              <div className="bg-preto/40 border border-white/5 rounded-2xl p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-2">Envie sua Mensagem</h2>
                <p className="text-gray-400 text-sm mb-6">Preencha o formulário e responderemos em breve.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2">Nome *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs font-medium mb-2">Telefone / WhatsApp *</label>
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
                      <label className="block text-gray-400 text-xs font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-2">Mensagem *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full px-5 py-3.5 bg-preto border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300 resize-none"
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 text-base font-bold text-white btn-red rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      'Enviando...'
                    ) : (
                      <>
                        <FaPaperPlane size={16} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    Ao enviar, você será redirecionado ao WhatsApp para confirmar.
                  </p>
                </form>
              </div>
            </SectionWrapper>

            {/* === INFO === */}
            <SectionWrapper delay={200}>
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="bg-preto/40 border border-white/5 rounded-2xl p-8">
                  <h3 className="font-heading text-lg text-white font-semibold mb-5">Canais de Atendimento</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-600/30 flex items-center justify-center text-green-400 flex-shrink-0">
                        <FaWhatsapp size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">WhatsApp</h4>
                        <a
                          href="https://wa.me/5544999999999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 text-sm hover:text-green-300 transition-colors duration-300"
                        >
                          (44) 99999-9999
                        </a>
                        <p className="text-gray-500 text-xs mt-1">Respondemos em até 2 horas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                        <FaPhone size={18} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Telefone</h4>
                        <a href="tel:44999999999" className="text-gray-300 text-sm hover:text-dourado transition-colors duration-300">(44) 99999-9999</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Email</h4>
                        <a href="mailto:contato@belaartmarmoraria.com.br" className="text-gray-300 text-sm hover:text-dourado transition-colors duration-300">contato@belaartmarmoraria.com.br</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                        <FaClock size={18} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Horários</h4>
                        <p className="text-gray-400 text-sm">Seg–Sex: 08:00–18:00</p>
                        <p className="text-gray-400 text-sm">Sáb: 08:00–12:00</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                        <FaMapMarkerAlt size={18} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">Endereço</h4>
                        <p className="text-gray-400 text-sm">Rua Exemplo, 123 — Centro</p>
                        <p className="text-gray-400 text-sm">Paranavaí, PR — 87700-000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="bg-preto/40 border border-dourado/20 rounded-2xl p-8 text-center">
                  <FaWhatsapp className="mx-auto text-green-400 mb-3" size={32} />
                  <h3 className="font-heading text-lg text-white font-semibold mb-2">Prefere um Orçamento Rápido?</h3>
                  <p className="text-gray-400 text-sm mb-5">
                    Solicite seu orçamento diretamente pelo WhatsApp agora mesmo.
                  </p>
                  <Link
                    href="/orcamento"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white btn-red rounded-xl"
                  >
                    <FaWhatsapp size={16} />
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ===== MAPA ===== */}
      <section className="h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-52.4653!3d-23.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzMwLjAiUyA1MsKwMjcnNTUuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Bela Art Marmoraria - Paranavaí PR"
        />
      </section>
    </>
  );
}
