import React from 'react';
import img_five from '../img/5.jpg';
import img_six from '../img/6.jpg';
import img_seven from '../img/7.jpg';
import Card from '../components/Card';
import Boxheader from '../components/Box_header';

export default function Art_drawing() {
    return (
        <>
            <Boxheader />
            <div className="gallery_container">
                <Card image={img_five} />
                <Card image={img_six} />
                <Card image={img_seven} />
            </div>
        </>

    )
}
