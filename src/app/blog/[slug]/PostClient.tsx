'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaWhatsapp, FaArrowLeft, FaArrowRight, FaTag, FaCalendarAlt, FaClock } from 'react-icons/fa';
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
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug: 'cuidados-bancada-granito',
    title: 'Cuidados Essenciais para Sua Bancada de Granito Durar Décadas',
    excerpt: 'Guia completo de limpeza, selagem e conservação para bancadas de granito.',
    content: `
      <p>Sua bancada de granito é um investimento que pode durar décadas com os cuidados certos. Neste guia completo, vamos mostrar como manter sua bancada impecável por muitos anos.</p>

      <h3>1. Limpeza Diária</h3>
      <p>Para a limpeza do dia a dia, use água morna e detergente neutro. Evite produtos ácidos como vinagre, limão ou limpadores multiuso com pH baixo, pois podem danificar a selagem e até mesmo gravar a superfície do granito.</p>
      <p>Use um pano macio ou esponja não abrasiva. Seque com um pano limpo para evitar manchas de água.</p>

      <h3>2. Selagem Anual</h3>
      <p>Granitos claros são mais porosos e precisam de selagem anual. Granitos escuros, a cada 2-3 anos. Para testar se sua bancada precisa de selagem, jogue algumas gotas de água na superfície: se a água formar bolinhas, a selagem está ok. Se espalhar e escurecer a pedra, está na hora de selar novamente.</p>

      <h3>3. Cuidados com Derramamentos</h3>
      <p>Limpe imediatamente derramamentos de vinho, café, suco de frutas, óleo e molhos. Embora o granito seja resistente, líquidos ácidos ou oleosos podem manchar se deixados por muito tempo.</p>

      <h3>4. Evite Impactos</h3>
      <p>Não corte diretamente sobre o granito. Use tábuas de corte. Apesar de ser uma pedra dura, o granito pode lascar com impactos pontuais, especialmente nas bordas.</p>

      <h3>5. Panelas Quentes</h3>
      <p>O granito é resistente ao calor, mas é recomendado usar tripés ou descansos para panelas muito quentes. Mudanças bruscas de temperatura podem causar trincas.</p>

      <h3>Conclusão</h3>
      <p>Com cuidados simples e regulares, sua bancada de granito mantém a beleza e funcionalidade por toda a vida. Na Bela Art Marmoraria, usamos granitos de alta qualidade e selantes premium para garantir a durabilidade do seu investimento.</p>
    `,
    date: '15 Jun 2026',
    readTime: '4 min',
    image: IMG.kitchen,
    category: 'Dicas',
  },
  {
    slug: 'granito-vs-quartzo',
    title: 'Granito vs Quartzo: Qual a Melhor Opção para Sua Cozinha?',
    excerpt: 'Comparativo completo entre granito natural e quartzo engineered.',
    content: `
      <p>Na hora de escolher a bancada para sua cozinha, duas opções se destacam: granito e quartzo. Ambas são excelentes, mas têm características diferentes que podem influenciar sua decisão.</p>

      <h3>Granito Natural</h3>
      <p>O granito é uma pedra 100% natural, formada ao longo de milhões de anos. Cada peça é única, com veios e padrões que não se repetem.</p>
      <p><strong>Vantagens:</strong> Resistente ao calor, risco e impacto. Cada peça é única. Pode ser polido e repolido. Ótimo custo-benefício.</p>
      <p><strong>Desvantagens:</strong> Poroso (precisa de selagem). Limpeza com produtos específicos. Cores limitadas comparado ao quartzo.</p>

      <h3>Quartzo Engineered</h3>
      <p>O quartzo é composto por cerca de 90% de quartzo natural moído e 10% de resinas e pigmentos. É fabricado em condições controladas.</p>
      <p><strong>Vantagens:</strong> Não poroso (não precisa de selagem). Superfície homogênea e cores uniformes. Grande variedade de cores. Resistente a manchas. Fácil limpeza.</p>
      <p><strong>Desvantagens:</strong> Menos resistente ao calor. Pode descolorir com exposição prolongada ao sol. Mais caro que o granito.</p>

      <h3>Qual Escolher?</h3>
      <p><strong>Escolha granito se:</strong> Prefere pedra natural com padrão único, cozinha com muito uso de panelas quentes, orçamento mais enxuto.</p>
      <p><strong>Escolha quartzo se:</strong> Quer facilidade de manutenção, variedade de cores uniformes, superfície não porosa para maior higiene.</p>

      <p>Na Bela Art Marmoraria, trabalhamos com ambas as opções e ajudamos você a escolher o melhor material para seu projeto.</p>
    `,
    date: '05 Jun 2026',
    readTime: '6 min',
    image: IMG.quartz,
    category: 'Comparativos',
  },
  {
    slug: 'tendencias-marmores-2026',
    title: 'Tendências em Mármores e Granitos para 2026',
    excerpt: 'Cores, texturas e acabamentos que estão em alta.',
    content: `
      <p>O mundo da pedra natural está em constante evolução. Conheça as principais tendências em mármores, granitos e quartzos para 2026.</p>

      <h3>1. Tons Neutros e Terrosos</h3>
      <p>Bege, creme, caramelo e cinza claro dominam as preferências. Cores que trazem aconchego e combinam com qualquer estilo de decoração.</p>

      <h3>2. Acabamento Matte</h3>
      <p>O acabamento polido (brilhante) dá lugar ao matte e acetinado. Mais sofisticado, menos reflexo e mais natural.</p>

      <h3>3. Veios Marcantes</h3>
      <p>Mármores com veios dramáticos e contrastantes estão em alta. O Mármore Calacatta e similares com veios dourados ou cinza escuro.</p>

      <h3>4. Pedras Português e Brasileiras</h3>
      <p>Valorização das pedras nacionais. Granitos como o Preto São Gabriel, Branco Dallas e Cinza Andorinha ganham destaque.</p>

      <h3>5. Grandes Formatos</h3>
      <p>Chapa única para bancadas sem emendas é o padrão premium. Menos juntas, mais elegância e continuidade visual.</p>

      <p>Na Bela Art Marmoraria, acompanhamos as tendências e oferecemos o que há de melhor em pedras naturais para seu projeto.</p>
    `,
    date: '25 Mai 2026',
    readTime: '5 min',
    image: IMG.marble,
    category: 'Tendências',
  },
  {
    slug: 'como-escolher-bancada-cozinha',
    title: 'Como Escolher a Bancada Ideal para Sua Cozinha',
    excerpt: 'Guia prático para escolher entre materiais.',
    content: `
      <p>Escolher a bancada ideal para sua cozinha é uma decisão importante. Este guia vai ajudar você a considerar todos os fatores.</p>
      <h3>Fatores a Considerar</h3>
      <p>Orçamento, estilo, durabilidade, manutenção e uso diário são os principais pontos. Consulte nossos especialistas na Bela Art Marmoraria para uma orientação personalizada.</p>
    `,
    date: '15 Mai 2026',
    readTime: '7 min',
    image: IMG.living,
    category: 'Dicas',
  },
  {
    slug: 'cuidados-marmore-branco',
    title: 'Mármore Branco: Cuidados Especiais para Preservar a Beleza',
    excerpt: 'Cuidados específicos para mármore branco.',
    content: `
      <p>O mármore branco é sinônimo de elegância, mas exige cuidados especiais. Saiba como manter sua peça impecável. O mármore branco é mais poroso que outras pedras e requer atenção redobrada.</p>
    `,
    date: '05 Mai 2026',
    readTime: '4 min',
    image: IMG.bathroom,
    category: 'Dicas',
  },
  {
    slug: 'escadas-granito-seguranca-e-estilo',
    title: 'Escadas de Granito: Segurança e Estilo para Sua Casa',
    excerpt: 'Vantagens das escadas em granito.',
    content: `
      <p>Escadas de granito combinam segurança com elegância. Veja as vantagens e dicas. O granito é um dos materiais mais resistentes para escadas.</p>
    `,
    date: '25 Abr 2026',
    readTime: '5 min',
    image: IMG.stairs,
    category: 'Projetos',
  },
  {
    slug: 'bancada-quartzo-vantagens',
    title: '5 Vantagens da Bancada de Quartzo que Você Precisa Conhecer',
    excerpt: 'Por que o quartzo é a escolha favorita.',
    content: `
      <p>O quartzo engineered conquistou o mercado com suas vantagens. Conheça as principais. Não poroso, resistente a manchas, fácil de limpar.</p>
    `,
    date: '15 Abr 2026',
    readTime: '4 min',
    image: IMG.project,
    category: 'Comparativos',
  },
  {
    slug: 'area-gourmet-projeto-pedra',
    title: 'Projetando a Área Gourmet Perfeita com Pedra Natural',
    excerpt: 'Dicas de design com pedra natural.',
    content: `
      <p>Área gourmet é o coração da casa. Saiba como projetar a sua com pedras naturais. Ilhas, bancadas e churrasqueiras em harmonia.</p>
    `,
    date: '05 Abr 2026',
    readTime: '6 min',
    image: IMG.gourmet,
    category: 'Projetos',
  },
  {
    slug: 'selagem-granito-guia',
    title: 'Guia Completo de Selagem para Bancadas de Granito',
    excerpt: 'Guia completo sobre selagem de granito.',
    content: `
      <p>Selagem é essencial para manter seu granito bonito. Neste guia completo, explicamos tudo que você precisa saber sobre selagem de granito.</p>
    `,
    date: '25 Mar 2026',
    readTime: '5 min',
    image: IMG.kitchen,
    category: 'Dicas',
  },
  {
    slug: 'revestimento-pedra-fachada',
    title: 'Revestimento em Pedra Natural para Fachadas',
    excerpt: 'Transforme sua fachada com pedra natural.',
    content: `
      <p>Revestir a fachada com pedra natural é uma tendência que veio para ficar. Beleza, durabilidade e valorização do imóvel.</p>
    `,
    date: '15 Mar 2026',
    readTime: '6 min',
    image: IMG.marble,
    category: 'Projetos',
  },
  {
    slug: 'granito-preto-sao-gabriel',
    title: 'Granito Preto São Gabriel: Elegância para Sua Obra',
    excerpt: 'Tudo sobre o granito Preto São Gabriel.',
    content: `
      <p>Um dos granitos mais requisitados para projetos premium. O Preto São Gabriel é sinônimo de elegância e sofisticação.</p>
    `,
    date: '05 Mar 2026',
    readTime: '4 min',
    image: IMG.stairs,
    category: 'Materiais',
  },
  {
    slug: 'cuidados-bancada-quartzo',
    title: 'Como Limpar e Cuidar da Sua Bancada de Quartzo',
    excerpt: 'Manutenção simples para bancada de quartzo.',
    content: `
      <p>Manter sua bancada de quartzo sempre nova é mais simples do que você imagina. Dicas práticas para o dia a dia.</p>
    `,
    date: '25 Fev 2026',
    readTime: '3 min',
    image: IMG.quartz,
    category: 'Dicas',
  },
];

