 
const initialstate = {
  name: "",
  quantity: "0",
  logo: "",
};
const sendHomeData = (state = initialstate, action) => {
  switch (action.type) {
    case "SEND_PRODUCT_TO_CART":
      return {
        ...state,
        details: action.params,
      };
    default:
      return state;
  }
};
export default sendHomeData;
