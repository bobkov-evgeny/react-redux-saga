import {CREATE_POST} from "./types";
import {addError} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            console.log(action, 'test')
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(word => action.payload.title.includes(word));
                if (found.length) {
                    return dispatch(addError('Вы спамер, мы Вас не звали'))
                }
            }
            return next(action);
        }
    }
}