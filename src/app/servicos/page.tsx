import type { Metadata } from 'next';
import ServicosClient from './ServicosClient';

export const metadata: Metadata = {
  title: 'Serviços de Marmoraria em Paranavaí | Bela Art',
  description:
    'Bancadas de granito, quartzo, pias, escadas, áreas gourmet e projetos personalizados. Serviços premium de marmoraria em Paranavaí e região.',
  openGraph: {
    title: 'Serviços de Marmoraria | Bela Art',
    description:
      'Bancadas de granito, quartzo, pias, escadas, áreas gourmet e projetos personalizados em Paranavaí.',
  },
};

export default function ServicosPage() {
  return <ServicosClient />;
}
