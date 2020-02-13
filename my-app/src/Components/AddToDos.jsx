import React, { Component } from "react";

export default class AddToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: ""
    };
  }

  addToDo(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.newToDo);
    this.setState({ newToDo: "" });
  }

  handleChange(event) {
    this.setState({ newToDo: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          className="todo-form"
          placeholder="Add todo text..."
          value={this.state.newToDo}
          onChange={event => this.handleChange(event)}
        ></input>
        <button onClick={event => this.addToDo(event)}>Add</button>
      </div>
    );
  }
}
