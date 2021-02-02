
class OrderPlaceAPI extends React.Component {

    callDEP = () => {

       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://b2ctelco.local:9002/stltelcocommercewebservices/v2/b2ctelco/users/sanjay.dhamelia%40sterlite.com/carts?fields=DEFAULT&access_token=2cb04e37-4fd9-4321-b625-d9426e737937', requestOptions)
        .then(response => {

            if (!response.ok) {
              this.handleResponseError(response);
            }
            console.log("hello");
            return response.json();
          })
          .then(json => {
            console.log("hi");
            console.log("Retrieved items:");
            console.log(json);
            console.log(json.code)

            let id = json.code;
            this.setState({
                cartID: json.code
            })

            console.log("============"+id)
            console.log("============"+this.state.cartID)


            var details = {
                'code': '6072822',
                'qty': '1',
                'lang' : 'en',
                'curr' : 'USD'

            };
        
        
            var formBody = [];
            for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            
        
            if (this.state.cartID != null) {
        
                fetch('https://b2ctelco.local:9002/stltelcocommercewebservices/v2/b2ctelco/users/sanjay.dhamelia%40sterlite.com/carts/'+id+'/entries?fields=DEFAULT&access_token=2cb04e37-4fd9-4321-b625-d9426e737937', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                  })
                 .then(response => {
        
                /*if (!response.ok) {
                  this.handleResponseError(response);
                }*/
                return response.json();
              })
              .then(json => {
                console.log("Retrieved itemsssssssss:");
    
                    
                fetch('https://b2ctelco.local:9002/stltelcocommercewebservices/v2/b2ctelco/users/sanjay.dhamelia%40sterlite.com/carts/'+id+'/deliverymode?deliveryModeId=standard-gross&lang=en&curr=USD&access_token=2cb04e37-4fd9-4321-b625-d9426e737937', {
                    method: 'PUT',
                    headers: {
                     
                    },
                  })
                .then(response => {
        
                        if (!response.ok) {
                        console.log(response);
                        }
                        return response.json();
                }).then (json => {

                    console.log("Completed delivery mode addition operation")

                    const paymentModeRequest = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(

                            {
                                "accountHolderName": "Gautam Dhudashiya",
                                "billingAddress": {
                                  "cellphone": "94283755862",
                                  "companyName": "STL",
                                  "country": {
                                    "isocode": "US",
                                    "name": "United States"
                                  },
                                  "defaultAddress": true,
                                  "district": "Ahmedabad",
                                  "email": "gautam7113@stl.com",
                                  "firstName": "Gautam",
                                  "formattedAddress": "ABC corp",
                                  "id": "",
                                  "lastName": "Dhudashiya",
                                  "line1": "Test11",
                                  "line2": "Test12",
                                  "phone": "978984321654",
                                  "postalCode": "382481",
                                  "region": {
                                    "countryIso": "US",
                                    "isocode": "US-AK",
                                    "isocodeShort": "AK",
                                    "name": "Alaska"
                                  },
                                    "shippingAddress": true,
                                    "title" : "Mr.",
                                    "titleCode" : "mr",
                                    "town" : "Ahmedabad",
                                    "visibleInAddressBook" : true
                                },
                                "cardNumber": "123456789123456",
                                "cardType": {
                                  "code": "visa",
                                  "name": "visa"
                                },
                                "defaultPayment": true,
                                "expiryMonth": "11",
                                "expiryYear": "2021",
                                "id": "",
                                "issueNumber": "",
                                "saved": true,
                                "startMonth": "10",
                                "startYear": "2019",
                                "subscriptionId": ""
                              }

                        )
                    };

                    fetch('https://b2ctelco.local:9002/stltelcocommercewebservices/v2/b2ctelco/users/sanjay.dhamelia%40sterlite.com/carts/'+id+'/paymentdetails/?fields=DEFAULT&lang=en&curr=USD&access_token=2cb04e37-4fd9-4321-b625-d9426e737937', paymentModeRequest)
                    .then(response => {
            
                            if (!response.ok) {
                            console.log(response);
                            }
                            console.log("Payment Mode added successfully")
                            return response.json();
                    }).then (json => {
                    
                                                                                                                                        
                        fetch('https://b2ctelco.local:9002/stltelcocommercewebservices/v2/b2ctelco/users/sanjay.dhamelia%40sterlite.com/orders/?cartId='+id+'&lang=en&curr=USD&access_token=2cb04e37-4fd9-4321-b625-d9426e737937', {
                            method: 'POST',
                            headers: {
                            
                            },
                        })
                        .then(response => {
                
                                if (!response.ok) {
                                console.log(response);
                                }

                                console.log("Order Placed successfully")
                                return response.json();
                        })

                        })   
                     }) 
                })
            }
        })
    }
    
}

// This is add to cart
export default OrderPlaceAPI;