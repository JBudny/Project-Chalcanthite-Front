import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

*,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

export default GlobalStyle;
