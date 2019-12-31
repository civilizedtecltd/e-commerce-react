
// Book action types
export const FETCH_ALL_BOOKS        =   'FETCH_ALL_BOOKS';
export const SHOW_SINGLE_BOOK       =   'SHOW_SINGLE_BOOK';
export const FETCH_BOOK_BY_CATEGORY =   'FETCH_BOOK_BY_CATEGORY';
export const FETCH_ALL_CATEGORY     =   'FETCH_ALL_CATEGORY';
export const POST_REVIEW            =   'POST_REVIEW';


//Cart action types
export const ADD_TO_CART            =   'ADD_TO_CART';
export const REMOVE_FROM_CART       =   'REMOVE_FROM_CART';
export const INCREASE_QUANTITY      =   'INCREASE_QUANTITY';
export const DECREASE_QUANTITY      =   'DECREASE_QUANTITY';
export const UPDATE_QUANTITY        =   'UPDATE_QUANTITY';
export const DELETE_ALL_FORM_CART   =   'DELETE_ALL_FORM_CART';
export const SHOP_NOT_IN_STATE      =   'SHOP_NOT_IN_STATE';

//Auth action types
export const USER_LOGIN             =   'USER_LOGIN';
export const USER_LOGIN_ERROR       =   'USER_LOGIN_ERROR';
export const USER_LOGOUT            =   'USER_LOGOUT';
export const USER_INFO              =   'USER_INFO';
export const USER_UPDATE            =   'USER_UPDATE';
export const USER_UPDATE_ERROR      =   'USER_UPDATE_ERROR';
export const SET_PAYMENT            =   'SET_PAYMENT';
export const DELETE_PAYMENT         =   'DELETE_PAYMENT';
export const AUTH_NOT_IN_STATE      =   'AUTH_NOT_IN_STATE';

//add to favorite  types
export const ADD_FAVORITE           =   'ADD_FAVORITE';
export const REMOVE_FAVORITE_ITEM   =   'REMOVE_FAVORITE_ITEM';
export const GO_TO_CHECKOUT         =   'GO_TO_CHECKOUT';
export const SHOW_ALL_FAVORITE      =   'SHOW_ALL_FAVORITE';
export const EMPTY_FAVORITE_ITEMS   =   'EMPTY_FAVORITE_ITEMS';
export const FAVORITE_NOT_IN_STATE  =   'FAVORITE_NOT_IN_STATE';


//Checkout Actions types
export const SET_ADDRESS_DETAILS    = 'SET_ADDRESS_DETAILS';
export const SET_PAYMENT_DETAILS    = 'SET_PAYMENT_DETAILS';
export const CONFIRM_ORDER          = 'CONFIRM_ORDER';

//Search action types

export const SEARCH_BOOK            = 'SEARCH_BOOK';

export const FILTER_BY_PRICE_RANGE  = 'FILTER_BY_PRICE_RANGE';
export const FILTER_SHORT_BY        = 'FILTER_SHORT_BY';
export const GET_STAGE_LIST         = 'GET_STAGE_LIST';
export const FETCH_BOOK_BY_FILTER   = 'FETCH_BOOK_BY_FILTER';

//fetching action
export const FETCH_BOOK_PENDING = 'FETCH_BOOK_PENDING';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
export const FETCH_FAVORITE_PENDING = 'FETCH_FAVORITE_PENDING';
export const FETCH_SHOPPING_PENDING = 'FETCH_SHOPPING_PENDING';

export const DELIVERY_METHOD_FETCH   = 'DELIVERY_METHOD_FETCH';
export const FETCH_MAX_MIN_PRICE = 'FETCH_MAX_MIN_PRICE';

export const UPDATE_PAYMENT_METHOD ='UPDATE_PAYMENT_METHOD'




