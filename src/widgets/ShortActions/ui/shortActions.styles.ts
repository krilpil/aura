'use client';

import styled from 'styled-components';

export const SSectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.72fr);
  gap: clamp(24px, 5vw, 96px);
  align-items: end;
  max-width: 1320px;
  margin: 0 auto clamp(28px, 4vw, 56px);
`;

export const STitle = styled.h2`
  max-width: 760px;
  margin: 0;
  ${({ theme }) => theme.font.headline.extraLarge};
  font-size: clamp(34px, 4.6vw, 68px);
  line-height: 1.04;
  letter-spacing: 0;
  color: #1d2b22;
  text-wrap: balance;
`;

export const SDescription = styled.p`
  max-width: 520px;
  margin: 0;
  ${({ theme }) => theme.font.body.large};
  font-size: clamp(15px, 1.35vw, 18px);
  line-height: 1.58;
  color: ${({ theme }) => theme.color.text.secondary};
  text-wrap: pretty;
`;

export const SActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    'a a b'
    'c d d'
    'e e f';
  gap: clamp(12px, 1.4vw, 20px);
  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'a a'
      'b c'
      'd d'
      'e e'
      'f f';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    grid-template-areas: none;
    gap: 12px;
  }
`;

export const SActionImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
    transform: scale(1.01);
    filter: saturate(0.96) contrast(1.04) brightness(0.9);
    transition:
      transform var(--action-hover-duration) var(--action-hover-easing),
      filter var(--action-hover-duration) var(--action-hover-easing);
    will-change: transform;
  }
`;

export const SMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
  transform: translateY(0);
  transition:
    opacity var(--action-hover-duration) var(--action-hover-easing),
    transform var(--action-hover-duration) var(--action-hover-easing);
`;

export const SMetaItem = styled.span`
  padding: 7px 11px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.1);
  ${({ theme }) => theme.font.label.small};
  color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  transition:
    background-color var(--action-hover-duration) var(--action-hover-easing),
    border-color var(--action-hover-duration) var(--action-hover-easing),
    color var(--action-hover-duration) var(--action-hover-easing);
`;

export const SActionContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  width: min(100%, 460px);
  min-height: inherit;
  padding: clamp(22px, 3vw, 40px);
  color: ${({ theme }) => theme.color.text.inverse};
  transform: translateY(0);
  transition: transform var(--action-hover-duration) var(--action-hover-easing);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 22px;
  }
`;

export const SActionTitle = styled.h3`
  margin: 0 0 10px;
  ${({ theme }) => theme.font.headline.large};
  font-size: clamp(24px, 2.4vw, 36px);
  line-height: 1.08;
  letter-spacing: 0;
  text-wrap: balance;
  text-shadow: 0 14px 36px rgba(0, 0, 0, 0.32);
  transition:
    color var(--action-hover-duration) var(--action-hover-easing),
    text-shadow var(--action-hover-duration) var(--action-hover-easing);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    font-size: 27px;
  }
`;

export const SActionText = styled.p`
  max-width: 430px;
  margin: 0;
  ${({ theme }) => theme.font.body.medium};
  font-size: 15px;
  line-height: 1.52;
  color: rgba(255, 255, 255, 0.82);
  text-wrap: pretty;
  transition: color var(--action-hover-duration) var(--action-hover-easing);
`;

export const SActionCard = styled.article<{ $featured?: boolean }>`
  position: relative;
  display: flex;
  min-height: ${({ $featured }) => ($featured ? '540px' : '410px')};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  overflow: hidden;
  isolation: isolate;
  background: #18241d;
  box-shadow: 0 18px 48px rgba(35, 43, 35, 0.14);
  transition: box-shadow var(--action-hover-duration) var(--action-hover-easing);

  &:nth-child(1) {
    grid-area: a;
  }

  &:nth-child(2) {
    grid-area: b;
  }

  &:nth-child(3) {
    grid-area: c;
  }

  &:nth-child(4) {
    grid-area: d;
  }

  &:nth-child(5) {
    grid-area: e;
  }

  &:nth-child(6) {
    grid-area: f;
  }

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background: ${({ $featured }) =>
      $featured
        ? `linear-gradient(
            90deg,
            rgba(12, 26, 18, 0.9) 0%,
            rgba(20, 38, 29, 0.58) 46%,
            rgba(20, 38, 29, 0.1) 100%
          ),
          linear-gradient(180deg, rgba(8, 18, 12, 0.02) 0%, rgba(8, 18, 12, 0.76) 100%)`
        : `linear-gradient(
            180deg,
            rgba(13, 25, 18, 0.06) 0%,
            rgba(13, 25, 18, 0.2) 38%,
            rgba(13, 25, 18, 0.88) 100%
          ),
          linear-gradient(90deg, rgba(24, 36, 29, 0.5) 0%, rgba(24, 36, 29, 0.02) 62%)`};
  }

  &::before {
    position: absolute;
    inset: 0;
    z-index: 2;
    content: '';
    background: rgba(6, 18, 12, 0.22);
    opacity: 0;
    transition: opacity var(--action-hover-duration) var(--action-hover-easing);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 26px 64px rgba(25, 37, 29, 0.22);
    }

    &:hover ${SActionImage} img {
      transform: scale(1.045);
      filter: saturate(1) contrast(1.02) brightness(0.84);
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover ${SMetaItem} {
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.14);
      color: rgba(255, 255, 255, 0.94);
    }

    &:hover ${SActionContent} {
      transform: translateY(-10px);
    }

    &:hover ${SActionTitle} {
      color: #ffffff;
      text-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
    }

    &:hover ${SActionText} {
      color: rgba(255, 255, 255, 0.88);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    @media (hover: hover) and (pointer: fine) {
      &:hover ${SActionImage} img {
        transform: scale(1.015);
      }

      &:hover ${SActionContent} {
        transform: translateY(-4px);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-column: auto;
    grid-area: auto;
    min-height: ${({ $featured }) => ($featured ? '430px' : '360px')};

    &::after {
      background: ${({ $featured }) =>
        $featured
          ? `linear-gradient(
              180deg,
              rgba(13, 25, 18, 0.08) 0%,
              rgba(13, 25, 18, 0.28) 34%,
              rgba(13, 25, 18, 0.9) 100%
            ),
            linear-gradient(90deg, rgba(24, 36, 29, 0.46), rgba(24, 36, 29, 0.04))`
          : `linear-gradient(
              180deg,
              rgba(13, 25, 18, 0.06) 0%,
              rgba(13, 25, 18, 0.2) 38%,
              rgba(13, 25, 18, 0.88) 100%
            ),
            linear-gradient(90deg, rgba(24, 36, 29, 0.5) 0%, rgba(24, 36, 29, 0.02) 62%)`};
    }
  }
`;

export const SShortActions = styled.section`
  --action-hover-duration: 260ms;
  --action-hover-easing: cubic-bezier(0.22, 1, 0.36, 1);

  padding: clamp(72px, 8vw, 124px) clamp(16px, 5vw, 72px);
  background:
    linear-gradient(180deg, #f7f6f1 0%, #eef0e8 100%), ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.text.primary};

  @media (prefers-reduced-motion: reduce) {
    --action-hover-duration: 140ms;
    --action-hover-easing: ease-out;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    ${SSectionHeader} {
      grid-template-columns: 1fr;
      gap: 18px;
      align-items: start;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 56px 16px;

    ${SSectionHeader} {
      margin-bottom: 24px;
    }

    ${STitle} {
      font-size: 34px;
      line-height: 1.08;
    }

    ${SDescription} {
      font-size: 15px;
      line-height: 1.48;
    }
  }
`;
