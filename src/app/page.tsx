'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaCheckCircle,
  FaGem,
  FaRulerCombined,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
} from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import ServiceCard from '@/components/ServiceCard';

// === Image Placeholders (Unsplash) ===
const IMG = {
  hero: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  heroSm: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  granite: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  quartz: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  kitchen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  stairs: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  bathroom: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
  marble: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=800&q=80',
  gourmet: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
  project: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
};

const SERVICES = [
  {
    title: 'Bancadas de Granito',
    description: 'Granitos nacionais e importados para cozinhas, banheiros e áreas gourmet. Resistência e elegância em cada peça.',
    image: IMG.granite,
  },
  {
    title: 'Bancadas de Quartzo',
    description: 'Superfícies de quartzo-engineered com alta durabilidade, fácil manutenção e design contemporâneo.',
    image: IMG.quartz,
  },
  {
    title: 'Pias e Lavatórios',
    description: 'Pias esculpidas em mármore e granito, peças únicas que combinam funcionalidade e arte.',
    image: IMG.bathroom,
  },
  {
    title: 'Escadas em Pedra',
    description: 'Escadas monumentais em granito e mármore com acabamento impecável para dar um toque de sofisticação ao seu espaço.',
    image: IMG.stairs,
  },
  {
    title: 'Áreas Gourmet',
    description: 'Projetos completos para áreas gourmet com ilhas, bancadas e revestimentos em pedra natural.',
    image: IMG.gourmet,
  },
  {
    title: 'Projetos Personalizados',
    description: 'Sob medida para sua obra. Consultoria, projeto, fabricação e instalação com padrão premium.',
    image: IMG.project,
  },
];

const GALLERY = [
  { src: IMG.kitchen, alt: 'Bancada de granito em cozinha' },
  { src: IMG.marble, alt: 'Mármore em projeto residencial' },
  { src: IMG.stairs, alt: 'Escada de granito' },
  { src: IMG.living, alt: 'Projeto integrado com pedra natural' },
  { src: IMG.quartz, alt: 'Bancada de quartzo em cozinha' },
  { src: IMG.gourmet, alt: 'Área gourmet com ilha de granito' },
];

const BENEFITS = [
  { icon: FaGem, title: 'Materiais Premium', text: 'Selecionamos os melhores granitos, mármores e quartzos do mercado.' },
  { icon: FaRulerCombined, title: 'Corte sob Medida', text: 'Projeto personalizado para cada ambiente com medidas exatas.' },
  { icon: FaShieldAlt, title: 'Garantia de Qualidade', text: 'Acabamento impecável com garantia em todos os serviços.' },
  { icon: FaClock, title: 'Pontualidade', text: 'Cumprimento de prazos com planejamento e execução eficiente.' },
  { icon: FaStar, title: 'Equipe Especializada', text: 'Profissionais experientes em corte, polimento e instalação.' },
  { icon: FaCheckCircle, title: 'Entrega e Instalação', text: 'Entregamos e instalamos seu projeto com todo cuidado.' },
];

const STEPS = [
  { num: '01', title: 'Consulta', text: 'Agende uma visita. Entendemos seu projeto, necessidades e orçamento.' },
  { num: '02', title: 'Projeto', text: 'Criamos o design com medidas exatas e sugestão dos melhores materiais.' },
  { num: '03', title: 'Fabricação', text: 'Corte, polimento e acabamento com precisão artesanal em nossa oficina.' },
  { num: '04', title: 'Instalação', text: 'Equipe especializada instala com perfeição, deixando tudo limpo.' },
];

