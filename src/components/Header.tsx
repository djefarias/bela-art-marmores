"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-marble-900/95 backdrop-blur-md border-b border-gold-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-serif font-bold text-gold-600 tracking-wide">
              Bela Art
            </span>
            <span className="hidden sm:inline text-xl lg:text-2xl font-serif font-light text-marble-300">
              Mármores
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-marble-300 hover:text-gold-500 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/orcamento"
              className="ml-4 px-6 py-2.5 bg-gold-700 hover:bg-gold-600 text-marble-900 font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-200"
            >
              Orçamento
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-marble-300 hover:text-gold-500 transition-colors"
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-marble-900/98 backdrop-blur-md border-t border-gold-900/20">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-marble-300 hover:text-gold-500 hover:bg-marble-800/50 rounded-sm transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/orcamento"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-3 py-3 bg-gold-700 hover:bg-gold-600 text-marble-900 font-semibold text-sm uppercase tracking-wider rounded-sm text-center transition-all duration-200"
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
