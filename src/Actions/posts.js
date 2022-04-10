import {
    GET_POSTS,
    GET_POSTS_FAIL,
    CREATE_POST,
    CREATE_POST_FAIL,
    DELETE_POST,
    UPDATE_POST,
    UPDATE_POST_FAIL,
    GET_POST,
} from "./types";
import api from "../Utils/api";

export const getPosts = () => async (dispatch) => {
    try {
        const res = await api.get("/users");

        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAIL,
            payload: err.response,
        });
    }
};

export const getPost = (id, data) => async (dispatch) => {
    try {
        const res = await api.get(`/users/${id}`, data);
        dispatch({
            type: GET_POST,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAIL,
            payload: err.response,
        });
    }
};

export const createPost = (name) => async (dispatch, resolve) => {
    try {
        const res = await api.post("/users", { name });

        dispatch({
            type: CREATE_POST,
            payload: res,
        });
        resolve(res);
    } catch (err) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: err.response,
        });
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.delete(`/users/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = (id, data) => async (dispatch) => {
    try {
        const res = await api.put(`/users/${id}`, data);
        dispatch({
            type: UPDATE_POST,
            payload: res.data.data,
        });
        console.log(res);
    } catch (err) {
        dispatch({
            type: UPDATE_POST_FAIL,
            payload: err.response,
        });
    }
};

export const findName = (name) => async (dispatch) => {
    try {
        const res = await api.get(`/users?name=${name}`);
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: GET_POSTS_FAIL,
            payload: err.response,
        });
    }
};

// const updated = () => ({
//     type: UPDATE_POST,
// });
// export const updatePost = (id, data) => {
//     return function (dispatch) {
//         api.put(`/users/${id}`, data).then((res) => {
//             console.log(res);
//             dispatch(updated());
//         });
//     };
// };