const FAQS = [
  { q: 'Qual a diferença entre granito e quartzo?', a: 'Granito é uma pedra natural, cada peça é única. Quartzo é engineered, com cores mais uniformes. Ambos são excelentes para bancadas; o granito é mais resistente ao calor, o quartzo é não poroso.' },
  { q: 'Quanto tempo leva para fabricar e instalar?', a: 'Em média 7 a 15 dias úteis, dependendo da complexidade do projeto. Agendamos a medição, fabricamos sob medida e instalamos em até 2 dias.' },
  { q: 'Fazem orçamento sem compromisso?', a: 'Sim! O orçamento é gratuito. Agendamos uma visita técnica, tiramos medidas e apresentamos a melhor proposta para seu projeto.' },
  { q: 'Atendem em Paranavaí e região?', a: 'Sim, atendemos Paranavaí e cidades da região Noroeste do Paraná, como Loanda, Nova Londrina, Terra Rica, Alto Paraná e outras.' },
  { q: 'Qual a durabilidade de uma bancada de granito?', a: 'Granito bem cuidado dura décadas. É resistente a riscos, calor e impactos. Recomendamos selagem anual para pedras claras.' },
  { q: 'Vocês fazem projetos comerciais?', a: 'Sim! Atendemos residências e comércios: restaurantes, lojas, clínicas, escritórios — projetos de qualquer porte.' },
];

