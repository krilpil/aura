'use client';

import styled from 'styled-components';

import { PhoneContact } from '@/entities/feedback';

const brandColor = '#856d55';
const transition = '280ms cubic-bezier(0.22, 1, 0.36, 1)';

interface IScrolledProps {
  $isScrolled: boolean;
}

export const SHeader = styled.header<IScrolledProps>`
  --header-height: ${({ $isScrolled }) => ($isScrolled ? '76px' : '116px')};
  --header-action-color: ${({ $isScrolled }) => ($isScrolled ? brandColor : '#ffffff')};

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;

  display: flex;
  align-items: center;

  gap: clamp(24px, 3vw, 52px);

  height: calc(var(--header-height) + env(safe-area-inset-top, 0px));

  padding: 12px clamp(24px, 4vw, 64px);
  padding-top: calc(12px + env(safe-area-inset-top, 0px));

  font-family: var(--font-manrope), sans-serif;

  color: ${({ $isScrolled }) => ($isScrolled ? brandColor : '#ffffff')};

  background-color: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent'};

  background-color: ${({ $isScrolled }) => ($isScrolled ? '#ffffff' : 'transparent')};

  transition:
    height ${transition},
    color ${transition},
    background-color ${transition},
    box-shadow ${transition},
    backdrop-filter ${transition};

  will-change: height, color, background-color, box-shadow;

  .ant-btn {
    width: 44px;
    height: 44px;

    color: var(--header-action-color) !important;

    border: 0 !important;
    border-radius: 50%;

    background-color: transparent !important;

    box-shadow: none;

    transition:
      border-color ${transition},
      background-color ${transition};

    svg,
    path {
      color: inherit !important;
      fill: currentColor !important;
    }

    &:hover,
    &:focus,
    &:active {
      color: inherit !important;
      background-color: transparent !important;
    }
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    --header-height: ${({ $isScrolled }) => ($isScrolled ? '72px' : '96px')};

    justify-content: space-between;

    gap: 12px;

    padding-right: 16px;
    padding-left: 16px;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      transition-duration: 160ms !important;
    }
  }
`;

export const SLogo = styled.a<IScrolledProps>`
  position: relative;

  display: block;
  flex: 0 0 auto;

  width: clamp(170px, 17vw, 240px);
  height: clamp(56px, 6.2vw, 80px);

  color: inherit;

  transform: scale(${({ $isScrolled }) => ($isScrolled ? 0.78 : 1)});
  transform-origin: left center;

  transition: transform ${transition};

  will-change: transform;

  &::before {
    position: absolute;
    inset: 0;

    content: '';

    background-color: currentColor;

    -webkit-mask: url('/media/logotype/logo.webp') center / contain no-repeat;
    mask: url('/media/logotype/logo.webp') center / contain no-repeat;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: clamp(140px, 46vw, 220px);
    height: clamp(47px, 15.333vw, 74px);

    transform: scale(${({ $isScrolled }) => ($isScrolled ? 0.75 : 1)});
  }
`;

export const SNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1 1 auto;

  gap: clamp(16px, 1.7vw, 30px);

  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: none;
  }
`;

export const SNavigationLink = styled.a`
  position: relative;

  flex: 0 0 auto;

  padding: 10px 0;

  color: inherit;

  font-family: var(--font-manrope), sans-serif;
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;

  text-decoration: none;
  white-space: nowrap;

  opacity: 0.9;

  transition:
    opacity ${transition},
    color ${transition};

  &::after {
    position: absolute;
    right: 0;
    bottom: 3px;
    left: 0;

    height: 1px;

    content: '';

    background: currentColor;

    transform: scaleX(0);
    transform-origin: right center;

    transition: transform ${transition};
  }

  &:hover {
    opacity: 1;

    &::after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;

export const SHeaderPhone = styled(PhoneContact)`
  padding: 0;

  border: 0;

  background: transparent;

  box-shadow: none;

  color: var(--header-action-color);

  font-family: var(--font-manrope), sans-serif;

  a,
  time span {
    color: inherit !important;

    font-family: inherit;

    transition: none;
  }

  time span {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    a {
      border: 0;

      background: transparent;
    }
  }
`;

export const STools = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  flex: 0 0 auto;

  gap: clamp(12px, 2vw, 24px);

  color: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    gap: 6px;
  }
`;

export const SMenuDrawer = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: block;
  }
`;
