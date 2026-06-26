'use client';

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaLongArrowAltRight } from 'react-icons/fa';

const WHATSAPP_NUMBER = '5544999999999';
const INSTAGRAM_URL = 'https://instagram.com/belaartmarmoraria';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const FOOTER_LINKS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Projetos', href: '/projetos' },
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Bancadas de Granito', href: '/servicos#bancadas-granito' },
      { label: 'Bancadas de Quartzo', href: '/servicos#bancadas-quartzo' },
      { label: 'Pias e Lavatórios', href: '/servicos#pias-lavatorios' },
      { label: 'Escadas', href: '/servicos#escadas' },
      { label: 'Projetos Personalizados', href: '/servicos#projetos-personalizados' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-preto border-t border-dourado/10">
      {/* Gold top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-dourado to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dourado to-dourado-claro flex items-center justify-center flex-shrink-0">
                <span className="text-preto font-bold text-xl">B</span>
              </div>
              <div>
                <span className="font-heading text-white text-xl font-bold tracking-wide block leading-tight group-hover:text-dourado transition-colors duration-300">
                  Bela Art
                </span>
                <span className="text-[10px] text-dourado/70 tracking-[0.3em] uppercase font-medium">
                  Marmoraria
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformando pedras em obras de arte há mais de 15 anos em Paranavaí e região. 
              Excelência em mármores, granitos e quartzos para sua obra.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600/20 text-green-400 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 text-pink-400 flex items-center justify-center hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-white text-sm font-semibold uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-dourado transition-colors duration-300 flex items-center gap-2 group/link"
                    >
                      <FaLongArrowAltRight
                        size={10}
                        className="text-dourado/0 group-hover/link:text-dourado transition-all duration-300"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-white text-sm font-semibold uppercase tracking-wider mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-dourado mt-0.5 flex-shrink-0" size={14} />
                <span className="text-gray-400 text-sm">
                  Rua Exemplo, 123 — Centro<br />
                  Paranavaí, PR — 87700-000
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                >
                  <FaWhatsapp className="flex-shrink-0" size={14} />
                  (44) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="tel:44999999999"
                  className="flex items-center gap-3 text-gray-400 hover:text-dourado transition-colors duration-300 text-sm"
                >
                  <FaPhone className="flex-shrink-0" size={14} />
                  (44) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@belaartmarmoraria.com.br"
                  className="flex items-center gap-3 text-gray-400 hover:text-dourado transition-colors duration-300 text-sm"
                >
                  <FaEnvelope className="flex-shrink-0" size={14} />
                  contato@belaartmarmoraria.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-dourado mt-0.5 flex-shrink-0" size={14} />
                <div className="text-gray-400 text-sm">
                  <span className="block">Seg–Sex: 08:00–18:00</span>
                  <span className="block">Sáb: 08:00–12:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bela Art Marmoraria. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-xs">
            <button
              onClick={() => {
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento.')}`;
                window.open(url, '_blank');
              }}
              className="hover:text-dourado transition-colors duration-300 cursor-pointer"
            >
              Solicitar Orçamento
            </button>
            <span className="text-gray-600">|</span>
            <span>
              Feito com dedicação em Paranavaí
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
