'use client';

import Link from 'next/link';
import { FaGem, FaCalendarAlt, FaClock } from 'react-icons/fa';
import BlogCard from '@/components/BlogCard';
import SectionWrapper from '@/components/SectionWrapper';

const IMG = {
  kitchen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  quartz: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  marble: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=800&q=80',
  stairs: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  bathroom: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
  gourmet: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
  project: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
  living: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  hero: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
};

// Static blog posts for now
const ALL_POSTS = [
  {
    slug: 'cuidados-bancada-granito',
    title: 'Cuidados Essenciais para Sua Bancada de Granito Durar Décadas',
    excerpt: 'Saiba como limpar, selar e conservar sua bancada de granito para mantê-la impecável por muitos anos.',
    content: 'Guia completo de cuidados...',
    date: '15 Jun 2026',
    readTime: '4 min',
    image: IMG.kitchen,
    category: 'Dicas',
  },
  {
    slug: 'granito-vs-quartzo',
    title: 'Granito vs Quartzo: Qual a Melhor Opção para Sua Cozinha?',
    excerpt: 'Comparativo completo entre granito natural e quartzo engineered para ajudar na sua escolha.',
    content: 'Comparativo detalhado...',
    date: '05 Jun 2026',
    readTime: '6 min',
    image: IMG.quartz,
    category: 'Comparativos',
  },
  {
    slug: 'tendencias-marmores-2026',
    title: 'Tendências em Mármores e Granitos para 2026',
    excerpt: 'Descubra as cores, texturas e acabamentos que estão em alta neste ano.',
    content: 'Tendências do ano...',
    date: '25 Mai 2026',
    readTime: '5 min',
    image: IMG.marble,
    category: 'Tendências',
  },
  {
    slug: 'como-escolher-bancada-cozinha',
    title: 'Como Escolher a Bancada Ideal para Sua Cozinha',
    excerpt: 'Guia prático para escolher entre granito, quartzo, mármore e outros materiais para sua bancada.',
    date: '15 Mai 2026',
    readTime: '7 min',
    image: IMG.living,
    category: 'Dicas',
  },
  {
    slug: 'cuidados-marmore-branco',
    title: 'Mármore Branco: Cuidados Especiais para Preservar a Beleza',
    excerpt: 'O mármore branco exige cuidados específicos. Saiba como mantê-lo sempre bonito.',
    date: '05 Mai 2026',
    readTime: '4 min',
    image: IMG.bathroom,
    category: 'Dicas',
  },
  {
    slug: 'escadas-granito-seguranca-e-estilo',
    title: 'Escadas de Granito: Segurança e Estilo para Sua Casa',
    excerpt: 'Vantagens das escadas em granito, tipos de acabamento e dicas de instalação.',
    date: '25 Abr 2026',
    readTime: '5 min',
    image: IMG.stairs,
    category: 'Projetos',
  },
  {
    slug: 'bancada-quartzo-vantagens',
    title: '5 Vantagens da Bancada de Quartzo que Você Precisa Conhecer',
    excerpt: 'Descubra por que o quartzo engineered tem se tornado a escolha favorita para cozinhas modernas.',
    date: '15 Abr 2026',
    readTime: '4 min',
    image: IMG.project,
    category: 'Comparativos',
  },
  {
    slug: 'area-gourmet-projeto-pedra',
    title: 'Projetando a Área Gourmet Perfeita com Pedra Natural',
    excerpt: 'Dicas de design e materiais para criar sua área gourmet dos sonhos.',
    date: '05 Abr 2026',
    readTime: '6 min',
    image: IMG.gourmet,
    category: 'Projetos',
  },
  {
    slug: 'selagem-granito-guia',
    title: 'Guia Completo de Selagem para Bancadas de Granito',
    excerpt: 'Entenda a importância da selagem, quando fazer e como escolher o produto certo.',
    date: '25 Mar 2026',
    readTime: '5 min',
    image: IMG.kitchen,
    category: 'Dicas',
  },
  {
    slug: 'revestimento-pedra-fachada',
    title: 'Revestimento em Pedra Natural para Fachadas: Beleza e Durabilidade',
    excerpt: 'Transforme sua fachada com revestimentos em pedra natural. Opções, custos e cuidados.',
    date: '15 Mar 2026',
    readTime: '6 min',
    image: IMG.marble,
    category: 'Projetos',
  },
  {
    slug: 'granito-preto-sao-gabriel',
    title: 'Granito Preto São Gabriel: Elegância Clássica para Sua Obra',
    excerpt: 'Tudo sobre o granito Preto São Gabriel, um dos mais requisitados para projetos premium.',
    date: '05 Mar 2026',
    readTime: '4 min',
    image: IMG.stairs,
    category: 'Materiais',
  },
  {
    slug: 'cuidados-bancada-quartzo',
    title: 'Como Limpar e Cuidar da Sua Bancada de Quartzo no Dia a Dia',
    excerpt: 'Manutenção simples para manter sua bancada de quartzo sempre nova.',
    date: '25 Fev 2026',
    readTime: '3 min',
    image: IMG.quartz,
    category: 'Dicas',
  },
];

const CATEGORIES = ['Todos', 'Dicas', 'Projetos', 'Comparativos', 'Tendências', 'Materiais'];

export default function BlogClient() {
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
            Blog
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Nosso{' '}
            <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Dicas, tendências e informações sobre mármores, granitos e quartzos para sua obra.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Blog</span>
          </nav>
        </div>
      </div>

      {/* ===== POSTS ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_POSTS.map((post, i) => (
              <SectionWrapper key={post.slug} delay={i * 50}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                  category={post.category}
                  index={i}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-preto">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FaCalendarAlt className="mx-auto text-dourado mb-4" size={24} />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Fique por Dentro
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Novos artigos toda semana. Acompanhe nosso blog e receba dicas exclusivas sobre pedras naturais.
          </p>
          <a
            href={`https://wa.me/5544999999999?text=${encodeURIComponent('Olá! Quero receber dicas sobre mármores e granitos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl"
          >
            <FaClock size={18} />
            Receba Dicas no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
