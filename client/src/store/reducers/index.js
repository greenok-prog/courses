import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    course: courseReducer,
    user: userReducer
})