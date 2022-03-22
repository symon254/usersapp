import { combineReducers } from "redux";
import { userListReducer } from "./users";

export default combineReducers({
    userList: userListReducer,
});
