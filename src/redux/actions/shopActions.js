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

const updateQuantity = ({id, qty}) => {
    return {
        type: Types.UPDATE_QUANTITY,
        payload: {id, qty}
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


const shopNotInState = (shop) =>({
    type: Types.SHOP_NOT_IN_STATE,
    payload: {...shop}
})

const deliveryMethod = () => dispatch=>{
    axios.get(URL.PAYMENT_METHOD)
          .then(res=>dispatch({
              type:Types.DELIVERY_METHOD_FETCH,
              payload: res.data.data
          }))
}


export {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    deleteAllFromCart,
    setDeliveryAddress,
    setPaymentDetails,
    shopNotInState,
    updateQuantity,
    deliveryMethod
}
