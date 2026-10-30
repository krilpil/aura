'use client';

import styled from 'styled-components';

export const SBreadcrumbs = styled.nav`
  ${({ theme }) => theme.typography.caption};

  color: ${({ theme }) => theme.color.text.secondary};

  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  li + li::before {
    content: '/';
    margin-right: 8px;
    color: ${({ theme }) => theme.color.text.tertiary};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.color.outline.focus};
      outline-offset: 4px;
    }
  }

  [aria-current='page'] {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;
