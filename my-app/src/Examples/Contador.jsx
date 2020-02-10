import React, { Component } from "react";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    //hola

    this.increment = this.increment.bind(this);
  }

  increment(event) {
    debugger;
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>La cuenta es: {this.state.count}</p>
        <button onClick={event => this.increment()}>+1</button>
      </div>
    );
  }
}
