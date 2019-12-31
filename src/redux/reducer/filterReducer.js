import * as Types from '../actions/actionTypes'

const filterReducer = (state = [] , action) => {
        switch(action.type){
            case Types.FETCH_MAX_MIN_PRICE:
                return action.payload
            default :
                return state;
        }
}

export default filterReducer;