export default function PostClient() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = ALL_POSTS.find((p) => p.slug === slug);
  const currentIndex = ALL_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? ALL_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < ALL_POSTS.length - 1 ? ALL_POSTS[currentIndex + 1] : null;

  if (!post) {
    return (
      <section className="pt-40 pb-24 bg-grafite min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">Post não encontrado</h1>
          <p className="text-gray-400 mb-6">O artigo que você procura não está disponível.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-dourado hover:text-dourado-claro transition-colors duration-300">
            <FaArrowLeft size={14} />
            Voltar para o Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-preto/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-preto/40 via-transparent to-preto" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-dourado transition-colors duration-300">Blog</Link>
            <span>/</span>
            <span className="text-dourado truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dourado/10 border border-dourado/20 text-dourado text-xs font-medium mb-4">
            <FaTag size={10} />
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-5">
            {post.title}
          </h1>

          <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <FaCalendarAlt size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 bg-grafite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-preto/30 border border-white/5 rounded-2xl p-8 sm:p-12">
            <article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-white
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-dourado
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-white
                prose-li:text-gray-300
                [&_p]:text-gray-300
                [&_h3]:text-dourado [&_h3]:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Organization', name: 'Bela Art Marmoraria' },
            datePublished: post.date,
            publisher: { '@type': 'Organization', name: 'Bela Art Marmoraria' },
            image: post.image,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://belaartmarmoraria.com.br/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* ===== NAVIGATION ===== */}
      <SectionWrapper>
        <section className="py-12 bg-preto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-6 rounded-xl bg-grafite/50 border border-white/5 hover:border-dourado/20 transition-all duration-500"
                >
                  <span className="flex items-center gap-2 text-dourado text-xs mb-3">
                    <FaArrowLeft size={12} />
                    Post Anterior
                  </span>
                  <h4 className="text-white text-sm font-medium group-hover:text-dourado transition-colors duration-300 line-clamp-2">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-6 rounded-xl bg-grafite/50 border border-white/5 hover:border-dourado/20 transition-all duration-500 text-right"
                >
                  <span className="flex items-center justify-end gap-2 text-dourado text-xs mb-3">
                    Próximo Post
                    <FaArrowRight size={12} />
                  </span>
                  <h4 className="text-white text-sm font-medium group-hover:text-dourado transition-colors duration-300 line-clamp-2">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Gostou do Artigo?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Quer transformar sua casa ou empresa com pedras naturais? Solicite um orçamento gratuito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white btn-red rounded-xl"
            >
              <FaWhatsapp size={20} />
              Solicitar Orçamento
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium btn-gold-outline rounded-xl"
            >
              Mais Artigos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
