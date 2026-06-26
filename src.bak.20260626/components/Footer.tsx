import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-marble-900 border-t border-gold-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-serif font-bold text-gold-600 tracking-wide">
                Bela Art
              </span>
              <span className="text-2xl font-serif font-light text-marble-300">
                Mármores
              </span>
            </Link>
            <p className="text-marble-400 text-sm leading-relaxed">
              Transformando pedras em obras de arte há mais de 15 anos.
              Excelência em marmoraria em Paranavaí e região.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-gold-600 font-serif text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/servicos", label: "Serviços" },
                { href: "/projetos", label: "Projetos" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-marble-400 hover:text-gold-500 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-gold-600 font-serif text-lg mb-4">
              Horários
            </h3>
            <ul className="space-y-2.5 text-sm text-marble-400">
              <li className="flex justify-between">
                <span>Seg - Sex</span>
                <span className="text-marble-300">07:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="text-marble-300">07:30 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-marble-500">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-gold-600 font-serif text-lg mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-marble-400">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-gold-600 shrink-0"
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
                <span>
                  Av. Dep. Heitor de Alencar Furtado, 1280
                  <br />
                  Jardim São Jorge - Paranavaí/PR
                  <br />
                  CEP 87711-000
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gold-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="https://wa.me/5544998078099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  (44) 99807-8099
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gold-600 shrink-0"
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
                <a
                  href="https://www.instagram.com/bela_art_marmoraria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-500 transition-colors"
                >
                  @bela_art_marmoraria
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gold-900/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-marble-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bela Art Mármores. Todos os
            direitos reservados.
          </p>
          <p className="text-marble-500 text-xs">
            Imagens ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  );
}
