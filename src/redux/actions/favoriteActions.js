import * as Types from '../actions/actionTypes';
import axios from 'axios';
import { setAuthToken } from '../../helpers/setAuthToken';
import { URL } from '../../constants/config';

const addToFavorite = (id) => dispatch =>{
    setAuthToken();
    axios.post(URL._FAVORITE_ITEMS, {book_id:id})
    .then(res=>dispatch({
           type:Types.ADD_FAVORITE,
           payload: [...res.data.data]
   }))
   .catch(err=>console.log(err)) 
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