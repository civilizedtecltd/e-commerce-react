import * as Types from '../actions/actionTypes';
import axios from 'axios';
import { setAuthToken } from '../../helpers/setAuthToken';
import { URL } from '../../constants/config';

const addToFavorite = (id) => dispatch =>{
    setAuthToken();
    fetchPendingFavorite();
    axios.post(URL._FAVORITE_ITEMS, {book_id:id})
    .then(res=>{
        dispatch({
           type:Types.ADD_FAVORITE,
           payload: [...res.data.data],
           pending: false
   })
})
   .catch(error =>console.log(error))
}



const removeFavItem = (id) => dispatch =>{
    setAuthToken();
    fetchPendingFavorite();
    axios.post(URL._DELETE_FAVORITE(id)).then(res=> dispatch({
        type:Types.REMOVE_FAVORITE_ITEM,
        payload:[
            ...res.data.data
        ],
        pending:false
    }))
    .catch(error =>console.log(error))

}

const showFavItems = () => dispatch => {
    setAuthToken();
    fetchPendingFavorite();
    axios.get(URL._FAVORITE_ITEMS)
         .then(res => dispatch({
                type: Types.SHOW_ALL_FAVORITE,
                payload: {
                    items: [ ...res.data.data ],
                    pending: false
                },
                
             })) //pending: false
         .catch(error => console.log(error))
}

const emptyFavItems = () => ({
    type: Types.EMPTY_FAVORITE_ITEMS,
    payload: []
})

const favoriteNotInState = (favorite) => ({
    type: Types.FAVORITE_NOT_IN_STATE,
    payload: [...favorite]
})


const fetchPendingFavorite = () =>{
    return {
        type:Types.FETCH_FAVORITE_PENDING,
        payload:[],
        pending:true
    }
}



export{
    addToFavorite,
    showFavItems,
    removeFavItem,
    favoriteNotInState,
    emptyFavItems,
    fetchPendingFavorite
}
