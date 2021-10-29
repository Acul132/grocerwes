import React from 'react';
import ReactDOM from 'react-dom';
import "./config/firebase-config.js"
import App from './App';
import "./Styles.css"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);