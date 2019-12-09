import * as Types from '../actions/actionTypes';

const initSate = {
    cart: [],
    address: {},
    payment: {}
};

const shopReducer = (state = initSate, { type, payload }) => {

    let updatedCart = [];
    let updatedItemIndex;

        switch(type){
            case Types.ADD_TO_CART:

                    const localState = JSON.parse(localStorage.getItem('state'));

                    updatedCart = ((localState.shop.cart !== undefined ) ? localState.shop.cart : [] )

                    updatedItemIndex = updatedCart.findIndex(item => item.id === payload.id )

                    if(updatedItemIndex < 0 ){

                        if(payload.quantity !== undefined)
                            updatedCart.push(payload)
                        else
                            updatedCart.push({...payload, quantity: 1 })

                    }else{
                        const updatedItem = {
                            ...updatedCart[updatedItemIndex]
                        }

                        updatedItem.quantity++;
                        updatedCart[updatedItemIndex] = updatedItem;
                    }

                return {
                    ...state,
                    cart: updatedCart
                }
            case Types.REMOVE_FROM_CART:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(item => item.id === payload);

                updatedCart.splice(updatedItemIndex, 1);

                return {
                    ...state, cart: updatedCart
                }

            case Types.INCREASE_QUANTITY:
                updatedCart = [...state.cart]
                updatedItemIndex = updatedCart.findIndex( item => item.id === payload);

                const incrementedItem = {
                    ...updatedCart[updatedItemIndex]
                }

                incrementedItem.quantity++;
                updatedCart[updatedItemIndex] = incrementedItem;

                return {
                     ...state,
                     cart: updatedCart
                }
            case Types.DECREASE_QUANTITY:
                updatedCart = [...state.cart];
                updatedItemIndex = updatedCart.findIndex(item => item.id === payload);

                const decrementedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                decrementedItem.quantity--;

                updatedCart[updatedItemIndex] = decrementedItem;

                return {
                    ...state,
                    cart: updatedCart
                }
            case Types.DELETE_ALL_FORM_CART:
                return{
                    ...state,
                    cart:[]
                }
            case Types.SET_ADDRESS_DETAILS:
                return {
                    ...state,
                    address: payload
                }
            case Types.SET_PAYMENT_DETAILS:
                return {
                    ...state,
                    payment: payload
                }
            case Types.CONFIRM_ORDER:
                return {
                    ...state,
                    cart: []
                }
            case Types.CART_NOT_IN_STATE:
                return {
                    ...state,
                    cart: [...payload]
                }

            default:
                return state;
        }
}

export default shopReducer;
