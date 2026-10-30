'use client';

import styled from 'styled-components';

import { PhoneContact } from '@/entities/feedback';

const brandColor = '#856d55';
const transition = '280ms cubic-bezier(0.22, 1, 0.36, 1)';

interface IScrolledProps {
  $isScrolled: boolean;
}

export const SHeader = styled.header<IScrolledProps>`
  ${({ theme }) => theme.typography.body};
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
  button[aria-expanded]:focus-visible,
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
  ${({ theme }) => theme.typography.navigation};
  position: relative;

  flex: 0 0 auto;

  padding: 10px 0;

  color: inherit;

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

export const SEventsDropdown = styled.div`
  ${({ theme }) => theme.typography.navigation};
  position: relative;
  flex: 0 0 auto;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
    opacity: 0.9;
  }

  button::after {
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    content: '';
    transform: rotate(45deg);
  }

  button[aria-expanded='true']::after {
    margin-top: 3px;
    transform: rotate(225deg);
  }

  button:hover,
  button[aria-expanded='true'] {
    opacity: 1;
  }
`;

export const SEventsLinks = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: -20px;
  min-width: 260px;
  padding: 10px;
  border: 1px solid rgba(133, 109, 85, 0.16);
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(20, 30, 22, 0.14);
  color: ${brandColor};

  a {
    ${({ theme }) => theme.typography.navigation};
    display: block;
    padding: 12px 14px;
    color: inherit;
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover,
  a:focus-visible {
    background: #f4f1ec;
  }

  a:focus-visible {
    outline-offset: -2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    position: static;
    min-width: 0;
    margin: 4px 0 12px;
    padding: 0 0 0 12px;
    border: 0;
    border-left: 1px solid rgba(133, 109, 85, 0.25);
    border-radius: 0;
    box-shadow: none;
    background: transparent;

    a {
      ${({ theme }) => theme.typography.navigationMobile};
      white-space: normal;
    }
  }
`;

export const SHeaderPhone = styled(PhoneContact)`
  padding: 0;

  border: 0;

  background: transparent;

  box-shadow: none;

  color: var(--header-action-color);

  a,
  time span {
    color: inherit !important;

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
