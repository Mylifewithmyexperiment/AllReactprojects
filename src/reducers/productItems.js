// import * as action from '../constants/actions';

let initialState = {
  productItems: []
};


function productItems(state=initialState, action) {
  switch(action.type) {
  case 'GET_PRODUCTS':
    return { ...state, loading: true };
  case 'FETCH_PRODUCTS':
    return {
      ...state,
      productItems: [...state.productItems, action.payload.data],
      loading: false
    };

  default:
    return state;
  }
}

export default productItems;
