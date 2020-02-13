import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        LOGIN
        <button onClick={() => this.props.goToHome()}>SUBMIT</button>
        <button onClick={() => this.props.goToSignUp()}>GO TO SIGN-UP</button>
      </div>
    );
  }
}
