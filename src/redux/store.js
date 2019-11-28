
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducers from "./reducer";

const middleware = [thunk];

/*  const saveToLocalStorage = (state) => {
     try{
        const serialize = JSON.stringify(state);
         localStorage.setItem('state', serialize);
     }catch(ex){
        console.log(ex)
    }
 } */

const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);


// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store
