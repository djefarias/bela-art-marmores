'use client';

import Link from 'next/link';
import { FaWhatsapp, FaGem, FaTools, FaHome, FaBath, FaUtensils, FaRulerCombined } from 'react-icons/fa';
import { FaStairs } from 'react-icons/fa6';
import SectionWrapper from '@/components/SectionWrapper';

const IMG = {
  granite: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  quartz: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  kitchen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  stairs: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  bathroom: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
  marble: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  gourmet: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
  project: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=800&q=80',
};

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ElementType;
  keywords: string;
}

const SERVICES_DETAIL: ServiceDetail[] = [
  {
    id: 'bancadas-granito',
    title: 'Bancadas de Granito',
    description: 'Resistência e elegância natural para sua cozinha e banheiro.',
    longDescription:
      'Trabalhamos com granitos nacionais e importados das mais variadas cores e texturas. Ideal para cozinhas, banheiros e áreas gourmet que exigem resistência a calor, riscos e impacto. Cada peça é selecionada e cortada sob medida para seu projeto, com acabamento polido ou flameado conforme sua preferência.',
    image: IMG.granite,
    icon: FaGem,
    keywords: 'bancada de granito Paranavaí, granito para cozinha, granito nacional, granito importado',
  },
  {
    id: 'bancadas-quartzo',
    title: 'Bancadas de Quartzo',
    description: 'Superfícies engineered de alta durabilidade e design contemporâneo.',
    longDescription:
      'O quartzo engineered oferece a beleza da pedra natural com vantagens: superfície não porosa, resistente a manchas, fácil limpeza e cores uniformes. Perfeito para cozinhas modernas, banherios de alto padrão e áreas comerciais. Disponível em diversas cores e acabamentos.',
    image: IMG.quartz,
    icon: FaGem,
    keywords: 'bancada de quartzo Paranavaí, quartzo engineered, bancada cozinha quartzo',
  },
  {
    id: 'pias-lavatorios',
    title: 'Pias e Lavatórios',
    description: 'Peças esculpidas em mármore e granito, verdadeiras obras de arte.',
    longDescription:
      'Pias esculpidas em bloco único de mármore ou granito, lavatórios sob medida para banheiros residenciais e comerciais, e cubas de pedra natural com design exclusivo. Cada peça é única, combinando funcionalidade com a beleza natural da pedra.',
    image: IMG.bathroom,
    icon: FaBath,
    keywords: 'pias de granito Paranavaí, lavatório mármore, cuba de pedra natural',
  },
  {
    id: 'escadas',
    title: 'Escadas em Pedra',
    description: 'Escadas monumentais com acabamento impecável em granito e mármore.',
    longDescription:
      'Escadas residenciais e comerciais em granito e mármore, com degraus sob medida, espelhos, rodapés e corrimãos integrados. Trabalhamos desde escadas retas até projetos helicoidais. Acabamento polido, escovado ou flameado conforme o estilo desejado.',
    image: IMG.stairs,
    icon: FaStairs,
    keywords: 'escada de granito Paranavaí, escada mármore, degraus granito',
  },
  {
    id: 'areas-gourmet',
    title: 'Áreas Gourmet',
    description: 'Projetos completos com ilhas, bancadas e churrasqueiras em pedra.',
    longDescription:
      'Projetos completos para áreas gourmet: ilhas centrais com bancadas em granito ou quartzo, churrasqueiras revestidas em pedra natural, pias, mesas e banquetas. Integração perfeita entre funcionalidade para o preparo de alimentos e design para receber convidados.',
    image: IMG.gourmet,
    icon: FaUtensils,
    keywords: 'área gourmet Paranavaí, ilha de granito, churrasqueira em pedra',
  },
  {
    id: 'mesas',
    title: 'Mesas em Pedra Natural',
    description: 'Mesas de jantar, centro e laterais esculpidas em granito e mármore.',
    longDescription:
      'Mesas sob medida em granito, mármore e quartzito. Tampos encadernados ou em peça única para mesas de jantar, mesas laterais, mesas de centro para sala de estar. Acabamento polido de alto brilho ou acetinado, com bordas personalizadas.',
    image: IMG.living,
    icon: FaHome,
    keywords: 'mesa de granito Paranavaí, mesa mármore, tampo de mesa pedra natural',
  },
  {
    id: 'revestimentos',
    title: 'Revestimentos em Pedra',
    description: 'Paredes, fachadas e pisos revestidos com mármore e granito.',
    longDescription:
      'Revestimentos em pedra natural para paredes internas, fachadas, pisos e áreas molhadas. Mármores nobres para salões sociais, granitos para áreas externas de alto tráfego. Formatos variados, incluindo pastilhas, placas e réguas.',
    image: IMG.marble,
    icon: FaTools,
    keywords: 'revestimento em pedra Paranavaí, mármore parede, fachada em granito',
  },
  {
    id: 'projetos-personalizados',
    title: 'Projetos Personalizados',
    description: 'Sob medida para sua obra. Consultoria ao projeto à instalação.',
    longDescription:
      'Solicite um projeto exclusivo para sua obra. Nossa equipe técnica realiza visita, tira medidas, sugere materiais e cria o design ideal para seu espaço. Do conceito à instalação, todo o processo é acompanhado por profissionais especializados.',
    image: IMG.project,
    icon: FaRulerCombined,
    keywords: 'projeto personalizado Paranavaí, marmoraria sob medida, consultoria em pedra',
  },
];

export default function ServicosClient() {
  const handleWhatsApp = (serviceTitle: string) => {
    const url = `https://wa.me/5544999999999?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${serviceTitle}.`)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.kitchen})` }}
        />
        <div className="absolute inset-0 bg-preto/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-preto/60 via-transparent to-preto" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium uppercase tracking-wider mb-6">
            <FaGem size={12} />
            Serviços
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Nossos Serviços em{' '}
            <span className="text-gradient-gold">Pedra Natural</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Do projeto à instalação, oferecemos soluções completas em granitos, mármores e quartzos
            para sua obra em Paranavaí e região.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Serviços</span>
          </nav>
        </div>
      </div>

      {/* ===== SERVICES LIST ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES_DETAIL.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;

              return (
                <SectionWrapper key={service.id} id={service.id}>
                  <div
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-preto/50 to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs text-white/60 bg-preto/50 px-2 py-1 rounded backdrop-blur-sm">
                          Imagem ilustrativa
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <div className="w-14 h-14 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado mb-5">
                        <Icon size={24} />
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.longDescription}
                      </p>
                      <p className="text-xs text-gray-500 mb-6">
                        Palavras-chave: {service.keywords}
                      </p>
                      <button
                        onClick={() => handleWhatsApp(service.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white btn-red rounded-xl"
                      >
                        <FaWhatsapp size={16} />
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                </SectionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-preto">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
            Não Encontrou o que Procura?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Temos soluções personalizadas para cada projeto. Fale conosco e descubra o que podemos fazer por você.
          </p>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl"
          >
            <FaWhatsapp size={20} />
            Solicitar Orçamento Personalizado
          </Link>
        </div>
      </section>
    </>
  );
}
