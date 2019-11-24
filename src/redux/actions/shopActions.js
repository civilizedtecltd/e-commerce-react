import * as Types from './actionTypes';

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



export {

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}
