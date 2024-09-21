import todoReducer from "./todoReducer.js";
import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer.js";

const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer

})

const store = createStore(rootReducer);

export default store;