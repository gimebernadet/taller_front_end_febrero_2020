import React, { Component } from "react";
import AddToDos from "./AddToDos";
import ListToDos from "./ListToDos";

export default class Container extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>ToDo List!</h1>
          <AddToDos />
        </header>
        <div className="content">
          <ListToDos />
        </div>
      </div>
    );
  }
}
