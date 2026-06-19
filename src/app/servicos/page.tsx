import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da Bela Art Mármores: bancadas de granito e quartzo, pias sob medida, lavatórios, escadas, áreas gourmet, mesas, revestimentos e projetos personalizados.",
  openGraph: {
    title: "Serviços | Bela Art Mármores",
    description:
      "Soluções completas em mármore, granito e quartzo para sua casa ou empresa.",
  },
};

const serviceSections = [
  {
    id: "bancadas-de-granito",
    title: "Bancadas de Granito",
    description:
      "O granito é a escolha ideal para quem busca resistência e durabilidade sem abrir mão da beleza. Perfeito para cozinhas, banheiros e áreas de serviço, o granito suporta altas temperaturas, riscos e impactos do dia a dia. Trabalhamos com dezenas de cores e acabamentos, do polido ao jateado, para combinar com seu estilo.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    benefits: [
      "Alta resistência a calor e riscos",
      "Durabilidade excepcional",
      "Fácil limpeza e manutenção",
      "Disponível em diversas cores e texturas",
      "Valoriza o imóvel",
    ],
  },
  {
    id: "bancadas-de-quartzo",
    title: "Bancadas de Quartzo",
    description:
      "O quartzo é uma pedra artificial de alta tecnologia, composta por cerca de 93% de quartzo natural e resinas especiais. Sua superfície não porosa impede a absorção de líquidos, tornando-a antibacteriana e extremamente higiênica. Ideal para cozinhas modernas que exigem praticidade sem perder a elegância.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    benefits: [
      "Superfície não porosa - não mancha",
      "Antibacteriano e higiênico",
      "Dispensa impermeabilização",
      "Uniformidade de cor e textura",
      "Ampla variedade de cores modernas",
    ],
  },
  {
    id: "pias-sob-medida",
    title: "Pias sob Medida",
    description:
      "Pias esculpidas em bloco único de pedra natural, criadas sob medida para seu banheiro ou lavabo. Cada peça é única, com design personalizado que valoriza o ambiente. Trabalhamos com mármores nobres e granitos selecionados para criar verdadeiras obras de arte funcionais.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    benefits: [
      "Peça única e exclusiva",
      "Design personalizado",
      "Acabamento artesanal",
      "Durabilidade e beleza",
      "Valoriza o ambiente",
    ],
  },
  {
    id: "lavatorios",
    title: "Lavatórios",
    description:
      "Lavatórios em pedra natural com design sofisticado. Do clássico ao contemporâneo, criamos peças que se tornam o ponto focal do ambiente. Opções de cuba esculpida, sobreposta ou de embutir, sempre com acabamento impecável.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    benefits: [
      "Design exclusivo",
      "Múltiplos acabamentos",
      "Resistência e durabilidade",
      "Fácil limpeza",
      "Combina com qualquer estilo",
    ],
  },
  {
    id: "escadas",
    title: "Escadas",
    description:
      "Escadas residenciais e comerciais em granito e mármore com acabamento impecável. Projetamos cada degrau considerando ergonomia, segurança e estética. Do tradicional ao estilo flutuante, criamos escadas que impressionam pela beleza e solidez.",
    image:
      "https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=800&q=80",
    benefits: [
      "Alta resistência e segurança",
      "Design personalizado",
      "Acabamento antiderrapante",
      "Beleza duradoura",
      "Valoriza o imóvel",
    ],
  },
  {
    id: "areas-gourmet",
    title: "Áreas Gourmet",
    description:
      "Projetos completos para áreas gourmet e churrasqueiras. Bancadas, ilhas centrais, pias e balcões em pedra natural que transformam seu espaço em um ambiente funcional e elegante para receber amigos e família.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    benefits: [
      "Resistente a intempéries",
      "Fácil limpeza",
      "Design integrado",
      "Aproveitamento do espaço",
      "Ambiente funcional e elegante",
    ],
  },
  {
    id: "mesas",
    title: "Mesas",
    description:
      "Mesas em pedra natural para jantar, centro e lateral. Tampos em granito, mármore ou quartzo com bordas e acabamentos personalizados. Peças que unem funcionalidade e escultura em um só móvel.",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
    benefits: [
      "Peça de destaque na decoração",
      "Durabilidade superior",
      "Fácil manutenção",
      "Variedade de formatos e tamanhos",
      "Acabamento personalizado",
    ],
  },
  {
    id: "revestimentos",
    title: "Revestimentos",
    description:
      "Revestimentos em pedra natural para paredes, fachadas, painéis decorativos e áreas internas. Do rústico ao polido, criamos revestimentos que transformam completamente o ambiente com texturas e nuances únicas da pedra natural.",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    benefits: [
      "Texturas e padrões naturais",
      "Durabilidade e resistência",
      "Isolamento térmico natural",
      "Personalização total",
      "Valorização estética",
    ],
  },
  {
    id: "projetos-personalizados",
    title: "Projetos Personalizados",
    description:
      "Criação sob medida de acordo com seu projeto arquitetônico. Nossa equipe técnica trabalha em parceria com arquitetos e designers para desenvolver soluções exclusivas em pedra natural para qualquer ambiente ou aplicação.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    benefits: [
      "Projeto sob medida",
      "Consultoria especializada",
      "Materiais premium",
      "Instalação profissional",
      "Suporte completo pós-instalação",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionWrapper>
              <p className="text-gold-500 font-serif text-lg mb-2">
                Nossos Serviços
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                Soluções em Pedra Natural
              </h1>
              <p className="text-marble-300 max-w-2xl mx-auto">
                Do clássico ao contemporâneo, oferecemos soluções completas em
                mármore, granito e quartzo para todos os ambientes da sua casa
                ou empresa.
              </p>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Navegação rápida */}
      <section className="bg-marble-100 border-b border-marble-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide py-3">
            <nav className="flex gap-4 text-sm whitespace-nowrap">
              {serviceSections.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="text-marble-700 hover:text-gold-700 font-medium transition-colors px-2 py-1"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Seções de serviços */}
      {serviceSections.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${
            index % 2 === 0 ? "bg-white" : "bg-marble-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <SectionWrapper>
                <div
                  className={`relative h-64 sm:h-80 lg:h-96 overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - Imagem ilustrativa`}
                    fill
                    className="object-cover"
                  />
                  <p className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5">
                    Imagem ilustrativa
                  </p>
                </div>
              </SectionWrapper>

              {/* Content */}
              <SectionWrapper className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-marble-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-marble-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-marble-700"
                    >
                      <svg
                        className="w-5 h-5 text-gold-700 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5544998078099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar Orçamento
                </a>
              </SectionWrapper>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-marble-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-marble-300 max-w-2xl mx-auto mb-8">
              Temos soluções personalizadas para cada necessidade. Fale conosco
              e descubra como podemos ajudar no seu projeto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-700 hover:bg-gold-600 text-marble-900 font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            >
              Entre em Contato
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
