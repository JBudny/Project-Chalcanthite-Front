import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import GlobalStyle from './App.styles';
import theme from './muiTheme';
import Navigation from './Navigation/Navigation';
import TopAppBar from './TopAppBar/TopAppBar';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <TopAppBar />
      <Navigation />
    </ThemeProvider>
  </>
);

export default App;
