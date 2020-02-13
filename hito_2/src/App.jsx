import React, { Component } from "react";
import Login from "./containers/login";
import Home from "./containers/home";
import SignUp from "./containers/sign-up";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showSignUp: false,
      showHome: false
    };
  }

  render() {
    return (
      <div className="app">
        {this.state.showLogin && <Login />}
        {this.state.showSignUp && <SignUp />}
        {this.state.showHome && <Home />}
      </div>
    );
  }
}
