import { combineReducers } from 'redux';
import bookReducer from "./bookReducer";
import shopReducer from './shopReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers(
    {
        book: bookReducer,
        shop: shopReducer,
        auth: authReducer
    }
);

export default rootReducers;
