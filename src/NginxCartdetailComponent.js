import React from 'react';
import $ from 'jquery';
import {  connect} from  'react-redux';
import store from './store';
class NginxCartdetailComponent extends React.Component {
  
    render() {
        console.clear();
        console.log(this.props.product_details)

      //  console.log(this.props.location)
        const state = store.getState();
        return (
        
            <ul className="navbar-nav">
            <li className="nav-item dropdown drop-cart d-none d-lg-block">
                <a href="#" className="nav-link dropdown-toggle" id="cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span>{this.props.product_details.sendProductToCart.quantity}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="cart">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center m-3 btn-goto">
                                <a href="/cartnginxdetail" className="btn btn-pink withoutRadiusBorder w-100">GO TO CART</a>
                                <a href="javascript:void(0);" className="btn btn-success btn-checkout withoutRadiusBorder w-100">CHECKOUT</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h6 className="minicart-header">Your Shopping Basket [ <span>{this.props.product_details.sendProductToCart.quantity}</span> ]</h6>
                        </div>
                        <div className="col-12">
                            <div className="scroll-height">
                                <div className="card" stl-id="4241349">
                                    <div className="row no-gutters">
                                        <div className="cardimg">
                                            <img src= {this.props.product_details.sendProductToCart.logo} className="card-img"  />
                                        </div>
                                        <div className="card-body flex-column">
                                        <h5 class="card-title w-100">  {this.props.product_details.sendProductToCart.name}  </h5>
                                                
                                            <div className="quantityGroup">
                                                <h6 className="gothamMedium mb-0">Qty :</h6>
                                                <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                <input className="quantityTxt quantity " name="quantity[]" type="text" value="1" maxlength="4"/>
                                                <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                            </div>
                                            <i className="fa fa-trash text-danger"></i>
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
  

//    this.props.history.push('/product-details/1');
  
const mapStateToProps = state =>( {
   
    product_details:state
   
   
  });
 
//   const mapStateToProps = state => ({
//     productItems: state.productItems,
//     cartItems: state.cartItems,
//   });


export default connect(mapStateToProps)(NginxCartdetailComponent);
  
 





// const mapStateToProps = state => {
//     console.log(state)
//     console.log(state.sendProductToCart.name);
//     console.log(state.sendProductToCart.author);
//     console.log(state.sendProductToCart.logo);
//     console.log(state.sendProductToCart.quantity);

// if ($("#hidden-us-ids").val(state.sendProductToCart.quantity)>0) {
//     $("#hidden-us-ids").val(state.sendProductToCart.quantity);
// }
// // if (state.sendProductToCart.name!=null) {
   
// // }
// // $("#hidden-us-ids").val(state.sendProductToCart.name);
// $("#hidden-us-id-name").val(state.sendProductToCart.name);
//  console.log($("#hidden-us-id-name").val(state.sendProductToCart.name));
//     alert($("#hidden-us-id-name").val(state.sendProductToCart.name));
     
//   };

// export default connect(mapStateToProps)(NginxCartdetailComponent);
  
  
