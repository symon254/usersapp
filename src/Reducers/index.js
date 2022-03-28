import { combineReducers } from "redux";
import { postListReducer } from "./posts";

export default combineReducers({
    postList: postListReducer,
});
