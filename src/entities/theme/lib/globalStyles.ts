import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${({ theme }) => theme.typography.body};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  h1 {
    ${({ theme }) => theme.typography.hero};
  }

  h2 {
    ${({ theme }) => theme.typography.section};
  }

  h3,
  h4,
  h5,
  h6 {
    ${({ theme }) => theme.typography.card};
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  strong,
  b {
    font-weight: 600;
  }
`;
