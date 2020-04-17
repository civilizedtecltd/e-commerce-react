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
             payload: {
                 user: { ...res.data.data },
                 status: {
                    success: true,
                    message: res.data.messages
                 }
             }
         }))
         .catch(error => {
            const response = (error.response) ? error.response.data :  {messages: 'Unknown Error!'};
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
             dispatch({
                type: Types.CONFIRM_ORDER,
                payload: [ ...res.data.data ]
             })

             dispatch(getUser())
            return window.location ='/my-order'
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


export const OauthLogin = (OauthData) => dispatch => {
    removeAuthToken();
    console.log(OauthData)
    axios.post(URL.__OAUTH('login'), {
        email: OauthData.email ? OauthData.email : OauthData.zu || OauthData.Au
    })
        .then(res => {
            try {
                const jwt = res.data.data;
                const {data} = decode(jwt.token);
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
                console.log('Try Catch login error: ', error);
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



//local server response

// eV: "112585867732884445950"
// Ad: "John Kungu"
// JW: "John"
// JU: "Kungu"
// kL: "https://lh4.googleusercontent.com/-0Oz3x1oblls/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcbqfJawRFL9lBKMKEXPhaNuLSdeA/s96-c/photo.jpg"
// Au: "abookstore254@gmail.com"



/*
//https server response
SU: "112585867732884445950"
Ad: "John Kungu"
vW: "John"
wU: "Kungu"
UK: "https://lh4.googleusercontent.com/-0Oz3x1oblls/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcbqfJawRFL9lBKMKEXPhaNuLSdeA/s96-c/photo.jpg"
zu: "abookstore254@gmail.com"
 */


export const OauthSignUp = (OauthData) => dispatch => {
    axios.post(URL.__OAUTH('signup'), {
        email: OauthData.email ? OauthData.email : OauthData.zu || OauthData.Au ,
        first_name: OauthData.first_name ? OauthData.first_name : OauthData.vW || OauthData.JW,
        last_name: OauthData.last_name ? OauthData.last_name : OauthData.wU || OauthData.JU
    }).then(res => {
        dispatch({
            type: Types.SIGNUP_USER,
            payload: {
                signup:true
            }
        })
        if (res.data.success === true) {
           return window.location.href='/login'
        }
    }).catch(error => {
        dispatch({
            type: Types.SIGNUP_ERROR,
            payload: (typeof error.response !== undefined ) ? error.response.data : ''
        })
        setTimeout(() => {
            dispatch({
                type: Types.SIGNUP_ERROR,
                payload:null
            })
        }, 5000);
    })
}

export const emptyStatus = ()  => {
    return ({
        type: Types.EMPTY_STATUS,
        payload: {
            status: {
                error: {
                    data:null
                }
            }
        }
    });
}






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
};
