import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './App';
// Bootstrap Style CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Normalize Style CSS
import './assets/css/normalize.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
ReactDOM.render(
<Provider store={store} >
    <App/>
</Provider>
, document.getElementById('root'));

serviceWorker.register();
