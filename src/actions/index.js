
export const addItem = (data) => ({
  type: 'ADD_ITEM',
  data
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
});


export const getProducts = () => ({
  type: 'GET_PRODUCTS'
});
