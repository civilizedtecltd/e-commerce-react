import * as Types from '../actions/actionTypes'
const addToFavorite = (id) => {
    return {
        type:Types.ADD_FAVORITE,
        payload: id
    }
}


const removeFavItem = (id) => {
    return{
        type:Types.REMOVE_FAVORITE_ITEM,
        payload:id
    }
}

const showFevItems = (book) => {
    return {
        type: Types.SHOW_ALL_FAVORITE ,
        payload: book
    }
}

export{
    addToFavorite,
    showFevItems,
    removeFavItem
}