import * as Types from './actionTypes';
import { URL } from '../../constants/config';
import axios from 'axios';

export const fetchCategoryList = () => dispatch => {
    dispatch(fetchPending());
    axios.get(URL._CATEGORY)
        .then(res => {
            dispatch({
                type: Types.FETCH_ALL_CATEGORY,
                payload: res.data.data,
                pending: false
            })
        })
};


export const getSubscriptions = (email) => dispatch => {
    dispatch(fetchPending())
    axios.get(URL.__GET_SUBSCRIPTIONS(email))
        .then(res => {
            dispatch({
                type: Types.GET_SUBSCRIPTIONS,
                payload: res.data.data,
                pending: false
            })
        }).catch(error => {
            console.log(error)
        })
}

export const setSubscriptions = (options) => {
    /* axios.post(URL.__SET_SUBSCRIPTIONS, options)
         .then(res => dispatch({
                type: Types.SET_SUBSCRIPTIONS,
                payload: {
                    ...res.data.data,
                    message: res.data.message
                }
         }))
         .catch(error => dispatch({
                type: Types.SET_SUBSCRIPTIONS_ERROR,
                payload: {
                    message: error.response.data.message
                }
         })) */

    return {
        type: Types.SET_SUBSCRIPTIONS,
        payload: { ...options }
    }
}


const fetchPending = () => {
    return {
        type: Types.FETCH_SUBSCRIBER_PENDING,
        payload: null,
        pending: true
    }
}

export const subscriberNotInState = (subscriber) => {
    return {
        type: Types.NOT_STATE_SUBSCRIBER,
        payload: subscriber
    }
}


export const siteNotInState = (data) => ({
    type: Types.SITE_NOT_IN_STATE,
    payload: data
})


export const setRedirectToOrder = (data) => ({
    type: Types.REDIRECT_ORDER,
    payload: data
})
