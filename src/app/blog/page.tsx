import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog | Bela Art Marmoraria',
  description:
    'Dicas e informações sobre mármores, granitos e quartzos. Cuidados com bancadas, tendências em pedras naturais e novidades da Bela Art Marmoraria em Paranavaí.',
  openGraph: {
    title: 'Blog da Bela Art Marmoraria | Dicas e Novidades',
    description: 'Artigos sobre cuidados, tendências e dicas para sua bancada de pedra natural.',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
