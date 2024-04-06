import { applyMiddleware, createStore } from "redux";
import CounterReducer from "./reducer/CounterReducer";
import postReducer from "./reducer/PostReducer";
import { thunk } from "redux-thunk";


// const store = createStore(CounterReducer);
const store = createStore(postReducer, applyMiddleware(thunk))
export default store;