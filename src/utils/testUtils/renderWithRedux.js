// @flow

import { render } from '@testing-library/react';
import type { Element } from 'react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import index from '../../reducers/index';
import messagesEn from '../../translations/en.json';
import messagesPl from '../../translations/pl.json';
import type { AppState } from '../../types/redux.types';

const messages = {
  en: messagesEn,
  pl: messagesPl,
};

const renderWithRedux = (
  ui: Element<any>,
  {
    initialState,
    store = createStore(index, initialState),
    locale = 'en',
  }: { initialState?: AppState, store?: any, locale?: string },
) => {
  return {
    ...render(
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
          {ui}
        </IntlProvider>
      </Provider>,
    ),
    store,
  };
};

export default renderWithRedux;
