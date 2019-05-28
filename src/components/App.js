import React, {Fragment} from "react";
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './muiTheme';

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

const Wrapper = styled.div`
height: 100vh;
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
