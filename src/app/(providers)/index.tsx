import { FC, PropsWithChildren } from 'react';

import { StyledComponentsProvider } from './StyledComponentsProvider';
import { StyledComponentsRegistry } from './StyledComponentsRegistry';
import { AntdDesignProvider } from './AntdDesignProvider';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <StyledComponentsProvider>
        <AntdDesignProvider>{children}</AntdDesignProvider>
      </StyledComponentsProvider>
    </StyledComponentsRegistry>
  );
};
