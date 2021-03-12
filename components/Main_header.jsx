import React from 'react';
import '../CSS/Main_header.css';
import img_ten from '../img/10.jpg';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Ul_info from './List_info';
const circle = {
    borderRadius : '50%',
    maxWidth: '20rem',
    height : '20rem',   
    boxShadow : '0 0 20px transparent',
    // border : '2px solid #111'

}
const header_card = {
    maxWidth: '20rem',
    height: '20rem',
}


function Main_header() {
    return (
        <> 
         <div className="box_header">
              <div className="box_header_left_side">
              <div className="img_holder">
              <Card card_for_header={header_card} boeder={circle} image = {img_ten} />
              </div>
              </div>
              <div className="box_header_right_side">
                  <div className="box_header_headings">
                        <h2>Rajeev khadka</h2>
             <NavLink exact  to ="/contacts"> <i className="fas fa-phone"></i>   </NavLink>
                    </div>
                    <ul className="ul_for_box_header" >
                  <p> <i className="fas fa-graduation-cap"></i>Diploma in computer Engineering </p>
                  <p> <i className="fas fa-sun"></i>Politics is my Passion  &nbsp; <b>(राजनीति)</b>  </p>
                  <p> <i className="fas fa-camera-retro"></i>I love to do creative Photography </p>
                  </ul>
                </div>
                
         </div>
        </>
    )
}

export default Main_header
