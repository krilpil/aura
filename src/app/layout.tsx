import type { Metadata } from 'next';
import { Lora, Manrope } from 'next/font/google';

import { WithProviders } from '@/app/(providers)';

const siteTitle = 'Гостиничный комплекс AURA в Арзамасе';
const siteDescription =
  'Гостиничный комплекс AURA в Арзамасе: ресторан и банкетная площадка в лесу у реки ' +
  'для свадеб, юбилеев, корпоративов, выпускных и камерных праздников.';

const lora = Lora({
  weight: ['400'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-lora',
});

const manrope = Manrope({
  weight: ['400', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: 'AURA',
  authors: [{ name: 'Гостиничный комплекс AURA' }],
  creator: 'Гостиничный комплекс AURA',
  publisher: 'Гостиничный комплекс AURA',
  keywords: [
    'AURA Арзамас',
    'гостиничный комплекс Арзамас',
    'банкетный зал Арзамас',
    'свадьба Арзамас',
    'ресторан на природе Арзамас',
    'корпоратив Арзамас',
    'юбилей Арзамас',
    'выпускной Арзамас',
    'кейтеринг Арзамас',
    'банкетная площадка Нижегородская область',
  ],
  icons: {
    icon: [
      { url: '/media/logotype/favicon_light.ico', media: '(prefers-color-scheme: light)' },
      { url: '/media/logotype/favicon_dark.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: 'AURA',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'hospitality',
  other: {
    'geo.placename': 'Арзамас, Нижегородская область, Россия',
    'geo.region': 'RU-NIZ',
    'og:see_also': 'свадьбы, юбилеи, корпоративы, банкеты, кейтеринг',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${lora.variable} ${manrope.variable}`}>
      <body>
        <WithProviders>{children}</WithProviders>
      </body>
    </html>
  );
}
