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

const deliveryMethod = () => dispatch => {
    axios.get(URL._DELIVERY_METHOD)
          .then(res => {
            return dispatch({
                type:Types.DELIVERY_METHOD_FETCH,
                payload: res.data.data
            })
          })
          .catch(error => console.log(error))
}

const promoCodeInfo = (code) => dispatch => {

    axios.get(URL._GET_PROMO_INFO(code))
         .then(res => {

            switch(res.status){
                case 200:
                    return dispatch({
                        type: Types.PROMO_CODE_FETCH,
                        payload: {
                            status: true,
                            ...res.data.data
                        }
                    });
                case 203:
                    return dispatch({
                        type: Types.PROMO_CODE_FETCH,
                        payload: {
                            status: false,
                            message: res.data.messages
                        }
                    });
                default:
                    return dispatch({
                        type: Types.PROMO_CODE_FETCH,
                        payload: {
                            status: false,
                            message: 'Unexpected error.'
                        }
                    });
            }
         })
         .catch(error => console.log(error))
}

const clearPromo = () => ({
    type: Types.PROMO_CLEAR,
    payload: {
        status: false
    }
})

const currencyExchangeRate = (base) => dispatch => {
    axios.get(URL.__CURRENCY_EXCHANGE_RATE(base))
         .then(res =>{
             const data = {
                 base: base,
                 kes: res.data.rates.KES
             }
            return dispatch({
                type: Types.CURRENCY_EXCHANGE_RATE,
                payload: data
            })
         })
         .catch(error => console.log(error))
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
    deliveryMethod,
    promoCodeInfo,
    clearPromo,
    currencyExchangeRate
}
