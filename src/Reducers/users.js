import { GET_USER, GET_USERS } from "../Actions/types";

const initialState = { users: [] };

function users(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_USER:
            return payload;
        case GET_USERS:
            return { users: payload };
        default:
            return state;
    }
}
export default users;
