
import { createStore, applyMiddleware,compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import AddAllReducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, AddAllReducers)
 
const store =createStore(persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

 
//  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  export { store, persistor }
 
   //export default persistStore(store) ;