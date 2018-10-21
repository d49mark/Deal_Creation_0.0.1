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
console.disableYellowBox = true;

//make store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
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
