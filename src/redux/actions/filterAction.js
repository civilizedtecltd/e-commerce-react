import * as Types from './actionTypes';
import { URL } from '../../constants/config';
import axios from 'axios';


export const fetchMaxMinPrice = () => dispatch => {
  console.log('----------------fetchMaxMinPrice')
  axios.get(URL.MAX_MIN_PRICE)
    .then(res => dispatch({
      type: Types.FETCH_MAX_MIN_PRICE,
      payload: {
        priceFilter: {
          maxPrice: res.data.data[0].maxPrice,
          minPrice: res.data.data[1].minPrice
        }
      }
    }))
    .catch(error => console.log(error))
}
export const fetchMaxMinPriceByFilter = (data) => {
  console.log('----------------fetchMaxMinPriceByFilter')
  console.log(data)
  return {
    type: Types.FETCH_MAX_MIN_PRICE,
    payload: {
      priceFilter: {
        maxPrice: data[0].maxPrice,
        minPrice: data[1].minPrice
      }
    }
  };
}

export const fetchStages = (category_id) => dispatch => {
  console.log('----------------fetchStages', {category_id})

  axios.get(URL._GET_STAGES(category_id))
    .then(res => dispatch({
      type: Types.GET_STAGE_LIST,
      payload: {
        stages: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchDiscipline = () => dispatch => {
  console.log('----------------fetchDiscipline')

  axios.get(URL._GET_DISCIPLINES)
    .then(res => dispatch({
      type: Types.GET_DISCIPLINE_LIST,
      payload: {
        disciplines: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchAuthors = () => dispatch => {
  console.log('----------------fetchAuthors')
  axios.get(URL._GET_AUTHORS)
    .then(res => dispatch({
      type: Types.GET_AUTHOR_LIST,
      payload: {
        authors: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchPublishers = () => dispatch => {
  console.log('----------------fetchPublishers')
  axios.get(URL._GET_PUBLISHERS)
    .then(res => dispatch({
      type: Types.GET_PUBLISHER_LIST,
      payload: {
        publishers: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchPublishingYears = () => dispatch => {
  console.log('----------------fetchPublishingYears')
  axios.get(URL._GET_PUBLISHING_YEARS)
    .then(res => dispatch({
      type: Types.GET_PUBLISHING_YEAR_LIST,
      payload: {
        publishing_years: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchLanguages = () => dispatch => {
  console.log('----------------fetchLanguages')
  axios.get(URL._GET_LANGUAGES)
    .then(res => dispatch({
      type: Types.GET_LANGUAGE_LIST,
      payload: {
        languages: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}

export const fetchBookCovers = () => dispatch => {
  console.log('----------------fetchBookCovers')
  axios.get(URL._GET_BOOK_COVERS)
    .then(res => dispatch({
      type: Types.GET_BOOK_COVER_LIST,
      payload: {
        book_covers: [...res.data.data]
      }
    }))
    .catch(error => console.log(error))
}


export const filterNotInState = filter => {
  return {
    type: Types.FILTER_NOT_IN_STATE,
    payload: filter
  };
};
