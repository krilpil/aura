'use client';

import styled from 'styled-components';

export const SGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(12px, 1.6vw, 18px);
`;

export const SGalleryImage = styled.button`
  position: relative;

  min-height: clamp(360px, 50vw, 620px);
  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;
  cursor: zoom-in;

  &:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 4px;
  }

  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};

  overflow: hidden;
  background: ${({ theme }) => theme.color.surface.containerHigh};

  img {
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    min-height: 420px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    min-height: 300px;
  }
`;

export const SPhotoDialog = styled.dialog`
  box-sizing: border-box;
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  color: #fff;
  background: transparent;
  overflow: hidden;

  &::backdrop {
    background: rgb(0 0 0 / 60%);
  }
`;

export const SPhotoControls = styled.div<{ $navigation?: boolean }>`
  position: absolute;
  z-index: 1;
  top: ${({ $navigation }) => ($navigation ? '50%' : '16px')};
  right: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: ${({ $navigation }) => ($navigation ? 'translateY(-50%)' : 'none')};
  pointer-events: none;

  span {
    padding-left: 12px;
    color: rgb(255 255 255 / 55%);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: 600px) {
    top: ${({ $navigation }) => ($navigation ? 'auto' : '8px')};
    bottom: ${({ $navigation }) => ($navigation ? '8px' : 'auto')};
    right: 8px;
    left: 8px;
    transform: none;
  }
`;

export const SPhotoButton = styled.button`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 10px;
  border: 0;
  color: rgb(255 255 255 / 70%);
  background: transparent;
  cursor: pointer;
  pointer-events: auto;

  svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    color: #fff;
  }

  &:focus-visible {
    outline: 1px solid #fff;
    outline-offset: 2px;
  }
`;

export const SFullPhoto = styled.div`
  position: relative;
  height: calc(100dvh - 128px);
  margin: 64px 80px;

  img {
    object-fit: contain;
  }

  @media (max-width: 600px) {
    margin: 64px 12px;
  }
`;
