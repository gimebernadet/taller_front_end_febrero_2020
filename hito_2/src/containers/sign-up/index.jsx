import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        SIGN-UP
        <button onClick={() => this.props.goToLogin()}>SUBMIT</button>
        <button onClick={() => this.props.goToLogin()}>GO TO LOGIN</button>
      </div>
    );
  }
}
