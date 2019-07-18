import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import NavBar from "./components/navbar";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
  }
}

export default App;
