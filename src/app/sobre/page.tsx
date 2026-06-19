import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da Bela Art Mármores, marmoraria em Paranavaí com mais de 15 anos de experiência em granito, mármore e quartzo.",
  openGraph: {
    title: "Sobre Nós | Bela Art Mármores",
    description:
      "Mais de 15 anos transformando pedras em obras de arte em Paranavaí.",
  },
};

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <p className="text-gold-500 font-serif text-lg mb-2">
              Nossa História
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Sobre a Bela Art Mármores
            </h1>
          </SectionWrapper>
        </div>
      </section>

      {/* História */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionWrapper>
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Detalhe de mármore - Imagem ilustrativa"
                  fill
                  className="object-cover"
                />
                <p className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5">
                  Imagem ilustrativa
                </p>
              </div>
            </SectionWrapper>
            <div>
              <SectionWrapper>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-marble-900 mb-6">
                  Transformando Pedras em Obras de Arte desde 2008
                </h2>
                <div className="space-y-4 text-marble-600 leading-relaxed">
                  <p>
                    A Bela Art Mármores nasceu da paixão pela pedra natural e
                    do desejo de oferecer produtos de altíssima qualidade para
                    Paranavaí e região. Fundada em 2008, nossa empresa começou
                    com uma pequena oficina e o compromisso de tratar cada peça
                    como uma verdadeira obra de arte.
                  </p>
                  <p>
                    Ao longo de mais de 15 anos de trajetória, nos
                    especializamos em bancadas de granito e quartzo, pias sob
                    medida, lavatórios, escadas, revestimentos e projetos
                    personalizados. Investimos constantemente em equipamentos
                    modernos e na capacitação de nossa equipe para oferecer o
                    que há de melhor em marmoraria.
                  </p>
                  <p>
                    Hoje, somos referência em pedra natural na região Noroeste
                    do Paraná, com mais de 500 projetos realizados e uma taxa de
                    satisfação de 98%. Nosso compromisso é com a excelência em
                    cada detalhe, do atendimento inicial à instalação final.
                  </p>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 lg:py-24 bg-marble-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <p className="text-gold-700 font-serif text-lg mb-2">
                Nossos Pilares
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-marble-900">
                Missão, Visão e Valores
              </h2>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
                description:
                  "Transformar ambientes através da beleza e resistência da pedra natural, oferecendo soluções personalizadas que superem as expectativas dos nossos clientes.",
              },
              {
                title: "Visão",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ),
                description:
                  "Ser referência em marmoraria no noroeste do Paraná, reconhecida pela excelência dos produtos, qualidade do atendimento e compromisso com a satisfação dos clientes.",
              },
              {
                title: "Valores",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
                description:
                  "Qualidade, pontualidade, transparência, respeito ao cliente, responsabilidade ambiental e paixão pelo que fazemos.",
              },
            ].map((item) => (
              <SectionWrapper key={item.title}>
                <div className="bg-white p-8 border border-marble-200 text-center h-full">
                  <div className="w-16 h-16 bg-marble-900 flex items-center justify-center mx-auto mb-5">
                    <svg
                      className="w-8 h-8 text-gold-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-marble-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-marble-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-12">
              <p className="text-gold-700 font-serif text-lg mb-2">
                Nossa Equipe
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-marble-900">
                Quem Faz Acontecer
              </h2>
              <p className="text-marble-600 mt-4 max-w-2xl mx-auto">
                Profissionais dedicados e apaixonados pelo que fazem, prontos
                para transformar seu projeto em realidade.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Equipe Técnica",
                role: "Produção e Beneficiamento",
                initials: "EQ",
              },
              {
                name: "Equipe de Instalação",
                role: "Montagem e Acabamento",
                initials: "IN",
              },
              {
                name: "Atendimento",
                role: "Vendas e Consultoria",
                initials: "AT",
              },
              {
                name: "Projetos",
                role: "Design e Planejamento",
                initials: "PR",
              },
            ].map((member) => (
              <SectionWrapper key={member.name}>
                <div className="text-center">
                  <div className="w-28 h-28 bg-marble-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-serif font-bold text-marble-500">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-marble-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-marble-600">{member.role}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <SectionWrapper>
            <div className="text-center mt-12">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-marble-900 hover:bg-marble-800 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
                Entre em Contato
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
