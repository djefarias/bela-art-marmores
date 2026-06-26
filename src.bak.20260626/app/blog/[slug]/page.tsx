import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionWrapper from "@/components/SectionWrapper";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

const posts = [
  {
    slug: "granito-ou-quartzo-qual-escolher",
    title: "Granito ou Quartzo: Qual escolher para sua bancada?",
    summary:
      "Comparativo completo entre granito e quartzo para ajudar na escolha da bancada ideal.",
    date: "2026-05-15",
    category: "Materiais",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    content: `
      <p>Na hora de escolher a bancada ideal para sua cozinha ou banheiro, uma das dúvidas mais comuns é: <strong>granito ou quartzo?</strong> Ambos são excelentes materiais, mas têm características bem diferentes que podem influenciar sua decisão.</p>

      <h2>Granito</h2>
      <p>O granito é uma pedra natural formada por minerais como quartzo, feldspato e mica. É extraído em blocos diretamente da natureza e cortado em chapas. Cada chapa é única, com variações naturais de cor e textura.</p>

      <p><strong>Vantagens do Granito:</strong></p>
      <ul>
        <li>Altamente resistente a riscos e calor</li>
        <li>Durabilidade excepcional - pode durar décadas</li>
        <li>Padrões naturais únicos em cada peça</li>
        <li>Bom custo-benefício</li>
        <li>Pode ser polido novamente se perder o brilho</li>
      </ul>

      <p><strong>Desvantagens:</strong></p>
      <ul>
        <li>Mais poroso, precisa de impermeabilização periódica</li>
        <li>Pode manchar com líquidos ácidos se não for impermeabilizado</li>
        <li>Variações de cor podem dificultar a combinação perfeita</li>
      </ul>

      <h2>Quartzo</h2>
      <p>O quartzo é uma pedra artificial composta por cerca de 93% de quartzo natural moído e 7% de resinas e pigmentos. É produzido em placas com cores e padrões uniformes.</p>

      <p><strong>Vantagens do Quartzo:</strong></p>
      <ul>
        <li>Superfície não porosa - não mancha nem absorve líquidos</li>
        <li>Antibacteriano e higiênico</li>
        <li>Não precisa de impermeabilização</li>
        <li>Cores uniformes e modernas</li>
        <li>Fácil limpeza</li>
      </ul>

      <p><strong>Desvantagens:</strong></p>
      <ul>
        <li>Menos resistente ao calor extremo (panelas quentes podem danificar)</li>
        <li>Custo mais elevado</li>
        <li>Não pode ser polido novamente se danificado</li>
        <li>Padrão uniforme (menos natural)</li>
      </ul>

      <h2>Qual escolher?</h2>
      <p>A escolha depende do seu estilo de vida e preferências estéticas:</p>
      <ul>
        <li><strong>Escolha Granito se:</strong> você prefere pedra natural com padrões únicos, cozinha muito e precisa de resistência ao calor, ou tem orçamento mais limitado.</li>
        <li><strong>Escolha Quartzo se:</strong> você deseja baixa manutenção, superfície antibacteriana, cores modernas e uniformes, ou tem crianças pequenas (mais higiênico).</li>
      </ul>

      <p>Na <strong>Bela Art Mármores</strong>, trabalhamos com ambos os materiais e podemos ajudar você a escolher o ideal para seu projeto. Entre em contato para uma consultoria personalizada.</p>
    `,
  },
  {
    slug: "cuidados-com-bancada-de-marmore",
    title: "Cuidados Essenciais com sua Bancada de Mármore",
    summary:
      "Saiba como cuidar da sua bancada de mármore para mantê-la bonita por muitos anos.",
    date: "2026-04-28",
    category: "Manutenção",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    content: `
      <p>O mármore é uma das pedras mais elegantes e sofisticadas que existem. No entanto, por ser uma pedra natural mais macia e porosa, requer cuidados especiais para manter sua beleza ao longo do tempo.</p>

      <h2>1. Impermeabilização é fundamental</h2>
      <p>Logo após a instalação, sua bancada de mármore deve receber impermeabilizante específico para pedras naturais. Esse tratamento deve ser renovado a cada 6 a 12 meses, dependendo do uso.</p>

      <h2>2. Limpeza diária</h2>
      <p>Para a limpeza do dia a dia, use apenas água e sabão neutro com um pano macio. Evite produtos ácidos como vinagre, limão, produtos multiuso que contenham ácidos, cloro ou amoníaco.</p>

      <h2>3. Cuidado com manchas</h2>
      <p>O mármore é sensível a substâncias ácidas. Vinho tinto, café, suco de limão e molhos devem ser limpos imediatamente. Quanto mais tempo a substância ficar em contato, maior a chance de manchar permanentemente.</p>

      <h2>4. Panelas quentes</h2>
      <p>Embora o mármore seja resistente ao calor, mudanças bruscas de temperatura podem causar trincas. Use sempre descanso de panelas ou tripé para proteger a superfície.</p>

      <h2>5. Objetos cortantes</h2>
      <p>Evite cortar alimentos diretamente sobre a bancada de mármore. Use tábuas de corte para não riscar a superfície.</p>

      <h2>6. Manutenção profissional</h2>
      <p>A cada 2 ou 3 anos, considere contratar um profissional para polir e renovar o acabamento da sua bancada. Isso remove manchas superficiais e devolve o brilho original.</p>

      <p>Seguindo esses cuidados, sua bancada de mármore manterá a beleza e elegância por muitos anos. Na Bela Art Mármores, oferecemos suporte e orientação para manter sua pedra sempre impecável.</p>
    `,
  },
  {
    slug: "tendencias-bancadas-cozinha-2026",
    title: "Tendências em Bancadas de Cozinha para 2026",
    summary:
      "Descubra as principais tendências em bancadas de cozinha para 2026.",
    date: "2026-03-10",
    category: "Tendências",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    content: `
      <p>O mundo da arquitetura e design está sempre se renovando, e as bancadas de cozinha não ficam de fora. Para 2026, algumas tendências fortes estão moldando a escolha dos materiais e acabamentos.</p>

      <h2>1. Cores escuras e dramáticas</h2>
      <p>O preto e os tons escuros estão dominando as cozinhas. Granitos pretos e quartzos em tonalidades escuras com veios claros criam um contraste elegante e moderno.</p>

      <h2>2. Veios marcantes</h2>
      <p>A tendência é apostar em pedras com veios expressivos e marcantes, que se tornam o ponto focal da cozinha. Quartzos com veios inspirados em mármores nobres são uma opção prática e bonita.</p>

      <h2>3. Acabamento jateado ou escovado</h2>
      <p>O acabamento polido dá lugar aos acabamentos mais texturizados. O jateado e o escovado oferecem um visual mais natural e contemporâneo, além de serem menos propensos a mostrar marcas de dedos.</p>

      <h2>4. Ilhas multifuncionais</h2>
      <p>As ilhas continuam sendo o centro das cozinhas, mas agora com múltiplas funções. Bancadas que integram cooktop, pia, espaço para refeições e área de trabalho em um único bloco de pedra.</p>

      <h2>5. Sustentabilidade</h2>
      <p>Materiais sustentáveis ganham espaço. Quartzos produzidos com materiais reciclados e pedras naturais de manejo responsável são cada vez mais valorizados.</p>

      <h2>6. Bancadas ultrafinas</h2>
      <p>As bancadas com espessura reduzida (6mm a 12mm) continuam em alta, oferecendo um visual clean e minimalista. Requerem estrutura de suporte adequada, mas o resultado é deslumbrante.</p>

      <p>Quer saber qual tendência combina mais com seu estilo? A equipe da Bela Art Mármores está pronta para ajudar você a escolher a bancada perfeita para sua cozinha.</p>
    `,
  },
  {
    slug: "vantagens-pia-esculpida-em-pedra",
    title: "Vantagens de ter uma Pia Esculpida em Pedra Natural",
    summary:
      "As pias esculpidas em bloco único de pedra natural são peças únicas.",
    date: "2026-02-20",
    category: "Produtos",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
    content: `
      <p>As pias esculpidas em bloco único de pedra natural são o ápice do luxo e da exclusividade em um banheiro. Diferente das pias convencionais, cada peça é única, talhada diretamente de um bloco maciço de mármore ou granito.</p>

      <h2>1. Exclusividade absoluta</h2>
      <p>Cada pia esculpida é uma peça única. As variações naturais da pedra garantem que não exista outra igual no mundo. É a personalização em seu nível máximo.</p>

      <h2>2. Design personalizado</h2>
      <p>Diferente de peças industrializadas, a pia esculpida pode ser projetada sob medida para seu espaço. Formatos orgânicos, assimétricos, com detalhes em relevo - as possibilidades são infinitas.</p>

      <h2>3. Durabilidade superior</h2>
      <p>Por ser talhada em bloco maciço, a pia em pedra natural é extremamente resistente. Não há emendas ou juntas que possam abrir com o tempo. É uma peça que dura décadas.</p>

      <h2>4. Beleza atemporal</h2>
      <p>Pedras naturais como mármore e granito nunca saem de moda. Uma pia esculpida valoriza o imóvel e mantém-se bela por gerações.</p>

      <h2>5. Versatilidade de estilos</h2>
      <p>Do rústico ao contemporâneo, a pia esculpida se adapta a qualquer estilo de decoração. O acabamento pode ser polido (brilhante), jateado (fosco) ou escovado (texturizado).</p>

      <p>Na Bela Art Mármores, criamos pias esculpidas sob medida para cada cliente. Entre em contato para discutir seu projeto.</p>
    `,
  },
  {
    slug: "como-escolher-granito-banheiro",
    title: "Como Escolher o Granito Ideal para seu Banheiro",
    summary:
      "Guia completo para escolher a bancada de granito perfeita para seu banheiro.",
    date: "2026-01-15",
    category: "Dicas",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
    content: `
      <p>Escolher o granito ideal para o banheiro envolve considerar estética, funcionalidade e durabilidade. Diferente da cozinha, o banheiro tem suas particularidades que influenciam na escolha.</p>

      <h2>1. Cores claras para ambientes pequenos</h2>
      <p>Banheiros pequenos se beneficiam de granitos em tons claros (branco, bege, cinza claro), que ampliam visualmente o espaço e refletem melhor a luz.</p>

      <h2>2. Resistência à umidade</h2>
      <p>O granito é naturalmente resistente à umidade, mas a impermeabilização é essencial em banheiros, onde a bancada fica constantemente em contato com água e produtos de higiene.</p>

      <h2>3. Acabamento ideal</h2>
      <p>O acabamento polido é o mais comum para banheiros, pois realça as cores e é fácil de limpar. O acabamento jateado (fosco) também é uma opção elegante e moderna.</p>

      <h2>4. Cuidado com cores escuras</h2>
      <p>Granitos escuros (preto, azul, verde escuro) são elegantes, mas mostram mais facilmente resíduos de sabão e marcas de água. Exigem limpeza mais frequente.</p>

      <h2>5. Combinação com o estilo</h2>
      <p>Para banheiros clássicos, mármores e granitos claros. Para banheiros modernos, granitos escuros ou com veios marcantes. Para banheiros rústicos, granitos com textura natural.</p>

      <p>Na Bela Art Mármores, temos dezenas de opções de granito para seu banheiro. Visite nossa mostra ou solicite uma visita técnica.</p>
    `,
  },
  {
    slug: "diferenca-entre-marmore-granito-quartzo",
    title: "Entenda a Diferença entre Mármore, Granito e Quartzo",
    summary:
      "Saiba as principais diferenças entre os três materiais mais utilizados.",
    date: "2025-12-08",
    category: "Materiais",
    image:
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&q=80",
    content: `
      <p>Mármore, granito e quartzo são os três materiais mais populares em marmoraria, mas cada um tem características muito distintas. Entender essas diferenças é essencial para fazer a escolha certa.</p>

      <h2>Mármore</h2>
      <p>Pedra natural metamórfica, formada a partir do calcário sob alta pressão e temperatura. É mais macio e poroso que o granito.</p>
      <p><strong>Ideal para:</strong> Banheiros, lavabos, mesas, decoração, lareiras.</p>
      <p><strong>Não recomendado para:</strong> Cozinhas com uso intenso, áreas de serviço.</p>

      <h2>Granito</h2>
      <p>Pedra natural ígnea, formada pelo resfriamento lento do magma. É a mais dura e resistente das pedras naturais.</p>
      <p><strong>Ideal para:</strong> Cozinhas, bancadas de uso intenso, áreas externas.</p>
      <p><strong>Não recomendado para:</strong> Ambientes que exijam uniformidade total de cor.</p>

      <h2>Quartzo</h2>
      <p>Pedra artificial composta por quartzo natural moído e resinas. Não é uma pedra natural, mas um material projetado.</p>
      <p><strong>Ideal para:</strong> Cozinhas modernas, banheiros, áreas que exigem higiene.</p>
      <p><strong>Não recomendado para:</strong> Áreas externas com sol intenso (pode desbotar), locais com panelas muito quentes.</p>

      <h2>Tabela Comparativa</h2>
      <table class="w-full text-sm border-collapse mb-6">
        <thead>
          <tr class="bg-marble-200">
            <th class="p-2 text-left">Característica</th>
            <th class="p-2 text-left">Mármore</th>
            <th class="p-2 text-left">Granito</th>
            <th class="p-2 text-left">Quartzo</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-marble-200">
            <td class="p-2 font-medium">Dureza</td>
            <td class="p-2">Média</td>
            <td class="p-2">Alta</td>
            <td class="p-2">Alta</td>
          </tr>
          <tr class="border-b border-marble-200">
            <td class="p-2 font-medium">Porosidade</td>
            <td class="p-2">Alta</td>
            <td class="p-2">Média</td>
            <td class="p-2">Baixa</td>
          </tr>
          <tr class="border-b border-marble-200">
            <td class="p-2 font-medium">Manutenção</td>
            <td class="p-2">Alta</td>
            <td class="p-2">Média</td>
            <td class="p-2">Baixa</td>
          </tr>
          <tr class="border-b border-marble-200">
            <td class="p-2 font-medium">Custo</td>
            <td class="p-2">Alto</td>
            <td class="p-2">Médio</td>
            <td class="p-2">Alto</td>
          </tr>
          <tr>
            <td class="p-2 font-medium">Resistência ao calor</td>
            <td class="p-2">Média</td>
            <td class="p-2">Alta</td>
            <td class="p-2">Média</td>
          </tr>
        </tbody>
      </table>

      <p>Na Bela Art Mármores, trabalhamos com os três materiais e podemos orientar você na melhor escolha para cada ambiente do seu projeto.</p>
    `,
  },
];

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post não encontrado" };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Bela Art Mármores`,
      description: post.summary,
    },
  };
}

