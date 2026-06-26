import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Galeria de projetos da Bela Art Mármores. Veja exemplos de bancadas, pias, escadas, revestimentos e áreas gourmet em granito, mármore e quartzo.",
  openGraph: {
    title: "Projetos | Bela Art Mármores",
    description:
      "Conheça nossos projetos realizados em Paranavaí e região.",
  },
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Bancada de cozinha em granito - Imagem ilustrativa",
    title: "Bancada em Granito",
    description: "Cozinha residencial com bancada em granito polido",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Detalhe de mármore - Imagem ilustrativa",
    title: "Bancada em Quartzo",
    description: "Cozinha moderna com bancada em quartzo branco",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    alt: "Banheiro com pia em pedra - Imagem ilustrativa",
    title: "Pia sob Medida",
    description: "Pia esculpida em mármore para banheiro",
  },
  {
    src: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    alt: "Detalhe de bancada em mármore - Imagem ilustrativa",
    title: "Bancada em Mármore",
    description: "Bancada em mármore com acabamento polido",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Área gourmet com bancada - Imagem ilustrativa",
    title: "Área Gourmet",
    description: "Projeto completo com ilha e bancada gourmet",
  },
  {
    src: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
    alt: "Mesa em pedra natural - Imagem ilustrativa",
    title: "Mesa em Granito",
    description: "Mesa de jantar com tampo em granito",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    alt: "Projeto personalizado - Imagem ilustrativa",
    title: "Projeto Comercial",
    description: "Balcão em granito para estabelecimento comercial",
  },
  {
    src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
    alt: "Revestimento em pedra - Imagem ilustrativa",
    title: "Revestimento Externo",
    description: "Fachada revestida em pedra natural",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Lavatório em mármore - Imagem ilustrativa",
    title: "Lavatório em Mármore",
    description: "Lavatório esculpido em mármore travertino",
  },
];

export default function ProjetosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionWrapper>
              <p className="text-gold-500 font-serif text-lg mb-2">
                Galeria
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                Nossos Projetos
              </h1>
              <p className="text-marble-300 max-w-2xl mx-auto">
                Conheça alguns dos projetos que realizamos. Cada trabalho é
                executado com dedicação e atenção aos mínimos detalhes.
              </p>
              <p className="text-marble-500 text-xs mt-2">
                * Imagens ilustrativas
              </p>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-marble-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-marble-900 mb-4">
              Seu projeto pode ser o próximo
            </h2>
            <p className="text-marble-600 max-w-2xl mx-auto mb-8">
              Entre em contato e transforme suas ideias em realidade com a
              qualidade Bela Art Mármores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5544998078099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200"
              >
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
      </section>
    </>
  );
}
