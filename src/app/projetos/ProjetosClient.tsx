'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight, FaGem } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SectionWrapper from '@/components/SectionWrapper';

const IMG = {
  kitchen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  marble: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=800&q=80',
  stairs: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  quartz: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  gourmet: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
  granite: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  bathroom: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
  project: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  hero: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
};

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const GALLERY: GalleryItem[] = [
  { src: IMG.kitchen, alt: 'Bancada de granito em cozinha planejada', category: 'Bancadas', title: 'Bancada em Granito Preto São Gabriel' },
  { src: IMG.marble, alt: 'Mármore em sala de estar', category: 'Revestimentos', title: 'Parede em Mármore Carrara' },
  { src: IMG.stairs, alt: 'Escada de granito', category: 'Escadas', title: 'Escada em Granito Polido' },
  { src: IMG.quartz, alt: 'Bancada de quartzo em cozinha moderna', category: 'Bancadas', title: 'Bancada em Quartzo Branco Polar' },
  { src: IMG.gourmet, alt: 'Área gourmet com ilha de granito', category: 'Área Gourmet', title: 'Ilha Gourmet em Granito' },
  { src: IMG.living, alt: 'Projeto integrado sala e cozinha', category: 'Projetos', title: 'Projeto Residencial Integrado' },
  { src: IMG.bathroom, alt: 'Lavatório em mármore', category: 'Lavatórios', title: 'Lavatório em Mármore Travertino' },
  { src: IMG.project, alt: 'Projeto personalizado em granito', category: 'Projetos', title: 'Projeto Comercial Personalizado' },
  { src: IMG.granite, alt: 'Bancada de granito detalhe', category: 'Bancadas', title: 'Bancada em Granito Verde Ubatuba' },
  { src: IMG.hero, alt: 'Mármore branco em projeto premium', category: 'Revestimentos', title: 'Mármore Branco em Hall Social' },
  { src: IMG.stairs, alt: 'Escada residencial em granito', category: 'Escadas', title: 'Escada Residencial em Granito' },
  { src: IMG.kitchen, alt: 'Bancada de cozinha em quartzo', category: 'Bancadas', title: 'Cozinha em Quartzo Bege' },
];

const CATEGORIES = ['Todos', 'Bancadas', 'Escadas', 'Lavatórios', 'Área Gourmet', 'Revestimentos', 'Projetos'];

export default function ProjetosClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('Todos');
  const [filtered, setFiltered] = useState(GALLERY);

  useEffect(() => {
    if (filter === 'Todos') {
      setFiltered(GALLERY);
    } else {
      setFiltered(GALLERY.filter((item) => item.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const handlePrev = () => {
    setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : filtered.length - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage]); // eslint-disable-line react-hooks/exhaustive-deps

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
            Portfólio
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Nossos{' '}
            <span className="text-gradient-gold">Projetos</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça alguns dos trabalhos que realizamos. Cada projeto é único e feito com dedicação.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Projetos</span>
          </nav>
        </div>
      </div>

      {/* ===== FILTER ===== */}
      <section className="py-12 bg-grafite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-dourado/20 text-dourado border border-dourado/40'
                    : 'text-gray-400 border border-white/5 hover:border-dourado/30 hover:text-dourado'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="py-16 bg-preto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FaGem className="mx-auto text-dourado/30 mb-4" size={48} />
              <p className="text-gray-500 text-lg">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((item, i) => (
                <SectionWrapper key={i} delay={i * 50}>
                  <div
                    className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                    onClick={() => setSelectedImage(i)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-preto/90 via-preto/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category badge */}
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-dourado/20 text-dourado rounded-full border border-dourado/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.category}
                    </span>

                    {/* Centered icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <FaMagnifyingGlass className="text-white/60" size={24} />
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-sm font-medium truncate">{item.title}</p>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[10px] text-white/40">
                      Ilustrativa
                    </span>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
            Quer um Projeto como Este?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Solicite um orçamento gratuito e transforme seu espaço com pedras naturais de alta qualidade.
          </p>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl"
          >
            <FaWhatsapp size={20} />
            Solicitar Orçamento
          </Link>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selectedImage !== null && filtered[selectedImage] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-preto/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <FaTimes size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <FaChevronRight size={18} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-4 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[selectedImage].src}
              alt={filtered[selectedImage].alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="p-5 bg-preto border-t border-white/5">
              <span className="text-xs text-dourado uppercase tracking-wider">{filtered[selectedImage].category}</span>
              <h3 className="text-white font-medium mt-1">{filtered[selectedImage].title}</h3>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">
            {selectedImage + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  );
}
