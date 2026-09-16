'use client';

import { Carousel } from 'antd';
import styled, { css } from 'styled-components';

import type { IHeroPromoAction } from '../model';

export const SImageLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
    filter: saturate(0.98) contrast(1.08) brightness(0.92);
  }
`;

export const SCarousel = styled(Carousel)`
  --hero-height: clamp(700px, calc(100vh - 48px), 1020px);

  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 72% 28%, rgba(121, 96, 74, 0.34), transparent 34%), #14110f;

  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: var(--hero-height);
  }

  && .slick-dots.hero-dots {
    inset-inline-start: clamp(16px, 5vw, 72px);
    inset-inline-end: auto;
    bottom: clamp(18px, 4vw, 42px);
    justify-content: flex-start;
    gap: 12px;
    width: auto;

    li {
      width: 60px;
      height: 18px;
      margin: 0;
      overflow: visible;

      &::after {
        display: none;
      }
    }

    li.slick-active {
      width: 60px;
    }

    li button {
      position: relative;
      width: 100%;
      height: 18px;
      padding: 0;
      border: 0;
      background: transparent;
      opacity: 1;
      overflow: visible;

      &::after {
        content: none;
      }

      &::before {
        position: absolute;
        inset: 7px 0;
        content: '';
        border-radius: ${({ theme }) => theme.borderRadius.full};
        background: rgba(255, 255, 255, 0.34);
      }

      &:focus-visible {
        outline: 2px solid rgba(255, 255, 255, 0.82);
        outline-offset: 2px;
      }
    }

    li.slick-active button {
      height: 18px;
      background: transparent;

      &::before {
        inset-block: 6px;
        background: #ffffff;
        box-shadow: 0 0 18px rgba(255, 255, 255, 0.42);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    --hero-height: 100svh;

    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div {
      height: var(--hero-height);
    }

    && .slick-dots.hero-dots {
      inset-inline-start: 16px;
      bottom: 18px;
      gap: 8px;

      li {
        width: 36px;
      }

      li.slick-active {
        width: 36px;
      }
    }
  }
`;

export const SSlide = styled.section`
  position: relative;
  height: var(--hero-height);
  isolation: isolate;
  overflow: hidden;

  &::before {
    position: absolute;
    inset: 0;
    z-index: 1;
    content: '';
    background:
      radial-gradient(circle at 76% 24%, rgba(255, 255, 255, 0.18), transparent 28%),
      radial-gradient(circle at 12% 82%, rgba(121, 96, 74, 0.26), transparent 26%);
    mix-blend-mode: screen;
    pointer-events: none;
  }

  &::after {
    position: absolute;
    inset: 0;
    z-index: 2;
    content: '';
    background:
      linear-gradient(
        90deg,
        rgba(20, 17, 15, 0.94) 0%,
        rgba(51, 42, 35, 0.72) 38%,
        rgba(51, 42, 35, 0.16) 72%,
        rgba(20, 17, 15, 0.36) 100%
      ),
      linear-gradient(180deg, rgba(20, 17, 15, 0.06) 0%, rgba(20, 17, 15, 0.8) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.28), transparent 38%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    height: var(--hero-height);

    &::after {
      background:
        linear-gradient(
          180deg,
          rgba(20, 17, 15, 0.2) 0%,
          rgba(36, 30, 26, 0.7) 38%,
          rgba(20, 17, 15, 0.96) 100%
        ),
        linear-gradient(90deg, rgba(20, 17, 15, 0.64), rgba(20, 17, 15, 0.16));
    }
  }
`;

export const SContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: clamp(18px, 2vw, 26px);
  width: min(900px, 100%);
  height: 100%;
  padding: clamp(118px, 11vw, 164px) clamp(16px, 5vw, 72px) clamp(96px, 8vw, 140px);
  color: ${({ theme }) => theme.color.text.inverse};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    gap: 16px;
    justify-content: flex-end;
    padding: 78px 16px 82px;
  }
`;

export const STitle = styled.h1`
  max-width: 840px;
  margin: 0;
  ${({ theme }) => theme.font.headline.extraLarge};
  font-size: clamp(46px, 7.2vw, 102px);
  line-height: 0.94;
  letter-spacing: 0;
  text-wrap: balance;
  text-shadow:
    0 20px 56px rgba(0, 0, 0, 0.46),
    0 1px 0 rgba(255, 255, 255, 0.08);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    font-size: 43px;
    line-height: 1.02;
  }
`;

export const SText = styled.p`
  max-width: 760px;
  margin: 0;
  ${({ theme }) => theme.font.body.large};
  font-size: clamp(16px, 1.6vw, 20px);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.86);
  text-wrap: pretty;
  text-shadow: 0 10px 28px rgba(0, 0, 0, 0.38);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    font-size: 15px;
    line-height: 1.45;
  }
`;

export const SFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SFact = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 6px 11px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.88);
  ${({ theme }) => theme.font.label.medium};
  backdrop-filter: blur(10px);
`;

export const SActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 4px;
`;

export const SAction = styled.button<{ $variant: IHeroPromoAction['variant'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  max-width: 100%;
  padding: 13px 20px;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  ${({ theme }) => theme.font.label.large};
  letter-spacing: 0;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.78);
    outline-offset: 3px;
  }

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          background: #79604a;
          color: #ffffff;

          &:hover {
            background: #8a715b;
          }
        `
      : css`
          border-color: rgba(255, 255, 255, 0.48);
          background: transparent;
          color: ${theme.color.text.inverse};

          &:hover {
            border-color: rgba(255, 255, 255, 0.78);
            background: rgba(255, 255, 255, 0.08);
          }
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 100%;
    min-height: 46px;
    padding: 12px 16px;
  }
`;
