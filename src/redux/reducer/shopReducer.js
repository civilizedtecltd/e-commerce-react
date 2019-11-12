import { LOAD_SHOP, SHOW_SINGLE_BOOK } from '../actions/actionTypes'
const initialState =[]

const shopReducer = (state = initialState , actions ) => {
    switch(actions.type){
        case LOAD_SHOP:
            return [
                ...state,
                {
                   ...actions.payload 
                }
            ]
    }
}

export default shopReducer;