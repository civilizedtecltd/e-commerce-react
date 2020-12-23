import * as Types from './actionTypes';
import axios from 'axios';
import { URL } from '../../constants/config';
import { setAuthToken } from '../../helpers/setAuthToken';
import { fetchMaxMinPriceByFilter } from "./filterAction";

const fetchAllBook = (page, show, keyword) => dispatch => {
  console.log('----------------fetchAllBook')
  dispatch(fetchPending())
  axios.get(URL._ALL_BOOKS(page, show, keyword))
    .then(res => {
      return dispatch({
        type: Types.FETCH_ALL_BOOKS,
        payload: res.data,
        pending: false
      })
    }).catch(error => {
      console.log(error)
    })
};

const fetchBooksByCategory = (id, page, show) => dispatch => {
  console.log('----------------fetchBooksByCategory')

  dispatch(fetchPending())
  axios.get(URL._CATEGORY_BOOKS(id, page, show))
    .then(res => {
      return dispatch({
        type: Types.FETCH_BOOK_BY_CATEGORY,
        payload: res.data,
        pending: false
      })

    })
    .catch(ex => console.log(ex))

}

const showSingleBook = (id) => dispatch => {
  console.log('----------------showSingleBook')

  dispatch(fetchPending());
  axios.get(URL._SINGLE_BOOK(id))
    .then(res => {
      dispatch({
        type: Types.SHOW_SINGLE_BOOK,
        payload: {
          info: res.data.data,
          similar: res.data.similar,
          pending: false
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
};



const searchBook = (page, show, keyword) => dispatch => {
  console.log('----------------searchBook')

  console.log('url', URL._SEARCH_BOOKS)
  axios.get(URL._SEARCH_BOOKS(page, show, keyword))
    .then(res => {
      dispatch({
        type: Types.SEARCH_BOOK,
        payload: res.data
      })
    }).catch(error => {
      console.log(error)
    })
};


const postReview = (review) => dispatch => {
  setAuthToken();
  axios.post(URL._POST_REVIEW, review)
    .then(res => {
      dispatch({
        type: Types.POST_REVIEW,
        payload: {
          book_review: [...res.data.data]
        }
      })
      dispatch(showSingleBook(review.book_id))
    }


    )
    .catch(error => console.log(error))
}


const filterByPriceRange = (page, show, lowPrice, highestPrice, type, type_id) => dispatch => {
  console.log('----------------filterByPriceRange')
  setAuthToken();
  axios.get(URL._FILTER_BY_PRICE_RANGE(page, show, lowPrice, highestPrice, type, type_id))
    .then(res => dispatch({
      type: Types.FILTER_BY_PRICE_RANGE,
      payload: res.data
    })).catch(error => console.log(error))
}

const filterShortBy = (page, show, query) => dispatch => {
  console.log('----------------filterShortBy')
  setAuthToken();
  axios.get(URL._FILTER_SHORT_BY(page, show, query))
    .then(res => {
      return dispatch({
        type: Types.FILTER_SHORT_BY,
        payload: res.data,
        pending: false
      })
    }).catch(error => {
      console.error(error)
    })
}

const fetchBooksByFilter = (page, show, filterType, filterId) => dispatch => {
  console.log('----------------fetchBooksByFilter')
  dispatch(fetchPending());
  axios.get(URL._GET_FILTERED_BOOKS(filterType, filterId, page, show))
    .then(res => {
      console.log('fetch book by filer', res)
      dispatch(fetchMaxMinPriceByFilter(res.data.price));
      return dispatch({
        type: Types.FETCH_BOOK_BY_FILTER,
        payload: res.data,
        pending: false
      });
    })
    .catch(error => console.log(error));
}


const fetchPending = () => {
  return {
    type: Types.FETCH_BOOK_PENDING,
    payload: null,
    pending: true
  }
}

const fetchPendingSuccess = (data) => {
  return {
    type: Types.FETCH_BOOK_SUCCESS,
    payload: data,
    pending: false,
  }
}


export {
  fetchPending,
  fetchPendingSuccess,
  fetchAllBook,
  showSingleBook,
  fetchBooksByCategory,
  searchBook,
  postReview,
  filterByPriceRange,
  filterShortBy,
  fetchBooksByFilter
}

