import * as Types from './actionTypes';
import {URL} from '../../constants/config';
import axios from 'axios'
export const fetchMaxMinPrice = () =>dispatch => {
    axios.get(URL.MAX_MIN_PRICE)
          .then(res=>dispatch({
            type: Types.FETCH_MAX_MIN_PRICE,
            payload: {
                priceFilter: {
                                maxPrice: res.data.data[0].maxPrice,
                                minPrice: res.data.data[1].minPrice
                            }
                }
         }))
         .catch(error=>console.log(error))
}

export const filterNotInState = filter => {
  return {
    type: Types.FILTER_NOT_IN_STATE,
    payload: filter
  };
};