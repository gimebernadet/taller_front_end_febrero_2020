import {
    ACTIONS
} from '../../constants';

const initialState = {
    newTodo: "",
    todolist: [{
        label: "estudiar",
        done: true
    }]
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.CREATE_TODO:
            const todolist = state.todolist
            return {
                ...state,
                newTodo: '',
                    todolist: [...todolist, {
                        label: action.payload,
                        done: false
                    }]
            };
        case ACTIONS.MARK_TODO_AS_DONE:
            let newTodoList = [...state.todolist]
            newTodoList[action.payload].done = !newTodoList[action.payload].done;
            return {
                ...state, todolist: newTodoList
            };
        case ACTIONS.ON_CHANGE_NEW_TODO:
            return {
                ...state, newTodo: action.payload
            };
        default:
            return state;
    }
}