import React, { Component } from "react";
import { connect } from "react-redux";
import { createTodo, onChangeNewTodo } from "./../redux/actions";

class AddToDos extends Component {
  addToDo = event => {
    event.preventDefault();
    this.props.dispatch(createTodo(this.props.newTodo));
  };

  handleChange = event => {
    this.props.dispatch(onChangeNewTodo(event.target.value));
  };

  render() {
    return (
      <div>
        <input
          className="todo-form"
          placeholder="Add todo text..."
          value={this.props.newTodo}
          onChange={event => this.handleChange(event)}
        ></input>
        <button onClick={event => this.addToDo(event)}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newTodo: state.todo.newTodo
    //state = store
    // todo =  nombre del reducer que use en el rootReducer
    //newTodo = atributo que quiero tener en mis props
  };
}

export default connect(mapStateToProps)(AddToDos);
