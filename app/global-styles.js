import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
  }

  :root {
    --bg-color-box: rgba(153, 121, 80, 0.85);
    --color-special-1: #f9e29c;
    --color-h1: #d9dddc;
  }
  
  *,
  *::after,
  *::before,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Fjalla One', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
