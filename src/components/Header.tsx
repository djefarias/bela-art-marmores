'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaWhatsapp, FaPhone } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-preto/95 backdrop-blur-xl border-b border-dourado/10 shadow-premium'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dourado to-dourado-claro flex items-center justify-center">
                <span className="text-preto font-bold text-lg">B</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-vermelho-intenso rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">✦</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-white text-lg font-bold tracking-wide block leading-tight group-hover:text-dourado transition-colors duration-300">
                Bela Art
              </span>
              <span className="text-[10px] text-dourado/70 tracking-[0.3em] uppercase font-medium">
                Marmoraria
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(item.href)
                    ? 'text-dourado bg-dourado/10'
                    : 'text-gray-300 hover:text-dourado hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-dourado to-dourado-claro rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Phone (desktop) */}
            <a
              href="tel:44999999999"
              className="hidden md:flex items-center gap-2 text-xs text-gray-400 hover:text-dourado transition-colors duration-300"
            >
              <FaPhone size={12} />
              <span>(44) 99999-9999</span>
            </a>

            {/* Orçamento Button */}
            <Link
              href="/orcamento"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white btn-red rounded-lg"
            >
              <FaWhatsapp size={16} />
              Orçamento
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-dourado transition-colors duration-300 cursor-pointer"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-preto/98 backdrop-blur-xl z-40 transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col items-center justify-start pt-8 gap-2 px-6">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full text-center py-4 text-lg font-medium transition-all duration-300 rounded-xl ${
                isActive(item.href)
                  ? 'text-dourado bg-dourado/10 border border-dourado/20'
                  : 'text-gray-300 hover:text-dourado hover:bg-white/5'
              }`}
              style={{
                transitionDelay: `${i * 50}ms`,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/orcamento"
            className="w-full mt-4 text-center py-4 text-lg font-bold text-white btn-red rounded-xl"
            style={{
              transitionDelay: '350ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <FaWhatsapp className="inline mr-2" size={18} />
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
