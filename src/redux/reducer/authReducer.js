import * as Types from '../actions/actionTypes';
const initState = {
    jwt: {},
    user: {
        payment:[],
        order:[]
    },
    status: {}
}
const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case Types.USER_LOGIN:
        case Types.USER_LOGOUT:
        case Types.USER_LOGIN_ERROR:
        case Types.AUTH_NOT_IN_STATE:
        case Types.EMPTY_STATUS:    
            return {
                ...state,
                ...payload
            }
        case Types.USER_INFO:
        case Types.USER_UPDATE:
            return {
                ...state,
                user: {...payload}
            }
        case Types.USER_UPDATE_ERROR:
            return {
                ...state,
                status:{ ...payload}
            }
        case Types.SET_PAYMENT:
        case Types.DELETE_PAYMENT:
            return {
                ...state,
                user:{
                    ...state.user,
                    payment: payload
                }
            }
        case Types.UPDATE_PAYMENT_METHOD:
            return  {...state,
                user: {
                    ...state.user,
                    payment: payload
                }
            }
        case Types.CONFIRM_ORDER:
            return {
                ...state,
                user:{
                    ...state.user,
                    order: payload
                }
            }
        case Types.AUTH_DATA_NOT_IN_STATE:
            return {
                ...state,
                ...payload
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
