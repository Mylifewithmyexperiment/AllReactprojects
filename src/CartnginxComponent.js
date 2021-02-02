import React from 'react';
import LogoComponent from './LogoComponent'
import NginxCartdetailComponent from './NginxCartdetailComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';


class CartnginxComponent extends React.Component {

// from props only we can transfer data on click event which should be used for fethcng thise data


constructor()
{
    super();

    this.state={
        
        message:""
    }
}


    buyProduct = () => {

        console.log("start api call");

        fetch("http://10.151.35.38:8080/createServiceInstance", {

            method: 'POST',
            headers:{
                'Content-Type':'application/json'
                
            },

            body: JSON.stringify({
                "servicename":"nginx"
            })
        }).then(response=> {

                if (!response.ok) {
                    console.log(response);
                    }
                    
                    return response.text();
        }).then(result => {
            
            console.log("result="+result);

            this.setState({

                message:result
            })

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
                         <NginxCartdetailComponent/>
                     </div>
                 </div>
             </nav>
             <MenuComponent/>
             <StickyiconComponent/>

             <section className="cart_section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h3 className="text-white gothamMedium basket details mb-4">Your Shopping Basket <span className="gothamLight">[ <span id="totalCart">1</span> ]</span></h3>

                        <div className="btnGroup">
                            <a href="javascript:void(0);" className="btn btn-white ml-0"><i className="fa fa-chevron-right mr-2"></i>Continue Shopping</a>
                            <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder mr-auto">Add Items</a>
                            <div className="cartGroupBtn">
                                <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Save as Quote</a>
                                <a className="btn btn-white withoutRadiusBorder requestaQuote" data-toggle="collapse" href="#request_Quote" role="button" aria-expanded="false" aria-controls="request_Quote">Request a Quote</a>
                                <a href="javascript:void(0);" className="btn btn-success btn-checkout withoutRadiusBorder">Checkout</a>
                            </div>
                            <div className="requestQuoteBtn d-none">
                                <a href="/emptycart" className="btn btn-pink withoutRadiusBorder">Cancel Quote</a>
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#confirmQuoteModal" className="btn submit-quote btn-success withoutRadiusBorder mr-0">Submit Quote</a>
                               
                                <div className="modal fade" id="confirmQuoteModal" tabindex="-1" role="dialog" aria-labelledby="confirmQuoteModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="exampleModalLabel">Confirm Requested Quote 00001001?</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label className="gothamMedium">Name:</label>
                                                    <span className="gothamLight">Quote 00001001</span>
                                                </div>
                                                <div className="form-group description">
                                                    <label className="gothamMedium">Description: </label>
                                                    <span className="gothamLight">N/A</span>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <p className="mb-3 gothamMedium">Once a request for quote is submitted it cannot be modified.</p>
                                                    <p className="mb-0 gothamMedium">Are you sure you want to submit this quote?</p>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <a href="/submitquote" className="btn btn-pink">YES</a>
                                                <a href="javascript:void(0);" data-dismiss="modal" aria-label="Close" className="btn btn-secondary">NO</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>

                        <div className="collapse" id="request_Quote">
                            <form className="row">
                                <div className="col-md-4">
                                    <div className="form-group text-uppercase col mb-0">This Cart is being Quoted</div>
                                </div>
                                <div className="col-md-2">
                                    <div className="form-group col mb-0"><label className="gothamMedium mb-0">STATUS: <span className="gothamLight">Draft</span></label></div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group col mb-0"><label className="gothamMedium mb-0">QUOTE ID: <span className="gothamLight">00001001</span></label></div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group col mb-0"><label className="gothamMedium mb-0">VERSION: <span className="gothamLight">1</span></label></div>
                                </div>
                                <div className="col-md-12">
                                    <hr/>
                                    <h4 className="gothamMedium pl-3">Please review and confirm your request for a quote</h4>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group col">
                                        <label className="gothamLight">Preferred invoice address</label>
                                        <input className="form-control" placeholder="Company (line 1)" />
                                    </div>
                                    <div className="form-group col">
                                        <input type="number" className="form-control" placeholder="Contact" />
                                    </div>
                                    <div className="form-group col">
                                        <label className="gothamLight">Use PO box address:</label>
                                        <div className="dropdown usepobox">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                No
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropQty">
                                                <a className="dropdown-item active" href="javascript:void(0);">No</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Yes</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col">
                                        <textarea className="form-control" placeholder="Street Address"></textarea>
                                    </div>
                                    <div className="form-group col">
                                        <input type="number" className="form-control" placeholder="Postcode" />
                                    </div>
                                    <div className="form-group col">
                                        <input type="number" className="form-control" placeholder="City" />
                                    </div>

                                    <div className="form-group col">
                                        <label className="gothamLight">Country:</label>
                                        <div className="dropdown usepobox">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Select Country
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropQty">
                                                <a className="dropdown-item" href="javascript:void(0);">Austria</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Belgium</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Denmark</a>
                                                <a className="dropdown-item" href="javascript:void(0);">France</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Greece</a>
                                                <a className="dropdown-item" href="javascript:void(0);">India</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Italy</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Spain</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Sweden</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col">
                                        <input type="number" className="form-control" placeholder="Phone (Optional)" />
                                    </div>
                                    <div className="form-group col">
                                        <label className="lbl_privacy">Please read our <a href="javascript:void(0);" className="text-pink">Privacy Policy</a> for information on how we process your data and protect your rights as a data subject.</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group col">
                                        <label className="gothamLight">Description (Optional):</label>
                                        <textarea className="form-control description" placeholder="Description (Optional)"></textarea>
                                    </div>
                                    <div className="form-group col">
                                        <textarea className="form-control" placeholder="Your reference (Optional)"></textarea>
                                    </div>
                                    <div className="form-group col">
                                        <label className="gothamMedium">Previous Estimated Total:<b className="currency ml-2"></b><span className="gothamLight ml-1">0.00</span></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <table className="table mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Recurring <br/>Charges</th>
                                    <th scope="col" className="text-right">One Time <br/>Charges</th>
                                    <th scope="col" className="text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr stl-id="4241349">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/nginx.png" className="card-img h-auto w-100" alt="NGINX"/>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">NGINX</h5>
                                                        <i className="fa fa-chevron-down more up"></i>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <b className="mr-1">Version:</b><span>1.19.1</span>
                                                        </li>


                                                        <li className="pb-2">
                                                            <b class="mr-1">Plan:</b><strong id="planName">Opensovffdurce</strong> (<span id="gbdisk">1</span> GB-DISK, <span id="gbram">1</span> GB-RAM, <span id="gbbackup">1</span> GB-Backups, <span id="vpc">1</span> Virtual Processor Core)
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-truck text-pink"></i> <b>In stock</b>
                                                        </li>
                                                    </ul>

                                                    <div className="note">
                                                        <textarea type="text" className="form-control" placeholder="Note"></textarea>
                                                    </div>
                                                    <div className="remaining">
                                                        <ul>
                                                            <li><b>Target:</b> Sterlite Kubernetes Service</li>
                                                            <li><b>Method:</b> Helm chart</li>
                                                            <li><b>Kubernetes Cluster:</b> No Cluster Available</li>
                                                            <li><b>Workspace:</b> nginx-08-04-2020</li>
                                                            <li><b>Resource Group:</b> Default</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                            <input className="quantityTxt quantity ct" name="quantity[]" type="text" value="1" maxlength="4"/>
                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                        </div>
                                    </td>
                                    <td class="recurring charges">
                                        <ul>
                                            <li class="price">
                                                <strong class="title"></strong>
                                                <b class="currency"></b>
                                                <span id="detail_price">0.00</span>
                                                <p class="singleprice d-none">0.00</p>
                                            </li>
                                            <li class="mrp text-danger d-none">
                                                <strong class="title"></strong>
                                                <b class="currency"></b>
                                                <span>10.00</span>
                                                <p class="singleprice d-none">10.00</p>
                                            </li>
                                            <li class="yousave text-success d-none">
                                                <strong class="title">You Save : </strong>
                                                <b class="currency"></b>
                                                <b><span>4.45</span> (44.5%)</b>
                                                <p class="singleprice d-none">4.45</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="gothamMedium text-right mobile-d-none"></td>
                                    <td className="text-right valign_middle">
                                        <div className="iconGroup d-flex flex-column">
                                            <i className="fa fa-trash text-danger delete"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="mobile-d-none">
                                    <td colspan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td className="mobile-d-none"></td>
                                    <td className="text-pink text-center">
                                        <h4 className="gothamMedium mb-0">Total :</h4>
                                    </td>
                                    <td className="text-right text-black gothamMedium" id="totalRecurring">
                                        <strong className="mr-2">Total Recurring Charges:</strong>
                                        <b className="currency"></b> <span className="gothamMedium">0.00</span>
                                    </td>
                                    <td className="text-right text-black" id="totalOnetime">
                                        <strong className="mr-2">Total Onetime Charges:</strong>
                                        <b className="currency"></b> <span className="gothamMedium">0.00</span>
                                    </td>
                                    <td className="mobile-d-none"></td>
                                </tr>
                                <tr className="mobile-d-none">
                                    <td colspan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td className="mobile-d-none"></td>
                                    <td colspan="3" className="border-0 mobile-p-0">
                                        <table className="checkoutTotal">
                                            <tr>
                                                <td colspan="3" className="border-0">
                                                    <h3 className="paycheckout text-left">Order Summary</h3>
                                                </td>
                                            </tr>
                                            <tr className="checkoutrow">
                                                <td className="text-pink">
                                                    <h4 className="gothamMedium mb-0">Pay on Checkout :</h4>
                                                </td>
                                                <td className="mobile-d-none"></td>
                                                <td id="subtotal_cart" className="text-right pr-0 whitespacenowrap"><b className="currency"></b> <span className="gothamMedium">0.00</span></td>
                                            </tr>
                                            <tr>
                                                <td className="mobile-d-none">Flat transaction fee incl. shipping costs :</td>
                                                <td className="mobile-d-none"></td>
                                                <td className="text-right pr-0">
                                                    <div className="d-flex align-items-center justify-content-end"><strong className="mr-2 mobile-d-block">Flat transaction fee incl. shipping costs :</strong>FREE
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td className="mobile-d-none"></td>
                                </tr>
                                <tr>
                                    <td colspan="4" align="right">
                                        <a href="javascript:void(0);" className="btn btn-success btn-checkout withoutRadiusBorder mb-3 mt-2">Checkout</a>
                                    </td>
                                    <td className="mobile-d-none"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
      

       
        <section className="paymentCard d-none">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="makePayment">
                            <form className="">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <h3 className="form-title">Billing address</h3>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Full Name" value="George Davis"/>
                                                <span className="error">
                                                    Enter Full Name
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Address 1" value="Floor 1, Kebun "/>
                                                <span className="error">
                                                    Enter Address 1
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Address 2" value="38227"/>
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
                                                <input className="form-control" autocomplete="off" type="text" min="1" max="6" value="382271" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="form-title">Your Card Details <img src="./images/img_card.png" className="ml-2" alt="card"/></h3>
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="2000 - 0000 - 0000 - 0000" value="4514515414441111"/>
                                                <span className="error">
                                                    Enter your card no.
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" placeholder="Name on card" value="George Davis"/>
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
                                                <input type="password" className="form-control" id="validationCustom05" required value="121" />
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
                                                    <input className="form-check-input" type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-check-label automatePayment">
                                                    Automate Payment
                                                    <input className="form-check-input" type="checkbox" checked="true"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="col-md-12">
                                                <a href="javascript:void(0);" className="btn btn-pink btn-makepayment" type="button"    onClick={this.buyProduct}>Confirmation</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="orderConfirm d-none">
                            <span className="loader" style={{display: "none"}}>
                                <span className="loader-inner"></span>
                            </span>

                            <div className="orderConfirmation d-none">
                                <h2>Thank you for your order!</h2>
                                <h4><b>Your order number is <span className="text-pink">#LEA100002732</span></b></h4>
                                    <h4>{this.state.message}</h4>
                                <h4>We have sent you a confirmation receipt on your registered emailId <a href="mailTo:johnsmith@gmail.com" className="text-pink">george.davis@sterlite.com</a></h4>

                                <h4>For any support you can reach out to us on <a className="text-pink" href="tel:+91 23 45678329">+91 23 45678329</a> or you can directly contact our customer relationship manager Alex</h4>
                                <a href="javascript:void(0);" className="btn btn-pink">Track order</a>
                                <div className="d-none">
                                    <hr/>

                                    <h3>In process</h3>
                                    <ul>
                                        <li>
                                            <h4><b>Ship to</b></h4>
                                            <p>Mayur Madhawani <br/>New York, NY<br/>10011, USA</p>
                                        </li>
                                        <li>
                                            <h4><b>Shipping Method</b></h4>
                                            <p>Standard delivery<br/>3-4 business days</p>
                                        </li>
                                        <li>
                                            <h4><b>Pay on checkout</b></h4>
                                        </li>
                                    </ul>
                                    <hr/>

                                    <table className="tbl_price">
                                        <tr>
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
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <FooterComponent/>
        </div>
            
        );
    }
}

export default CartnginxComponent;