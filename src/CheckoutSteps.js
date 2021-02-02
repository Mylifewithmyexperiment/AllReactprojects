import React from 'react'
import ReactDOM from 'react-dom'
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import Entries from '../src/Data/entries.json';
import Data from '../src/Data/Stepselection.json';
import Quantity from '../src/Data/quantityselection.json';
import {useSelector,useDispatch, connect} from  'react-redux';


class CheckoutSteps extends React.Component {

    constructor() {
      super();
      this.state = {
        orderId : "",
        firstStep:Data.Data1,
        secondStep:Data.Data2,
        thirdStep:Data.Data3,
        qty:Quantity,
        
        
        ordersummary:[],
        summary:[],
        array:"",
        sum:0,
        quantitySelection:"",
       
      }

    } 

 
    handleClick(selectedData,selectedType) {

      var newArray=this.state.summary;  
      selectedData.type=selectedType.button;
      newArray.push(selectedData);
     
     
      this.setState({

        summary:newArray
        
     });

    }


    myfun(charge)
    {
     
      let add=0;
      charge.forEach(element => {
       add=add+element.recurringCharge
       
     });
      return add;

    }


    onClick(qty,index)
    {
     
      //console.log(qty);
      //console.log(index);
      //console.log(this.state.summary[index].recurringCharge*qty);
      //console.log(this.state.summary);
      let existingCharges=this.state.summary;
      //console.log(existingCharges[1]);
      let newcharges= this.state.summary[index];
      newcharges.recurringCharge=newcharges.recurringCharge*qty;
      newcharges.onetimecharge=newcharges.onetimecharge*qty;
      //console.log(newcharges);
      //this.setState({
     //   existingCharges[index]:newcharges
     // });
     
      //this.setState({
       // quantitySelection:qty
     // })

    
     existingCharges[index]=newcharges;

      this.setState({
        summary:existingCharges
    })
    }

    

