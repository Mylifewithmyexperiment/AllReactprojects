import emailjs from "emailjs-com";



import React, { Component } from 'react'

export class TestEmail extends Component {
    constructor() {
        super()
    }
 

      
       
    
     
    render() {
    let  templateParams = {
        name: 'STL Marketplace',
        subject: 'STL Marketplace - Order Confirmation',
        to_email: 'techyrajesh45@gmail.com',
        from_email: 'rajeevkhadka401@gmail.com',
        client_name: 'Rajesh'
    };
    emailjs.send('gmail', 'template_1757b5v', templateParams, 'user_rj5kKtmZ48nrushzK8Cmn')
    .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });
    return (
        <div>
            hello
        </div>
    );
    }
 
}
export default TestEmail;




