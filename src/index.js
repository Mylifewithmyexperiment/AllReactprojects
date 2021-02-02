import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const wrapper = (
  <Provider store={store}>
    <App></App>
  </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));