    render() {

        return (

        
          <div>
              
           <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-pink" id="mainheader">
                <div className="container">
                    <LogoComponent imagePath="/images/logo.png"/>

                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <SearchComponent searchText="What are you looking for"/>
                        <MyAccountComponent/>
                        <CartComponent/>
                    </div>
                </div>
            </nav>
            <MenuComponent/>
            <section className="steps_section selected_steps section_sticky py-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Selected Items */}
                <div className="selecteditems">
                  {/* Selected Items */}
                </div>
                {/* End Selected Items */}
              </div>
            </div>
          </div>
        </section>
        <section className="steps_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a className="nav-link disabled select" id="v-pills-site-tab" data-toggle="pill" href="#v-pills-site" role="tab" aria-controls="v-pills-site" aria-selected="true"><span className="pl-3">Site Selection</span></a>
                  <a className="nav-link disabled active" id="v-pills-enode-tab" data-toggle="pill" href="#v-pills-enode" role="tab" aria-controls="v-pills-enode" aria-selected="false"><span className="pl-3">E Node B</span></a>
                  <a className="nav-link disabled" id="v-pills-software-tab" data-toggle="pill" href="#v-pills-software" role="tab" aria-controls="v-pills-software" aria-selected="false"><span className="pl-3">Select Software</span></a>
                  <a className="nav-link disabled" id="v-pills-application-tab" data-toggle="pill" href="#v-pills-application" role="tab" aria-controls="v-pills-application" aria-selected="false"><span className="pl-3">Select Applications</span></a>
                  <a className="nav-link disabled" id="v-pills-Ordersummary-tab" data-toggle="pill" href="#v-pills-Ordersummary" role="tab" aria-controls="v-pills-Ordersummary" aria-selected="false"><span className="pl-3">View Order Summary</span></a>
                  <a className="nav-link disabled" id="v-pills-makepayment-tab" data-toggle="pill" href="#v-pills-makepayment" role="tab" aria-controls="v-pills-makepayment" aria-selected="false"><span className="pl-3">Make Payment</span></a>
                  <a className="nav-link disabled" id="v-pills-orderConfirmation-tab" data-toggle="pill" href="#v-pills-orderConfirmation" role="tab" aria-controls="v-pills-orderConfirmation" aria-selected="false"><span className="pl-3">Order Confirmation</span></a>
                </div>
                <div className="minicart">
                  <a href="javascript:void(0);" className="icon-cart">
                    <img src="/images/cart.png" alt="cart" />
                  </a>
                  <ul>
                    <li><span className="mr-auto">One Time </span><strong><span>¥</span></strong><span className="price onetime">0</span></li>
                    <li><span className="mr-auto">Recurring </span><strong><span>¥</span></strong><span className="price recurring">0</span>&nbsp;/ mo</li>
                    <li><span className="mr-auto">Discount</span> <strong><span>¥</span></strong><span className="price discount">0</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade" id="v-pills-site" role="tabpanel" aria-labelledby="v-pills-site-tab">Site Selection</div>
                  <div className="tab-pane fade show active" id="v-pills-enode" role="tabpanel" aria-labelledby="v-pills-enode-tab">
                    <a href="javascript:void(0);" className="prev d-none">Prev</a>
                    <a href="javascript:void(0);" className="next">Next</a>
                    {/*<span className="loader">
                                    <span className="loader-inner"></span>
                                </span>*/}
                    <div className="enodeb">

                    {this.state.firstStep.map((firststepsdetail,index)=>(
                      <div className="card" key={index} >
                         <div className="row no-gutters">
                             <div className="col-lg-2 col-md-3">
                              <div className="cardimg">
                                <img src={firststepsdetail.image} className="card-img" alt="Nokia" />
                               <span className="img-gradient"><img src={firststepsdetail.imageCaption}  alt="Nokia" /></span>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6">
                              <div className="card-body">
                                    <h5 className="card-title text-pink">Start at <span>{firststepsdetail.price}</span> ¥</h5>
                                     <p className="card-text">{firststepsdetail.text}</p>
                             </div>
                        </div>
                          <div className="col-lg-2 col-md-3">
                              <div className="selectGroup">
                                  <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" />
                                   <span className="checkmark" />
                                   </label>
                           <div className="btnGroups">
                           <span className="category d-none">E NODE B</span>
                           {firststepsdetail.buttons.map((btn,index1)=>(
                          <a href="javascript:void(0);" className="btn sub_btn btn-outline white"  key={index1} onClick={() => this.handleClick(firststepsdetail,btn)}>{btn.button}</a>
                           ))};
                      </div>
                 </div>
                </div>
                </div>
              </div>
           ))};
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-software" role="tabpanel" aria-labelledby="v-pills-software-tab">
                    <a href="javascript:void(0);" className="prev">Prev</a>
                    <a href="javascript:void(0);" className="next">Next</a>
                    {/*<span className="loader">
                                    <span className="loader-inner"></span>
                                </span>*/}
                    <div>
                    {this.state.secondStep.map((secondstepsdetail,index)=>(
                      <div className="card software"  key={index}>
                        <div className="row no-gutters">
                          <div className="col-lg-2 col-md-3">
                            <div className="cardimg">
                              <img src={secondstepsdetail.image} className="card-img" alt="Nokia" />
                              <span className="img-gradient"><img src={secondstepsdetail.imageCaption} className="cap-img" alt="Nokia" /></span>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6">
                            <div className="card-body">
                              <h5 className="card-title text-pink">Start at <span>{secondstepsdetail.price}</span> ¥ <span className="text-white gothamLight">/ Per Month</span></h5>
                               <p className="card-text">{secondstepsdetail.text}</p>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-3">
                            <div className="btnGroups">
                              <span className="category d-none">SOFTWARE</span>
                              {secondstepsdetail.buttons.map((btn,index1)=>(
                              <a href="javascript:void(0);" className="btn btn_recurring btn-outline white"  key={index1} onClick={() => this.handleClick(secondstepsdetail,btn)}>{btn.button}</a>
                              ))};
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    ))};
                    </div>
                  </div>


                  <div className="tab-pane fade" id="v-pills-application" role="tabpanel" aria-labelledby="v-pills-application-tab">
                    <a href="javascript:void(0);" className="prev">Prev</a>
                    <a href="javascript:void(0);" className="next">Next</a>
                    {/*<span className="loader">
                                    <span className="loader-inner"></span>
                                </span>*/}
                    <div>
                    {this.state.thirdStep.map((thirdstepsdetail,index)=>(
                      <div className="card application" key={index}>
                        <div className="row no-gutters">
                          <div className="col-lg-2 col-md-3">
                            <div className="cardimg">
                              <img src={thirdstepsdetail.image} className="card-img" alt="OTF Inventory Management" />
                              <div className="img-gradient">
                                <h5>
                               <span>{thirdstepsdetail.imageCaption}</span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6">
                            <div className="card-body">
                          <h5 className="card-title text-pink">Start at <span>{thirdstepsdetail.price}</span> ¥ <span className="text-white gothamLight">/ Per Month</span></h5>
                           <p className="card-text">{thirdstepsdetail.text}</p>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-3">
                            <div className="btnGroups">
                              <span className="category d-none">APPLICATION</span>
                              {thirdstepsdetail.buttons.map((btn,index1)=>(
                              <a href="javascript:void(0);" className="btn btn_recurring btn_free btn-outline white" key={index1} onClick={() => this.handleClick(thirdstepsdetail,btn)}>{btn.button}</a>
                              ))};
                            </div>
                          </div>
                        </div>
                      </div>
                    ))};
                    </div>
                  </div>


                  <div className="tab-pane fade" id="v-pills-Ordersummary" role="tabpanel" aria-labelledby="v-pills-Ordersummary-tab">
                    <a href="javascript:void(0);" className="prev removesticky">Prev</a>
                    <a href="javascript:void(0);" className="next bg-success removesticky">Confirm</a>
                    {/*<span className="loader">
                                    <span className="loader-inner"></span>
                                </span>*/}
                    <div className="viewOrderSummary">
                      <table className="table">
                        <thead>
                          <tr>
                            <th colSpan={7}>
                              <h4 className="text-pink gothamMedium">Products for a Single site:</h4>
                            </th>
                          </tr>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-center" />
                            <th scope="col" className="text-right" style={{width: '30px'}}>Recurring Charges</th>
                            <th scope="col" className="text-right">One Time<br />Charges</th>
                          </tr>
                        </thead>
                        <tbody>

                          {this.state.summary.length>1 ?
                          this.state.summary.map((ordersummary,index)=>(
                          <tr className="onetime"key={index}>
                            <td className="pl-0">
                              <div className="card">
                                <div className="row no-gutters">
                                  <div className="cardimg">
                                    <img src={ordersummary.image} className="card-img" alt="Nokia" />
                                    <span className="img-gradient"><img src={ordersummary.imageCaption} className="cap-img" alt="Nokia" /></span>
                                  </div>
                                  <div className="card-body flex-column">
                                   <h5 className="card-title w-100">{ordersummary.name }   {ordersummary.type}</h5>
                                      <span className="text-pink w-100 font-12">{ordersummary.category}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              <div className="dropdown qty">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  1
                                </button>
                                

                                <div className="dropdown-menu" aria-labelledby="dropQty" >
                              
                                  {this.state.qty.map((quantity ,index1)=>( 
                                  <a className="dropdown-item " href="#"  key={index} onClick={() => this.onClick(quantity.quantity,index)}>{quantity.quantity}</a>
                                  
                                

                                  ))};
                                </div>
                               
                              </div>
                            </td>
                            <td className="gothamMedium text-center" />
                          <td className="text-right singleprice" >{ ordersummary.recurringCharge ?<span>¥ {ordersummary.recurringCharge}</span>:<span></span>}</td>
                          <td className="text-right singleprice"> { ordersummary.onetimecharge ?<span>¥{ordersummary.onetimecharge}</span>:<span></span>}</td>
                          </tr>
                          ))
                          :<p></p>}
                       
                       
                          <tr>
                            <td colSpan={5} className="p-0" />
                          </tr>
                          {this.state.summary.length>1 ?
                          <tr>
                            <td colSpan={2} className="border-0" />
                            <td colSpan={3} className="border-0">
                              <table className="checkoutTotal">
                                <tbody><tr>
                                    <td>One Time Charges :</td>
                                    <td />
                                   <td id="totalsingleonetime" className="text-right pr-0">¥ <span className="gothamMedium">{this.state.summary[0].onetimecharge}</span></td>
                                  </tr>
                                  <tr>
                                    <td>Recurring Charges :</td>
                                    <td />
                                 
                             
                                    <td id="totalsingleRecurring" className="text-right pr-0">¥ <span className="gothamMedium">{this.myfun(this.state.summary)}</span></td>
                                  
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                           :<p></p>}
                          <tr>
                            <td colSpan={5} className="p-0" />
                          </tr>
                          <tr>
                            <td className="pl-0">
                              <h4 className="text-pink gothamMedium mb-0">No. of Site :</h4>
                            </td>
                            <td className="text-center border-0">
                              <div className="dropdown qty requirement">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  500
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropQty">
                                  <a className="dropdown-item" href="javascript:void(0);">1</a>
                                  <a className="dropdown-item" href="javascript:void(0);">200</a>
                                  <a className="dropdown-item" href="javascript:void(0);">300</a>
                                  <a className="dropdown-item" href="javascript:void(0);">400</a>
                                  <a className="dropdown-item active" href="javascript:void(0);">500</a>
                                </div>
                              </div>
                            </td>
                            <td colSpan={3} className="border-0">
                              <table className="checkoutTotal">
                                <tbody><tr>
                                    <td className="text-pink px-2"><span className="gothamMedium">Total One Time Charges :</span></td>
                                    <td />
                                    <td id="totalonetime" className="text-right pr-0">¥ <span className="gothamMedium">5000000.00</span></td>
                                  </tr>
                                  <tr>
                                    <td className="text-pink px-2">
                                      <span className="gothamMedium">Total Recurring Charges :</span>
                                    </td>
                                    <td />
                                    <td id="totalRecurring" className="text-right pr-0">¥ <span className="gothamMedium">750000.00</span></td>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={5} className="p-0" />
                          </tr>
                          <tr>
                            <td colSpan={2}>
                            </td>
                            <td colSpan={3} className="border-0">
                              <h3 className="paycheckout text-right">Pay On Checkout</h3>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={7} className="p-0" />
                          </tr>
                          <tr>
                            <td colSpan={2} />
                            <td colSpan={3} className="border-0">
                              <table className="checkoutTotal">
                                <tbody><tr>
                                    <td className="text-pink">
                                      <h4 className="gothamMedium mb-0">Subtotal :</h4>
                                    </td>
                                    <td />
                                    <td id="subtotalafterselectsiteqty" className="text-right pr-0">¥ <span className="gothamMedium">5000000.00</span></td>
                                  </tr>
                                  <tr>
                                    <td>Savings :</td>
                                    <td />
                                    <td className="text-right pr-0">¥ 0.00</td>
                                  </tr>
                                  <tr>
                                    <td>Delivery :</td>
                                    <td />
                                    <td className="text-right pr-0">FREE</td>
                                  </tr>
                                  <tr>
                                    <td>Tax :</td>
                                    <td />
                                    <td className="text-right pr-0">FREE</td>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-makepayment" role="tabpanel" aria-labelledby="v-pills-makepayment-tab">
                    <a href="javascript:void(0);" className="prev removesticky">Prev</a>
                    <a href="javascript:void(0);" className="next removesticky d-none">Next</a>
                    {/*<span className="loader">
                                    <span className="loader-inner"></span>
                                </span>*/}
                    <div className="makePayment">
                      <form className="needs-validation">
                        <div className="form-row">
                          <div className="col-md-6">
                            <h3 className="form-title">Billing address</h3>
                            <div className="form-row">
                              <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Full Name" defaultValue="George Davis" />
                                <span className="error">
                                  Enter Full Name
                                </span>
                              </div>
                              <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Address 1" defaultValue="Floor 1, Kebun " />
                                <span className="error">
                                  Enter Address 1
                                </span>
                              </div>
                              <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Address 2" defaultValue={38227} />
                                <span className="error">
                                  Enter Address 2
                                </span>
                              </div>
                              <div className="col-md-4">
                                <div className="dropdown ddlFloating">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropCountry" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="title">Country/Region</span>
                                    <span className="value">(WIR)</span>
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropCountry">
                                    <a className="dropdown-item active" href="#">WEST INDONESIA REGIONAL (WIR)</a>
                                    <a className="dropdown-item" href="#">Albania</a>
                                    <a className="dropdown-item" href="#">Algeria</a>
                                    <a className="dropdown-item" href="#">Andorra</a>
                                    <a className="dropdown-item" href="#">Austria</a>
                                    <a className="dropdown-item" href="#">Bahamas</a>
                                    <a className="dropdown-item" href="#">Bangladesh</a>
                                    <a className="dropdown-item" href="#">Cambodia</a>
                                    <a className="dropdown-item" href="#">Canada</a>
                                    <a className="dropdown-item" href="#">India</a>
                                    <a className="dropdown-item" href="#">Uganda</a>
                                    <a className="dropdown-item" href="#">Zimbabwe</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="dropdown ddlFloating">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropState" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="title">State</span>
                                    <span className="value">BENGKULU</span>
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropState">
                                    <a className="dropdown-item active" href="#">BENGKULU</a>
                                    <a className="dropdown-item" href="#">Rajsthan</a>
                                    <a className="dropdown-item" href="#">Delhi</a>
                                    <a className="dropdown-item" href="#">Panjab</a>
                                    <a className="dropdown-item" href="#">Hariyana</a>
                                    <a className="dropdown-item" href="#">Bihar</a>
                                    <a className="dropdown-item" href="#">Goa</a>
                                    <a className="dropdown-item" href="#">Assam</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="float-label">
                                  <input id="pincode" className="h-100" name="pincode" autoComplete="off" type="number" min={1} max={6} required defaultValue={38227} />
                                  <label htmlFor="pincode" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h3 className="form-title">Your Card Details <img src="/images/img_card.png" className="ml-2" alt="card" /></h3>
                            <div className="form-row">
                              <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="2000 - 0000 - 0000 - 0000" defaultValue={4514515414441111} />
                                <span className="error">
                                  Enter your card no.
                                </span>
                              </div>
                              <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Name on card" defaultValue="George Davis" />
                                <span className="error">
                                  Enter your name on card.
                                </span>
                              </div>
                              <div className="col-md-4">
                                <div className="dropdown">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropMonth" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Jan
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropMonth">
                                    <a className="dropdown-item" href="#">Jan</a>
                                    <a className="dropdown-item" href="#">Feb</a>
                                    <a className="dropdown-item" href="#">March</a>
                                    <a className="dropdown-item" href="#">April</a>
                                    <a className="dropdown-item" href="#">May</a>
                                    <a className="dropdown-item" href="#">June</a>
                                    <a className="dropdown-item" href="#">July</a>
                                    <a className="dropdown-item" href="#">Aug</a>
                                    <a className="dropdown-item" href="#">Sep</a>
                                    <a className="dropdown-item" href="#">Oct</a>
                                    <a className="dropdown-item" href="#">Nov</a>
                                    <a className="dropdown-item" href="#">Dec</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="dropdown">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropYear" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    2027
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropYear">
                                    <a className="dropdown-item" href="#">2020</a>
                                    <a className="dropdown-item" href="#">2021</a>
                                    <a className="dropdown-item" href="#">2022</a>
                                    <a className="dropdown-item" href="#">2023</a>
                                    <a className="dropdown-item" href="#">2024</a>
                                    <a className="dropdown-item" href="#">2025</a>
                                    <a className="dropdown-item" href="#">2026</a>
                                    <a className="dropdown-item" href="#">2027</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <input type="password" className="form-control" id="validationCustom05" required defaultValue={121} />
                                <div className="invalid-feedback">
                                  Please provide a valid zip.
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                            </div>
                            <div className="form-row">
                            </div>
                            <div className="form-row">
                              <div className="col-md-12">
                                <label className="form-check-label small">
                                  Save this information for next time
                                  <input className="form-check-input" type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                              </div>
                              <div className="col-md-12">
                                <label className="form-check-label">
                                  Automate Payment
                                  <input className="form-check-input" type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                              </div>
                              <div className="col-md-12">
                              <button className="btn btn-pink btn-makepayment" type="submit" onClick={this.callDEP}>Make Payment</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-orderConfirmation" role="tabpanel" aria-labelledby="v-pills-orderConfirmation-tab">
                    <span className="loader">
                      <span className="loader-inner" />
                    </span>
                    <div className="orderConfirmation d-none">
                      <h2>Thank you for your order!</h2>
                      <h4><b>Your order number is <span className="text-pink">{this.state.orderId}</span></b></h4>
                      <h4>We have sent you a confirmation receipt on your registered emailId <a href="mailTo:johnsmith@gmail.com" className="text-pink">george.davis@sterlite.com</a></h4>
                      <h4>For any support you can reach out to us on <a className="text-pink" href="tel:+91 23 45678329">+91 23 45678329</a> or you can directly contact our customer relationship manager Alex</h4>
                      <a href="javascript:void(0);" className="btn btn-pink">Track order</a>
                      <div className="d-none">
                        <hr />
                        <h3>In process</h3>
                        <ul>
                          <li>
                            <h4><b>Ship to</b></h4>
                            <p>Mayur Madhawani <br />New York, NY<br />10011, USA</p>
                          </li>
                          <li>
                            <h4><b>Shipping Method</b></h4>
                            <p>Standard delivery<br />3-4 business days</p>
                          </li>
                          <li>
                            <h4><b>Pay on checkout</b></h4>
                          </li>
                        </ul>
                        <hr />
                        <table className="tbl_price">
                          <tbody><tr>
                              <td>Pay on checkout</td>
                              <td className="subtotal">$ 0.00</td>
                            </tr>
                            <tr>
                              <td>Shipping</td>
                              <td className="subtotal">$ 0.00</td>
                            </tr>
                            <tr>
                              <td>Pay on checkout</td>
                              <td className="total">$ 775.00</td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        )
    }

