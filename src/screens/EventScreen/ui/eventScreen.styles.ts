'use client';

import styled from 'styled-components';

const contentWidth = 'min(1320px, calc(100% - clamp(32px, 10vw, 144px)))';

export const SEventScreen = styled.main`
  ${({ theme }) => theme.typography.body};
  overflow: hidden;

  section[id] {
    scroll-margin-top: calc(100px + env(safe-area-inset-top, 0px));
  }
  color: ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.surface.default};
`;

export const SHero = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(500px, 68svh, 660px);
  padding: clamp(112px, 10vw, 148px) clamp(20px, 5vw, 72px) clamp(42px, 5vw, 72px);
  overflow: hidden;
  isolation: isolate;
  background: #1a271d;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background:
      linear-gradient(
        90deg,
        rgba(10, 28, 17, 0.88) 0%,
        rgba(12, 29, 20, 0.58) 47%,
        rgba(12, 29, 20, 0.16) 100%
      ),
      linear-gradient(0deg, rgba(8, 20, 13, 0.55), transparent 54%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 520px;
    padding: 104px clamp(20px, 5vw, 72px) 38px;

    &::after {
      background: linear-gradient(0deg, rgba(8, 24, 15, 0.9), rgba(8, 24, 15, 0.35) 78%);
    }
  }
`;

export const SHeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center 42%;
  }
`;

export const SHeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.6vw, 22px);
  width: min(1320px, 100%);
  margin: 0 auto;
  color: ${({ theme }) => theme.color.text.inverse};
`;

export const SHeroTitle = styled.h1`
  ${({ theme }) => theme.typography.hero};
  margin: 0;

  text-wrap: balance;
`;

export const SHeroLead = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 680px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  text-wrap: pretty;
`;

export const SHeroLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 14px 25px;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: #f4f0e7;
  color: #183326;
  text-decoration: none;
  transition:
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    background: #fff;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }
`;

export const SIntro = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  padding: 30px 0 clamp(78px, 9vw, 130px);
`;

export const SIntroText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 870px;
  margin: clamp(52px, 7vw, 92px) 0 0;

  color: #284131;
  text-wrap: pretty;
`;

export const SSection = styled.section`
  width: ${contentWidth};
  margin: 0 auto;
  padding: 0 0 clamp(90px, 10vw, 150px);
`;

export const SSectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
  align-items: end;
  gap: 32px;
  margin-bottom: 40px;

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 420px;
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 28px;
  }
`;

export const SSectionTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  text-wrap: balance;
`;

export const SFormatList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.color.outline.strong};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SFormat = styled.div`
  display: grid;
  grid-template-columns: minmax(170px, 0.8fr) minmax(0, 1.2fr);
  gap: 20px;
  min-height: 160px;
  padding: 32px 28px 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline.strong};

  &:nth-child(odd) {
    margin-right: 26px;
  }

  &:nth-child(even) {
    margin-left: 26px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    align-content: start;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 0;
    padding: 24px 0;

    &:nth-child(n) {
      margin: 0;
    }
  }
`;

export const SFormatName = styled.h3`
  ${({ theme }) => theme.typography.card};
  margin: 0;
`;

export const SFormatText = styled.p`
  ${({ theme }) => theme.typography.body};
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SHalls = styled.section`
  padding: clamp(76px, 8vw, 120px) 0 clamp(90px, 10vw, 150px);

  > ${SSectionHeader}, > div:last-child {
    width: ${contentWidth};
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SHallsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 28px);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SHall = styled.article`
  &[data-pavilion='true'] {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
  }

  @media (max-width: 800px) {
    &[data-pavilion='true'] {
      grid-template-columns: 1fr;
    }
  }

  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: ${({ theme }) => theme.color.surface.bright};
`;

export const SHallImage = styled.div`
  position: relative;
  height: clamp(260px, 31vw, 430px);

  img {
    object-fit: cover;
  }
`;

export const SHallBody = styled.div`
  padding: clamp(24px, 3vw, 40px);
`;

export const SHallMeta = styled.p`
  ${({ theme }) => theme.typography.meta};
  margin: 0 0 18px;
  color: ${({ theme }) => theme.color.brand.primary};
`;

export const SHallName = styled.h3`
  ${({ theme }) => theme.typography.card};
  margin: 0 0 16px;
`;

export const SHallText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 520px;
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SEquipment = styled.section`
  padding: clamp(88px, 10vw, 150px) 0;
  background: #183326;
  color: #fff;
`;

export const SEquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(45px, 8vw, 150px);
  width: ${contentWidth};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SEquipmentCopy = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 490px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.78);
`;

export const SEquipmentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 28px;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.35);

  li {
    ${({ theme }) => theme.typography.card};
    min-width: 0;
    overflow-wrap: anywhere;
    padding: 19px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  }
`;

export const SEquipmentNote = styled.p`
  ${({ theme }) => theme.typography.caption};
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const SService = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: clamp(40px, 7vw, 120px);
  width: ${contentWidth};
  margin: 0 auto;
  padding: clamp(90px, 10vw, 150px) 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const SServiceImage = styled.div`
  position: relative;
  height: clamp(350px, 41vw, 590px);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};

  img {
    object-fit: cover;
  }
`;

export const SServiceText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 520px;
  margin: 24px 0 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SHallLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.brand.primary};
  text-underline-offset: 5px;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`;
