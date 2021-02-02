import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { sendProductToCart } from './action';
import $ from 'jquery';
//import * as cookie from "react-cookie";
import { Cookies } from 'react-cookie';
import cookie from 'react-cookies'
import {  addQuantity } from "./action/index";
import { substractQuantity} from "./action/index";

//https://www.npmjs.com/package/react-cookies
class CartComponent extends React.Component {

    addQuantity=()=>{
        this.props.addQuantity(Number(this.props.product_details.sendProductToCart.quantity))
    };
    substractQuantity=()=>{
        this.props.substractQuantity(Number(this.props.product_details.sendProductToCart.quantity))
    }

    render() {


      
    
    
//Cookies.load("onboarded")
 
console.log("cokies details here")
//alert(cookie.load('onboarded') )
console.log(cookie.load('onboarded') )
//console.log(Cookies.get("onboarded"))

       return (
            <ul className="navbar-nav">
                <li className="nav-item dropdown drop-cart d-none d-lg-block">
                    <a href="/cartDetail" className="nav-link dropdown-toggle" id="cart">
                        <i className="fa fa-shopping-cart"></i>
                        <span>
                            {this.props.product_details.sendProductToCart.quantity}


                        </span>

                    </a>

                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex align-items-center m-3 btn-goto">
                                    <a href="/emptycart" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                    <a href="#" className="btn btn-success withoutRadiusBorder w-100 d-none">CHECKOUT</a>
                                </div>
                            </div>
                            <div className="col-12">
                                <h6 className="minicart-header">Your Shopping Basket [ <span>

                                    {this.props.product_details.sendProductToCart.quantity}

                                </span> ]</h6>
                            </div>
                            <div className="col-12">
                                <div className="scroll-height ">
                                    <div class="card" stl-id="4241349">
                                        <div class="row no-gutters">
                                            <div class="cardimg">

                                                <img src={this.props.product_details.sendProductToCart.logo} class="card-img" />

                                            </div>
                                            <div class="card-body flex-column">
                                                <h5 class="card-title w-100">  {this.props.product_details.sendProductToCart.name}  </h5>
                                                <div class="quantityGroup">
                                                    <h6 class="gothamMedium mb-0">Qty :</h6>
                                                    <button type="button" class="round-btn sub" title="If u want less quantity" onClick={this.substractQuantity} >-</button>
                                                    <label class="quantityTxt quantity " name="quantity[]" maxLength="4"> {this.props.product_details.sendProductToCart.quantity} </label>
                                                    <button type="button" class="round-btn add" title="If u want more quantity" onClick={this.addQuantity}  >+ </button>
                                                </div>
                                                <i class="fa fa-trash text-danger"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>


        );


    }
}




const mapStateToProps = state => ({

    product_details: state

});
const mapdispatchtoProp ={addQuantity,substractQuantity}


export default connect(mapStateToProps,mapdispatchtoProp)(CartComponent);

