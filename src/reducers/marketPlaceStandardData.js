import {
  INCREMENT,DECREMENT
} from "../actionTypes";

const initialstate = {
  quantity:0,
};

const marketPlaceStandardData = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        quantity: action.params
      };
    case DECREMENT:
      return {
        ...state,
        quantity: action.params,
      };
    default:
      return state;
  }
};

export default marketPlaceStandardData;