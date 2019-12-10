import * as Types from '../actions/actionTypes';



const bookReducer = ( state ={}, actions) => {

    const { payload } = actions;
    console.log(payload)

    switch (actions.type) {
        case Types.FETCH_ALL_BOOKS:
            return payload;
        case Types.FETCH_BOOK_BY_CATEGORY:
            return payload;
        case Types.SHOW_SINGLE_BOOK:
            return payload;
        case Types.SEARCH_BOOK:
            return payload
        case Types.POST_REVIEW:
            return {
                similar: state.similar,
                info: {
                    ...state.info,
                    ...payload
                }
            }
        default :
            return state
    }
};

export  default bookReducer;
