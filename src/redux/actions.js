import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;



export const addTodo = content => ({ // based on type
  type: ADD_TODO,
  payload: {    //as an object //first goes to index.js of reducers and from there based on action type it goes to todo class
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
//all comes here itself
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });  // from click it will get all ,incomplete or completed
// go to visibilitty filter