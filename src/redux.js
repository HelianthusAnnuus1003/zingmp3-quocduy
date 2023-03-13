import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// applyMiddleware - de redux su dung dc cac middle ware
// thunk - de xu li bat dong bo trong redux, giup cho action tra ve 1 function

const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}

export default reduxConfig;