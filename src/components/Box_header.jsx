import React from 'react';
import { NavLink} from 'react-router-dom';
import '../CSS/Box_header.css';
import Mainheader from './Main_header';

 
function Box_header() {
    return (
        <>
         <Mainheader />
         <div className="box_header_lines"></div>
         <div className="box_header_links">
             <NavLink activeClassName='photo_active' exact to ='/gallery/personal'> <i className="fas fa-border-none"></i> <span>Personal</span></NavLink>
             <NavLink activeClassName='photo_active' exact to ='/gallery/photography'> <i className="fas fa-record-vinyl"></i> <span>photography</span></NavLink>
             <NavLink activeClassName='photo_active' exact to ='/gallery/arts-drawings'> <i className="fas fa-palette"></i> <span>Arts</span></NavLink>
         </div>


         </>
    )
}

export default Box_header;
