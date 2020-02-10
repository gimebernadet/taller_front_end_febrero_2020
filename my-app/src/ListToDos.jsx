import React from 'react';
import { ToDo } from "./ToDo"


export const ListToDos = (props) => {
    return <ul>{props.list.map(todo => <ToDo label={todo.label} />)}</ul>
}