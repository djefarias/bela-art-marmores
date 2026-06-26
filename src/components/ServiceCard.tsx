'use client';

import { FaTools } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export default function ServiceCard({ title, description, image, index = 0 }: ServiceCardProps) {
  const handleWhatsApp = () => {
    const url = `https://wa.me/5544999999999?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title}.`)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-grafite border border-white/5 transition-all duration-500 hover:shadow-card hover:border-dourado/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite via-grafite/40 to-transparent" />

        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-preto/60 border border-dourado/30 text-dourado">
          <FaTools size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl text-white font-semibold mb-3 group-hover:text-dourado transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {description}
        </p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 text-sm font-medium text-dourado hover:text-dourado-claro transition-colors duration-300 group/btn"
        >
          <span>Solicitar Orçamento</span>
          <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </button>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-dourado/20 pointer-events-none" />
    </div>
  );
}
