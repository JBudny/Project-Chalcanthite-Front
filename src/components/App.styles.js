import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

  @media (min-width: 576px) {
    body {
      height: ${({ preventScrolling }) => (preventScrolling ? '100vh' : 'auto')};
      overflow-y: ${({ preventScrolling }) => (preventScrolling ? 'hidden' : 'auto')};
    }
  }

  @media (max-width: 576px) {
    body {
      width: 100%;
      position: ${({ preventScrolling }) => (preventScrolling ? 'fixed' : 'static')};
    }
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
