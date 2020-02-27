import React, { Component } from "react";
import { connect } from "react-redux";
import { ToDo } from "./ToDo";
import { onMarkTodoAsDone } from "./../redux/actions";

class ListToDos extends Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todolist.map((todo, index) => (
          <ToDo
            key={index}
            label={todo.label}
            done={todo.done}
            index={index}
            onToDoChange={index => {
              this.props.dispatch(onMarkTodoAsDone(index));
            }}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todolist: state.todo.todolist
  };
}

export default connect(mapStateToProps)(ListToDos);
