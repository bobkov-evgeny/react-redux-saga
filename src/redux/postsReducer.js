import {CREATE_POST} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_POST: {
            return { ...state, posts: [...state.posts, payload]}
        }
        default: {
            return state;
        }
    }

}