import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import eCommerce from "./eCommerce";

export default combineReducers({ eCommerce, visibilityFilter });
