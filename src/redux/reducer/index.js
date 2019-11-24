import { combineReducers } from 'redux';
import bookReducer from "./bookReducer";
import shopReducer from './shopReducer';

const rootReducers = combineReducers(
    {
        book: bookReducer,
        shop: shopReducer
    }
);

export default rootReducers;
