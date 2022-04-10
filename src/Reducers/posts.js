import {
    GET_POST,
    GET_POSTS,
    GET_POSTS_FAIL,
    CREATE_POST,
    CREATE_POST_FAIL,
    DELETE_POST,
    UPDATE_POST,
    UPDATE_POST_FAIL,
} from "../Actions/types";

const initialState = { posts: [] };

export const postListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_POST:
            return [...state, payload];
        case CREATE_POST_FAIL:
            return { error: payload };
        case GET_POST:
            return payload;
        case GET_POSTS:
            return { ...state, posts: payload };
        case GET_POSTS_FAIL:
            return { error: payload };
        case DELETE_POST:
            return state.filter(({ id }) => id !== payload.id);

        case UPDATE_POST:
            return [...state, ...payload];
        // case UPDATE_POST:
        //     return state.map((post) => {
        //         if (post.id === payload.id) {
        //             return {
        //                 ...post,
        //                 ...payload,
        //             };
        //         } else {
        //             return post;
        //         }
        //     });
        // case UPDATE_POST:
        //     const newState = { ...state };

        //     const indexOfElementToUpdate = newState[action.itemType].findIndex(
        //         (item) => item._id === action.id
        //     );

        //     newState[action.itemType][indexOfElementToUpdate] = action.data;

        //     return newState;

        case UPDATE_POST_FAIL:
            return { error: payload };
        default:
            return state;
    }
};
