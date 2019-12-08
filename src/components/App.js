// @flow

import { ThemeProvider } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { setAuth } from '../actions/authActions';
import messagesEn from '../translations/en.json';
import messagesPl from '../translations/pl.json';
import type { AppState } from '../types/redux.types';
import GlobalStyle from './App.styles';
import theme from './muiTheme';
import Navigation from './Navigation/Navigation';
import TopAppBar from './TopAppBar/TopAppBar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth());
  }, [dispatch]);

  const preventScrolling = useSelector((state: AppState) => state.loginModal.showModal);

  const language = navigator.language.split(/[-_]/)[0];
  const messages = {
    en: messagesEn,
    pl: messagesPl,
  };

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <GlobalStyle preventScrolling={preventScrolling} />
        <ThemeProvider theme={theme}>
          <TopAppBar />
          <Navigation />
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default App;
