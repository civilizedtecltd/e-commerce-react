import {LOAD_SHOP, SHOW_SINGLE_BOOK ,CATEGORY_WISE_BOOK} from './actionTypes';

export const LoadProduct = ( products )=> {
    // console.log(products)
    return{
        type:LOAD_SHOP,
        payload:[
            ...products
        ]
    } 
}

export const show_single_book = (id)=> {
     return{
         type:SHOW_SINGLE_BOOK,
         id:id
     }
}


export const showCategoryWiseBook = (category) => {
        return {
            type:CATEGORY_WISE_BOOK,
            category:category
        }
}