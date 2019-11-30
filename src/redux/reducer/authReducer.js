import * as Types from '../actions/actionTypes';
const initState = {

}
const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case Types.USER_LOGIN:
        case Types.USER_LOGOUT:
        case Types.USER_LOGIN_ERROR:
        case Types.AUTH_NOT_IN_STATE:
            return {
                ...payload
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
