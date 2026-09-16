import { useMediaQuery } from 'react-responsive';

import { breakpoints } from '@/entities/theme';

export const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.maxMobile}px)` });
  const isTablets = useMediaQuery({ query: `(max-width: ${breakpoints.maxTablets}px)` });
  const isLaptops = useMediaQuery({ query: `(max-width: ${breakpoints.maxLaptops}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.maxDesktops}px)` });

  return { isMobile, isTablets, isLaptops, isDesktop };
};
