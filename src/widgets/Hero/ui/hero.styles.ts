'use client';

import { Carousel } from 'antd';
import styled from 'styled-components';

export const SImageLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
    filter: saturate(0.98) contrast(1.08) brightness(0.92);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    img {
      object-position: 62% center;
    }
  }
`;

export const SCarousel = styled(Carousel)`
  --hero-height: clamp(500px, 68svh, 660px);

  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at 72% 28%, rgba(121, 96, 74, 0.34), transparent 34%), #14110f;

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: auto;
  }

  .slick-slide > div {
    height: 100%;
  }

  && .slick-dots.hero-dots {
    inset-inline-start: max(clamp(20px, 5vw, 72px), calc((100% - 1320px) / 2));
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
    --hero-height: clamp(560px, 76svh, 660px);

    && .slick-dots.hero-dots {
      inset-inline-start: clamp(20px, 5vw, 72px);
      bottom: 22px;

      gap: 8px;

      li,
      li.slick-active {
        width: 36px;
      }
    }
  }
`;

export const SSlide = styled.section`
  position: relative;

  min-height: var(--hero-height);
  height: 100%;
  padding-inline: clamp(20px, 5vw, 72px);

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
    &::before {
      background:
        radial-gradient(circle at 76% 18%, rgba(255, 255, 255, 0.12), transparent 28%),
        radial-gradient(circle at 20% 76%, rgba(121, 96, 74, 0.2), transparent 30%);
    }

    &::after {
      background:
        linear-gradient(
          180deg,
          rgba(20, 17, 15, 0.14) 0%,
          rgba(20, 17, 15, 0.24) 28%,
          rgba(32, 27, 23, 0.7) 58%,
          rgba(20, 17, 15, 0.96) 100%
        ),
        linear-gradient(90deg, rgba(20, 17, 15, 0.52), rgba(20, 17, 15, 0.08));
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

  width: min(1320px, 100%);
  min-height: var(--hero-height);
  height: 100%;
  margin: 0 auto;

  padding: clamp(112px, 10vw, 148px) 0 clamp(64px, 6vw, 88px);

  color: ${({ theme }) => theme.color.text.inverse};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    justify-content: flex-end;

    gap: 24px;

    padding: 104px 0 64px;
  }
`;

export const STitle = styled.h2`
  ${({ theme }) => theme.typography.hero};
  white-space: pre-line;

  margin: 0;

  text-wrap: balance;

  text-shadow:
    0 20px 56px rgba(0, 0, 0, 0.46),
    0 1px 0 rgba(255, 255, 255, 0.08);
`;

export const SText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 760px;

  margin: 0;

  color: rgba(255, 255, 255, 0.86);

  text-wrap: pretty;

  text-shadow: 0 10px 28px rgba(0, 0, 0, 0.38);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    max-width: 350px;
  }
`;

export const SFacts = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    gap: 10px 8px;

    margin-top: 8px;
  }
`;

export const SFact = styled.span`
  ${({ theme }) => theme.typography.meta};
  display: inline-flex;
  align-items: center;

  min-height: 32px;

  padding: 6px 11px;

  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: ${({ theme }) => theme.borderRadius.full};

  background: rgba(255, 255, 255, 0.08);

  color: rgba(255, 255, 255, 0.88);

  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 36px;

    padding: 8px 12px;
  }
`;
