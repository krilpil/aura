import { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
