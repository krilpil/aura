'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { MenuDrawer } from '@/features/MenuDrawer';

import {
  SHeader,
  SHeaderPhone,
  SLogo,
  SMenuDrawer,
  SNavigation,
  SNavigationLink,
  SEventsDropdown,
  SEventsLinks,
  STools,
} from './header.styles';

const SCROLL_THRESHOLD = 12;

const eventLinks = [
  { label: 'Корпоративные клиенты', href: '/events/corporate' },
  { label: 'Частные события', href: '/events/private' },
  { label: 'Свадьбы', href: '/events/weddings' },
  { label: 'Выпускные', href: '/events/graduation' },
  { label: 'Спортивный комплекс', href: '/events/sports' },
];

const navigation = [
  {
    label: 'Дом',
    href: '/house/istok',
  },
  {
    label: 'Активный отдых',
    href: '/activities',
  },
  {
    label: 'Ресторан',
    href: '/restaurant',
  },
  {
    label: 'Мероприятия',
    href: '#events',
  },
  {
    label: 'О нас',
    href: '/about',
  },
];

const EventsDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const linksId = useId();

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const dropdown = dropdownRef.current;

      if (dropdown && event.target instanceof Node && !dropdown.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, []);

  return (
    <SEventsDropdown
      ref={dropdownRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
          event.currentTarget.querySelector('button')?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={linksId}
        onClick={() => setIsOpen((open) => !open)}
      >
        Мероприятия
      </button>
      <SEventsLinks id={linksId} hidden={!isOpen}>
        {eventLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </SEventsLinks>
    </SEventsDropdown>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const hasSolidBackground = isScrolled || ['/about', '/about/'].includes(pathname);

  const renderNavigation = () =>
    navigation.map((item) =>
      item.href === '#events' ? (
        <EventsDropdown key={item.href} />
      ) : (
        <SNavigationLink key={item.href} href={item.href}>
          {item.label}
        </SNavigationLink>
      )
    );

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
    <SHeader $isScrolled={hasSolidBackground}>
      <SLogo $isScrolled={hasSolidBackground} href="/" aria-label="Аура — главная" />

      <SNavigation aria-label="Основная навигация">{renderNavigation()}</SNavigation>

      <STools>
        <SHeaderPhone />

        <SMenuDrawer>
          <MenuDrawer>{renderNavigation()}</MenuDrawer>
        </SMenuDrawer>
      </STools>
    </SHeader>
  );
};
