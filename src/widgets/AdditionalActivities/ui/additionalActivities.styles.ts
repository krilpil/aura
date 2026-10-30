'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const SActivities = styled.section<{ $seamless: boolean }>`
  --activity-hover-duration: 260ms;
  --activity-hover-easing: cubic-bezier(0.22, 1, 0.36, 1);

  padding: clamp(24px, 3vw, 44px) clamp(16px, 5vw, 72px) clamp(64px, 7vw, 100px);
  background: ${({ $seamless }) => ($seamless ? 'transparent' : '#eef0e8')};

  @media (prefers-reduced-motion: reduce) {
    --activity-hover-duration: 140ms;
    --activity-hover-easing: ease-out;
  }
`;

export const SInner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const STitle = styled.h2<{ $hasDescription: boolean }>`
  ${({ theme }) => theme.typography.section};
  margin: 0 0 ${({ $hasDescription }) => ($hasDescription ? '16px' : 'clamp(22px, 3vw, 34px)')};

  color: #1d2b22;
  text-wrap: balance;
`;

export const SDescription = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 620px;
  margin: 0 0 clamp(22px, 3vw, 34px);
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SSectionHeader = styled.div<{ $split: boolean }>`
  ${({ $split, theme }) =>
    $split &&
    `
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.72fr);
      gap: clamp(24px, 5vw, 96px);
      align-items: end;
      margin-bottom: clamp(28px, 4vw, 56px);

      h2 {
        margin: 0;
        text-wrap: initial;
      }

      h2 span {
        display: block;
      }

      p {
        max-width: 520px;
        margin: 0;
        text-wrap: pretty;
      }

      @media (max-width: ${theme.breakpoints.maxTablets}) {
        grid-template-columns: 1fr;
      }

    `}
`;

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    'a b c'
    'a e f'
    'g h f';
  gap: clamp(10px, 1.3vw, 18px);

  > :nth-child(1) {
    grid-area: a;
  }

  > :nth-child(2) {
    grid-area: b;
  }

  > :nth-child(3) {
    grid-area: c;
  }

  > :nth-child(4) {
    grid-area: e;
  }

  > :nth-child(5) {
    grid-area: f;
  }

  > :nth-child(6) {
    grid-area: g;
  }

  > :nth-child(7) {
    grid-area: h;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'a b'
      'a c'
      'e f'
      'g f'
      'h h';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'a'
      'b'
      'c'
      'e'
      'f'
      'g'
      'h';
  }
`;

export const SCard = styled(Link)`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 170px;
  padding: clamp(18px, 2vw, 26px);
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  overflow: hidden;
  isolation: isolate;
  background: #18241d;
  color: ${({ theme }) => theme.color.text.inverse};
  text-decoration: none;
  box-shadow: 0 18px 48px rgba(35, 43, 35, 0.14);
  transition: box-shadow var(--activity-hover-duration) var(--activity-hover-easing);

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background:
      linear-gradient(
        180deg,
        rgba(13, 25, 18, 0.06) 0%,
        rgba(13, 25, 18, 0.2) 38%,
        rgba(13, 25, 18, 0.88) 100%
      ),
      linear-gradient(90deg, rgba(24, 36, 29, 0.5) 0%, rgba(24, 36, 29, 0.02) 62%);
    pointer-events: none;
  }

  &::before {
    position: absolute;
    inset: 0;
    z-index: 2;
    content: '';
    background: rgba(6, 18, 12, 0.22);
    opacity: 0;
    transition: opacity var(--activity-hover-duration) var(--activity-hover-easing);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 26px 64px rgba(25, 37, 29, 0.22);
    }

    &:hover img {
      transform: scale(1.045);
      filter: saturate(1) contrast(1.02) brightness(0.84);
    }

    &:hover::before {
      opacity: 1;
    }

    &:hover > span:last-child {
      transform: translateY(-6px);
      text-shadow: 0 18px 44px rgba(0, 0, 0, 0.42);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 4px;
  }

  &:focus-visible::before {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 144px;
    padding: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    @media (hover: hover) and (pointer: fine) {
      &:hover img {
        transform: scale(1.015);
      }

      &:hover > span:last-child {
        transform: translateY(-3px);
      }
    }
  }
`;

export const SCardImage = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
    transform: scale(1.01);
    filter: saturate(0.96) contrast(1.04) brightness(0.9);
    transition:
      transform var(--activity-hover-duration) var(--activity-hover-easing),
      filter var(--activity-hover-duration) var(--activity-hover-easing);
    will-change: transform;
  }
`;

export const SCardTitle = styled.span`
  ${({ theme }) => theme.typography.card};
  position: relative;
  z-index: 3;
  display: block;
  max-width: 270px;

  text-wrap: balance;
  text-shadow: 0 14px 36px rgba(0, 0, 0, 0.32);
  transition:
    transform var(--activity-hover-duration) var(--activity-hover-easing),
    text-shadow var(--activity-hover-duration) var(--activity-hover-easing);
`;
