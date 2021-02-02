import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;  //two variable id and content
      return {   // here new state return to store.js    
        ...state,
        allIds: [...state.allIds, id],   //maintain all id 
        byIds: {
          ...state.byIds,  //abc &pqr   maintain data 
          [id]: {    //2 = pqr
            content,    //put and update
            completed: false     //
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
