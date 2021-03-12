import React from 'react';
import img_th from '../img/3.jpg';
import img_nine from '../img/9.jpg';
import img_fourteen from '../img/14.jpg';
import Card from '../components/Card';
import Boxheader from '../components/Box_header';

function Photographypic() {
    return (
        <>
        <Boxheader />
        <div className="gallery_container">
             <Card  image = {img_nine} />
             <Card  image = {img_th} />
             <Card  image = {img_fourteen} />
        </div>
         </>
    )
}

export default Photographypic
