import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import GlobalStyle from './App.styles';
import theme from './muiTheme';
import Navigation from './Navigation/Navigation';
import SearchAppBar from './SearchBar/SearchBar';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Navigation />
    </ThemeProvider>
  </>
);

export default App;
