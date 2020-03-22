import axios from 'axios';
import decode from 'jwt-decode';
import isEmpty from 'lodash/isEmpty';
import store from '../redux/store';
import {login, authNotInState} from '../redux/actions/authActions';
const setAuthToken = (token) => {

    checkJwtToken();

    if (token) {

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        const { jwt } = store.getState().auth;
        if(jwt.token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwt.token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}

const removeAuthToken = () => {
    delete axios.defaults.headers.common['Authorization'];
}

const checkJwtToken =  () => {

    try {
        const { jwt } = store.getState().auth;

        if(!isEmpty(jwt)){
            const { exp } = decode(jwt.token);
            const currentTime = new Date().getTime()/1000;
            const remainingTime = exp - currentTime;
            
            console.log('remaining time: ', remainingTime);

             if( remainingTime <= 10 ){
                 store.dispatch(login({refreshToken: jwt.refreshToken}))
            }
        }

    } catch (error) {
        console.log('checkJwtToken ', error)
    }


}

export {
    setAuthToken,
    removeAuthToken
}
