import React from "react";
import { ToDo } from "./ToDo";

export const ListToDos = props => {
  return (
    <ul>
      {props.list.map((todo, index) => (
        <ToDo
          key={index}
          label={todo.label}
          done={todo.done}
          index={index}
          onToDoChange={props.onToDoChange}
        />
      ))}
    </ul>
  );
};
