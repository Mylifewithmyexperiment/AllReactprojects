import React from 'react';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';



class MyAccountDetailPageComponent extends React.Component {

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


           
        <section className="myaccount">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12">
                        <div className="accordion">
                            <h3 className="text-white gothamMedium">My Account</h3>
                            <div className="card mb-3">
                                <div className="card-header" data-toggle="collapse" data-target="#informationandcontact">
                                    <a href="javascript:void(0);" className="card-title"> Information & Contact <i className="fas fa-chevron-down"></i></a>
                                </div>
                                <div id="informationandcontact" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#contact">Contact</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#notification">Notifications</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#agreementsandlicences">Agreements and licences</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#productsandpurchasing">
                                    <a className="card-title"> Products & Purchasing <i className="fas fa-chevron-down"></i></a>
                                </div>
                                <div id="productsandpurchasing" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#quotes">Quotes</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#ordersawaitingmyapproval">Orders awaiting my approval</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#shoppinglists">Shopping lists</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#blanketorders">Blanket orders</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#orders">Orders</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#deliverynotes">Delivery notes</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#invoices">Invoices</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#returns">Returns</a></li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#usersandsettings">
                                    <a className="card-title"> Users & Settings <i className="fas fa-chevron-down"></i></a>
                                </div>
                                <div id="usersandsettings" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#account">Account</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#users">Users</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#userpresets">User presets</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#options">Options</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#avatar">Avatar</a></li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#addressesandpayment">
                                    <a className="card-title"> Addresses & Payment <i className="fas fa-chevron-down"></i></a>
                                </div>
                                <div id="addressesandpayment" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#invoiceaddresses">Invoice addresses</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#shippingaddresses">Shipping addresses</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#costcentres">Cost centres</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#paymentmethods">Payment methods</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade" id="contact" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Account Manager</h3>
                                <div className="card-deck">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="./images/app1.jpg" className="img-responsive d-none" alt=""/>
                                            <ul className="pl-0 mb-0">
                                                <li><span>Phone:</span>&nbsp;<a href="tel:1234567890000">+12 3456 789-0000</a></li>
                                                <li><span>E-mail:</span>&nbsp;<a href="mailTo:contact@stltech.in">contact@stltech.in</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">E-MAIL</a>
                                            <a href="javascript:void(0);" className="btn btn-outline pink font-14 mb-0">CALL</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="address text-white mt-3">
                                    <h4 className="gothamMedium">Sterlite Technologies</h4>
                                    <p>Bechtle Platz 1<br/> 74172 Neckarsulm.</p>
                                    <ul>
                                        <li><span>Phone:</span><a href="tel:000000000-1600">+00 0000 000-1600</a></li>
                                        <li><span>Fax:</span><a href="fax:000000111-1110">+00 0000 111-1110</a></li>
                                        <li><span>E-mail:</span><a href="mailTo:info@stltech.in">info@stltech.in</a></li>
                                    </ul>
                                    <a href="javascript:void(0);" className="btn btn-pink addtocart">Direction</a>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="notification" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Notifications</h3>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Show in notification stream</th>
                                            <th scope="col">Notify me by e-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Authorisation flows</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Delivery notes</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Invoices</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Orders</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Quotes</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Returns</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Shopping lists</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Users</td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label className="form-check-label pink">
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="agreementsandlicences" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Agreement and licences</h3>
                            </div>

                            <div className="tab-pane fade" id="quotes" role="tabpanel">
                                <h3 className="text-pink gothamMedium">My Quotes</h3>

                                <div className="alert alert-danger gothamLight" role="alert">
                                    <span className="gothamMedium">2</span> Quotes Found.
                                </div>
                                <div className="d-flex align-items-center mb-3"> <span className="text-white mr-2 gothamMedium">Sort By :</span>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Updated Date
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item active" href="javascript:void(0);">Updated Date</a>
                                            <a className="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a className="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quote Id</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Date Updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="/submitquote" className="text-pink gothamMedium">Quote 00001001</a></td>
                                            <td>00001001</td>
                                            <td>Submitted</td>
                                            <td>Jul 22, 2020 6:56 PM</td>
                                        </tr>
                                        <tr>
                                            <td><a href="/quoteDetail" className="text-pink gothamMedium">Quote 00001003</a></td>
                                            <td>00001003</td>
                                            <td>Draft</td>
                                            <td>May 28, 2020 12:20 AM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="ordersawaitingmyapproval" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Orders awaiting my approval</h3>
                            </div>
                            <div className="tab-pane fade" id="shoppinglists" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Shopping lists</h3>
                            </div>
                            <div className="tab-pane fade" id="blanketorders" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Blanket orders</h3>
                            </div>
                            <div className="tab-pane fade" id="orders" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Orders</h3>
                            </div>
                            <div className="tab-pane fade" id="deliverynotes" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Delivery notes</h3>
                            </div>
                            <div className="tab-pane fade" id="invoices" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Invoices</h3>
                            </div>
                            <div className="tab-pane fade" id="returns" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Returns</h3>
                            </div>

