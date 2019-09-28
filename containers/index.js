import React from "react";

import { Provider } from "react-redux";

import store, { persistor } from "./containers/store"

import { PersistGate } from "redux-persist/es/integration/react"

import Container from "./containers/index"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container />
        </PersistGate>
      </Provider>
    );
  }