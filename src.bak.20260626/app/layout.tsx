import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bela Art Mármores | Marmoraria em Paranavaí",
    template: "%s | Bela Art Mármores",
  },
  description:
    "Marmoraria em Paranavaí há mais de 15 anos. Trabalhamos com bancadas de granito, quartzo, mármores, pias sob medida, revestimentos e projetos personalizados. Qualidade premium e instalação profissional.",
  keywords: [
    "marmoraria em Paranavaí",
    "granito em Paranavaí",
    "bancada de granito Paranavaí",
    "mármore Paranavaí",
    "bancada de quartzo",
    "pias sob medida",
    "revestimentos",
    "marmoraria",
  ],
  openGraph: {
    title: "Bela Art Mármores | Marmoraria em Paranavaí",
    description:
      "Transformando pedras em obras de arte. Marmoraria em Paranavaí há mais de 15 anos.",
    url: "https://belaartmarmores.com.br",
    siteName: "Bela Art Mármores",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://belaartmarmores.com.br"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bela Art Mármores",
  image: "https://belaartmarmores.com.br/og-image.jpg",
  url: "https://belaartmarmores.com.br",
  telephone: "+5544998078099",
  email: "contato@belaartmarmores.com.br",
  description:
    "Marmoraria especializada em bancadas de granito, quartzo, mármores, pias sob medida, revestimentos e projetos personalizados em Paranavaí e região.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Deputado Heitor de Alencar Furtado, 1280",
    addressLocality: "Paranavaí",
    addressRegion: "PR",
    postalCode: "87711-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.0788,
    longitude: -52.4655,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:30",
      closes: "12:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Paranavaí",
    },
    {
      "@type": "State",
      name: "Paraná",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/bela_art_marmoraria/",
    "https://wa.me/5544998078099",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-marble-100 text-marble-900 font-sans">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
