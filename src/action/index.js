import {
  SEND_PRODUCT_TO_CART
} from "../actionTypes";
import { type } from "jquery";

export const sendProductToCartAction = (params) => ({
  type: SEND_PRODUCT_TO_CART,
  params

});

export const addQuantity = (params) => (
  {
    type: 'ADD_QUANTITY',
    params: Number(++params),
  }
);

export const substractQuantity = (params) => ({

  type: 'SUBSTRACT_QUANTITY',
  params: Number(--params),

});



