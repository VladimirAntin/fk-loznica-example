import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import ScrollProgress from '@/components/ScrollProgress';
import '@i18n/localeConfig';
import {Nunito} from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin-ext'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const BASE_URL = 'https://fkjuniorloznica.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'FK Junior Loznica — Škola Fudbala za Decu | Loznica',
    template: '%s | FK Junior Loznica',
  },
  description:
    'FK Junior Loznica — škola fudbala za decu uzrasta 5–13 godina. Stručni treneri, četiri uzrasne grupe (U7, U9, U11, U13) i letnji fudbalski kamp.',
  keywords: [
    'škola fudbala Loznica',
    'fudbal za decu Loznica',
    'FK Junior Loznica',
    'fudbalska škola deca',
    'U7 U9 U11 U13 fudbal',
    'dečiji fudbal Loznica',
    'upis fudbal deca',
    'fudbalski trening deca',
    'letnji fudbalski kamp',
  ],
  authors: [{name: 'FK Junior Loznica', url: BASE_URL}],
  creator: 'FK Junior Loznica',
  publisher: 'FK Junior Loznica',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'FK Junior Loznica',
    title: 'FK Junior Loznica — Škola Fudbala za Decu',
    description: 'Škola fudbala za decu uzrasta 5–13 godina u Loznici — stručni treneri, 4 uzrasne grupe i letnji kamp.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'FK Junior Loznica — Škola Fudbala za Decu'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FK Junior Loznica — Škola Fudbala za Decu',
    description: 'Stručna škola fudbala za decu uzrasta 5–13 godina u Loznici.',
    images: ['/og-image.jpg'],
  },
  alternates: {canonical: BASE_URL},
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang={'sr'} className={'scroll-smooth'} suppressHydrationWarning>
      <head>
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsClub',
              name: 'FK Junior Loznica',
              url: BASE_URL,
              description: 'Škola fudbala za decu uzrasta 5–13 godina u Loznici.',
              email: 'info@fkjuniorloznica.rs',
              telephone: '+38115123456',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Loznica',
                addressCountry: 'RS',
              },
              sport: 'Football',
              areaServed: {'@type': 'City', name: 'Loznica'},
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Thursday'],
                  opens: '16:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday'],
                  opens: '09:00',
                  closes: '13:00',
                },
              ],
              sameAs: ['https://www.instagram.com/fkjuniorloznica'],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${nunito.variable} bg-white font-sans`}>
        <ScrollProgress />
        <Navigation />
        {/* offset left for sidebar (desktop) / bottom for tab bar (mobile) */}
        <div className={'flex min-h-screen flex-col pb-14 md:pb-0 md:pl-20'}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
