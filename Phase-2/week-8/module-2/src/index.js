import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

console.dir(process.env);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app')
);