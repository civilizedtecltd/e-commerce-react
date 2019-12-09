import * as Types from '../actions/actionTypes';



const bookReducer = ( state ={}, actions) => {

    const { payload } = actions;

    switch (actions.type) {
        case Types.FETCH_ALL_BOOKS:
            return payload;
        case Types.FETCH_BOOK_BY_CATEGORY:
            return payload;
        case Types.SHOW_SINGLE_BOOK:
            return payload;
        case Types.SEARCH_BOOK:
            return payload
        default :
            return state
    }
};

export  default bookReducer;
