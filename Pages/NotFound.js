import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import "../CSS/notfound.css"


function NotFound() {
    return (
        <div className="error_center">
            <div className="error_logo">
            <span className="first">4</span><span className="second">0</span><span className="third">4</span>
        </div>
            <p>Welcome TO Rajeev Khadka's World</p>
            <h2> <b>Oops; </b> Sorry, but the page you were trying to view does not exist or deleted. </h2>
            <Link to = "/">
             <Button btn_value = " Go Back " />
             </Link>
        </div>
    )
}

export default NotFound;