
import { combineReducers } from "redux";
import sendProductToCart from "./sendProductToCart"
 
const AddAllReducers =combineReducers({
sendProductToCart :sendProductToCart
});

export default AddAllReducers;