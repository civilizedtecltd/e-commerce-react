import * as Types from '../actions/actionTypes';

const siteReducers = (state = { pending:false }, actions) => {
    const { type, payload, pending } = actions;
    switch (type) {
        case Types.FETCH_SUBSCRIBER_PENDING:
            return {
                ...state,
                pending:pending
            }
        case Types.FETCH_ALL_CATEGORY:
            return {
                categories: payload
            }
        case Types.SITE_NOT_IN_STATE:
            return {
                ...state,
                ...payload,
            }
        
        case Types.GET_SUBSCRIBER:
            return {
                ...state,
                subscriber: payload,
                pending:false
            }
        case Types.NOT_STATE_SUBSCRIBER:
            return {
                ...state,
                subscriber: payload,
                pending:false
            }
        default:
            return state
    }
}

export default siteReducers
