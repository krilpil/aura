import { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
