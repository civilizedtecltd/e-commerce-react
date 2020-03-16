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
                pending:false
            })
        })
};


export const getSubscriber = (email) => dispatch => {
    dispatch(fetchPending())
    axios.get(URL.__SUBSCRIBER(email)).then(res => {
        dispatch({
            type: Types.GET_SUBSCRIBER,
            payload: res.data.data,
            pending:false
        })
        
    }).catch(error => {
        console.log(error)
    })
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
