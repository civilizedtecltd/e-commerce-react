import { combineReducers } from 'redux';
import bookReducer from "./bookReducer";

const rootReducers = combineReducers(
    {
        book: bookReducer
    }
);

export default rootReducers;
