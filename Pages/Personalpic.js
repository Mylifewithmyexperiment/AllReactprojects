import React  from 'react';
import img_eight from '../img/8.jpg';
import img_four from '../img/4.jpg';
import img_tlv from '../img/12.jpg';
import img_sec from '../img/2.jpg';
import img_ten from '../img/10.jpg';
import img_thiteen from '../img/13.jpg';
import Card from '../components/Card';
import Boxheader from '../components/Box_header';
function Personal_pic() {
    return (
         <>
         <Boxheader />
        <div className="gallery_container">
          <Card  image = {img_eight} />
          <Card  image = {img_four} />
          <Card  image = {img_ten} />
          <Card  image = {img_sec} />
          <Card  image = {img_thiteen} />
          <Card  image = {img_tlv} />
          </div>
         </>
    )
}

export default Personal_pic ;
