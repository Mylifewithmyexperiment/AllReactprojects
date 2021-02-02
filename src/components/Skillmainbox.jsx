import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Skillmainbox.css'
import Skillcard from './Skillcard';

function Skillmainbox() {
    return (
        <>
            <div className="skill_main_box">
                <h1>
                <Link to="/moreread?q=html"><Skillcard title="Html" /></Link>
                <Link to="/moreread?q=css"><Skillcard title="CSS" /></Link>
                <Link to="/moreread?q=js"><Skillcard title="JS" /></Link>
                </h1>
            </div>
                
        </>
    )
}

export default Skillmainbox
