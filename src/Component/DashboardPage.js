import React from "react";
import "../CSS/Dashboardpage.css";
//import { WebView } from "react-native-webview";

class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input1: "",
      input2: "",
    };
    this.onhandleChangeInput1 = this.onhandleChangeInput1.bind(this);
    this.onhandleChangeInput2 = this.onhandleChangeInput2.bind(this);
    this.logout = this.logout.bind(this);
  }

  onhandleChangeInput1(event) {
    this.setState({
      input1: event.target.value,
    });
  }
  onhandleChangeInput2(event) {
    this.setState({
      input2: event.target.value,
    });
  }
  logout() {
    sessionStorage.setItem("username", null);
    window.open("/login", "_self");
  }
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="slot1">
            <div className="username">
          
              {sessionStorage.getItem("username")}  
            </div>
            <input
              className="textbox1"
              type="text"
              name="textbox1"
              onChange={this.onhandleChangeInput1}
            /> 
          </div> 
          <div className="slot2">
            <input
              className="textbox2"
              type="text"
              name="textbox2"
              onChange={this.onhandleChangeInput2}
            >
              
            </input> 
            <button id="logout" onClick={this.logout}>
              logout 
            </button> 
          </div> 
        </div>
        <div className="body">
          <div className="container1">
            <div className="username"> username /
            
         
<p><a href="https://www.google.com/">Google</a></p>
            
            </div>
          </div>
          <div className="container2"> here
          
          <p><a href="https://www.w3.org/">W3C</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;

//<WebView source={{ uri: 'https://reactnative.dev/' }} />