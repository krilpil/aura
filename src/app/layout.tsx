import type { Metadata } from 'next';

import { WithProviders } from '@/app/(providers)';
import { siteOrigin } from '@/shared/seo/config';
import './fonts.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: 'AURA',
  authors: [{ name: 'tg: krilpil' }],
  creator: 'AURA',
  publisher: 'AURA',
  icons: {
    icon: [
      { url: '/media/logotype/favicon_light.ico', media: '(prefers-color-scheme: light)' },
      { url: '/media/logotype/favicon_dark.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
  },
  category: 'hospitality',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru">
      <body>
        <WithProviders>{children}</WithProviders>
      </body>
    </html>
  );
}
