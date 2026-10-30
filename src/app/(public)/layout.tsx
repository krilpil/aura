import { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import { SContent, SLayout } from './layout.styles';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <SLayout>
      <Header />
      <SContent>{children}</SContent>
      <Footer />
    </SLayout>
  );
}
