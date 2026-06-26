import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://belaartmarmoraria.com.br'),
  title: {
    default: 'Bela Art Marmoraria | Mármores, Granitos e Quartzos em Paranavaí',
    template: '%s | Bela Art Marmoraria',
  },
  description:
    'Bela Art Marmoraria em Paranavaí/PR — bancadas de granito, quartzo, pias, escadas e projetos personalizados. Excelência em mármores e granitos com acabamento premium.',
  keywords: [
    'marmoraria em Paranavaí',
    'granito em Paranavaí',
    'bancada de granito Paranavaí',
    'mármore Paranavaí',
    'quartzo Paranavaí',
    'bancada de cozinha',
    'escadas de granito',
    'marmoraria Paranavaí PR',
    'Bela Art Marmoraria',
  ],
  openGraph: {
    title: 'Bela Art Marmoraria — Arte em Pedra desde Paranavaí',
    description:
      'Transformando pedras em obras de arte. Bancadas, pias, escadas e projetos personalizados em mármore, granito e quartzo.',
    url: 'https://belaartmarmoraria.com.br',
    siteName: 'Bela Art Marmoraria',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Bela Art Marmoraria — Mármores e Granitos em Paranavaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bela Art Marmoraria | Paranavaí',
    description: 'Marmoraria premium em Paranavaí — bancadas, escadas, pias e projetos personalizados.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://belaartmarmoraria.com.br',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bela Art Marmoraria',
  description:
    'Marmoraria especializada em bancadas de granito, quartzo, pias, escadas e projetos personalizados em Paranavaí/PR.',
  url: 'https://belaartmarmoraria.com.br',
  telephone: '+5544998078099',
  email: 'contato@belaartmarmoraria.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Deputado Heitor de Alencar Furtado, 1280',
    addressLocality: 'Paranavaí',
    addressRegion: 'PR',
    postalCode: '87711-000',
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  areaServed: {
    '@type': 'City',
    name: 'Paranavaí',
  },
  priceRange: '$$',
  sameAs: ['https://instagram.com/belaartmarmoraria'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-preto font-sans text-white antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
