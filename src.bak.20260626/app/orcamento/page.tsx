import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import BudgetForm from "./BudgetForm";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Solicite seu orçamento personalizado na Bela Art Mármores. Bancadas de granito, quartzo, mármore, pias, revestimentos e projetos sob medida.",
  openGraph: {
    title: "Orçamento | Bela Art Mármores",
    description:
      "Solicite seu orçamento sem compromisso. Respondemos rapidamente.",
  },
};

export default function OrcamentoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <p className="text-gold-500 font-serif text-lg mb-2">Orçamento</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Solicite seu Orçamento
            </h1>
            <p className="text-marble-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo com os detalhes do seu projeto e
              receba um orçamento personalizado. Respondemos em até 24 horas.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <BudgetForm />
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
