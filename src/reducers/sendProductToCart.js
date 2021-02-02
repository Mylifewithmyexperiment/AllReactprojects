import { SEND_PRODUCT_TO_CART } from "../actionTypes";

//here only states are made
 const initialstate= {
      name:"",
      quantity: 0,
      logo :""
      
 }

const sendProductToCart = (state =  initialstate, action) => {
  switch (action.type) {
    case SEND_PRODUCT_TO_CART:
      return {
        ...state,
        details : action.params,
        name: action.params.product_name,
        author:action.params.product_author,
        quantity:action.params.product_quantity,
        logo:action.params.product_logo,
        
      };
      case 'ADD_QUANTITY':
        return{
          ...state,
      
          quantity:action.params,
        };

    case 'SUBSTRACT_QUANTITY':
    return{
      ...state,
      quantity:action.params
    };

         
    default:
      return state;
  }
};



export default sendProductToCart; 



 