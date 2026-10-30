'use client';

import styled from 'styled-components';

export const SPhoneContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 14px 8px 18px;
  border: 1px solid rgba(162, 139, 96, 0.22);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(255, 255, 255, 0.62);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76);
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    padding: 0;
    border: 0;
    background: ${({ theme }) => theme.color.system.transparent};
    box-shadow: none;
    color: inherit;
  }
`;

export const SPhoneAction = styled.span`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: flex;
    flex: 0 0 44px;
    width: 44px;
    min-width: 44px;
    height: 44px;
    min-height: 44px;
    line-height: 0;
  }
`;

export const STel = styled.a`
  ${({ theme }) => theme.typography.phoneCompact};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.color.brand.primaryPressed};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.brand.accentHover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 3px;
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 50%;
    background: rgba(20, 17, 15, 0.12);
    color: inherit !important;
    transition:
      color 320ms ease,
      border-color 320ms ease,
      background-color 320ms ease;

    &:hover,
    &:focus,
    &:active {
      color: inherit !important;
    }
  }
`;

export const SAddress = styled.div`
  ${({ theme }) => theme.typography.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: none;
  }
`;

export const SPhoneIcon = styled.span`
  display: none;
  line-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 18px;
    width: 18px;
    height: 18px;
    color: inherit;

    svg {
      display: block;
      width: 100%;
      height: 100%;
      color: inherit !important;
      fill: currentColor !important;
      transition: none;
    }

    path {
      fill: currentColor !important;
    }
  }
`;

export const SPhoneLabel = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;
