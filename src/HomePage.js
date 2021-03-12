import React from "react";
import { connect } from "react-redux";
import {incremenValue, decrementValue} from  "./action/index.js"

class HomePage extends React.Component {
  
  
  
  constructor(props) {
    super(props);
    this.state = {
      quantity:0,
      abc:null
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
  }





  increase(){
    this.props.incremenValue(this.props.redux_quantity);
   // localStorage.setItem('quantity', this.props.redux_quantity)
 }
 decrease(){
     this.props.decrementValue(this.props.redux_quantity)
  //   localStorage.setItem('quantity', this.props.redux_quantity)
    }




  render() {

    
    return (
      <div >
          <center>   This is  our home page
           and we giving simple demonstration of updating data through redux
           <br></br>
           <br></br>


      <div className="quantityGroup">
      <button type="button" className="round-btn substration" title="If u want less quantity"    onClick={this.decrease}>-</button>
      <input className="quantityTxt quantity ct text-align: center"   name="quantity[]"  type="text" value={this.props.redux_quantity} maxLength="4" />
      <button type="button" className="round-btn addition" title="If u want more quantity" onClick={this.increase}>+</button>
  </div>

<br></br>

  Here we are fetching updated data through redux  :-   { this.props.redux_quantity}
  </center>
       </div>


    );
  }
}
const mapstatetoprpo = (state) => ({
    redux_quantity: state.marketPlaceStandardData.quantity,
  });
  const mapdispatchtoprop = { incremenValue , decrementValue}


  export default connect(mapstatetoprpo, mapdispatchtoprop)(HomePage);