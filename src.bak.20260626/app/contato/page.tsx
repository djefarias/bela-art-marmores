import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Bela Art Mármores. Estamos localizados em Paranavaí/PR. WhatsApp, telefone, Instagram e formulário de contato.",
  openGraph: {
    title: "Contato | Bela Art Mármores",
    description:
      "Fale conosco. Solicite um orçamento ou tire suas dúvidas.",
  },
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-marble-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionWrapper>
            <p className="text-gold-500 font-serif text-lg mb-2">Contato</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Fale Conosco
            </h1>
            <p className="text-marble-300 max-w-2xl mx-auto">
              Estamos prontos para atender você. Tire suas dúvidas, solicite um
              orçamento ou agende uma visita técnica.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Contato Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionWrapper>
                <h2 className="text-2xl font-serif font-bold text-marble-900 mb-8">
                  Informações
                </h2>
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-marble-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-gold-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-marble-900 mb-1">
                        Endereço
                      </h3>
                      <p className="text-sm text-marble-600">
                        Av. Deputado Heitor de Alencar Furtado, 1280
                        <br />
                        Jardim São Jorge - Paranavaí/PR
                        <br />
                        CEP 87711-000
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-marble-900 mb-1">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/5544998078099"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-marble-600 hover:text-green-600 transition-colors"
                      >
                        (44) 99807-8099
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-pink-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          strokeWidth={2}
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                        />
                        <line
                          x1="17.5"
                          x2="17.51"
                          y1="6.5"
                          y2="6.5"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-marble-900 mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://www.instagram.com/bela_art_marmoraria/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-marble-600 hover:text-pink-600 transition-colors"
                      >
                        @bela_art_marmoraria
                      </a>
                    </div>
                  </div>

                  {/* Horários */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-marble-100 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-gold-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-marble-900 mb-1">
                        Horários
                      </h3>
                      <p className="text-sm text-marble-600">
                        Seg a Sex: 07:30 - 18:00
                        <br />
                        Sábado: 07:30 - 12:00
                      </p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionWrapper>
                <h2 className="text-2xl font-serif font-bold text-marble-900 mb-8">
                  Envie sua Mensagem
                </h2>
                <ContactForm />
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-80 lg:h-96 bg-marble-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.7754854239713!2d-52.4655!3d-23.0788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec5f175c4a2c89%3A0x8f8b6c5e1a2b3c4d!2sAv.%20Dep.%20Heitor%20de%20Alencar%20Furtado%2C%201280%20-%20Jardim%20S%C3%A3o%20Jorge%2C%20Paranava%C3%AD%20-%20PR%2C%2087711-000!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Endereço Bela Art Mármores"
        />
      </section>
    </>
  );
}
