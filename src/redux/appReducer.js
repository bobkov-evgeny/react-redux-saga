import {ADD_ERROR, CLEAR_ERRORS, HIDE_LOADER, SHOW_LOADER} from "./types";

const initialState = {
    loading: false,
    error: ''
}

export const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_LOADER: return {...state, loading: true};
        case HIDE_LOADER: return {...state, loading: false};
        case ADD_ERROR: return {...state, error: payload};
        case CLEAR_ERRORS: return {...state, error: ''};
        default: return state;
    }
}