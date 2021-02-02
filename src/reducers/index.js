import { combineReducers } from 'redux';

import productItems from './productItems';
import cartItems from './cartItems';

let rootReducer = combineReducers({
  productItems,
  cartItems
});

export default rootReducer;