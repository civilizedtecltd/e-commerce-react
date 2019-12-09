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
   .catch(error =>console.log(error))
}



const removeFavItem = (id) => dispatch =>{
    setAuthToken();
    axios.post(URL._DELETE_FAVORITE(id)).then(res=> dispatch({
        type:Types.REMOVE_FAVORITE_ITEM,
        payload:[...res.data.data ]
    }))
    .catch(error =>console.log(error))

}

const showFavItems = () => dispatch => {
    setAuthToken();
    axios.get(URL._FAVORITE_ITEMS)
         .then(res => dispatch({
                type: Types.SHOW_ALL_FAVORITE,
                payload: [ ...res.data.data ]
             }))
         .catch(error => console.log(error))
}



export{
    addToFavorite,
    showFavItems,
    removeFavItem
}
