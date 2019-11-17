import {LOAD_SHOP, SHOW_SINGLE_BOOK ,CATEGORY_WISE_BOOK, ADD_TO_CART} from './actionTypes';

export const LoadProduct = ( products ) => {
    // console.log(products)
    return{
        type:LOAD_SHOP,
        payload:[
            ...products
        ]
    }
}

export const show_single_book = (book)=> {
     return{
         type:SHOW_SINGLE_BOOK,
         payload: book
     }
}


export const showCategoryWiseBook = (category) => {
        return {
            type:CATEGORY_WISE_BOOK,
            category:category
        }
}


export const addToCard = (id) =>{
    return {
        type : ADD_TO_CART,
        id:id,
    }
}
