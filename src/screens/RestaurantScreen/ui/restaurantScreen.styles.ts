'use client';

import { Carousel } from 'antd';
import styled from 'styled-components';

const contentWidth = 'min(1320px, calc(100% - clamp(32px, 10vw, 144px)))';

export const SRestaurantScreen = styled.main`
  ${({ theme }) => theme.typography.body};
  overflow: hidden;
  background: ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.text.primary};

  section[id],
  article[id] {
    scroll-margin-top: calc(100px + env(safe-area-inset-top, 0px));
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 5px;
  }
`;

export const SHero = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(500px, 68svh, 660px);
  padding: clamp(112px, 10vw, 148px) clamp(20px, 5vw, 72px) clamp(42px, 5vw, 72px);
  isolation: isolate;
  background: ${({ theme }) => theme.color.surface.inverse};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 520px;
    padding: 104px clamp(20px, 5vw, 72px) 38px;
  }

  &::after {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: '';
    background:
      linear-gradient(90deg, rgba(8, 24, 16, 0.85), rgba(8, 24, 16, 0.2)),
      linear-gradient(0deg, rgba(8, 24, 16, 0.5), transparent 70%);
  }
`;

export const SHeroImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  img {
    object-fit: cover;
    object-position: center 65%;
  }
`;

export const SHeroContent = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
  color: ${({ theme }) => theme.color.text.inverse};

  h1 {
    ${({ theme }) => theme.typography.hero};
    margin: 0;

    text-wrap: balance;
  }

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 580px;
    margin: 28px 0 34px;
  }
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px 30px;
`;

export const SButton = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 14px 25px;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.brand.primary};
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.color.surface.bright};
  }
`;

export const STextLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: inherit;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;

  &:hover {
    text-decoration-thickness: 2px;
  }
`;

export const SIntro = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  padding: 30px 0 clamp(70px, 8vw, 120px);

  > p {
    ${({ theme }) => theme.typography.body};
    max-width: 960px;
    margin: clamp(48px, 6vw, 88px) 0 0;

    color: ${({ theme }) => theme.color.brand.onPrimaryContainer};
    text-wrap: pretty;
  }
`;

export const STitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  text-wrap: balance;
`;

export const SText = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 600px;
  margin: 24px 0;
`;

export const SSection = styled.section`
  width: ${contentWidth};
  margin: 0 auto;
  padding: clamp(72px, 9vw, 130px) 0;
`;

export const SIntroColumns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: start;
  gap: clamp(32px, 6vw, 96px);
  margin-top: 32px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SCuisine = styled.div`
  min-width: 0;

  > p:first-child {
    margin-top: 0;
  }

  ${SText} {
    max-width: none;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  ${STextLink} {
    color: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const SSectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
  align-items: end;
  gap: 24px 60px;
  margin-bottom: 42px;

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 400px;
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SMenu = styled(SSection)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const SRestaurantFacts = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 20px;
  min-width: 0;
  margin: 0;
  padding: 0;

  > div:first-child {
    grid-column: 1 / -1;
  }

  dt {
    ${({ theme }) => theme.typography.caption};
    margin-bottom: 12px;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  dd {
    ${({ theme }) => theme.typography.body};
    margin: 0;
  }
  .fact-note {
    ${({ theme }) => theme.typography.caption};
    display: block;
    margin-top: 4px;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: 800px) {
    gap: 24px 16px;
  }
`;

export const SMenuViewer = styled.div`
  min-width: 0;

  .menu-hint {
    ${({ theme }) => theme.typography.caption};
    margin: 0 0 20px;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  > [role='region']:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 4px;
  }
`;

export const SMenuCarousel = styled(Carousel)`
  .slick-list {
    margin: 0 -10px;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: auto;
  }
  .slick-slide > div {
    height: 100%;
  }
`;

