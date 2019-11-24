import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import { createStore,compose, applyMiddleware } from 'redux'
import App from './App';
// Bootstrap Style CSS
import * as serviceWorker from './serviceWorker';
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/normalize.css';

const MainApp = () => (
        <Router>
          <div>
            <App />
          </div>
        </Router>
      );

ReactDOM.render(
<Provider store={store} >
    <MainApp/>
</Provider>,document.getElementById('root'));
serviceWorker.register();
