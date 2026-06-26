import type { Metadata } from 'next';
import SobreClient from './SobreClient';

export const metadata: Metadata = {
  title: 'Sobre Nós | Bela Art Marmoraria',
  description:
    'Conheça a história da Bela Art Marmoraria em Paranavaí. Há mais de 15 anos transformando pedras em obras de arte com excelência e dedicação.',
  openGraph: {
    title: 'Sobre a Bela Art Marmoraria | Paranavaí',
    description: 'História, missão e valores da marmoraria premium em Paranavaí.',
  },
};

export default function SobrePage() {
  return <SobreClient />;
}
