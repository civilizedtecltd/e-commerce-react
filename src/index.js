import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './redux/store'
import './assets/css/normalize.css';
import * as serviceWorker from './serviceWorker';

const MainApp = () => (
        <Router>
          <LastLocationProvider>
            <div>
                <App />
            </div>
          </LastLocationProvider>
        </Router>
      );

ReactDOM.render(
<Provider store={store} >
    <MainApp/>
</Provider>,document.getElementById('root'));
serviceWorker.register();
