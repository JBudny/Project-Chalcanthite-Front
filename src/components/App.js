// @flow
import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header/Header";
import theme from "./muiTheme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

*,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
