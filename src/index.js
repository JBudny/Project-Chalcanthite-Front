import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import index from './reducers/index';
import * as serviceWorker from './serviceWorker';

if (!Intl.PluralRules) {
  import('@formatjs/intl-pluralrules/polyfill');
  import('@formatjs/intl-pluralrules/dist/locale-data/en');
  import('@formatjs/intl-pluralrules/dist/locale-data/pl');
}

if (!Intl.RelativeTimeFormat) {
  import('@formatjs/intl-relativetimeformat/polyfill');
  import('@formatjs/intl-relativetimeformat/dist/locale-data/en');
  import('@formatjs/intl-relativetimeformat/dist/locale-data/pl');
}

const store = createStore(index, applyMiddleware(reduxThunk));
const root = document.getElementById('root');

if (root)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );

serviceWorker.register();
