'use client';

import styled from 'styled-components';

export const SSportsScreen = styled.main`
  ${({ theme }) => theme.typography.body};
  padding-bottom: clamp(64px, 8vw, 112px);
  background: ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.text.primary};
`;

export const SContent = styled.div`
  width: min(1320px, calc(100% - clamp(32px, 10vw, 144px)));
  margin: 0 auto;
`;

export const SHero = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(500px, 68svh, 660px);
  padding: clamp(112px, 10vw, 148px) 0 clamp(42px, 5vw, 72px);
  isolation: isolate;
  background: ${({ theme }) => theme.color.surface.inverse};

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background: linear-gradient(
      180deg,
      rgba(8, 24, 15, 0.6) 0%,
      rgba(8, 24, 15, 0.08) 35%,
      rgba(8, 24, 15, 0.86) 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 520px;
    padding: 104px 0 38px;
  }
`;

export const SHeroImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    object-fit: cover;
    object-position: center;

    @media (max-width: 800px) {
      object-position: 35% center;
    }
  }
`;

export const SHeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(1320px, calc(100% - clamp(32px, 10vw, 144px)));
  margin: 0 auto;
  color: ${({ theme }) => theme.color.text.inverse};

  h1 {
    ${({ theme }) => theme.typography.hero};

    max-width: 18ch;
    margin: 0 0 clamp(24px, 3vw, 36px);
    overflow-wrap: anywhere;
  }

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 58ch;
    margin: 0;
  }
`;

export const SHeroNote = styled.small`
  ${({ theme }) => theme.typography.caption};
  display: block;
  margin-top: 24px;
`;

export const SBreadcrumbsSection = styled.div`
  padding: 28px 0 clamp(40px, 6vw, 72px);
`;

export const SSeoText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 75ch;
  margin: 0 0 clamp(40px, 5vw, 64px);
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SDirections = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px clamp(32px, 6vw, 80px);
  padding-top: clamp(28px, 4vw, 48px);
  border-top: 1px solid ${({ theme }) => theme.color.outline.base};

  h2 {
    ${({ theme }) => theme.typography.section};

    max-width: 18ch;
    margin: 0;
    color: ${({ theme }) => theme.color.brand.onPrimaryContainer};
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SDirectionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    ${({ theme }) => theme.typography.body};
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.outline.base};
  }

  li:first-child {
    padding-top: 0;
  }
`;

export const SNote = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 66ch;
  margin: clamp(36px, 5vw, 64px) 0 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SInteriors = styled.section`
  margin-top: clamp(56px, 8vw, 104px);

  h2 {
    ${({ theme }) => theme.typography.section};

    margin: 0 0 clamp(24px, 3vw, 40px);
    color: ${({ theme }) => theme.color.brand.onPrimaryContainer};
  }
`;

export const SInteriorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SInterior = styled.figure`
  min-width: 0;
  margin: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  }

  figcaption {
    ${({ theme }) => theme.typography.body};
    margin-top: 16px;
  }

  span {
    ${({ theme }) => theme.typography.caption};
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;
