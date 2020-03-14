import * as Types from '../actions/actionTypes'

const filterReducer = (state = [] , {type, payload}) => {
        switch(type){
            case Types.FETCH_MAX_MIN_PRICE:
            case Types.GET_STAGE_LIST:
            case Types.GET_DISCIPLINE_LIST:
            case Types.GET_AUTHOR_LIST:
            case Types.GET_PUBLISHER_LIST:
            case Types.GET_PUBLISHING_YEAR_LIST:
            case Types.GET_LANGUAGE_LIST:
            case Types.GET_BOOK_COVER_LIST:
                return {
                    ...state,
                    ...payload
                }
            case Types.FILTER_NOT_IN_STATE:
                return payload
            default :
                return state;
        }
}

export default filterReducer;
