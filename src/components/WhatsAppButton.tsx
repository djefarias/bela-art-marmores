'use client';

import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '5544999999999'; // placeholder
const WHATSAPP_MESSAGE = 'Olá! Gostaria de um orçamento para minha obra.';

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 pulse-whatsapp cursor-pointer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
