import * as Types from '../actions/actionTypes';
import axios from 'axios';
import { URL } from '../../constants/config';
import { setAuthToken } from '../../helpers/setAuthToken';


 const fetchAllBook = (page,show) => dispatch => {
    axios.get(URL._ALL_BOOKS(page,show))
        .then( res =>{
            dispatch({
                type:Types.FETCH_ALL_BOOKS,
                payload: res.data
            })
        }).catch( error =>{
            console.log(error)
        })
};

const fetchBooksByCategory = (id,page,show) => dispatch => {
      axios.get(URL._CATEGORY_BOOKS(id,page,show))
          .then(res => {
              dispatch({
                  type: Types.FETCH_BOOK_BY_CATEGORY,
                  payload: res.data
              })
          })
          .catch( ex => console.log(ex))

}

 const showSingleBook = (id) => dispatch => {
    axios.get(URL._SINGLE_BOOK(id))
        .then(res=>{
            dispatch({
                type:Types.SHOW_SINGLE_BOOK,
                payload: {
                    info:  res.data.data,
                    similar: res.data.similar
                }
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


 const searchBook = (page, show, keyword)=> dispatch => {
    axios.post(URL._SEARCH_BOOK(page,show,keyword))
    .then(res=>dispatch({
        type:Types.SEARCH_BOOK,
        payload:[...res.data.data]
    }))
     .catch(err=>console.log(err))
}

const postReview = (review) => dispatch => {
    setAuthToken();
    axios.post(URL._POST_REVIEW, review)
         .then(res => dispatch({
            type: Types.POST_REVIEW,
             payload: {
                info:  res.data.data
            }
         }))
         .catch(error => console.log(error))
}

export {
    fetchAllBook,
    showSingleBook,
    fetchCategoryList,
    fetchBooksByCategory,
    searchBook,
    postReview
}

