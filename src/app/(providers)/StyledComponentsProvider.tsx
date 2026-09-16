'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '@/entities/theme';

export const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
