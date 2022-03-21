import {
    GET_USER,
    // GET_USERS
} from "./types";
//import axios from "axios";
//import http from "../Utils/api";

// export const getUsers = () => async (dispatch) => {
//     try {
//         const res = await axios.get(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         dispatch({
//             type: GET_USER,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

export const getUsers = () => async (dispatch) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

// export const getUsers = () => async (dispatch) => {
//     try {
//         const res = await http.get("/users");
//         dispatch({
//             type: GET_USER,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

//const API_URL = "https://jsonplaceholder.typicode.com/users";

// export const getList = () => {
//     try {
//         return async (dispatch) => {
//             const result = await fetch(
//                 "https://jsonplaceholder.typicode.com/users",
//                 {
//                     method: "GET",
//                     headers: {
//                         "Content-type": "application/json",
//                     },
//                 }
//             );
//             const json = await result.json();

//             dispatch({
//                 type: GET_USERS,
//                 payload: json.data,
//             });
//         };
//     } catch (err) {
//         console.log(err);
//     }
// };
