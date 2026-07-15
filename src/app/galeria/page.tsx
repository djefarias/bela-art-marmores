'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { FaWhatsapp, FaArrowLeft, FaGem } from 'react-icons/fa';

const CATEGORIES = [
  {
    id: 'lavatorio-suspenso',
    title: 'Lavatórios Suspensos',
    description: 'Lavatórios de parede em granito e mármore, design moderno e elegante.',
    icon: '🏆',
    fotos: Array.from({ length: 9 }, (_, i) => `/fotos/lavatorio-suspenso/Lavatorio_suspenso_1.jpg`).map((_, i) => {
      const files = [
        'Lavatorio_Retangular_B70_1', 'Lavatorio_Retangular_B70_2', 'Lavatorio_B70_duas_cubas',
        'Lavatorio_Retangular_120_claro', 'Lavatorio_Retangular_120_escuro', 'Lavatorio_Retangular_120_bege',
        'Lavatorio_B70_bege', 'Lavatorio_suspenso_1', 'Lavatorio_suspenso_2',
      ];
      return `/fotos/lavatorio-suspenso/${files[i]}.jpg`;
    }),
  },
  {
    id: 'cuba-sobrepor',
    title: 'Cubas de Sobrepor',
    description: 'Cubas de apoio em granito e mármore, peças que são verdadeiras esculturas.',
    icon: '🏆',
    fotos: [
      '/fotos/cuba-sobrepor/Cuba_Redonda_Branca.jpg',
      '/fotos/cuba-sobrepor/Cuba_Redonda_Bege.jpg',
      '/fotos/cuba-sobrepor/Cuba de sobrepor_1.jpg',
      '/fotos/cuba-sobrepor/Cuba de sobrepor_2.jpg',
      '/fotos/cuba-sobrepor/cuba_sobrepor_3.jpg',
      '/fotos/cuba-sobrepor/cuba de sobrepor_4.jpg',
      '/fotos/cuba-sobrepor/cuba de sobrepor_5.jpg',
    ],
  },
  {
    id: 'lavatorio-esculpido',
    title: 'Lavatórios Esculpidos',
    description: 'Peças únicas esculpidas à mão em pedra natural, arte e funcionalidade.',
    icon: '🏆',
    fotos: [
      '/fotos/lavatorio-esculpido/lavatorio escupido_1.jpg',
      '/fotos/lavatorio-esculpido/lavatorio escupido_2.jpg',
      '/fotos/lavatorio-esculpido/lavatório_escupido_3.jpg',
      '/fotos/lavatorio-esculpido/lavatório escupido_4.jpg',
      '/fotos/lavatorio-esculpido/lavatorio_escupido_5.jpg',
    ],
  },
  {
    id: 'cozinhas',
    title: 'Cozinhas',
    description: 'Bancadas e ilhas em granito e quartzo para cozinhas residenciais e comerciais.',
    icon: '🍳',
    fotos: [
      '/fotos/cozinhas/Cozinhas_1.jpg',
      '/fotos/cozinhas/Cozinhas_2.jpg',
      '/fotos/cozinhas/Cozinhas_3.jpg',
    ],
  },
  {
    id: 'ilhas-gourmet',
    title: 'Ilhas Gourmet',
    description: 'Projetos completos de áreas gourmet com ilhas em pedra natural.',
    icon: '🪑',
    fotos: [
      '/fotos/ilhas-gourmet/Ilhas Gourmet_1.jpg',
      '/fotos/ilhas-gourmet/Ilhas Gourmet_2.jpg',
    ],
  },
];

function GaleriaCategoria({ category }: { category: typeof CATEGORIES[0] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent(c => (c === 0 ? category.fotos.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === category.fotos.length - 1 ? 0 : c + 1));

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-preto/40 border border-white/5 hover:border-dourado/30 transition-all duration-500">
      {/* Image carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.fotos[current]}
          alt={`${category.title} - Foto ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500 cursor-pointer"
          onClick={() => setLightbox(true)}
          loading="lazy"
        />

        {/* Navigation arrows */}
        {category.fotos.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-preto/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-dourado/80 z-10"
              aria-label="Anterior"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-preto/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-dourado/80 z-10"
              aria-label="Próximo"
            >
              <FaChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {category.fotos.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {category.fotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-dourado w-5'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-lg text-white font-semibold">
            {category.icon} {category.title}
          </h3>
          <span className="text-xs text-gray-500">{category.fotos.length} fotos</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-preto/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-dourado/80 transition-all duration-300 z-10"
            aria-label="Fechar"
          >
            <FaTimes size={20} />
          </button>

          {category.fotos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-preto/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-dourado/80 transition-all duration-300 z-10"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-preto/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-dourado/80 transition-all duration-300 z-10"
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}

          <img
            src={category.fotos[current]}
            alt={`${category.title} - Foto ${current + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {category.fotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-dourado w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-preto via-preto to-grafite" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-dourado hover:text-dourado-claro transition-colors duration-300 mb-8">
            <FaArrowLeft size={14} />
            Voltar para Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium uppercase tracking-wider mb-4">
              <FaGem size={12} />
              Portfólio
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-4">
              Galeria de{' '}
              <span className="text-gradient-gold">Projetos</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Conheça nossos trabalhos realizados. Cada peça é única, feita sob medida com materiais premium.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria por categorias */}
      <section className="py-16 bg-grafite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <GaleriaCategoria key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-preto" />
        <div className="absolute inset-0 bg-gradient-to-r from-dourado/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Gostou de algum projeto?{' '}
            <span className="text-gradient-gold">Solicite o seu!</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Transformamos sua ideia em realidade. Orçamento gratuito sem compromisso.
          </p>
          <a
            href="https://wa.me/5544999999999?text=Olá! Vi o portfólio de vocês e gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl shadow-lg"
          >
            <FaWhatsapp size={20} />
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </>
  );
}