
import React from 'react'
import {render, fireEvent ,cleanup} from 'react-testing-library'
import ProductList from '../components/ProductList/ProductList'

afterEach(cleanup);

describe('ProductList rendering', () => {
  let testItems = {
    "productItems": {
    "productItems": [
      [
        {
          name: "Winner Skeleton",
          "id": 1
        },
        {
          name: "Citizen Men",
          "id": 2
        },
        {
          name: "Citizen Analog",
          "id": 3

        },
        {
          name: "Armani Exchange",
          "id": 4

        },
        {
          name: "Citizen Unisex",
          "id": 5

        },
        {
          name: "Relish Analog",
          "id": 6
        }
      ]
     ]
    },
    actions: {
      fetchProducts: jest.fn()
    }
  };

  it('ProductList should be rendered' , () => {
    const props =  testItems;
    const { container } = render(<ProductList {...props} />)
    const productNodes = container.querySelectorAll('.card');
    expect(productNodes.length).toBe(props.productItems.productItems[0].length)
  })

  it('ProductList: fetchProducts should be called' , () => {
    const props =  testItems;
    expect(props.actions.fetchProducts).toHaveBeenCalledTimes(1)
  })

})