export default async function BlogPost({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Article */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-marble-500 mb-8">
            <Link href="/" className="hover:text-gold-700 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-gold-700 transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-marble-700">{post.title}</span>
          </nav>

          <SectionWrapper>
            <div className="mb-6">
              <span className="bg-marble-900 text-gold-600 text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-marble-900 mb-4">
              {post.title}
            </h1>
            <time className="text-sm text-marble-500 block mb-8">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </SectionWrapper>

          <SectionWrapper>
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden mb-10">
              <img
                src={post.image}
                alt="Imagem ilustrativa"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5">
                Imagem ilustrativa
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-marble-900 prose-headings:mt-8 prose-headings:mb-4
                prose-p:text-marble-600 prose-p:leading-relaxed
                prose-strong:text-marble-900
                prose-ul:list-disc prose-ul:pl-5
                prose-li:text-marble-600
                prose-table:text-marble-600
                prose-th:bg-marble-200 prose-th:text-marble-900 prose-th:p-2 prose-th:font-semibold
                prose-td:p-2 prose-td:border-b prose-td:border-marble-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </SectionWrapper>

          {/* CTA no final do post */}
          <SectionWrapper>
            <div className="mt-12 p-6 bg-marble-100 border border-marble-200">
              <h3 className="font-serif font-bold text-marble-900 text-lg mb-2">
                Faça seu orçamento conosco
              </h3>
              <p className="text-sm text-marble-600 mb-4">
                Transforme seu projeto em realidade com a qualidade Bela Art
                Mármores. Solicite um orçamento sem compromisso.
              </p>
              <a
                href="https://wa.me/5544998078099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
                Solicitar Orçamento
              </a>
            </div>
          </SectionWrapper>

          {/* Navegação entre posts */}
          <SectionWrapper>
            <div className="flex justify-between mt-12 pt-8 border-t border-marble-200">
              <div>
                {(() => {
                  const idx = posts.findIndex((p) => p.slug === slug);
                  const prev = idx > 0 ? posts[idx - 1] : null;
                  return prev ? (
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-sm text-marble-600 hover:text-gold-700 transition-colors"
                    >
                      ← {prev.title}
                    </Link>
                  ) : null;
                })()}
              </div>
              <div>
                {(() => {
                  const idx = posts.findIndex((p) => p.slug === slug);
                  const next = idx < posts.length - 1 ? posts[idx + 1] : null;
                  return next ? (
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-sm text-marble-600 hover:text-gold-700 transition-colors text-right"
                    >
                      {next.title} →
                    </Link>
                  ) : null;
                })()}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </article>
    </>
  );
}
