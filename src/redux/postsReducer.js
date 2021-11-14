import {CREATE_POST, FETCH_POSTS} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}


// Чистые функции
export const postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_POST: {
            return { ...state, posts: [...state.posts, payload]}
        }
        case FETCH_POSTS: {
            return { ...state, fetchedPosts: payload}
        }
        default: {
            return state;
        }
    }

}