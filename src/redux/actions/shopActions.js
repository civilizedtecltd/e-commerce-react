import * as Types from './actionTypes';
import axios from 'axios';
import { URL } from '../../constants/config';

const addToCart = (book) => {
    return {
        type: Types.ADD_TO_CART,
        payload: book
    }
}

const removeFromCart = (id) => {
    return {
        type: Types.REMOVE_FROM_CART,
        payload: id
    }
}

const increaseQuantity = (id) => {
    return {
        type: Types.INCREASE_QUANTITY,
        payload: id
    }
}

const decreaseQuantity = (id) => {
    return {
        type: Types.DECREASE_QUANTITY,
        payload: id
    }
}


const deleteAllFromCart = () => {
    return {
        type: Types.DELETE_ALL_FORM_CART,
        payload:[]
    }
}

const setDeliveryAddress = (data) => ({
    type: Types.SET_ADDRESS_DETAILS,
    payload: {
        ...data
    }
})

const setPaymentDetails = (data) => ({
    type: Types.SET_PAYMENT_DETAILS,
    payload: {
        ...data
    }
})

const confirmOrder = (data) => dispatch => {
    axios.post(URL, { ...data })
         .then(res => {
            return dispatch({
                type: Types.CONFIRM_ORDER
            })
         })
         .catch(error => {
             console.log(error)
         })
}



export {

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    deleteAllFromCart,
    setDeliveryAddress,
    setPaymentDetails,
    confirmOrder

}
