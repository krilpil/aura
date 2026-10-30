'use client';

import Link from 'next/link';
import styled from 'styled-components';

const contentWidth = 'min(1320px, calc(100% - clamp(32px, 10vw, 144px)))';

export const SActivitiesScreen = styled.main`
  ${({ theme }) => theme.typography.body};
  overflow: hidden;
  color: ${({ theme }) => theme.color.text.primary};
  background: ${({ theme }) => theme.color.surface.default};
`;

export const SHero = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(500px, 68svh, 660px);
  padding: clamp(112px, 10vw, 148px) clamp(20px, 5vw, 72px) clamp(42px, 5vw, 72px);
  isolation: isolate;
  background: #183326;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background: linear-gradient(
      0deg,
      rgba(8, 25, 16, 0.88) 0%,
      rgba(8, 25, 16, 0.24) 54%,
      rgba(8, 25, 16, 0.14) 100%
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 520px;
    padding: 104px clamp(20px, 5vw, 72px) 38px;
  }
`;

export const SHeroImage = styled.div`
  position: absolute;
  inset: 0;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const SHeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: min(1320px, 100%);
  margin: 0 auto;
  color: #fff;
`;

export const SHeroTitle = styled.h1`
  ${({ theme }) => theme.typography.hero};
  margin: 0;

  text-wrap: balance;
`;

export const SHeroLead = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 640px;
  margin: clamp(20px, 3vw, 34px) 0 0;
  color: rgba(255, 255, 255, 0.92);
`;

export const SIntro = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  padding: 30px 0 clamp(72px, 8vw, 120px);
`;

export const SIntroText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 900px;
  margin: clamp(48px, 6vw, 82px) 0 clamp(34px, 4vw, 52px);

  color: #284131;
  text-wrap: pretty;
`;

export const SJumpLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SJumpLink = styled(Link)`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 10px 17px;
  border: 1px solid ${({ theme }) => theme.color.outline.strong};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: #254433;
  text-decoration: none;
  transition:
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    border-color: #254433;
    background: #e4eee8;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 3px;
  }
`;

export const SActivitiesList = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  padding-bottom: clamp(86px, 10vw, 150px);
`;

export const SActivity = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: clamp(36px, 7vw, 110px);
  padding: clamp(42px, 5vw, 78px) 0;
  border-top: 1px solid ${({ theme }) => theme.color.outline.base};
  scroll-margin-top: calc(90px + env(safe-area-inset-top, 0px));

  &:nth-child(even) > div:first-child {
    order: 2;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 48px 0 64px;

    &:nth-child(even) > div:first-child {
      order: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    scroll-margin-top: calc(82px + env(safe-area-inset-top, 0px));
  }
`;

export const SActivityImage = styled.div`
  position: relative;
  min-height: clamp(340px, 41vw, 560px);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: #d8ddd4;

  img {
    object-fit: cover;
  }

  @media (max-width: 800px) {
    min-height: 0;
    aspect-ratio: 4 / 3;
  }
`;

export const SActivityBody = styled.div`
  max-width: 560px;
`;

export const SActivityTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0 0 clamp(20px, 2.4vw, 34px);

  text-wrap: balance;
`;

export const SActivityDescription = styled.p`
  ${({ theme }) => theme.typography.body};
  margin: 0;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SActivityAudience = styled.p`
  ${({ theme }) => theme.typography.body};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: clamp(26px, 3vw, 42px) 0 0;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.color.outline.base};
`;

export const SActivityAudienceLabel = styled.span`
  ${({ theme }) => theme.typography.meta};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SActivityLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  margin-top: clamp(26px, 3vw, 40px);
  color: ${({ theme }) => theme.color.brand.primary};
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 4px;
  }
`;

export const SClosing = styled.section`
  --request-primary-bg: #f8f6f0;
  --request-primary-color: #1f5a3d;
  --request-primary-hover: #e4eee8;
  --request-primary-pressed: #d5dad3;
  --request-color: #f8f6f0;
  --request-border: rgba(255, 255, 255, 0.45);
  --request-hover-bg: rgba(255, 255, 255, 0.1);
  --request-focus: #f8f6f0;

  padding: clamp(80px, 9vw, 140px) 0;
  background: #183326;
  color: #fff;
`;

export const SClosingInner = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
`;

export const SClosingTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  max-width: 760px;
  margin: 0;

  text-wrap: balance;
`;

export const SClosingText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 620px;
  margin: 26px 0 0;
  color: rgba(255, 255, 255, 0.8);
`;

export const SClosingLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 14px 25px;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: #f4f0e7;
  color: #183326;
  text-decoration: none;
  transition: background 180ms ease;

  &:hover {
    background: #fff;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`;

export const SRequestActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  min-width: 0;
  margin-top: 24px;
`;
