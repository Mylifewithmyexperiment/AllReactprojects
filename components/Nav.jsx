import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../CSS/nav.css';

// import Abouticon from './Abouticon';

function Nav() {
    return (
        <nav className="header">  
           <div className="logo">
           <NavLink to ="/">
            <span>Rajeev Khadka</span>
            </NavLink>

           </div>
        
           <div className="links">
             <NavLink exact activeClassName='nav_active' to ="/"> <i className="fas fa-home" ></i> <span>Home</span> </NavLink>
             <NavLink exact activeClassName='nav_active' to ="/skills"> <i className="fas fa-lightbulb"></i><span>Skills</span> </NavLink>
             <NavLink activeClassName='nav_active' to ="/gallery"> <i className="fas fa-camera-retro"></i>  <span>Gallery</span> </NavLink>
             <NavLink exact activeClassName='nav_active' to ="/contacts"> <i className="fas fa-phone"></i>  <span>Contacts</span> </NavLink>
           </div>
            
        </nav>
    )
}

export default Nav ;
