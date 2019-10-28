import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap Style CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Normalize Style CSS
import './assets/css/normalize.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
