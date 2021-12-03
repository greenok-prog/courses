import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { courseReducer } from "./reducers/courseReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(courseReducer, composeWithDevTools(applyMiddleware(thunk)))