const BLOG_POSTS = [
  {
    slug: 'cuidados-bancada-granito',
    title: 'Cuidados Essenciais para Sua Bancada de Granito Durar Décadas',
    excerpt: 'Saiba como limpar, selar e conservar sua bancada de granito para mantê-la impecável por muitos anos.',
    date: '15 Jun 2026',
    readTime: '4 min',
    image: IMG.kitchen,
  },
  {
    slug: 'granito-vs-quartzo',
    title: 'Granito vs Quartzo: Qual a Melhor Opção para Sua Cozinha?',
    excerpt: 'Comparativo completo entre granito natural e quartzo engineered para ajudar na sua escolha.',
    date: '05 Jun 2026',
    readTime: '6 min',
    image: IMG.quartz,
  },
  {
    slug: 'tendencias-marmores-2026',
    title: 'Tendências em Mármores e Granitos para 2026',
    excerpt: 'Descubra as cores, texturas e acabamentos que estão em alta neste ano.',
    date: '25 Mai 2026',
    readTime: '5 min',
    image: IMG.marble,
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Me chamo ${contactForm.name}. ${contactForm.message}`;
    const url = `https://wa.me/5544999999999?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url(${IMG.hero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-preto/95 via-preto/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-preto via-preto/20 to-transparent" />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Gold tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium uppercase tracking-wider mb-6 animate-fade-in">
              <FaGem size={12} />
              Marmoraria Premium em Paranavaí
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up">
              Arte em Pedra.<br />
              <span className="text-gradient-gold">Sofisticação</span>{' '}
              em Cada Detalhe.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Transformamos mármores, granitos e quartzos em peças únicas para sua casa ou empresa.
              Projetos sob medida com acabamento premium em Paranavaí e região.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/orcamento"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl shadow-lg"
              >
                <FaWhatsapp size={20} />
                Solicitar Orçamento
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium btn-gold-outline rounded-xl"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-dourado/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-dourado/60" />
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <SectionWrapper id="servicos">
        <section className="py-24 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Nossos Serviços</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Soluções em Pedra Natural
              </h2>
              <div className="divider-gold" />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-5">
                Do projeto à instalação, oferecemos soluções completas em mármores, granitos e quartzos para sua obra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <div key={service.title} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <ServiceCard {...service} index={i} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-dourado hover:text-dourado-claro transition-colors duration-300 font-medium"
              >
                Ver Todos os Serviços <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== GALERIA / PROJETOS ===== */}
      <SectionWrapper>
        <section className="py-24 bg-preto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Projetos Realizados</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Galeria de Trabalhos
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALLERY.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${img.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-preto/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Link
                      href="/projetos"
                      className="px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                  <span className="absolute bottom-3 left-3 text-xs text-white/60 bg-preto/50 px-2 py-1 rounded backdrop-blur-sm">
                    Imagem ilustrativa
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-dourado hover:text-dourado-claro transition-colors duration-300 font-medium"
              >
                Ver Projetos Completos <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== BENEFÍCIOS ===== */}
      <SectionWrapper>
        <section className="py-24 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Por Que Nos Escolher</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Excelência em Cada Detalhe
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="group p-8 rounded-xl bg-preto/40 border border-white/5 hover:border-dourado/20 transition-all duration-500 hover:shadow-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center mb-5 text-dourado group-hover:bg-dourado/20 group-hover:scale-110 transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading text-lg text-white font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== PROCESSO ===== */}
      <SectionWrapper>
        <section className="py-24 bg-preto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Como Funciona</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Nosso Processo
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-dourado/60 via-dourado to-dourado/60" />

              {STEPS.map((step, i) => (
                <div key={step.num} className="relative text-center group">
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-dourado/10 border-2 border-dourado/30 flex items-center justify-center group-hover:bg-dourado/20 group-hover:border-dourado/60 transition-all duration-500">
                    <span className="font-heading text-xl font-bold text-dourado">{step.num}</span>
                  </div>
                  <h3 className="font-heading text-lg text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== FAQ / DEPOIMENTOS ===== */}
      <SectionWrapper>
        <section className="py-24 bg-grafite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">FAQ</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Dúvidas Frequentes
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-500 cursor-pointer ${
                    openFaq === i
                      ? 'border-dourado/40 bg-dourado/5'
                      : 'border-white/5 bg-preto/30 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-heading text-white text-base font-medium pr-4">{faq.q}</span>
                    <FaChevronDown
                      className={`text-dourado flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                      size={14}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === i ? 'max-h-80 pb-5 px-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schema FAQ */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: FAQS.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                  })),
                }),
              }}
            />
          </div>
        </section>
      </SectionWrapper>

      {/* ===== CTA FINAL ===== */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${IMG.hero})` }}
        />
        <div className="absolute inset-0 bg-preto/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dourado/5 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Transformar{' '}
            <span className="text-gradient-gold">Seu Projeto</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
            Solicite um orçamento gratuito sem compromisso. Respondemos em até 24 horas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/5544999999999?text=${encodeURIComponent('Olá! Gostaria de um orçamento para meu projeto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl shadow-lg"
            >
              <FaWhatsapp size={20} />
              Fale Conosco Agora
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium btn-gold-outline rounded-xl"
            >
              Outras Formas de Contato
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <SectionWrapper>
        <section className="py-24 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Onde Estamos</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Nossa Localização
              </h2>
              <div className="divider-gold" />
              <p className="text-gray-400 text-lg mt-5">
                Visite nossa loja em Paranavaí e conheça nossos materiais pessoalmente.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/5 h-[400px]">
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
              </div>

              {/* Info */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-white font-semibold mb-1">Endereço</h4>
                    <p className="text-gray-400 text-sm">Rua Exemplo, 123 — Centro<br />Paranavaí, PR — 87700-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-white font-semibold mb-1">Telefone</h4>
                    <a href="tel:44999999999" className="text-gray-400 text-sm hover:text-dourado transition-colors duration-300">(44) 99999-9999</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado flex-shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:contato@belaartmarmoraria.com.br" className="text-gray-400 text-sm hover:text-dourado transition-colors duration-300">contato@belaartmarmoraria.com.br</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== FORMULÁRIO DE CONTATO RÁPIDO ===== */}
      <SectionWrapper>
        <section className="py-24 bg-preto">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Fale Conosco</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Envie sua Mensagem
              </h2>
              <div className="divider-gold" />
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-grafite border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Seu telefone / WhatsApp"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-grafite border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-grafite border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-dourado/40 focus:ring-1 focus:ring-dourado/20 transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-base font-bold text-white btn-red rounded-xl flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== BLOG PREVIEW ===== */}
      <SectionWrapper>
        <section className="py-24 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Blog</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Artigos e Dicas
              </h2>
              <div className="divider-gold" />
              <p className="text-gray-400 text-lg mt-5">
                Fique por dentro das novidades e cuidados com suas pedras naturais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative block overflow-hidden rounded-xl bg-preto/40 border border-white/5 transition-all duration-500 hover:shadow-card hover:border-dourado/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-preto via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-white font-semibold mb-2 group-hover:text-dourado transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-dourado text-sm font-medium group-hover:translate-x-1 inline-block transition-transform duration-300">
                      Ler mais →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-dourado hover:text-dourado-claro transition-colors duration-300 font-medium"
              >
                Ver Todos os Artigos <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </>
  );
}