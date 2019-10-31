import {combineReducers} from 'redux';
import ECommerce from './ECommerce';
import visibilityFilter from './VisibilityFilters';
const rootReducer=combineReducers({
         ECommerce,
         visibilityFilter
})

export default rootReducer;