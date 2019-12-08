import * as Types from '../actions/actionTypes'
import axios from 'axios';
import checkAuth from '../../helpers/checkAuth'
const addToFavorite = (id) => dispatch =>{
    axios.post(URL, {id:id})
    .then(res=>dispatch({
           type:Types.ADD_FAVORITE,
           payload: [...res]
   })) 
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