'use client';

import styled from 'styled-components';

const brandColor = '#a68b70';
const transition = '240ms cubic-bezier(0.22, 1, 0.36, 1)';

export const SBrandColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  min-width: 0;
`;

export const SFooterLogo = styled.a`
  position: relative;

  display: block;

  width: clamp(180px, 17vw, 238px);
  height: clamp(60px, 6vw, 80px);

  margin-bottom: 24px;

  color: #ffffff;

  transition:
    color ${transition},
    opacity ${transition};

  &::before {
    position: absolute;
    inset: 0;

    content: '';

    background-color: currentColor;

    -webkit-mask: url('/media/logotype/logo.webp') center / contain no-repeat;
    mask: url('/media/logotype/logo.webp') center / contain no-repeat;
  }

  &:hover {
    color: ${brandColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    width: 210px;
    height: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 196px;
    height: 66px;
  }
`;

export const SBrandText = styled.p`
  ${({ theme }) => theme.typography.card};
  max-width: 320px;

  margin: 0 0 32px;

  color: rgba(255, 255, 255, 0.94);

  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    max-width: 440px;

    margin-bottom: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    max-width: 320px;

    margin-bottom: 28px;
  }
`;

export const SSocials = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const SSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  border-radius: ${({ theme }) => theme.borderRadius.full};

  color: rgba(255, 255, 255, 0.88);

  text-decoration: none;

  transition:
    color ${transition},
    border-color ${transition},
    background-color ${transition},
    transform ${transition};

  svg {
    width: 30px;
    height: 30px;

    color: currentColor;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${brandColor};

      color: #ffffff;
      background: rgba(166, 139, 112, 0.2);

      transform: translateY(-3px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 120ms;

    &:hover,
    &:active {
      transform: none;
    }
  }
`;
export const SNavigationColumn = styled.nav`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  min-width: 0;
`;

export const SColumnTitle = styled.h5`
  ${({ theme }) => theme.typography.captionStrong};
  margin: 0 0 24px;

  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    margin-bottom: 20px;
  }
`;

export const SNavigationList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 14px;
`;

export const SNavigationLink = styled.a`
  ${({ theme }) => theme.typography.navigation};
  position: relative;

  display: inline;

  color: rgba(255, 255, 255, 0.6);

  text-decoration: none;

  transition:
    color ${transition},
    transform ${transition};

  &::after {
    position: absolute;
    right: 0;
    bottom: -3px;
    left: 0;

    height: 1px;

    content: '';

    background: ${brandColor};

    transform: scaleX(0);
    transform-origin: right center;

    transition: transform ${transition};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #ffffff;

      &::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }
`;

export const SContactColumn = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 24px;

  min-width: 0;
`;

export const SPhone = styled.a`
  ${({ theme }) => theme.typography.phoneCompact};

  color: #ffffff;

  text-decoration: none;
  white-space: nowrap;

  transition: color ${transition};

  &:hover {
    color: ${brandColor};
  }
`;

export const SAddress = styled.address`
  ${({ theme }) => theme.typography.caption};
  max-width: 270px;

  margin: 0;

  font-style: normal;

  color: rgba(255, 255, 255, 0.6);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    max-width: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    max-width: 300px;
  }
`;

export const SRouteLink = styled.a`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: ${brandColor};

  text-decoration: none;

  transition:
    color ${transition},
    gap ${transition};

  &::after {
    content: '→';
    font-size: 18px;
    line-height: 1;
  }

  &:hover {
    gap: 12px;

    color: #c6ad94;
  }
`;

export const SCopyright = styled.span`
  min-width: 0;
`;

export const SFooterContent = styled.div`
  display: grid;
  grid-template-columns:
    minmax(250px, 1.45fr)
    repeat(4, minmax(130px, 0.85fr))
    minmax(210px, 1.2fr);

  gap: clamp(36px, 4vw, 72px) clamp(24px, 3vw, 52px);

  width: 100%;
  max-width: 1320px;

  margin: 0 auto;

  /*
   * Небольшие ноутбуки и горизонтальные планшеты:
   *
   * 1 строка — бренд и контакты;
   * 2 строка — четыре колонки навигации.
   *
   * grid-row указываем явно, потому что контакты находятся
   * после навигации в DOM.
   */
  @media (max-width: 1240px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 56px 24px;

    ${SBrandColumn} {
      grid-column: 1 / 7;
      grid-row: 1;
    }

    ${SContactColumn} {
      align-items: flex-end;
      grid-column: 7 / -1;
      grid-row: 1;

      text-align: right;
    }

    ${SNavigationColumn} {
      grid-column: span 3;
      grid-row: 2;
    }
  }

  /*
   * Планшеты:
   *
   * 1 строка — бренд;
   * 2–3 строки — навигация 2 × 2;
   * последняя строка — контакты.
   */
  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px clamp(32px, 7vw, 64px);

    ${SBrandColumn} {
      grid-column: 1 / -1;
      grid-row: auto;
    }

    ${SNavigationColumn} {
      grid-column: auto;
      grid-row: auto;

      padding-top: 4px;
    }

    ${SContactColumn} {
      display: grid;
      align-items: start;
      grid-template-columns: minmax(220px, auto) minmax(240px, 1fr);
      grid-column: 1 / -1;
      grid-row: auto;

      gap: 16px 48px;

      padding-top: 40px;

      border-top: 1px solid rgba(255, 255, 255, 0.12);

      text-align: left;

      ${SPhone} {
        grid-column: 1;
        grid-row: 1;
      }

      ${SRouteLink} {
        grid-column: 1;
        grid-row: 2;
      }

      ${SAddress} {
        grid-column: 2;
        grid-row: 1 / span 2;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    grid-template-columns: 1fr;
    gap: 40px;

    ${SBrandColumn},
    ${SNavigationColumn},
    ${SContactColumn} {
      grid-column: auto;
      grid-row: auto;
    }

    ${SNavigationColumn} {
      padding-top: 0;
    }

    ${SContactColumn} {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      gap: 20px;

      padding-top: 32px;

      text-align: left;

      ${SPhone},
      ${SAddress},
      ${SRouteLink} {
        grid-column: auto;
        grid-row: auto;
      }
    }
  }
`;

export const SFooterBottom = styled.div`
  ${({ theme }) => theme.typography.small};
  width: 100%;
  max-width: 1320px;

  margin: clamp(56px, 7vw, 96px) auto 0;
  padding-top: 26px;

  border-top: 1px solid rgba(255, 255, 255, 0.12);

  color: rgba(255, 255, 255, 0.42);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    margin-top: 64px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    margin-top: 56px;
    padding-top: 24px;
  }
`;

export const SFooter = styled.footer`
  ${({ theme }) => theme.typography.body};
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding: clamp(72px, 8vw, 120px) clamp(16px, 5vw, 72px) 28px;

  color: rgba(255, 255, 255, 0.82);
  background:
    radial-gradient(circle at 8% 12%, rgba(166, 139, 112, 0.18), transparent 28%),
    radial-gradient(circle at 92% 88%, rgba(109, 132, 112, 0.14), transparent 30%), #17231c;

  &::before {
    position: absolute;
    top: 0;
    right: clamp(16px, 5vw, 72px);
    left: clamp(16px, 5vw, 72px);

    height: 1px;

    content: '';

    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.32), transparent);
  }

  a:focus-visible {
    outline: 2px solid ${brandColor};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 80px clamp(28px, 5vw, 48px) 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 64px 20px 24px;
  }
`;
