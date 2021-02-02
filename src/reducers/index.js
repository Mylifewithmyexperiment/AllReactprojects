import { combineReducers } from "redux";
import sendHomeData from "./sendHomeData"
 
const AddAllReducers =combineReducers({
    sendHomeData :sendHomeData
});

export default AddAllReducers;