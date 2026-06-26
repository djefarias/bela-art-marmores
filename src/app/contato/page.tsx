import type { Metadata } from 'next';
import ContatoClient from './ContatoClient';

export const metadata: Metadata = {
  title: 'Contato | Bela Art Marmoraria',
  description:
    'Entre em contato com a Bela Art Marmoraria em Paranavaí. WhatsApp, telefone, email e endereço. Solicite seu orçamento gratuito.',
  openGraph: {
    title: 'Contato | Bela Art Marmoraria - Paranavaí',
    description: 'Fale conosco pelo WhatsApp, telefone ou visite nossa loja em Paranavaí.',
  },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
