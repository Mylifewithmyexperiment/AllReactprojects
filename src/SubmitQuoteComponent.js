import React from 'react';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';


class SubmitQuoteComponent extends React.Component {

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
             <StickyiconComponent/>



             <section className="cart_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btnGroup">
                            <a href="javascript:void(0);" className="btn btn-white ml-0"><i className="fa fa-chevron-right mr-2"></i>Continue Shopping</a></div>
                        <div className="collapse show" id="request_Quote">
                            <div className="viewDiv">
                                <form className="row">
                                    <div className="col-md-3">
                                        <div className="form-group text-uppercase col mb-0">This Cart is being Quoted</div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">STATUS: <span className="gothamLight">Submitted</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">QUOTE ID: <span className="gothamLight">00001001</span></label></div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group col mb-0"><label className="gothamMedium mb-0">VERSION: <span className="gothamLight">1</span></label></div>
                                    </div>
                                    <div className="col-md-12">
                                        <hr/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group col">
                                            <label className="gothamMedium">Preferred invoice address :</label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Comapny Name:</label>
                                            <span className="gothamLight">Sterlite Technologies</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Contact:</label>
                                            <span className="gothamLight">0791122110</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Use PO box address:</label>
                                            <span className="gothamLight">No</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Street Address:</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Postcode:</label>
                                            <span className="gothamLight">360001</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">City:</label>
                                            <span className="gothamLight">Ahmedabad</span>
                                        </div>

                                        <div className="form-group col">
                                            <label className="gothamMedium">Country:</label>
                                            <span className="gothamLight">India</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Phone (Optional):</label>
                                            <span className="gothamLight">0791155441</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group col description">
                                            <label className="gothamMedium">Description (Optional):</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Your reference (Optional):</label>
                                            <span className="gothamLight">N/A</span>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Previous Estimated Total:<b className="currency ml-2"></b><span className="gothamLight ml-1">0.00</span></label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Date Placed:<span className="gothamLight ml-1">May 28, 2020 12:20 AM</span></label>
                                        </div>
                                        <div className="form-group col">
                                            <label className="gothamMedium">Date Updated:<span className="gothamLight ml-1">July 22, 2020 6:56 PM</span></label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <table id="viewCartTbl" className="table mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col" className="text-center">Quantity</th>
                                    <th scope="col" className="text-right">Recurring <br/>Charges</th>
                                    <th scope="col" className="text-right">One Time <br/>Charges</th>
                                    <th scope="col" className="text-center">Delivery</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr stl-id="04241349">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/office-365-enterprise-e1.png" className="card-img" alt="Office 365 Enterprise E1"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>E1</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Office 365 Enterprise E1</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4241349
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65222610AE01A24
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>6.55</span>
                                                <p className="singleprice d-none">6.55</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr stl-id="0100772575">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/brand-ADO.gif" className="card-img" alt="Adobe"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Adobe</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Adobe Coldfusion Standard 2016 All Platforms</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>100772575
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>65268346AD01A00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="onetime charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1498.00</span>
                                                <p className="singleprice d-none">1498.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr stl-id="04465825">
                                    <td className="products pl-0">
                                        <div className="card">
                                            <div className="row no-gutters">
                                                <div className="cardimg">
                                                    <img src="./images/laptop.jpeg" className="card-img" alt="Dell"/>
                                                    <span className="img-gradient">
                                                        <h5> <span>Dell</span></h5>
                                                    </span>
                                                </div>
                                                <div className="card-body flex-column">
                                                    <div className="d-flex justify-content-between w-100 mb-2">
                                                        <h5 className="card-title w-100">Dell Precision 3551 i7 32/512GB Mob. WS</h5>
                                                    </div>
                                                    <ul className="mb-0">
                                                        <li>
                                                            <b className="mr-1">Sterlite no.:</b>4465825
                                                        </li>
                                                        <li className="pb-2">
                                                            <b className="mr-1">Manufacturer no.:</b>KKXP3
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-center">
                                        <div className="quantityGroup">
                                            <label className="gothamMedium text-dark">1</label>
                                        </div>
                                    </td>
                                    <td className="recurring charges">
                                        <ul>
                                            <li className="price">
                                                <strong className="title"></strong>
                                                <b className="currency"></b>
                                                <span>1759.00</span>
                                                <p className="singleprice d-none">1759.00</p>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="gothamMedium text-right"></td>
                                    <td className="text-center valign_middle text-dark">
                                        SHIP
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="text-pink text-center">
                                        <h4 className="gothamMedium mb-0">Total :</h4>
                                    </td>
                                    <td className="text-right text-black gothamMedium" id="totalRecurring"><b className="currency"></b> <span className="gothamMedium">1759.00</span></td>
                                    <td className="text-right text-black" id="totalOnetime"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="5" className="p-0"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td colspan="3" className="border-0">
                                        <table className="checkoutTotal">
                                            <tr>
                                                <td colspan="3" className="border-0">
                                                    <h3 className="paycheckout text-left">Order Summary</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-pink">
                                                    <h4 className="gothamMedium mb-0">Pay on Checkout :</h4>
                                                </td>
                                                <td></td>
                                                <td id="subtotal_cart" className="text-right pr-0"><b className="currency"></b> <span className="gothamMedium">1504.55</span></td>
                                            </tr>
                                            <tr>
                                                <td>Flat transaction fee incl. shipping costs :</td>
                                                <td></td>
                                                <td className="text-right pr-0">FREE</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

             <FooterComponent/>
             </div>
        );
    }
}

export default SubmitQuoteComponent;