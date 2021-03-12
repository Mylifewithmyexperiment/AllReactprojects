import React from 'react';
import '../CSS/card.css';


export default  function Card( {image,boeder,card_for_header} ) {
    return (
            <div style={card_for_header} className="card">
           <img style={boeder} alt="  Image not found. " src = {image} />
           
            </div>
    )
}

 
