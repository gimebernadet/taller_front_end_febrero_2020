import React, { Component } from "react";
import AddToDos from "./AddToDos";
import { ListToDos } from "./ListToDos";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToDos: [{ label: "Ir al super", done: true }]
    };
  }

  addItem = label => {
    let { listToDos } = this.state;
    // listToDos.push({ label: label, done: false });
    // this.setState({ listToDos: listToDos });
    this.setState({ listToDos: [...listToDos, { label, done: false }] });
  };

  handleToDoChange = (index, value) => {
    let { listToDos } = this.state;
    listToDos[index].done = value;
    this.setState({ listToDos });
  };

  render() {
    return (
      <div>
        <AddToDos onSubmit={this.addItem} />
        <ListToDos
          list={this.state.listToDos}
          onToDoChange={this.handleToDoChange}
        />
      </div>
    );
  }
}
