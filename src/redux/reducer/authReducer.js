import * as Types from '../actions/actionTypes';
const initState = {
    jwt: {},
    user: {
        payment:[]
    },
    status: {}
}
const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case Types.USER_LOGIN:
        case Types.USER_LOGOUT:
        case Types.USER_LOGIN_ERROR:
        case Types.AUTH_NOT_IN_STATE:
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
        case Types.SET_PAYMENT:
        case Types.DELETE_PAYMENT:
            return {
                ...state,
                user:{
                    ...state.user,
                    payment: payload
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
