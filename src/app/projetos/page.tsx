import type { Metadata } from 'next';
import ProjetosClient from './ProjetosClient';

export const metadata: Metadata = {
  title: 'Projetos Realizados | Bela Art Marmoraria',
  description:
    'Galeria de projetos realizados pela Bela Art Marmoraria em Paranavaí. Bancadas, escadas, pias, áreas gourmet e muito mais em granito, mármore e quartzo.',
  openGraph: {
    title: 'Projetos de Marmoraria | Bela Art',
    description: 'Conheça nossos trabalhos em granito, mármore e quartzo em Paranavaí.',
  },
};

export default function ProjetosPage() {
  return <ProjetosClient />;
}
