'use client';

import { useState, type ReactNode } from 'react';

import { SMenuButton, SMenuDrawer, SDrawerNavigation } from './menuDrawer.styles';

export const MenuDrawer = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <>
      <SMenuDrawer open={showMenu} onClose={handleCloseMenu}>
        <SDrawerNavigation
          aria-label="Основная навигация"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest('a')) {
              handleCloseMenu();
            }
          }}
        >
          {children}
        </SDrawerNavigation>
      </SMenuDrawer>

      <SMenuButton
        type={'text'}
        size={'large'}
        onClick={handleOpenMenu}
        aria-label="Открыть меню"
        aria-expanded={showMenu}
      />
    </>
  );
};
