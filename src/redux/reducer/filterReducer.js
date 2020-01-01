import * as Types from '../actions/actionTypes'

const filterReducer = (state = [] , action) => {
        switch(action.type){
            case Types.FETCH_MAX_MIN_PRICE:
                return action.payload
            case Types.FILTER_NOT_IN_STATE:
                return action.payload
            default :
                return state;
        }
}

export default filterReducer;