import * as Types from '../actions/actionTypes';
import axios from 'axios';
import { URL } from '../../constants/config'
 const fetchAllBook = () => dispatch=> {
    axios.get(URL._ALL_BOOKS).then(res=>{
        dispatch({
            type:Types.FETCH_ALL_BOOKS,
            payload: res.data.data
        }).catch(error=>{
            console.log(error)
        })
    })
};

const fetchBooksByCategory = (id) => dispatch => {
      axios.get(URL._CATEGORY_BOOKS(id))
          .then(res => {
              dispatch({
                  type: Types.FETCH_BOOK_BY_CATEGORY,
                  payload: res.data.data
              })
          })
          .catch( ex => console.log(ex))

}

 const showSingleBook = (id) => dispatch => {
    axios.get(URL._SINGLE_BOOK(id))
        .then(res=>{
            dispatch({
                type:Types.SHOW_SINGLE_BOOK,
                payload: [ res.data.data ]
            })
        })
          .catch(err=>{
              console.log(err)
          })
};


 const fetchCategoryList = () => dispatch => {
     axios.get(URL._CATEGORY)
         .then(res=>{
             dispatch({
                 type: Types.FETCH_ALL_CATEGORY,
                 payload: res.data.data
             })
        })
 };

export {
    fetchAllBook,
    showSingleBook,
    fetchCategoryList,
    fetchBooksByCategory
}

