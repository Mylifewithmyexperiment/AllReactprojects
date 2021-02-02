import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import AddAllReducers from "./reducers";
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie';

const store = createStore(
  AddAllReducers,
   
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );


//const state = store.getState();
console.clear();
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>,
    <CookiesProvider>
      <App />
      </CookiesProvider>
    </Provider>,
  </React.StrictMode>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
