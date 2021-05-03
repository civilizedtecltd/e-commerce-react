import * as Types from "../actions/actionTypes";

const bookReducer = (state = {}, actions) => {
    const { payload, pending } = actions;
    switch (actions.type) {
        case Types.FETCH_BOOK_PENDING:
            return {
                ...state,
                pending: pending,
            };

        case Types.FETCH_BOOK_SUCCESS:
            return payload;
        case Types.FETCH_ALL_BOOKS:
            return {
                ...state,
                ...payload,
                pending: pending,
            };
        case Types.FETCH_BOOK_BY_CATEGORY:
            return {
                ...payload,
                pending: pending,
            };
        case Types.SHOW_SINGLE_BOOK:
            return {
                ...state,
                ...payload,
            };
        case Types.SEARCH_BOOK:
            return {
                ...state,
                ...payload,
            };
        case Types.POST_REVIEW:
            return {
                ...state,
                similar: state.similar,
                info: {
                    ...state.info,
                    ...payload,
                },
            };
        case Types.FILTER_BY_PRICE_RANGE:
            return payload;
        case Types.FILTER_SHORT_BY:
            return payload;
        case Types.FETCH_BOOK_BY_FILTER:
            return payload;
        case Types.FETCH_TOP_DISCOUNT_BOOKS:
            return {
                ...state,
                topDiscountBooks: payload,
            };
        case Types.FETCH_LIMIT_TOP_DISCOUNT_BOOKS:
            return {
                ...state,
                topDiscountBooks: payload,
            };
        case Types.FETCH_TOP_SALE_BOOKS:
            return {
                ...state,
                topSaleBooks: payload,
            };
        case Types.FETCH_LIMIT_TOP_SALE_BOOKS:
            return {
                ...state,
                topSaleBooks: payload,
            };
        case Types.FETCH_RECENT_SALE_BOOKS:
            return {
                ...state,
                recentSaleBooks: payload,
            };
        case Types.FETCH_LIMIT_RECENT_SALE_BOOKS:
            return {
                ...state,
                recentSaleBooks: payload,
            };
        default:
            return state;
    }
};

export default bookReducer;
