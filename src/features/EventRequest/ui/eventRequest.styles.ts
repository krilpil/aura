'use client';

import styled, { css } from 'styled-components';

export const SBooking = styled.section`
  ${({ theme }) => theme.typography.body};
  padding: clamp(80px, 9vw, 130px) 0;
  scroll-margin-top: calc(100px + env(safe-area-inset-top, 0px));
`;

export const SBookingInner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(40px, 7vw, 110px);
  width: min(1320px, calc(100% - clamp(32px, 10vw, 144px)));
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SBookingTitle = styled.h2`
  ${({ theme }) => theme.typography.section};
  margin: 0;

  text-wrap: balance;
`;

export const SBookingNote = styled.p`
  ${({ theme }) => theme.typography.body};
  max-width: 480px;
  margin: 24px 0 30px;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const SBookingLink = styled.a`
  ${({ theme }) => theme.typography.button};
  color: ${({ theme }) => theme.color.brand.primary};
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 5px;
  }
`;

export const SForm = styled.form`
  padding: clamp(24px, 3vw, 42px);
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: #fff;
  box-shadow: 0 18px 50px rgba(24, 51, 38, 0.07);
`;

export const SFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 23px 18px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    ${({ theme }) => theme.typography.captionStrong};
    color: ${({ theme }) => theme.color.text.primary};
  }

  input,
  select,
  textarea {
    ${({ theme }) => theme.typography.control};
    width: 100%;
    min-height: 52px;
    padding: 12px 14px;
    border: 1px solid ${({ theme }) => theme.color.outline.base};
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
    background: #fff;
    color: ${({ theme }) => theme.color.text.primary};
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.outline.focus};
    outline-offset: 2px;
  }
`;

export const SFormActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const buttonBase = css`
  ${({ theme }) => theme.typography.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition:
    background-color 150ms ease,
    border-color 150ms ease,
    color 150ms ease;

  &:focus-visible {
    outline: 2px solid var(--request-focus, ${({ theme }) => theme.color.outline.focus});
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: wait;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const primaryButton = css`
  background: var(--request-primary-bg, ${({ theme }) => theme.color.brand.primary});
  color: var(--request-primary-color, ${({ theme }) => theme.color.brand.onPrimary});

  &:hover:not(:disabled) {
    background: var(--request-primary-hover, ${({ theme }) => theme.color.brand.primaryHover});
  }

  &:active:not(:disabled) {
    background: var(--request-primary-pressed, ${({ theme }) => theme.color.brand.primaryPressed});
  }
`;

export const SFormButton = styled.button`
  ${buttonBase};
  ${primaryButton};
  min-height: 48px;
  padding: 12px 22px;
`;

export const SRequestTrigger = styled.button<{
  $variant: 'primary' | 'secondary' | 'text';
}>`
  ${buttonBase};
  min-height: 44px;
  padding: 11px 18px;

  ${({ $variant, theme }) => {
    if ($variant === 'primary') return primaryButton;
    if ($variant === 'text')
      return css`
        padding: 10px 0;
        border-radius: 0;
        background: transparent;
        color: var(--request-color, ${theme.color.brand.primary});
        text-decoration: underline;
        text-decoration-color: ${theme.color.outline.strong};
        text-underline-offset: 4px;

        &:hover:not(:disabled) {
          color: var(--request-color, ${theme.color.brand.primaryHover});
          text-decoration-color: currentColor;
        }
      `;
    return css`
      border-color: var(--request-border, ${theme.color.outline.base});
      background: transparent;
      color: var(--request-color, ${theme.color.brand.primary});

      &:hover:not(:disabled) {
        border-color: var(--request-color, ${theme.color.brand.primary});
        background: var(--request-hover-bg, ${theme.color.brand.primaryContainer});
      }

      &:active:not(:disabled) {
        background: var(--request-hover-bg, ${theme.color.brand.primaryContainer});
      }
    `;
  }}
`;

export const SFormNote = styled.p<{ $status: 'idle' | 'sending' | 'success' | 'error' }>`
  ${({ theme }) => theme.typography.caption};
  max-width: 360px;
  margin: 0;
  color: ${({ theme, $status }) =>
    $status === 'error'
      ? theme.color.error.base
      : $status === 'success'
        ? theme.color.success.base
        : theme.color.text.secondary};
`;

export const SHoneypot = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
`;

export const SError = styled.span`
  ${({ theme }) => theme.typography.captionStrong};
  color: ${({ theme }) => theme.color.error.base};
`;

export const SFullField = styled(SField)`
  grid-column: 1 / -1;
  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const SModalBody = styled.div`
  ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.color.text.primary};
  ${SBookingNote} {
    margin: 12px 0 18px;
  }
  ${SForm} {
    padding: 24px 0 0;
    box-shadow: none;
  }
`;

export const SModalTitle = styled.h2`
  ${({ theme }) => theme.typography.card};
  margin: 0;
  padding-right: 24px;

  color: ${({ theme }) => theme.color.text.primary};
`;
