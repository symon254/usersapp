import {
    GET_USER,
    GET_USERS,
    GET_USERS_FAIL,
    CREATE_USER,
    CREATE_USER_FAIL,
    DELETE_USER,
} from "../Actions/types";

const initialState = { users: [] };

export const userListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER:
            return [...state, payload];
        case CREATE_USER_FAIL:
            return { error: payload };
        case GET_USER:
            return payload;
        case GET_USERS:
            return { ...state, users: payload };
        case GET_USERS_FAIL:
            return { error: payload };
        case DELETE_USER:
            return state.filter(({ id }) => id !== payload.id);

        default:
            return state;
    }
};
