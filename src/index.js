import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore,compose, applyMiddleware } from 'redux'
import App from './App';
// Bootstrap Style CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Normalize Style CSS
import './assets/css/normalize.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        compose(
            applyMiddleware(thunk)
            )
        )
    );


ReactDOM.render(
<Provider store={store} >
    <App/>
</Provider>,document.getElementById('root'));
serviceWorker.register();
