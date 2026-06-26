'use client';

import Link from 'next/link';
import { FaWhatsapp, FaGem, FaBullseye, FaEye, FaHeart, FaStar, FaAward, FaUsers } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  team: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  workshop: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  project: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
};

const VALUES = [
  { icon: FaGem, title: 'Excelência', text: 'Buscamos o melhor em cada projeto, da seleção do material ao acabamento final.' },
  { icon: FaUsers, title: 'Compromisso', text: 'Com nossos clientes, prazos e qualidade. Sua satisfação é nossa prioridade.' },
  { icon: FaStar, title: 'Inovação', text: 'Técnicas modernas de corte e polimento para resultados impecáveis.' },
  { icon: FaHeart, title: 'Paixão pela Pedra', text: 'Amamos o que fazemos. Cada peça é tratada como uma obra de arte.' },
];

const TEAM = [
  { name: 'João Silva', role: 'Fundador & Mestre Marmorista', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Maria Souza', role: 'Designer de Interiores', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Carlos Oliveira', role: 'Mestre de Obras', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Ana Costa', role: 'Atendimento & Vendas', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

export default function SobreClient() {
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
            Sobre Nós
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Conheça a{' '}
            <span className="text-gradient-gold">Bela Art</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Há mais de 15 anos transformando pedras em obras de arte em Paranavaí e região.
          </p>
        </div>
      </section>

      {/* ===== BREADCRUMBS ===== */}
      <div className="bg-grafite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-dourado transition-colors duration-300">Home</Link>
            <span>/</span>
            <span className="text-dourado">Sobre</span>
          </nav>
        </div>
      </div>

      {/* ===== HISTÓRIA ===== */}
      <SectionWrapper>
        <section className="py-20 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-dourado text-xs font-medium uppercase tracking-[0.3em]">Nossa História</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
                  Mais de 15 Anos de Dedicação à Pedra Natural
                </h2>
                <div className="divider-gold-wide" />
                <div className="space-y-4 mt-6 text-gray-400 leading-relaxed">
                  <p>
                    A Bela Art Marmoraria nasceu em Paranavaí da paixão de seu fundador, João Silva,
                    pela arte de trabalhar pedras naturais. Começamos como uma pequena oficina e, ao longo
                    de mais de 15 anos, nos tornamos referência em marmoraria premium na região Noroeste do Paraná.
                  </p>
                  <p>
                    Nosso diferencial sempre foi o cuidado artesanal combinado com tecnologia de ponta.
                    Cada peça que sai da nossa oficina é resultado de planejamento, precisão e amor pelo que fazemos.
                    Selecionamos pessoalmente os melhores granitos, mármores e quartzos do mercado.
                  </p>
                  <p>
                    Já realizamos centenas de projetos — desde cozinhas residenciais até grandes empreendimentos
                    comerciais. Cada cliente é único, e cada projeto recebe a mesma dedicação: a de fazer da sua obra
                    algo verdadeiramente especial.
                  </p>
                </div>

                <div className="flex flex-wrap gap-8 mt-8">
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-dourado">15+</span>
                    <p className="text-gray-500 text-xs mt-1">Anos de Experiência</p>
                  </div>
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-dourado">500+</span>
                    <p className="text-gray-500 text-xs mt-1">Projetos Realizados</p>
                  </div>
                  <div className="text-center">
                    <span className="font-heading text-3xl font-bold text-dourado">98%</span>
                    <p className="text-gray-500 text-xs mt-1">Clientes Satisfeitos</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMG.workshop})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-preto/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/60 bg-preto/50 px-2 py-1 rounded">
                    Imagem ilustrativa
                  </span>
                </div>
                {/* Gold accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-dourado/30 rounded-xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dourado/20 rounded-xl -z-10" />
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== MISSÃO / VISÃO / VALORES ===== */}
      <SectionWrapper>
        <section className="py-20 bg-preto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Nossa Essência</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Missão, Visão e Valores</h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Missão */}
              <div className="p-8 rounded-xl bg-grafite/50 border border-white/5 hover:border-dourado/20 transition-all duration-500 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <FaBullseye size={24} />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold mb-3">Missão</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Transformar espaços com pedras naturais de alta qualidade, combinando tradição artesanal com
                  inovação técnica, superando as expectativas de cada cliente.
                </p>
              </div>

              {/* Visão */}
              <div className="p-8 rounded-xl bg-grafite/50 border border-white/5 hover:border-dourado/20 transition-all duration-500 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <FaEye size={24} />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold mb-3">Visão</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ser referência em marmoraria premium no Noroeste do Paraná, reconhecida pela excelência
                  técnica, atendimento personalizado e inovação constante.
                </p>
              </div>

              {/* Valores */}
              <div className="p-8 rounded-xl bg-grafite/50 border border-white/5 hover:border-dourado/20 transition-all duration-500 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-dourado/10 border border-dourado/20 flex items-center justify-center text-dourado">
                  <FaHeart size={24} />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold mb-3">Valores</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Qualidade acima de tudo, respeito aos prazos, transparência com o cliente, paixão pela pedra,
                  responsabilidade ambiental e melhoria contínua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== VALORES DETALHADOS ===== */}
      <SectionWrapper>
        <section className="py-20 bg-grafite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Nossos Pilares</h2>
              <div className="divider-gold" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-xl bg-preto/40 border border-white/5 hover:border-dourado/20 transition-all duration-500 text-center"
                  >
                    <Icon className="mx-auto text-dourado mb-4" size={28} />
                    <h3 className="text-white font-semibold mb-2">{val.title}</h3>
                    <p className="text-gray-400 text-sm">{val.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== EQUIPE ===== */}
      <SectionWrapper>
        <section className="py-20 bg-preto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-dourado text-xs font-medium uppercase tracking-[0.3em] mb-3">Equipe</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Quem Faz Acontecer</h2>
              <div className="divider-gold" />
              <p className="text-gray-400 text-sm mt-5 max-w-xl mx-auto">
                Conheça alguns dos profissionais que fazem da Bela Art uma referência em marmoraria.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member, i) => (
                <div key={member.name} className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-dourado/50 transition-all duration-500">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-preto/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <FaAward className="absolute bottom-3 right-3 text-dourado opacity-0 group-hover:opacity-100 transition-opacity duration-500" size={18} />
                  </div>
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionWrapper>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-grafite">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Conte com a Bela Art para transformar seu projeto em realidade. Solicite um orçamento gratuito.
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
    </>
  );
}
