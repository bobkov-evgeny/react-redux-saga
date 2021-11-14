import {ADD_ERROR, CLEAR_ERRORS, CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function createPost(post) {
        return {
            type: CREATE_POST,
            payload: post
        }
}

export function fetchPosts() {
        return async dispatch => {
            try {
                dispatch(showLoader());
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

                if(!response.ok) {
                    dispatch(hideLoader());
                    dispatch(addError('Запрос не верный, ошибка 404'));
                    return;
                }

                const json = await response.json();
                dispatch(hideLoader());
                dispatch(clearErrors());
                dispatch({ type: FETCH_POSTS, payload: json})
            } catch (e) {
                dispatch(hideLoader());
                dispatch(addError('Something went wrong. Try again'));
            }

        }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function addError(error) {
    return {
        type: ADD_ERROR,
        payload: error
    }
}
export function clearErrors() {
    return {
        type: CLEAR_ERRORS
    }
}