import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { useSelector } from 'react-redux';

import GlobalStyle from './App.styles';
import theme from './muiTheme';
import Navigation from './Navigation/Navigation';
import TopAppBar from './TopAppBar/TopAppBar';

const App = () => {
  const preventScrolling = useSelector(state => state.loginModal.showModal);

  return (
    <>
      <GlobalStyle preventScrolling={preventScrolling} />
      <ThemeProvider theme={theme}>
        <TopAppBar />
        <Navigation />
      </ThemeProvider>
    </>
  );
};

export default App;
