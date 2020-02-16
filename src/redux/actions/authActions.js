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

            } catch (error) {
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
            }

        }).catch(error => {
            console.log("login error: ", error);
            return dispatch({
                    type: Types.USER_LOGIN_ERROR,
                    payload: {
                        status: {
                            success: false,
                            error: error.response
                        }
                    }
                });
        });
}

const logout = () => dispatch => {
    const { jwt } = store.getState().auth;
    setAuthToken();
    axios.post(URL._LOGOUT, { refreshToken: jwt.refreshToken })
        .then(res=> {
            localStorage.removeItem('authData');
            localStorage.removeItem('state');
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
             payload: { ...res.data.data}
         }))
         .catch(error => {
            const response = (error.response.data) ? error.response.data :  '';
            return dispatch({
                type: Types.USER_UPDATE_ERROR,
                payload: {
                           success: false,
                           message: response.messages
                         }
            });
         })
}

const setPayment = (info) => dispatch => {
    setAuthToken();
    axios.post(URL._USER_PAYMENT, info)
         .then(res => {
             return dispatch({
                type: Types.SET_PAYMENT,
                payload: [ ...res.data.data ]
            })
         })
         .catch(error=> console.log(error));
}

const deletePayment = (id) => dispatch => {
    setAuthToken();
    axios.post(URL._DELETE_PAYMENT(id))
         .then(res=> dispatch({
             type: Types.DELETE_PAYMENT,
             payload: [...res.data.data]
         }))
         .catch(error => console.log(error));
}

const confirmOrder = (data) => dispatch => {
    setAuthToken();
    axios.post(URL._CONFIRM_ORDER, { ...data })
         .then(res => {
            return dispatch({
                type: Types.CONFIRM_ORDER,
                payload: [ ...res.data.data ]
            })
         })
         .catch(error => {
             console.log(error.response)
         })
}

const authNotInState = (authData) => ({
    type: Types.AUTH_NOT_IN_STATE,
    payload: authData
});


const updatePaymentMethod = (data) => dispatch => {
    setAuthToken();
    axios.post(URL.UPDATE_PAYMENT_METHOD, data).then(res => {
        return dispatch({
          type: Types.UPDATE_PAYMENT_METHOD,
          payload: [res.data.data]
        });
    }).catch(error=>console.log(error))
}

/* const authDataNotInState = (auth) => {
    return {
        type: Types.AUTH_NOT_IN_STATE,
        payload: auth
    }
} */


export {
  login,
  logout,
  authNotInState,
  update,
  getUser,
  setPayment,
  deletePayment,
  confirmOrder,
  updatePaymentMethod,
 /*  authDataNotInState */
};
