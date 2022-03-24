import {
    GET_USERS,
    GET_USERS_FAIL,
    CREATE_USER,
    CREATE_USER_FAIL,
    DELETE_USER,
} from "./types";
import api from "../Utils/api";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await api.get("/posts?_limit=10");

        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: err.response,
        });
    }
};
export const createUser = (title, description) => async (dispatch) => {
    try {
        const res = await api.post("/posts", { title, description });

        dispatch({
            type: CREATE_USER,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: CREATE_USER_FAIL,
            payload: err.response,
        });
    }
};
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.delete(`/posts/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
