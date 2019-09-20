import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import getModesByDateInitial from "./reducers/getModesByDateInitial";
import "typeface-roboto";

const store = createStore(getModesByDateInitial, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
