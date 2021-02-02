let initialState = {
  cartItems: []
};

function cartItems(state=initialState, action) {
  switch(action.type) {
  case 'ADD_ITEM':
    action.data.isAddedToCart = true;
    return {
      cartItems: [...state.cartItems, action.data]
    };
  case 'REMOVE_ITEM':
    var product = state.cartItems.find(product => product.id === action.id);
    product.isAddedToCart = false;
    return {
      cartItems: state.cartItems.filter((element) => element.id !== action.id)
    };
  default:
    return state;
  }
}

export default cartItems;
