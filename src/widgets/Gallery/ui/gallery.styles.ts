'use client';

import styled from 'styled-components';

export const SGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(12px, 1.6vw, 18px);
`;

export const SGalleryImage = styled.figure`
  position: relative;

  min-height: clamp(360px, 50vw, 620px);
  margin: 0;

  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};

  overflow: hidden;
  background: ${({ theme }) => theme.color.surface.containerHigh};

  img {
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    min-height: 420px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 300px;
  }
`;
