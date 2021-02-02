import React from 'react'
import {render, fireEvent ,cleanup} from 'react-testing-library'
import ProductListItem from '../components/ProductListItem/ProductListItem'


afterEach(cleanup);

describe('ProductListItem rendering', () => {
  let product = {
    "product" : {
      "currency": "EUR",
      "id": 1,
      "image": "http://ecx.images-amazon.com/images/I/511aLN8ht8L.jpg",
      "name": "Winner Skeleton",
      "price": "499.99",
      "isAddedToCart": false,
      "url": "http://www.amazon.in/Winner-Skeleton-Mechanical-Brown-Strap/dp/B01AG08IS4?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
    },
    actions: {
      removeItem: jest.fn(),
      addItem: jest.fn()
    }
  };
  const props =  product;

  it('ProductListItem should be rendered' , () => {
    const { getByTestId } = render(<ProductListItem {...props} />)
    const productItemTitleNode = getByTestId('card-title');
    const productItemPriceNode = getByTestId('card-text');
    expect(productItemTitleNode.textContent).toBe(props.product.name);
    expect(productItemPriceNode.textContent).toBe(props.product.price);
  })

  it('ProductListItem: removeProductFromCart should be called' , () => {
    props.product.isAddedToCart = true;
    const { getByTestId } = render(<ProductListItem {...props} />)
    const productItemButtonNode = getByTestId('product-action-button');
    fireEvent.click(productItemButtonNode);
    expect(props.actions.removeItem).toHaveBeenCalledTimes(1);
  })

  it('ProductListItem: removeProductFromCart should be called' , () => {
    props.product.isAddedToCart= false;
    const { getByTestId } = render(<ProductListItem {...props} />)
    const productItemButtonNode = getByTestId('product-action-button');
    fireEvent.click(productItemButtonNode);
    expect(props.actions.addItem).toHaveBeenCalledTimes(1);
  })

})