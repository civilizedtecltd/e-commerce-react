import * as Types from '../actions/actionTypes';
import axios from 'axios';
import decode from 'jwt-decode';
import store from '../store';
import { URL } from '../../constants/config';
import {setAuthToken, removeAuthToken } from '../../helpers/setAuthToken';


const login = (authData) => dispatch => {
    removeAuthToken();
    axios.post(URL._LOGIN, authData)
        .then(res => {

            try{
                const jwt = res.data.data;
                const { data } = decode(jwt.token);

                localStorage.setItem('authData', JSON.stringify(jwt));
                setAuthToken(jwt.token);

                return dispatch({
                    type: Types.USER_LOGIN,
                    payload: {
                        jwt: jwt,
                        user: data,
                        status: {
                            success: true
                        }
                    }
                });

            }catch(error){
                return dispatch({
                    type: Types.USER_LOGIN_ERROR,
                    payload: {
                        status: {
                            success: false,
                            error: error
                        }
                    }
                });
            }

        }).catch(error => {

            console.log(error);
            return dispatch({
                    type: Types.USER_LOGIN_ERROR,
                    payload: {
                        status: {
                            success: false,
                            error: error
                        }
                    }
                });
        });
}

const logout = () => dispatch => {
    const { jwt } = store.getState().auth;
    setAuthToken();
    axios.post(URL._LOGOUT, { refreshToken: jwt.refreshToken })
        .then(res => {
            localStorage.removeItem('authData');
            return dispatch({
                type: Types.USER_LOGOUT,
                payload: {
                    jwt: {},
                    user: {},
                    status: {}
                }
            })
        }).catch(error => {
            console.log(error);
        })
};

const getUser = () => dispatch => {
    setAuthToken();
    axios.get(URL._GET_USER)
         .then(res => dispatch({
            type: Types.USER_INFO,
            payload: { ...res.data.data }
         }))
         .catch(error => console.log(error))
}

const update = (info) => dispatch => {
    setAuthToken();
    axios.post(URL._USER_UPDATE, info)
         .then(res => dispatch({
             type: Types.USER_UPDATE,
             payload: { ...res.data.data }
         }))
         .catch(error => console.log(error))
}

const authNotInState = (authData) => ({
    type: Types.AUTH_NOT_IN_STATE,
    payload: authData
});


export {
    login,
    logout,
    authNotInState,
    update,
    getUser
}
