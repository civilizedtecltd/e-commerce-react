import decode from 'jwt-decode';
import isEmpty from 'lodash/isEmpty';
import store from '../redux/store';
import {login, authNotInState} from '../redux/actions/authActions';

const checkAuth = () => {
    try {
        const jwt = JSON.parse(localStorage.getItem('authData'));

        if(jwt === null)
            return false;

        const token = jwt.token;
        const refreshToken = jwt.refreshToken;

        if (!token || !refreshToken)
            return false;

        const {data, exp} = decode(token);

        const auth = store.getState().auth;
        if(isEmpty(auth.jwt)){

            const authData = {
                jwt: jwt,
                user: data,
                status: {
                    success: true
                }
            }

            store.dispatch(authNotInState(authData));
        }

        const currentTime = new Date().getTime()/1000;
        if(exp <= currentTime ){
            console.log(`token expired....`);
            store.dispatch(login({refreshToken: refreshToken}))
            const auth = store.getState().auth;

            if(!auth.status.success){
                console.log(auth.status.error)
                return false;
            }
        }

        return true;

    } catch(ex) {
        console.log(ex);
        return false;
    }
}

export default checkAuth;
