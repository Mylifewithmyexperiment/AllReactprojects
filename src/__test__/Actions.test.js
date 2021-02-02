import * as actions from '../actions/index';

describe('actions', () => {
  
  it('should create an action to add an item', () => {
    let data = {
      "product" : {
        "currency": "EUR",
        "id": 1,
        "image": "http://ecx.images-amazon.com/images/I/511aLN8ht8L.jpg",
        "name": "Winner Skeleton",
        "price": "499.99",
        "url": "http://www.amazon.in/Winner-Skeleton-Mechanical-Brown-Strap/dp/B01AG08IS4?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
      }
    }
    const expectedAction = {
      type: "ADD_ITEM",
      data
    }
    expect(actions.addItem(data)).toEqual(expectedAction)
  })

  it('should create an action to remove an item', () => {
    let id = 5;
    const expectedAction = {
      type: "REMOVE_ITEM",
      id
    }
    expect(actions.removeItem(id)).toEqual(expectedAction)
  })

  it('should create an action to populate all products', () => {
    let payload = {
      "product" : {
        "currency": "EUR",
        "id": 1,
        "image": "http://ecx.images-amazon.com/images/I/511aLN8ht8L.jpg",
        "name": "Winner Skeleton",
        "price": "499.99"
      }
    }
    const expectedAction = {
      type: "FETCH_PRODUCTS",
      payload: payload.product
    }
    expect(actions.populateProducts(payload.product)).toEqual(expectedAction)
  })


})