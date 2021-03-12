import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AddAllReducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  timeout: null
};
const persistedReducer = persistReducer(persistConfig, AddAllReducers);

const store = createStore( persistedReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let persistor = persistStore(store);

export { store, persistor };