export const SMenuPage = styled.div`
  padding: 0 10px;

  a {
    display: block;
    margin: 5px;
    border: 1px solid ${({ theme }) => theme.color.outline.base};
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
    overflow: hidden;
    background: ${({ theme }) => theme.color.surface.default};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const SMenuControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 32px;
  margin-top: 24px;

  .page-controls,
  .pdf-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .page-controls span {
    ${({ theme }) => theme.typography.caption};
    text-align: center;
  }
  .pdf-actions {
    flex-wrap: wrap;
    gap: 12px 24px;
    color: ${({ theme }) => theme.color.brand.primary};
  }

  button {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border: 1px solid ${({ theme }) => theme.color.outline.strong};
    border-radius: 50%;
    background: transparent;
    color: ${({ theme }) => theme.color.brand.primary};
    font: inherit;
    font-size: 22px;
    cursor: pointer;
  }

  button:hover:enabled {
    background: ${({ theme }) => theme.color.brand.primaryContainer};
  }
  button:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

export const SHalls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SHall = styled.article`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: ${({ theme }) => theme.color.surface.bright};

  .hall-body {
    padding: clamp(24px, 3vw, 40px);
  }
  .hall-capacity {
    ${({ theme }) => theme.typography.meta};
    color: ${({ theme }) => theme.color.brand.primary};
  }

  h3 {
    ${({ theme }) => theme.typography.card};
    margin: 18px 0;
  }

  p {
    ${({ theme }) => theme.typography.body};
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  a {
    color: ${({ theme }) => theme.color.brand.primary};
  }
`;

export const SHallImage = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;

  img {
    object-fit: cover;
  }
`;

export const SPavilion = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: stretch;
  margin-top: 40px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: ${({ theme }) => theme.color.brand.primaryContainer};
  color: ${({ theme }) => theme.color.brand.onPrimaryContainer};

  > div {
    align-self: center;
    padding: clamp(24px, 4vw, 56px);
  }

  .hall-capacity {
    ${({ theme }) => theme.typography.meta};
  }

  h3 {
    ${({ theme }) => theme.typography.card};
    margin: 18px 0 24px;
  }

  p {
    ${({ theme }) => theme.typography.body};
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SPavilionImage = styled.figure`
  min-width: 0;
  margin: 0;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SService = styled.section`
  --request-primary-bg: #f8f6f0;
  --request-primary-color: #1f5a3d;
  --request-primary-hover: #e4eee8;
  --request-primary-pressed: #d5dad3;
  --request-color: #f8f6f0;
  --request-border: rgba(255, 255, 255, 0.45);
  --request-hover-bg: rgba(255, 255, 255, 0.1);
  --request-focus: #f8f6f0;

  padding: clamp(72px, 9vw, 130px) 0;
  background: ${({ theme }) => theme.color.surface.inverse};
  color: ${({ theme }) => theme.color.surface.onInverse};

  .service-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    align-items: center;
    gap: clamp(32px, 8vw, 120px);
    width: ${contentWidth};
    margin: 0 auto;
  }

  ${SText} {
    color: rgba(255, 255, 255, 0.8);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    ${({ theme }) => theme.typography.body};
    padding: 22px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  li:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 800px) {
    .service-inner {
      grid-template-columns: 1fr;
    }
  }
`;

export const SGallerySection = styled(SSection)`
  padding-bottom: 0;

  > [role='group'] {
    display: block;
    columns: 2;
    column-gap: clamp(12px, 1.6vw, 18px);

    > figure {
      width: 100%;
      min-height: 0;
      margin-bottom: clamp(12px, 1.6vw, 18px);
      break-inside: avoid;
    }

    > figure:nth-child(1) {
      aspect-ratio: 1;
    }

    > figure:nth-child(2) {
      aspect-ratio: 1108 / 862;
    }

    > figure:nth-child(3) {
      aspect-ratio: 1072 / 1920;
    }

    > figure:nth-child(4) {
      aspect-ratio: 1152 / 928;
    }
  }

  @media (max-width: 800px) {
    > [role='group'] {
      columns: 1;
    }
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

export const SBooking = styled(SSection)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  align-items: center;
  gap: 40px 80px;

  ${SText} {
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  .booking-contact > a:first-child {
    ${({ theme }) => theme.typography.phone};
    color: ${({ theme }) => theme.color.brand.primary};
    text-decoration: none;
  }

  .booking-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    ${SRequestActions} {
      margin-top: 4px;
    }
  }

  .booking-contact p {
    ${({ theme }) => theme.typography.body};
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }
  ${SButton} {
    background: ${({ theme }) => theme.color.brand.primary};
    color: ${({ theme }) => theme.color.brand.onPrimary};

    &:hover {
      background: ${({ theme }) => theme.color.brand.primaryHover};
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SLocation = styled(SSection)`
  padding-top: 0;

  ${SSectionHeader} {
    grid-template-columns: 1fr;
  }

  iframe {
    display: block;
    width: 100%;
    height: 480px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
    background: ${({ theme }) => theme.color.surface.containerHigh};
  }

  @media (max-width: 800px) {
    iframe {
      height: 340px;
    }
  }
`;
