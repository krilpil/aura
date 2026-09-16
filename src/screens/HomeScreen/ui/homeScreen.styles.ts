'use client';

import styled from 'styled-components';

export const SHomeScreen = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: calc(100svh + 1px);
  }
`;
