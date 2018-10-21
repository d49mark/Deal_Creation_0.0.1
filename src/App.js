import React, { Component } from "react";
import { Container } from "native-base";
import { RootNavigator } from "./components/config/Router";

//main component
class App extends Component {
  render() {
    return (
      <Container>
        <RootNavigator />
      </Container>
    );
  }
}

export default App;
