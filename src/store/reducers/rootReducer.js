import appReducer from "./appReducer";
// combineReducers la de gom cac reducer lai thanh 1
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer,
})

export default rootReducer;
