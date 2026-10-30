'use client';

import styled from 'styled-components';

export const SSection = styled.section`
  ${({ theme }) => theme.typography.body};
  width: calc(100% - clamp(32px, 10vw, 144px));
  max-width: 1320px;
  margin: 0 auto;
  padding: clamp(32px, 4vw, 60px) 0;
  scroll-margin-top: 100px;
  color: #1d2b22;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px 48px;
  margin-bottom: 28px;

  h2 {
    ${({ theme }) => theme.typography.section};
    margin: 0;
  }

  p {
    ${({ theme }) => theme.typography.body};
    max-width: 420px;
    margin: 0;
    color: ${({ theme }) => theme.color.text.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
  }
`;

export const SLayout = styled.div`
  border: 1px solid #dce2d5;
  border-radius: 16px;
  overflow: hidden;
  background: #4b6040;

  button:focus-visible,
  [tabindex='0']:focus-visible {
    outline: 2px solid #856d55;
    outline-offset: -3px;
  }
`;

export const SViewport = styled.div<{ $pannable: boolean; $scaled: boolean }>`
  position: relative;
  min-width: 0;
  aspect-ratio: 16 / 9;
  overflow: clip;
  background: #4b6040;
  cursor: ${({ $pannable }) => ($pannable ? 'grab' : 'default')};
  touch-action: ${({ $scaled }) => ($scaled ? 'none' : 'pan-y')};

  &:active {
    cursor: ${({ $pannable }) => ($pannable ? 'grabbing' : 'default')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    height: 480px;
    aspect-ratio: auto;
  }
`;

export const SCanvas = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform-origin: center;

  img {
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: calc(480px * 16 / 9);
  }
`;

export const SMarker = styled.button<{ $selected: boolean }>`
  position: absolute;
  z-index: ${({ $selected }) => ($selected ? 2 : 1)};
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ $selected }) => ($selected ? '#ffffff' : '#284b38')};
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transform: translate(-50%, -50%) scale(calc(1 / var(--map-scale, 1)));

  &,
  span {
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }

  span {
    display: grid;
    place-items: center;
    width: ${({ $selected }) => ($selected ? '34px' : '28px')};
    height: ${({ $selected }) => ($selected ? '34px' : '28px')};
    border: 2px solid ${({ $selected }) => ($selected ? '#ffffff' : '#748b70')};
    border-radius: 50%;
    background: ${({ $selected }) => ($selected ? '#856d55' : '#ffffff')};
    box-shadow: ${({ $selected }) =>
      $selected
        ? '0 0 0 6px rgba(133, 109, 85, 0.18), 0 3px 12px rgba(35, 55, 30, 0.2)'
        : '0 2px 6px rgba(35, 55, 30, 0.12)'};
  }

  &:hover span {
    background: #f2eadf;
    color: #6d533e;
  }

  svg {
    display: block;
    width: 16px;
    height: 16px;
    pointer-events: none;
  }
`;

export const SControls = styled.div`
  position: absolute;
  z-index: 4;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 4px;
  border: 1px solid rgba(116, 139, 112, 0.2);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 16px rgba(35, 55, 30, 0.06);

  button {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #284b38;
    font: inherit;
    font-size: 24px;
    cursor: pointer;
    touch-action: manipulation;
  }

  button:hover:not(:disabled) {
    background: #eef0e8;
  }

  button:disabled {
    color: #b4bcb3;
    cursor: default;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    top: 12px;
    right: 12px;
  }
`;

export const SHint = styled.p`
  ${({ theme }) => theme.typography.small};
  position: absolute;
  z-index: 3;
  bottom: 24px;
  left: 24px;
  max-width: calc(100% - 24px);
  margin: 0;
  padding: 10px 16px;
  border: 1px solid rgba(116, 139, 112, 0.15);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  color: #536052;
  pointer-events: none;

  span {
    margin: 0 8px;
    color: #9da995;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    bottom: 12px;
    left: 12px;
  }
`;

export const SFilters = styled.div`
  position: absolute;
  z-index: 4;
  top: 24px;
  left: 24px;
  display: flex;
  max-width: calc(100% - 112px);
  gap: 4px;
  padding: 5px;
  border: 1px solid rgba(116, 139, 112, 0.2);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 4px 16px rgba(35, 55, 30, 0.06);
  overflow-x: auto;
  touch-action: pan-x;

  button {
    flex-shrink: 0;
    min-height: 40px;
    padding: 10px 16px;
    border: 0;
    border-radius: 24px;
    background: transparent;
    color: #536052;
    font: inherit;
    ${({ theme }) => theme.typography.navigation};
    cursor: pointer;
    white-space: nowrap;
  }

  button[aria-pressed='true'] {
    background: #284b38;
    color: #ffffff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    display: none;
  }
`;

export const SDetails = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 24px;
  right: 24px;
  width: 340px;
  max-width: calc(100% - 48px);
  padding: 28px;
  border: 1px solid rgba(116, 139, 112, 0.2);
  border-radius: 12px;
  background: #fffefa;
  box-shadow: 0 12px 40px rgba(35, 55, 30, 0.12);
  cursor: default;
  touch-action: pan-y;

  > button {
    position: absolute;
    top: 12px;
    right: 12px;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #eef0e8;
    color: #536052;
    cursor: pointer;
  }

  h3 {
    ${({ theme }) => theme.typography.card};
    margin: 20px 0 12px;
  }

  p {
    ${({ theme }) => theme.typography.caption};
    margin: 0;
    color: #536052;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    bottom: 12px;
    right: 12px;
    left: 12px;
    width: auto;
    max-width: none;
    max-height: calc(100% - 150px);
    padding: 24px;
    overflow-y: auto;
  }
`;

export const SDetailsMeta = styled.div`
  ${({ theme }) => theme.typography.small};
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 24px;
  color: #687a61;

  span {
    ${({ theme }) => theme.typography.captionStrong};
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #e9eee1;
    color: #284b38;
  }

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }
`;
