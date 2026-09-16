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
  justify-content: space-between;
  gap: 16px;
  height: calc(var(--header-height) + env(safe-area-inset-top, 0px));
  padding: 12px clamp(16px, 4vw, 56px);
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  color: ${({ $isScrolled }) => ($isScrolled ? brandColor : '#ffffff')};
  background-color: ${({ $isScrolled }) => ($isScrolled ? '#ffffff' : 'transparent')};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? '0 4px 24px rgba(38, 31, 24, 0.08)' : '0 4px 24px rgba(38, 31, 24, 0)'};
  transition:
    height ${transition},
    color ${transition},
    background-color ${transition},
    box-shadow ${transition};
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
  width: clamp(180px, 22vw, 264px);
  height: clamp(60px, 7.333vw, 88px);
  color: inherit;
  transform: scale(${({ $isScrolled }) => ($isScrolled ? 0.7 : 1)});
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
  gap: clamp(12px, 2.5vw, 28px);
  color: inherit;
`;
