//https://raw.githubusercontent.com/sraksh/sHOPcart/master/src/data/products.js

import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from '../reducers';
import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/saga'
// create an object for the default data
const defaultState = {
  
};

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, logger),
  // other store enhancers if any
);

// CREATE STORE
const store = createStore(
  rootReducer,
  defaultState,
  // applyMiddleware(thunk),
  enhancer
);
sagaMiddleware.run(rootSaga)

export default store;