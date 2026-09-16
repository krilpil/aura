'use client';

import { useEffect, useState } from 'react';

import { MenuDrawer } from '@/features/MenuDrawer';

import { SHeader, SHeaderPhone, SLogo, STools } from './header.styles';

const SCROLL_THRESHOLD = 12;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <SHeader $isScrolled={isScrolled}>
      <SLogo $isScrolled={isScrolled} href="/" aria-label="Аура — главная" />

      <STools>
        <SHeaderPhone />
        <MenuDrawer />
      </STools>
    </SHeader>
  );
};
