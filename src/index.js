import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App';
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/normalize.css';
import * as serviceWorker from './serviceWorker';

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
