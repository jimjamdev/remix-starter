import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding:0;
    background: lightgray;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
