import {
    ACTIONS
} from "./../constants";

export function createTodo(label) {
    return {
        type: ACTIONS.CREATE_TODO,
        payload: label
    };
}

export function onChangeNewTodo(txt) {
    return {
        type: ACTIONS.ON_CHANGE_NEW_TODO,
        payload: txt
    };
}

export function onMarkTodoAsDone(index) {
    return {
        type: ACTIONS.MARK_TODO_AS_DONE,
        payload: index
    };
}