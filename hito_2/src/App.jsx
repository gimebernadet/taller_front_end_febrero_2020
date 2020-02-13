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

  goToLogin = () => {
    this.setState({
      showLogin: true,
      showSignUp: false,
      showHome: false
    });
  };

  goToSignUp = () => {
    this.setState({
      showLogin: false,
      showSignUp: true,
      showHome: false
    });
  };

  goToHome = () => {
    this.setState({
      showLogin: false,
      showSignUp: false,
      showHome: true
    });
  };

  render() {
    return (
      <div className="app">
        {/* es equivalente a: {this.state.showLogin ? <Login /> : null} */}

        {this.state.showLogin && (
          <Login goToHome={this.goToHome} goToSignUp={this.goToSignUp} />
        )}
        {this.state.showSignUp && <SignUp goToLogin={this.goToLogin} />}
        {this.state.showHome && <Home goToLogin={this.goToLogin} />}
      </div>
    );
  }
}