    callDEP = () => {

      let userName = "george.davis@gmail.com";
      let url = "https://10.151.32.183:29002/stltelcocommercewebservices/v2/b2ctelco/users/"+userName+"/carts/";
      let token = "access_token=67799fc0-8bec-419b-b97a-65c22610f81";
     

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      };
      fetch(url + '?fields=DEFAULT&' + token, requestOptions)
      .then(response => {

          if (!response.ok) {
            console.log(response);
          }
          console.log("hello");
          return response.json();
        })
        .then(json => {
          console.log("hi");
          console.log("Retrieved items:");
          console.log(json);
          console.log(json.code)

          let id = json.code;
          this.setState({
              cartID: json.code
          })

          console.log("============"+id)
          console.log("============"+this.state.cartID)
          
      
          if (this.state.cartID != null) {
      

              {Entries.map((data, index) => {

              
                var details = {
                    'code': data.code,
                    'qty': data.qty,
                    'lang' : data.lang,
                    'curr' : data.curr

                };
            
            // here we have to pass the key to uniquely identify the content and then 
            // we have to maintain the count to display that in the cart component

                var formBody = [];
                for (var property in details) {
                  var encodedKey = encodeURIComponent(property);
                  var key =encodeURIComponent(index);
                  var encodedValue = encodeURIComponent(details[property], key =details[id] );
                  formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

              fetch(url+id+'/entries?fields=DEFAULT&'+token, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                      },
                      body: formBody
                    })
                  .then(response => {
          
                  /*if (!response.ok) {
                    this.handleResponseError(response);
                  }*/
                  return response.json();
                })
                .then(json => {
                  console.log("Retrieved itemsssssssss:")});
                })
                } 
                
              fetch(url+id+'/addresses/delivery?lang=en&curr=JPY&'+token, {
                  method: 'POST',
                  headers: {
                      'Content-Type' : 'application/json'  
                  },
                  body : JSON.stringify(

                    {
                      "defaultAddress":true,
                      "titleCode":"mr",
                      "firstName":"George",
                      "lastName":"Davis",
                      "line1":"Floor 1, Kebun ",
                      "line2":"ABC Apartment",
                      "town":"Ahmedabad",
                      "region":{
                         "isocode":"US-AK",
                         "isocodeShort":"AK"
                      },
                      "country":{
                         "isocode":"US"
                      },
                      "postalCode":"38227",
                      "phone":"7946121465498"
                   }

                  )
                })
              .then(response => {
      
                      if (!response.ok) {
                      console.log(response);
                      }
                      return response.json();
              }).then (json => {
              
              console.log("completed adding delivery address")


              fetch(url+id+'/deliverymode?deliveryModeId=pickup&lang=en&curr=JPY&'+token, {
                  method: 'PUT',
                  headers: {
                      
                  },
                })
              .then(response => {
      
                      if (!response.ok) {
                      console.log(response);
                      }
                      
              }).then (json => {

                  console.log("Completed delivery mode addition operation")

                  const paymentModeRequest = {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(

                          {
                              "accountHolderName": "George Davis",
                              "billingAddress": {
                                "cellphone": "94283755862",
                                "companyName": "STL",
                                "country": {
                                  "isocode": "US",
                                  "name": "United States"
                                },
                                "defaultAddress": true,
                                "district": "Ahmedabad",
                                "email": "george.davis@gmail.com",
                                "firstName": "George",
                                "formattedAddress": "ABC corp",
                                "id": "",
                                "lastName": "Davis",
                                "line1": "Test11",
                                "line2": "Test12",
                                "phone": "978984321654",
                                "postalCode": "382481",
                                "region": {
                                  "countryIso": "US",
                                  "isocode": "US-AK",
                                  "isocodeShort": "AK",
                                  "name": "Alaska"
                                },
                                  "shippingAddress": true,
                                  "title" : "Mr.",
                                  "titleCode" : "mr",
                                  "town" : "Ahmedabad",
                                  "visibleInAddressBook" : true
                              },
                              "cardNumber": "123456789123456",
                              "cardType": {
                                "code": "visa",
                                "name": "visa"
                              },
                              "defaultPayment": true,
                              "expiryMonth": "11",
                              "expiryYear": "2021",
                              "id": "",
                              "issueNumber": "",
                              "saved": true,
                              "startMonth": "10",
                              "startYear": "2019",
                              "subscriptionId": ""
                            }

                      )
                  };

                  fetch(url+id+'/paymentdetails/?fields=DEFAULT&lang=en&curr=JPY&'+token, paymentModeRequest)
                  .then(response => {
          
                          if (!response.ok) {
                          console.log(response);
                          }
                          console.log("Payment Mode added successfully")
                          return response.json();
                  }).then (json => {
                  
                    
                      fetch('https://10.151.32.183:29002/stltelcocommercewebservices/v2/b2ctelco/users/'+userName+'/orders/?cartId='+id+'&fields=FULL&lang=en&curr=JPY&'+token, {
                          method: 'POST',
                          headers: {
                          
                          },
                      })
                      .then(response => {
              
                              if (!response.ok) {
                              console.log(response);
                              }

                              console.log("Order Placed successfully")
                              return response.json();
                      }).then(json => {
                        console.log(json)
                        this.setState({
                          orderId : json.code
                        })
                        console.log("Order Placed successfully")
                      })

                      })   
                   }) 
              }) 
            
          }
      })
  
  }
}


 
  
const mapStateToProps = state => {
  console.log(state)
  console.log(state.sendProductToCart.name);
  console.log(state.sendProductToCart.author);
  console.log(state.sendProductToCart.logo);
  console.log(state.sendProductToCart.quantity);

   return{
       name :state.sendProductToCart.name

   }
   
};

// export default TodoList;
export default connect(mapStateToProps)(CheckoutSteps);



// export default CheckoutSteps;