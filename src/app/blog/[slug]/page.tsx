import type { Metadata } from 'next';
import PostClient from './PostClient';

// Static posts data for generateStaticParams
const POSTS = [
  {
    slug: 'cuidados-bancada-granito',
    title: 'Cuidados Essenciais para Sua Bancada de Granito Durar Décadas',
    desc: 'Guia completo de limpeza, selagem e conservação para bancadas de granito.',
    date: '2026-06-15',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
  },
  {
    slug: 'granito-vs-quartzo',
    title: 'Granito vs Quartzo: Qual a Melhor Opção para Sua Cozinha?',
    desc: 'Comparativo completo entre granito natural e quartzo engineered.',
    date: '2026-06-05',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  },
  {
    slug: 'tendencias-marmores-2026',
    title: 'Tendências em Mármores e Granitos para 2026',
    desc: 'Cores, texturas e acabamentos que estão em alta.',
    date: '2026-05-25',
    image: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=1200&q=80',
  },
  {
    slug: 'como-escolher-bancada-cozinha',
    title: 'Como Escolher a Bancada Ideal para Sua Cozinha',
    desc: 'Guia prático para escolher entre granito, quartzo, mármore e outros materiais.',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
  },
  {
    slug: 'cuidados-marmore-branco',
    title: 'Mármore Branco: Cuidados Especiais para Preservar a Beleza',
    desc: 'Cuidados específicos para manter o mármore branco sempre bonito.',
    date: '2026-05-05',
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&q=80',
  },
  {
    slug: 'escadas-granito-seguranca-e-estilo',
    title: 'Escadas de Granito: Segurança e Estilo para Sua Casa',
    desc: 'Vantagens das escadas em granito, tipos de acabamento e instalação.',
    date: '2026-04-25',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  },
  {
    slug: 'bancada-quartzo-vantagens',
    title: '5 Vantagens da Bancada de Quartzo que Você Precisa Conhecer',
    desc: 'Por que o quartzo engineered é a escolha favorita para cozinhas modernas.',
    date: '2026-04-15',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80',
  },
  {
    slug: 'area-gourmet-projeto-pedra',
    title: 'Projetando a Área Gourmet Perfeita com Pedra Natural',
    desc: 'Dicas de design e materiais para área gourmet.',
    date: '2026-04-05',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=1200&q=80',
  },
  {
    slug: 'selagem-granito-guia',
    title: 'Guia Completo de Selagem para Bancadas de Granito',
    desc: 'Importância da selagem, quando fazer e como escolher o produto certo.',
    date: '2026-03-25',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80',
  },
  {
    slug: 'revestimento-pedra-fachada',
    title: 'Revestimento em Pedra Natural para Fachadas',
    desc: 'Transforme sua fachada com revestimentos em pedra natural.',
    date: '2026-03-15',
    image: 'https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=1200&q=80',
  },
  {
    slug: 'granito-preto-sao-gabriel',
    title: 'Granito Preto São Gabriel: Elegância para Sua Obra',
    desc: 'Tudo sobre um dos granitos mais requisitados.',
    date: '2026-03-05',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  },
  {
    slug: 'cuidados-bancada-quartzo',
    title: 'Como Limpar e Cuidar da Sua Bancada de Quartzo',
    desc: 'Manutenção simples para bancada de quartzo sempre nova.',
    date: '2026-02-25',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  },
];

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

// For SEO — generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post não encontrado | Bela Art Marmoraria' };
  }

  const postTitle = `${post.title} | Bela Art Marmoraria`;
  const postDesc = post.desc;

  return {
    title: postTitle,
    description: postDesc,
    openGraph: {
      title: postTitle,
      description: postDesc,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postDesc,
    },
  };
}

export default function PostPage() {
  return <PostClient />;
}
