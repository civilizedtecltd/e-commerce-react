import * as Types from '../actions/actionTypes';
const siteReducers = (state = {}, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_CATEGORY:
            return {
                categories: action.payload
            }
        default:
            return state
    }
}

export default siteReducers