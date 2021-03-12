import { combineReducers } from "redux";
import marketPlaceStandardData from "./marketPlaceStandardData";

const AddAllReducers = combineReducers({
  marketPlaceStandardData: marketPlaceStandardData,
 
});

export default AddAllReducers;