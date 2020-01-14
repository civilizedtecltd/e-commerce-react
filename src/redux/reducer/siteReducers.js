import * as Types from '../actions/actionTypes';
const siteReducers = (state = {}, {type, payload}) => {
    switch (type) {
        case Types.FETCH_ALL_CATEGORY:
            return {
                categories: payload
            }
        case Types.SITE_NOT_IN_STATE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default siteReducers
