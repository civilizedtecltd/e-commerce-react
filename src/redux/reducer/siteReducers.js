import * as Types from '../actions/actionTypes';

const siteReducers = (state = { pending: false }, actions) => {
    const { type, payload, pending } = actions;
    switch (type) {
        case Types.FETCH_SUBSCRIBER_PENDING:
            return {
                ...state,
                pending: pending
            }
        case Types.FETCH_ALL_CATEGORY:
            return {
                ...state,
                categories: payload
            }
        case Types.SITE_NOT_IN_STATE:
            return {
                ...state,
                ...payload,
            }
        case Types.GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: payload,
                pending: false
            }
        case Types.SET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: payload,
            }
        case Types.SET_SUBSCRIPTIONS_ERROR:
            return {
                ...state,
                subscriptions: payload
            }
        case Types.NOT_STATE_SUBSCRIBER:
            return {
                ...state,
                subscriptions: payload,
                pending: false
            }
        case Types.REDIRECT_ORDER: {
            return {
                ...state,
                redirect_order: payload
            }
        }
        default:
            return state
    }
}

export default siteReducers
