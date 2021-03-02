import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import Router from './components/Router.js';
import reportWebVitals from './helper/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
