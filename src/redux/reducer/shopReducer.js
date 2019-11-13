import { LOAD_SHOP, SHOW_SINGLE_BOOK } from '../actions/actionTypes'
import { ALL_PRODUCTS } from '../httpRequest/fetchData';

const shopReducer = (state = [] , actions ) => {
    const { type, payload } = actions
    switch(type){
        case LOAD_SHOP:
            return {
                    books: [ ...payload ]    
                 }
        default:
            return state
    }
}

export default shopReducer;