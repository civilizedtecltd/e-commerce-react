import { combineReducers } from 'redux';
import bookReducer      from "./bookReducer";
import shopReducer      from './shopReducer';
import authReducer      from './authReducer';
import favoriteReducer  from './favoriteReducer';
import filterReducer  from './filterReducer';


const rootReducers = combineReducers(
    {
        book        :   bookReducer,
        shop        :   shopReducer,
        auth        :   authReducer,
        favorite    :   favoriteReducer,
        filter      :   filterReducer,
      
    }
);

export default rootReducers;
