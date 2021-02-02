import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./redux/store";
import App from './App';
import TodoApp from "./TodoApp";
import * as serviceWorker from './serviceWorker';

//called only once 
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
 

