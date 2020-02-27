import {
    combineReducers
} from "redux";
import todo from './todoReducer';

const rootReducer = combineReducers({
    todo
})

export default rootReducer;


// {
//     todo: {
//            newTodo: "",
//            listtodo: []
//     },
//     user: {

//     }
// }