import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import FaqAccordion from "./FaqAccordion";

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
          alt="Mármore texturizado - Imagem ilustrativa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-marble-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <SectionWrapper>
            <p className="text-gold-500 font-serif text-lg lg:text-xl mb-4 tracking-wider">
              Marmoraria em Paranavaí
            </p>
          </SectionWrapper>
          <SectionWrapper className="!transition-delay-100">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Transformando{" "}
              <span className="text-gold-600">Pedras</span> em{" "}
              <span className="text-gold-600">Obras de Arte</span>
            </h1>
          </SectionWrapper>
          <SectionWrapper className="!transition-delay-200">
            <p className="text-lg sm:text-xl text-marble-300 max-w-2xl mb-10 leading-relaxed">
              Mais de 15 anos de excelência em marmoraria. Bancadas,
              revestimentos, pias sob medida e projetos personalizados com
              qualidade premium e instalação profissional em Paranavaí e região.
            </p>
          </SectionWrapper>
          <SectionWrapper className="!transition-delay-300">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5544998078099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale pelo WhatsApp
              </a>
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-700 hover:bg-gold-600 text-marble-900 font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Bancadas",
    description:
      "Bancadas para cozinha, banheiro e áreas de serviço em granito, quartzo ou mármore.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    slug: "bancadas-de-granito",
  },
  {
    title: "Pias & Lavatórios",
    description:
      "Pias sob medida e lavatórios esculpidos em pedra natural com design exclusivo.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    slug: "pias-sob-medida",
  },
  {
    title: "Revestimentos",
    description:
      "Revestimentos em pedra natural para paredes, fachadas e áreas internas.",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
    slug: "revestimentos",
  },
  {
    title: "Escadas",
    description:
      "Escadas residenciais e comerciais em granito e mármore com acabamento impecável.",
    image:
      "https://images.unsplash.com/photo-1519669012111-f0cd6885107d?w=600&q=80",
    slug: "escadas",
  },
  {
    title: "Áreas Gourmet",
    description:
      "Projetos completos para churrasqueiras, bancadas e ilhas gourmet.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    slug: "areas-gourmet",
  },
  {
    title: "Projetos Personalizados",
    description:
      "Criação sob medida de acordo com seu projeto e necessidades específicas.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    slug: "projetos-personalizados",
  },
];

function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold-700 font-serif text-lg mb-2">
              Nossos Serviços
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-marble-900">
              Soluções em Pedra Natural
            </h2>
            <p className="text-marble-600 mt-4 max-w-2xl mx-auto">
              Do clássico ao contemporâneo, oferecemos soluções completas em
              mármore, granito e quartzo para todos os ambientes.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <SectionWrapper key={service.title} className={`!transition-delay-${index * 100}`}>
              <Link
                href={`/servicos#${service.slug}`}
                className="group block bg-white border border-marble-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Imagem ilustrativa`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-marble-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-marble-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-marble-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-gold-700 font-semibold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Saiba mais
                    <svg
                      className="w-4 h-4 ml-1"
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

        <SectionWrapper>
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-marble-900 hover:bg-marble-800 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            >
              Ver Todos os Serviços
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

const materials = [
  {
    title: "Granitos",
    description: "Resistência e durabilidade para alto tráfego",
    initials: "GR",
    bgClass: "bg-marble-800",
  },
  {
    title: "Mármores",
    description: "Elegância e sofisticação atemporal",
    initials: "MR",
    bgClass: "bg-gold-700",
  },
  {
    title: "Quartzo",
    description: "Baixa porosidade e fácil manutenção",
    initials: "QZ",
    bgClass: "bg-marble-700",
  },
  {
    title: "Sintéticos",
    description: "Versatilidade e variedade de cores",
    initials: "ST",
    bgClass: "bg-gold-900",
  },
];

function MaterialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-marble-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold-700 font-serif text-lg mb-2">Materiais</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-marble-900">
              Variedade de Materiais
            </h2>
            <p className="text-marble-600 mt-4 max-w-2xl mx-auto">
              Trabalhamos com os melhores materiais do mercado para garantir
              beleza e resistência ao seu projeto.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {materials.map((material, index) => (
            <SectionWrapper key={material.title} className={`!transition-delay-${index * 100}`}>
              <div className="flex flex-col items-center text-center group">
                <div
                  className={`w-28 h-28 lg:w-36 lg:h-36 ${material.bgClass} rounded-full flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-2xl lg:text-3xl font-serif font-bold text-white">
                    {material.initials}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-marble-900 mb-1">
                  {material.title}
                </h3>
                <p className="text-sm text-marble-600">
                  {material.description}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    number: "01",
    title: "Contato",
    description:
      "Entre em contato pelo WhatsApp ou formulário e conte sobre seu projeto.",
  },
  {
    number: "02",
    title: "Visita Técnica",
    description:
      "Vamos até o local para tirar medidas e entender suas necessidades.",
  },
  {
    number: "03",
    title: "Orçamento",
    description:
      "Receba um orçamento detalhado com opções de materiais e prazos.",
  },
  {
    number: "04",
    title: "Instalação",
    description:
      "Produção e instalação profissional com acabamento impecável.",
  },
];

function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-marble-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold-500 font-serif text-lg mb-2">
              Como Funciona
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Nosso Processo
            </h2>
            <p className="text-marble-400 mt-4 max-w-2xl mx-auto">
              Da consulta inicial à instalação final, garantimos transparência e
              qualidade em cada etapa.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <SectionWrapper key={step.title}>
              <div className="relative">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] bg-gold-700/40" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-700 flex items-center justify-center mb-5 bg-marble-800">
                    <span className="text-xl font-serif font-bold text-gold-600">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-marble-400 max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gold-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { number: "15+", label: "Anos de Experiência" },
            { number: "500+", label: "Projetos Realizados" },
            { number: "50+", label: "Cores Disponíveis" },
            { number: "98%", label: "Satisfação" },
          ].map((stat, index) => (
            <SectionWrapper key={stat.label}>
              <div className="text-center">
                <p className="text-4xl lg:text-6xl font-serif font-bold text-marble-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm lg:text-base font-medium text-marble-800 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
    title: "Qualidade Premium",
    description:
      "Selecionamos os melhores materiais e aplicamos técnicas apuradas para garantir acabamento impecável.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
    title: "Atendimento Personalizado",
    description:
      "Cada projeto é único. Ouvimos suas ideias e desenvolvemos a solução ideal para seu espaço.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: "Prazo Garantido",
    description:
      "Cumprimos rigorosamente os prazos acordados. Seu projeto pronto quando você precisa.",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    ),
    title: "Instalação Profissional",
    description:
      "Equipe especializada para instalação com acabamento perfeito e mínima sujeira.",
  },
];

function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold-700 font-serif text-lg mb-2">Por que nos escolher</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-marble-900">
              Por que a Bela Art?
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <SectionWrapper key={benefit.title} className={`!transition-delay-${index * 100}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-marble-900 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {benefit.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-marble-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-marble-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Quanto tempo leva para produzir e instalar uma bancada?",
    answer:
      "O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto e da disponibilidade do material escolhido. Após a visita técnica e aprovação do orçamento, iniciamos a produção.",
  },
  {
    question: "Qual a diferença entre granito, mármore e quartzo?",
    answer:
      "O granito é uma pedra natural extremamente resistente, ideal para cozinhas. O mármore é mais nobre e poroso, perfeito para banheiros e áreas sociais. O quartzo (pedra artificial) tem baixa porosidade, não mancha e dispensa manutenção. Cada material tem sua aplicação ideal.",
  },
  {
    question: "Vocês atendem em Paranavaí e região?",
    answer:
      "Sim! Atendemos Paranavaí e toda a região Noroeste do Paraná, incluindo cidades como Loanda, Nova Esperança, Colorado e cidades vizinhas. Consulte-nos para outras localidades.",
  },
  {
    question: "Como é feita a visita técnica?",
    answer:
      "Agendamos um horário conveniente para ir até o local. Nossa equipe tira todas as medidas necessárias, analisa o espaço e discute as melhores opções de material e acabamento para seu projeto.",
  },
  {
    question: "Qual a manutenção necessária para bancadas de granito?",
    answer:
      "O granito é de baixa manutenção. Recomendamos limpeza com água e sabão neutro. Aplicar impermeabilizante a cada 1-2 anos ajuda a preservar o brilho e evitar manchas. O quartzo não precisa de impermeabilização.",
  },
  {
    question: "Vocês fazem projetos residenciais e comerciais?",
    answer:
      "Sim, atendemos ambos os segmentos. Desde bancadas residenciais até projetos comerciais de grande porte, como fachadas, balcões e revestimentos para lojas e restaurantes.",
  },
  {
    question: "Como solicito um orçamento?",
    answer:
      "Você pode solicitar pelo WhatsApp, pelo formulário de orçamento em nosso site ou ligando para (44) 99807-8099. Quanto mais detalhes do seu projeto, mais preciso será o orçamento.",
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim! Todos os nossos serviços têm garantia contra defeitos de fabricação e instalação. O prazo varia conforme o tipo de serviço, mas garantimos total suporte pós-instalação.",
  },
];

function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 lg:py-24 bg-marble-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <SectionWrapper>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-gold-700 font-serif text-lg mb-2">
              Perguntas Frequentes
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-marble-900">
              Tire suas Dúvidas
            </h2>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920&q=80"
          alt="Detalhe de mármore - Imagem ilustrativa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-marble-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionWrapper>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Solicite seu Orçamento
          </h2>
          <p className="text-marble-300 text-lg max-w-2xl mx-auto mb-10">
            Transforme seu projeto em realidade. Entre em contato e receba um
            orçamento personalizado sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544998078099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale pelo WhatsApp
            </a>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-700 hover:bg-gold-600 text-marble-900 font-semibold text-sm uppercase tracking-wider transition-all duration-200"
            >
              Formulário de Orçamento
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MaterialsSection />
      <ProcessSection />
      <StatsSection />
      <BenefitsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
