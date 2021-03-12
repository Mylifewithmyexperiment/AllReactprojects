import React from "react";
// import Button from "../components/Button";
import Ulinfo from "../components/List_info";
import "../CSS/homepage.css";
import img_telve from "../img/12.jpg";

//  import img_second from '../img/tit2.jpg'

function rajesh_costom() {

}
rajesh_costom();

function Homepage({ hello, name, tech, sec_para, fir_para_bold, after_bold, sec_bold, after_anchor, find_me_on }) {
  const style = {
    color: " #111 ",
  };

  return (
   
   
   <div className="home_main">
      <div className="left_side">
        <small> {hello} </small>
        <h2> {name} </h2>
        <small> {tech} </small>
        <p>
          <b style={style}> {fir_para_bold} </b> {after_bold}
          <a target="_collage" href="https://www.lumbini.edu.np/">
            <b>{sec_bold}</b>
          </a>
          {after_anchor}
        </p>
        <p> {sec_para} </p>
        <Ulinfo />
        <ul className="social_links">

          <a target="_Facebook" href="https://www.facebook.com/profile.php?id=100009138323253">
            <li><i className="fab fa-facebook"></i></li>
          </a>
          <a target="_insta" href="https://www.instagram.com/rajeevkhadka18/">
            <li> <i className="fab fa-instagram"></i>  </li>
          </a>
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </ul>

      </div>
      <hr />

      <div className="right_side">
        <div className="img_contaner">
          <img alt="Image Not Found" src={img_telve} />
        </div>
      </div>
    </div>
  



  );

}

export default Homepage;
