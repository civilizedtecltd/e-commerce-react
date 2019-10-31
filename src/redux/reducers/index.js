import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import ecommarce from "./ecommarce";

export default combineReducers({ ecommarce, visibilityFilter });
