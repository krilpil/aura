'use client';

import { useEffect, useState } from 'react';

import { MenuDrawer } from '@/features/MenuDrawer';

import {
  SHeader,
  SHeaderPhone,
  SLogo,
  SMenuDrawer,
  SNavigation,
  SNavigationLink,
  STools,
} from './header.styles';

const SCROLL_THRESHOLD = 12;

const navigation = [
  {
    label: 'Проживание',
    href: '#accommodation',
  },
  {
    label: 'Услуги',
    href: '#services',
  },
  {
    label: 'Ресторан',
    href: '#restaurant',
  },
  {
    label: 'Мероприятия',
    href: '#events',
  },
  {
    label: 'Акции',
    href: '#offers',
  },
  {
    label: 'О компании',
    href: '#about',
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    updateHeader();

    window.addEventListener('scroll', updateHeader, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateHeader);
    };
  }, []);

  return (
    <SHeader $isScrolled={isScrolled}>
      <SLogo $isScrolled={isScrolled} href="/" aria-label="Аура — главная" />

      <SNavigation aria-label="Основная навигация">
        {navigation.map((item) => (
          <SNavigationLink key={item.href} href={item.href}>
            {item.label}
          </SNavigationLink>
        ))}
      </SNavigation>

      <STools>
        <SHeaderPhone />

        <SMenuDrawer>
          <MenuDrawer />
        </SMenuDrawer>
      </STools>
    </SHeader>
  );
};
