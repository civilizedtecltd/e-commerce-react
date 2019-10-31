import { RESET_PASSWORD, LOG_IN, SIGN_UP } from "./actionTypes";

export const login = data => ({
  type: LOG_IN,
  payload: {
      username:data.username,
      password:data.password
  }
});

export const signup = data=> ({
  type: SIGN_UP,
  payload: {
    firstname:data.firstname,
    last_name:data.last_name,
    email:data.email,
    password:data.password
  }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