                            <div className="tab-pane fade active show" id="account" role="tabpanel">
                                <h3 className="text-pink gothamMedium">My user</h3>

                                <span className="text-white d-block mb-3">Required fields are marked with an asterisk (*). Note that a user’s e-mail address must be unique to this user.</span>
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="title">Title<sup>*</sup></label>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropTitle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Mr
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropTitle">
                                                    <a className="dropdown-item active" href="#">Mr</a>
                                                    <a className="dropdown-item" href="#">Ms</a>
                                                    <a className="dropdown-item" href="#">Mx</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="language">Preferred language</label>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    English
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropLang">
                                                    <a className="dropdown-item active" href="#">English</a>
                                                    <a className="dropdown-item" href="#">Dutch</a>
                                                    <a className="dropdown-item" href="#">Russian</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="firstname">First Name<sup>*</sup></label>
                                            <input type="text" className="form-control" id="firstname" value="George"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="phone">Phone</label>
                                            <input type="number" className="form-control" id="phone" value="0790000000"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="lastname">Last Name<sup>*</sup></label>
                                            <input type="text" className="form-control" id="lastname" value="Davis"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="mobile">Mobile</label>
                                            <input type="number" className="form-control" id="mobile" value="0000000000"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="email">E-mail<sup>*</sup></label>
                                            <input type="email" className="form-control" id="email" value="george.davis@sterlite.com"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="department">Department</label>
                                            <input type="text" className="form-control" id="department" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">CC</label>
                                            <input type="email" className="form-control" id="inputEmail4"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="costcentre">Cost centre</label>
                                            <input type="text" className="form-control" id="costcentre"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label text-white">E-mail CC only
                                            <input className="form-check-input" type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <a href="#" className="text-pink">Reset Password</a>
                                    </div>
                                </form>
                                <div className="d-flex mt-3">
                                    <a href="#" className="btn btn-danger">Delete my user data</a>
                                    <a href="#" className="btn btn-primary disabled ml-auto mr-2">Clear</a>
                                    <a href="#" className="btn btn-success disabled">Save</a>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="users" role="tabpanel">
                                <div className="user">
                                    <div className="user_head">
                                        <div>
                                            <h3 className="text-pink gothamMedium">Users</h3>
                                            <span className="text-white d-block mb-3">Create, modify or delete users.</span>
                                        </div>
                                        <a href="#" className="btn btn-pink add_user withoutRadiusBorder">Add user</a>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label pink text-white">Show admin users only
                                            <input className="form-check-input" type="checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Last name</th>
                                                <th scope="col">First name</th>
                                                <th scope="col">E-mail</th>
                                                <th scope="col">User type</th>
                                                <th scope="col">Authorisation flow</th>
                                                <th scope="col">Manage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Davis</td>
                                                <td>George</td>
                                                <td>george.davis@sterlite.com</td>
                                                <td className="usertype">
                                                    <i className="fas fa-question"></i> Custom (no preset)
                                                </td>
                                                <td></td>
                                                <td>
                                                    <ul className="manage_ul">
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <i className="fas fa-pen"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <i className="fas fa-key"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);">
                                                                <i className="fas fa-trash-alt"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item disabled">
                                                <a className="page-link prev" href="javascript:void(0);" tabindex="-1" aria-disabled="true">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                            <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link next" href="javascript:void(0);">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="createuser d-none">
                                    <h3 className="text-pink gothamMedium">Create user</h3>
                                    <span className="text-white d-block mb-3">Required fields are marked with an asterisk (*). Note that a user’s e-mail address must be unique to this user. When you save with the ‘Activate’ box ticked, the user will receive an activation e-mail and password. You may also choose to create the account now and activate it later via the user overview.</span>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="comapny">Company<sup>*</sup></label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label for="title">Title<sup>*</sup></label>
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropTitle1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Mr
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropTitle1">
                                                        <a className="dropdown-item active" href="#">Mr</a>
                                                        <a className="dropdown-item" href="#">Ms</a>
                                                        <a className="dropdown-item" href="#">Mx</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="language">Preferred language</label>
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropLang1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        English
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropLang1">
                                                        <a className="dropdown-item active" href="#">English</a>
                                                        <a className="dropdown-item" href="#">Dutch</a>
                                                        <a className="dropdown-item" href="#">Russian</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>First Name<sup>*</sup></label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Phone</label>
                                                <input type="number" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Last Name<sup>*</sup></label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Mobile</label>
                                                <input type="number" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>E-mail<sup>*</sup></label>
                                                <input type="email" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Department</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>CC</label>
                                                <input type="email" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Cost centre</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label className="form-check-label text-white">E-mail CC only
                                                    <input className="form-check-input" type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-check-label pink">Activate
                                                    <input className="form-check-input" checked type="checkbox"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="d-flex mt-3">
                                        <a href="#" className="btn btn-cancel btn-secondary ml-auto mr-2">Cancel</a>
                                        <a href="#" className="btn btn-primary disabled mr-2">Clear</a>
                                        <a href="#" className="btn btn-success disabled">Save</a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="userpresets" role="tabpanel">
                                <h3 className="text-pink gothamMedium">User presets</h3>
                                <span className="text-white d-block mb-3">User presets allow you to easily assign the same settings to multiple users and manage settings in one place.</span>
                                <div className="card-deck">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="text-center">0</h1>
                                        </div>
                                        <div className="card-footer">
                                            <h4 className="text-white text-center">User Types</h4>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="text-center">0</h1>
                                        </div>
                                        <div className="card-footer">
                                            <h4 className="text-white text-center">Authorisation flows</h4>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="text-center">0</h1>
                                        </div>
                                        <div className="card-footer">
                                            <h4 className="text-white text-center">Checkout defaults</h4>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="text-center">0</h1>
                                        </div>
                                        <div className="card-footer">
                                            <h4 className="text-white text-center">Access Pass</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="options" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Options</h3>
                                <span className="text-white d-block mb-3">Manage global shop settings that apply to all users.</span>
                                <div className="options">
                                    <div className="form-row">
                                        <div className="col-md-5">
                                            <h6 className="gothamMedium text-white">Max. authorisation flow timeout</h6>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="rdbGroup">
                                                <label className="lblRdb">1 week
                                                    <input type="radio" checked="checked" name="radio"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="lblRdb">2 weeks
                                                    <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="lblRdb">3 weeks
                                                    <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-5">
                                            <h6 className="gothamMedium text-white">Allow partial delivery for all users</h6>
                                        </div>
                                        <div className="col-md-7">
                                            <label className="form-check-label pink">
                                                <input className="form-check-input" type="checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <a className="btn btn-pink withoutRadiusBorder mb-2" data-toggle="collapse" href="#linkanddocuments" role="button" aria-expanded="false" aria-controls="linkanddocuments">
                                                Links and documents
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="collapse" id="linkanddocuments">
                                                <div className="card card-body">
                                                    <label className="form-check-label pink">Show on "my home page"
                                                        <input className="form-check-input" checked type="checkbox"/>
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="gothamMedium">Text [Optional]</label>
                                                    <textarea rows="5" className="mb-3"></textarea>
                                                    <div className="btnGroups text-right">
                                                        <a className="btn btn-pink addfile withoutRadiusBorder mb-2" data-toggle="collapse" href="#addfile" role="button" aria-expanded="false" aria-controls="addfile">
                                                            Add file
                                                        </a>
                                                        <a className="btn btn-pink withoutRadiusBorder mb-2 ml-2" data-toggle="collapse" href="#addlink" role="button" aria-expanded="false" aria-controls="addlink">
                                                            Add link
                                                        </a>
                                                    </div>
                                                    <div className="collapse" id="addfile">
                                                        <label className="gothamMedium d-block">Upload a file</label>
                                                        <form action="#" method="POST" enctype="multipart/form-data">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group mb-2">
                                                                        <div className="preview-zone hidden">
                                                                            <div className="box box-solid">
                                                                                <div className="box-header with-border">
                                                                                    <div><b>Preview</b></div>
                                                                                    <div className="box-tools pull-right">
                                                                                        <button type="button" className="btn btn-danger btn-xs remove-preview">
                                                                                            <i className="fa fa-times"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="box-body"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="dropzone-wrapper">
                                                                            <div className="dropzone-desc">
                                                                                <i className="fas fa-cloud-upload-alt"></i>
                                                                                <p>Click on the arrow to select a file from your computer or mobile device.</p>
                                                                            </div>
                                                                            <input type="file" name="img_logo" className="dropzone"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <span className="uploadfiles">You can upload files up to 5 MB. Supported file formats include JPG, PNG, TIFF, BMP, PDF, DOC, DOCX, XLS and XLSX.</span>
                                                                </div>
                                                            </div>
                                                            <div className="row btn-okcancel text-right">
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-outline pink normal withoutRadiusBorder mb-2 mr-0">CANCEL</button>
                                                                    <button type="submit" className="btn btn-pink withoutRadiusBorder mb-2 ml-2">OK</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="collapse" id="addlink">
                                                        <label className="gothamMedium d-block">Add a link</label>
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <input type="text" className="form-control" placeholder="URL"/>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <input type="text" className="form-control" placeholder="Link name [optional]"/>
                                                                </div>
                                                            </div>
                                                            <div className="row text-right">
                                                                <div className="col-md-12">
                                                                    <button type="submit" className="btn btn-outline pink normal withoutRadiusBorder mb-2 mr-0">CANCEL</button>
                                                                    <button type="submit" className="btn btn-pink withoutRadiusBorder mb-2 ml-2">OK</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="avatar" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Avatar</h3>
                                <form className="mb-3" action="#" method="POST" enctype="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="gothamMedium d-block text-white">Upload a User Avatar</label>
                                            <div className="form-group mb-2">
                                                <div className="preview-zone hidden">
                                                    <div className="box box-solid">
                                                        <div className="box-header with-border">
                                                            <div><b>Preview</b></div>
                                                            <div className="box-tools pull-right pr-2">
                                                                <button type="button" className="btn btn-danger btn-xs remove-preview">
                                                                    <i className="fa fa-times"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="box-body"></div>
                                                    </div>
                                                </div>
                                                <div className="dropzone-wrapper">
                                                    <div className="dropzone-desc">
                                                        <i className="fas fa-cloud-upload-alt"></i>
                                                        <p>Click on the arrow to select a file from your computer or mobile device.</p>
                                                    </div>
                                                    <input type="file" name="img_logo" className="dropzone"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="uploadfiles text-white">You can upload files up to 5 MB. Supported file formats include JPG, PNG, TIFF, BMP, PDF, DOC, DOCX, XLS and XLSX.</span>
                                        </div>
                                    </div>
                                    <div className="row btn-okcancel text-right">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-outline pink normal withoutRadiusBorder mb-2 mr-0">CANCEL</button>
                                            <button type="submit" className="btn btn-pink withoutRadiusBorder mb-2 ml-2">OK</button>
                                        </div>
                                    </div>
                                </form>
                                <form action="#" method="POST" enctype="multipart/form-data">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="gothamMedium d-block text-white">Upload a Company Avatar</label>
                                            <div className="form-group mb-2">
                                                <div className="preview-zone hidden">
                                                    <div className="box box-solid">
                                                        <div className="box-header with-border">
                                                            <div><b>Preview</b></div>
                                                            <div className="box-tools pull-right pr-2">
                                                                <button type="button" className="btn btn-danger btn-xs remove-preview">
                                                                    <i className="fa fa-times"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="box-body"></div>
                                                    </div>
                                                </div>
                                                <div className="dropzone-wrapper">
                                                    <div className="dropzone-desc">
                                                        <i className="fas fa-cloud-upload-alt"></i>
                                                        <p>Click on the arrow to select a file from your computer or mobile device.</p>
                                                    </div>
                                                    <input type="file" name="img_logo" className="dropzone"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span className="uploadfiles text-white">You can upload files up to 5 MB. Supported file formats include JPG, PNG, TIFF, BMP, PDF, DOC, DOCX, XLS and XLSX.</span>
                                        </div>
                                    </div>
                                    <div className="row btn-okcancel text-right">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-outline pink normal withoutRadiusBorder mb-2 mr-0">CANCEL</button>
                                            <button type="submit" className="btn btn-pink withoutRadiusBorder mb-2 ml-2">OK</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="invoiceaddresses" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Invoice addresses</h3>
                            </div>
                            <div className="tab-pane fade" id="shippingaddresses" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Shipping addresses</h3>
                            </div>
                            <div className="tab-pane fade" id="costcentres" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Cost centres</h3>
                            </div>
                            <div className="tab-pane fade" id="paymentmethods" role="tabpanel">
                                <h3 className="text-pink gothamMedium">Payment methods</h3>
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

export default MyAccountDetailPageComponent;