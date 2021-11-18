import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);


