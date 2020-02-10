import React, { Component } from "react";

export default class SubComponente extends Component {
  render() {
    const { nombre, edad } = this.props;
    return (
      <p>
        Hola {nombre} de {edad}!
      </p>
    );
  }
}
