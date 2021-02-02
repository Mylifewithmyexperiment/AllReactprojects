import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects'
const URL = "https://raw.githubusercontent.com/sraksh/sHOPcart/master/src/data/products.json";

function* fetchProducts() {
  const res = yield axios.get(URL).then((response) => response);
  yield put({
    type: 'FETCH_PRODUCTS',
    payload: res
  })
}

function* actionWatcher() {
  yield takeLatest('GET_PRODUCTS', fetchProducts)
  //telling saga to wait for GET_PRODUCTS to get dispatched from component, 
  // Once GET_PRODUCTS is dispatched, fetchProducts is called where api call is made
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}