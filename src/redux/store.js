
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from "./reducer";

const middleware = [thunk];

 const saveToLocalStorage = (state) => {
     try{
        const serialize = JSON.stringify(state);
         localStorage.setItem('state', serialize);
     }catch(ex){
        console.log(ex)
    }
 }

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store
