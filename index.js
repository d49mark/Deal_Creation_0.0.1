/** @format */

import { AppRegistry } from "react-native";
import App from "./src/App";
import React from "react";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./src/components/Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/components/Sagas";

const sagaMiddleware = createSagaMiddleware();
//make store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
//wrap main component in store
const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppContainer);
