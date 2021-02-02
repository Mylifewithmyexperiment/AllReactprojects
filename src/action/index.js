import {
  SEARCH_BOX_COMPONENT_DATA,
  LOGO_COMPONENT_DATA,
  HEADERLINK_COMPONENT_DATA,
  MINI_CART_COMPONENT_DATA,
  SEARCH_BOX_COMPONENT_ID
} from "../actionTypes";

export const sendSearchBoxComponentData = (params) => {
  return {
    type: SEARCH_BOX_COMPONENT_DATA,
    params,
  };
};

export const sendSearchBoxComponentIdAction =(params) =>{
return {
  type :  SEARCH_BOX_COMPONENT_ID,
  params 
};
};

export const sendLogoComponentData = (params) => ({
  type: LOGO_COMPONENT_DATA,
  params,
});

export const sendHeaderComponentData = (params) => ({
  type: HEADERLINK_COMPONENT_DATA,
  params,
});

export const sendMiniCartComponentData = (params) => ({
  type: MINI_CART_COMPONENT_DATA,
  params,
});
