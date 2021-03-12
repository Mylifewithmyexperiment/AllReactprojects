import {INCREMENT,DECREMENT} from "../actionTypes";

export const incremenValue = (params) => {
  return {
    type: INCREMENT,
    params :++params
  };
};

export const decrementValue = (params) => {
  return {
    type :  DECREMENT,
    params: --params,
  };
};


