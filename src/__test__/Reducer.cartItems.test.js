import reducer from '../reducers/cartItems'

describe('cart items reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        cartItems: []
    })
    })

    it('should handle ADD_ITEM', () => {
      expect(
        reducer({cartItems: []}, {
          type: 'ADD_ITEM',
          data: {
            'currency': "EUR",
            'id': 2,
            'image': "http://ecx.images-amazon.com/images/I/81ByULB0GqL._UY679_.jpg",
            'isAddedToCart': true,
            'name': "Citizen Men",
            'price': 249.99,
            'url': "http://www.amazon.in/Citizen-AU1065-58E-Men-Analogue-Watch/dp/B00CB9A47W?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
          }
        })
      ).toEqual({
        "cartItems": [
          {
            "currency": "EUR",
            "id": 2,
            "image": "http://ecx.images-amazon.com/images/I/81ByULB0GqL._UY679_.jpg",
            "isAddedToCart": true,
            "name": "Citizen Men",
            "price": 249.99,
            "url": "http://www.amazon.in/Citizen-AU1065-58E-Men-Analogue-Watch/dp/B00CB9A47W?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
          }
        ]
      })
  })

  it('should handle REMOVE_ITEM', () => {
    expect(
      reducer({cartItems: [
        {
          "currency": "EUR",
          "id": 2,
          "image": "http://ecx.images-amazon.com/images/I/81ByULB0GqL._UY679_.jpg",
          "isAddedToCart": true,
          "name": "Citizen Men",
          "price": 249.99,
          "url": "http://www.amazon.in/Citizen-AU1065-58E-Men-Analogue-Watch/dp/B00CB9A47W?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
        },
        {
          "currency": "EUR",
          "id": 1,
          "image": "http://ecx.images-amazon.com/images/I/511aLN8ht8L.jpg",
          "name": "Winner Skeleton",
          "price": "499.99",
          "isAddedToCart": false,
          "url": "http://www.amazon.in/Winner-Skeleton-Mechanical-Brown-Strap/dp/B01AG08IS4?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
        }
      ]}, {
        type: 'REMOVE_ITEM',
        id: 2
      })
    ).toEqual({
      "cartItems": [
        {
          "currency": "EUR",
          "id": 1,
          "image": "http://ecx.images-amazon.com/images/I/511aLN8ht8L.jpg",
          "name": "Winner Skeleton",
          "price": "499.99",
          "isAddedToCart": false,
          "url": "http://www.amazon.in/Winner-Skeleton-Mechanical-Brown-Strap/dp/B01AG08IS4?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=b539d19e-975c-4c0c-bdf2-d2ca599bbb32"
        }
      ]
    })
})

})