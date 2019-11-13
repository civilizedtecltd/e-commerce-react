import { LOAD_SHOP, SHOW_SINGLE_BOOK } from '../actions/actionTypes'


const shopReducer = (state = [] , { type, payload } ) => {

    switch(type){
        case LOAD_SHOP:
            return {
                    books: [ ...payload ]
                }
        case SHOW_SINGLE_BOOK:
            return {
                book:payload
            }
        default:
            return state
    }
}

export default shopReducer;
