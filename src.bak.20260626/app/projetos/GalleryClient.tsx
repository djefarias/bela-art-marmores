"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setSelected(image)}
            className="group relative h-64 lg:h-72 overflow-hidden cursor-pointer text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-marble-900/0 group-hover:bg-marble-900/60 transition-all duration-300 flex items-end">
              <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-serif font-bold text-lg">
                  {image.title}
                </h3>
                <p className="text-marble-300 text-sm">{image.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white hover:text-gold-500 transition-colors z-10"
            aria-label="Fechar"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh] lg:h-[70vh]">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-serif font-bold text-xl">
                {selected.title}
              </h3>
              <p className="text-marble-400 text-sm mt-1">
                {selected.description}
              </p>
              <p className="text-marble-600 text-xs mt-2">
                * Imagem ilustrativa
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
