import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    line-height: 1.3;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;
