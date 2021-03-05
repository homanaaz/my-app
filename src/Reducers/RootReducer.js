import { combineReducers } from "redux";
import moments from "./Momentia";
//import eWill from "./EWill";

const rootReducer = combineReducers({
  momentia: moments,
 // eWill: eWill
});

export default rootReducer;
