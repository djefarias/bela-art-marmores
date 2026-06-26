import type { Metadata } from 'next';
import OrcamentoClient from './OrcamentoClient';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | Bela Art Marmoraria',
  description:
    'Solicite seu orçamento gratuito para bancadas de granito, quartzo, pias, escadas e projetos personalizados em Paranavaí. Respondemos em até 24 horas.',
  openGraph: {
    title: 'Orçamento | Bela Art Marmoraria - Paranavaí',
    description: 'Solicite seu orçamento gratuito para projetos em granito, mármore e quartzo.',
  },
};

export default function OrcamentoPage() {
  return <OrcamentoClient />;
}
