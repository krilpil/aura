'use client';

import { useState } from 'react';

import { SMenuButton, SMenuDrawer } from './menuDrawer.styles';

export const MenuDrawer = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <>
      <SMenuDrawer open={showMenu} onClose={handleCloseMenu}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
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
