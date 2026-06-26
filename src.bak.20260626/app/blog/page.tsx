import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas e informações sobre bancadas de granito, mármore e quartzo, cuidados, manutenção e tendências em marmoraria.",
  openGraph: {
    title: "Blog | Bela Art Mármores",
    description:
      "Dicas e informações sobre pedras naturais, cuidados e tendências.",
  },
};

const posts = [
  {
    slug: "granito-ou-quartzo-qual-escolher",
    title: "Granito ou Quartzo: Qual escolher para sua bancada?",
    summary:
      "Comparativo completo entre granito e quartzo para ajudar na escolha da bancada ideal. Resistência, manutenção, estética e custo-benefício.",
    date: "2026-05-15",
    category: "Materiais",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    slug: "cuidados-com-bancada-de-marmore",
    title: "Cuidados Essenciais com sua Bancada de Mármore",
    summary:
      "Saiba como cuidar da sua bancada de mármore para mantê-la bonita por muitos anos. Dicas de limpeza, impermeabilização e manutenção preventiva.",
    date: "2026-04-28",
    category: "Manutenção",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    slug: "tendencias-bancadas-cozinha-2026",
    title: "Tendências em Bancadas de Cozinha para 2026",
    summary:
      "Descubra as principais tendências em bancadas de cozinha, desde cores e texturas até formatos e acabamentos que estão em alta.",
    date: "2026-03-10",
    category: "Tendências",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    slug: "vantagens-pia-esculpida-em-pedra",
    title: "Vantagens de ter uma Pia Esculpida em Pedra Natural",
    summary:
      "As pias esculpidas em bloco único de pedra natural são peças únicas que transformam qualquer banheiro. Conheça suas vantagens.",
    date: "2026-02-20",
    category: "Produtos",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  },
  {
    slug: "como-escolher-granito-banheiro",
    title: "Como Escolher o Granito Ideal para seu Banheiro",
    summary:
      "Guia completo para escolher a bancada de granito perfeita para seu banheiro, considerando cores, acabamentos e resistência.",
    date: "2026-01-15",
    category: "Dicas",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    slug: "diferenca-entre-marmore-granito-quartzo",
    title: "Entenda a Diferença entre Mármore, Granito e Quartzo",
    summary:
      "Saiba as principais diferenças entre os três materiais mais utilizados em marmoraria e qual é o mais indicado para cada ambiente.",
    date: "2025-12-08",
    category: "Materiais",
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <p className="text-gold-500 font-serif text-lg mb-2">Blog</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Dicas e Novidades
            </h1>
            <p className="text-marble-300 max-w-2xl mx-auto">
              Fique por dentro das novidades, dicas de manutenção e tendências
              em marmoraria e pedras naturais.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <SectionWrapper key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-marble-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt="Imagem ilustrativa"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-marble-900/80 text-gold-600 text-xs font-semibold px-2.5 py-1 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <time className="text-xs text-marble-500">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="text-lg font-serif font-bold text-marble-900 mt-1 mb-2 group-hover:text-gold-700 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-marble-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                    <span className="inline-flex items-center text-gold-700 font-semibold text-xs uppercase tracking-wider mt-3 group-hover:gap-2 transition-all">
                      Continuar lendo
                      <svg
                        className="w-3.5 h-3.5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
