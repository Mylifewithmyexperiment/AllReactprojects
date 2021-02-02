import React from 'react'
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';
import Office365ImageComponent from './Office365ImageComponent';


class Office365CartDetailComponent extends React.Component {

    constructor(props)
    {
          super(props);
    }

    
    render() {

        return(

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

            {/* Start Infoblock section */}
        <section className="infoblock">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="title text-white mb-3"><img src="./images/Office365.png" className="w-85px mr-3 mb-0" />Office 365 Enterprise E1</h1>

                        <hr className="bg-white mt-0"/>
                    </div>
                </div>
                <div className="row rowreverse">
                    <div className="col-xl-8 col-lg-12">
                       <Office365ImageComponent/>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="specification-tab" data-toggle="tab" href="#specification" role="tab" aria-controls="specification" aria-selected="true">Specification</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="details-tab" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="true">Details</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="document-tab" data-toggle="tab" href="#document" role="tab" aria-controls="document" aria-selected="true">Documents</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="specification" role="tabpanel" aria-labelledby="specification-tab">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Contract term</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="ct">1 Month</span></td>
                                            <td><span className="qty">1 — 499</span><span className="qty1 d-none">&lt;=499</span></td>
                                            <td><b className="currency"></b> <span className="price">6.75</span>/month</td>
                                        </tr>
                                        <tr>
                                            <td><span className="ct">12 Months</span></td>
                                            <td><span className="qty">1 — 499</span><span className="qty1 d-none">&lt;=499</span></td>
                                            <td><b className="currency"></b> <span className="price">6.55</span>/month</td>
                                        </tr>
                                        <tr>
                                            <td><span className="ct">1 Month</span></td>
                                            <td><span className="qty">500 — 9999</span><span className="qty1 d-none">&gt;=500</span></td>
                                            <td><b className="currency"></b> <span className="price">6.55</span>/month</td>
                                        </tr>
                                        <tr>
                                            <td><span className="ct">12 Months</span></td>
                                            <td><span className="qty">500 — 9999</span><span className="qty1 d-none">&gt;=500</span></td>
                                            <td><b className="currency"></b> <span className="price">6.36</span>/month</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">
                                <p className="text-white">With Office 365 Enterprise E1, you get exactly the services you need for your business. You can even configure custom-made service packages for different users. Help your teams accomplish more, faster with simple file sharing, real-time co-authoring, and online meetings—all accessible anywhere.</p>
                                <div className="moredetails d-none">
                                    <p className="text-white">Office 365 Enterprise E1 allows you to easily manage and automate your tasks from virtually anywhere. Whether online meeting or live conferences, chat-based workforces or easy Office Online use: Thanks to the Office 365 Enterprise E1 plan, you will save resources and set the focus on online application. In order to meet your needs more closely, other add-on services can be requested at any time.</p>

                                    <ul>
                                        <li className="text-white">Email with a 50 GB mailbox</li>
                                        <li className="text-white">File sharing and 1 TB OneDrive storage</li>
                                        <li className="text-white">HD video conferencing</li>
                                        <li className="text-white">Team websites</li>
                                    </ul>
                                </div>
                                <a href="javascript:void(0);" className="text-white gothamMedium show_moreless d-table ml-auto font-12"><span>Show More</span><i className="fa fa-chevron-down ml-2"></i></a>
                            </div>
                            <div className="tab-pane fade" id="document" role="tabpanel" aria-labelledby="document-tab">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Size</th>
                                            <th scope="col" className="text-center">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="ct">Microsoft 365 Business Datasheet</td>
                                            <td className="qty">721 KB</td>
                                            <td className="price text-center">
                                                <a href="./pdf/Microsoft-365-Business-Datasheet.pdf" target="_blank">
                                                    <img src="./images/download.svg" className="img-download" alt="download icon" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="addon_section">
                            <h3 className="text-pink">Add-Ons</h3>
                            <hr className="bg-pink mt-0"/>
                            <div className="card-deck">
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Teams.png" alt="Microsoft 365 Audio Conferencing"/>
                                        Microsoft 365 Audio Conferencing
                                    </div>
                                    <div className="card-body">
                                        Let people join meetings on the go with a global dial-in number or contact each other directly. All they need is a mobile device and Teams. <a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal1" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Teams.png" alt="Microsoft 365 Audio Conferencing"/>
                                                            Microsoft 365 Audio Conferencing
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Let people join meetings on the go with a global dial-in number or contact each other directly. All they need is a mobile device and Teams.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">3.54</h2>
                                                                            <span className="singleprice d-none">3.54</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="/cartDetail" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Office365.png" alt="Office 365 Extra File Storage"/>
                                        Office 365 Extra File Storage
                                    </div>
                                    <div className="card-body">
                                        Not enough space in SharePoint Online? Just add additional capacity ... <a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal2" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/*</div> Start Modal */}
                                        <div className="modal fade" id="modal2" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Office365.png" alt="Office 365 Extra File Storage"/>
                                                            Office 365 Extra File Storage
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">If you notice that the space in SharePoint Online is running low, you can add as much additional storage space as you wish. </p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">0.17</h2>
                                                                            <span className="singleprice d-none">0.17</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Office365.png" alt="Office 365 Advanced Threat Protection (Plan 2)"/>
                                        Office 365 Advanced Threat Protection (Plan 2)
                                    </div>
                                    <div className="card-body">
                                        Protect your data and documents! With Office 365 Advanced Threat Protection (Plan 2), you can detect ... <a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal3" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal3" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Office365.png" alt="Office 365 Advanced Threat Protection (Plan 2)"/>
                                                            Office 365 Advanced Threat Protection (Plan 2)
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left"></p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">6.55</h2>
                                                                            <span className="singleprice d-none">6.55</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Exchange.png" alt="Office 365 Advanced Threat Protection (Plan 1)"/>
                                        Office 365 Advanced Threat Protection (Plan 1)
                                    </div>
                                    <div className="card-body">
                                        With Office 365 Advanced Threat Protection (Plan 1), you can protect your email in real-time from unkno…<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal4" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}                                        <div className="modal fade" id="modal4" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Exchange.png" alt="Office 365 Advanced Threat Protection (Plan 1)"/>
                                                            Office 365 Advanced Threat Protection (Plan 1)
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Malware, phishing, cyberattacks - Office documents and emails are attractive targets for cybercriminals, as virtually every organization uses them. Be prepared for the unexpected and expand your security with Office 365 Advanced Threat Protection (Plan 2) to help you understand and react quickly to threats with additional security. Our Threat Intelligence Service is able to collect, filter, carry out targeted analyses, and deliver the data in a usable format from a variety of sources.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">4.10</h2>
                                                                            <span className="singleprice d-none">4.10</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Office365.png" alt="Office 365 Advanced Compliance"/>
                                        Office 365 Advanced Compliance
                                    </div>
                                    <div className="card-body">
                                        Get more insight into your data and reduce your costs.<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal5" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal5" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Office365.png" alt="Office 365 Advanced Compliance"/>
                                                            Office 365 Advanced Compliance
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Office 365 Advanced Compliance helps you analyze unstructured data in Office 365 and carry out more efficient document checks, thus making it easier to make the right decisions.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">6.55</h2>
                                                                            <span className="singleprice d-none">6.55</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Exchange.png" alt="Exchange Online Archiving for Exchange Online"/>
                                        Exchange Online Archiving for Exchange Online
                                    </div>
                                    <div className="card-body">
                                        Simple access to your archive without VPN connections.<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal6" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                       {/* Start Modal */}
                                        <div className="modal fade" id="modal6" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Exchange.png" alt="Exchange Online Archiving for Exchange Online"/>
                                                            Exchange Online Archiving for Exchange Online
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Easily access your archive mailboxes from anywhere -- online and without a VPN client.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">2.46</h2>
                                                                            <span className="singleprice d-none">2.46</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Skype.png" alt="Skype for Business Plus CAL"/>
                                        Skype for Business Plus CAL
                                    </div>
                                    <div className="card-body">
                                        Skype for Business Online is a Microsoft-hosted instant messaging, video and web conferencing service.<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal7" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal7" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Skype.png" alt="Skype for Business Plus CAL"/>
                                                            Skype for Business Plus CAL
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">The Plus CAL offers advanced VoIP and related functionality. Note that Plus CAL requires an existing Standard CAL.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">1.42</h2>
                                                                            <span className="singleprice d-none">1.42</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Teams.png" alt="Microsoft 365 Phone System"/>
                                        Microsoft 365 Phone System
                                    </div>
                                    <div className="card-body">
                                        Phone System – easy and efficient: Manage your telephone system in the cloud and avoid both the need for tr…<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal8" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal8" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Teams.png" alt="Microsoft 365 Phone System"/>
                                                            Microsoft 365 Phone System
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Phone System includes Office 365 integration, so your system is always kept up to date with the latest technology.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">5.67</h2>
                                                                            <span className="singleprice d-none">5.67</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Microsoft.png" alt="Microsoft Stream Plan 2 for Office 365 Add-On"/>
                                        Microsoft Stream Plan 2 for Office 365 Add-On
                                    </div>
                                    <div className="card-body">
                                        Bring people together and inspire them – with intelligent video features.<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal9" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                       {/* Start Modal */}
                                        <div className="modal fade" id="modal9" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Microsoft.png" alt="Microsoft Stream Plan 2 for Office 365 Add-On"/>
                                                            Microsoft Stream Plan 2 for Office 365 Add-On
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Quickly find what you're looking for with intelligent search functions. Intelligent features provide more ways to find your videos and to respond to them so that everyone can quickly and easily access relevant content.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">1.65</h2>
                                                                            <span className="singleprice d-none">1.65</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Office365.png" alt="Office 365 Extra File Storage"/>
                                        Office 365 Data Loss Prevention
                                    </div>
                                    <div className="card-body">
                                        Office 365 data loss prevention (DLP) tools help protect content such as HIPAA-related and General Data Pr…<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal10" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal10" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Office365.png" alt="Office 365 Extra File Storage"/>
                                                            Office 365 Data Loss Prevention
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">With data loss prevention (DLP) policies in the Office 365 Security & Compliance center, you can identify, monitor, and automatically protect sensitive information across Microsoft 365. With DLP policies, you can:

                                                                Identify sensitive information across many locations, such as Exchange Online, SharePoint Online, OneDrive for Business, and Microsoft Teams.
                                                                Prevent the accidental sharing of sensitive information by blocking access to a document or blocking the email that contains it.
                                                                Monitor and protect sensitive information in the desktop versions of Excel, PowerPoint, and Word.
                                                                Help users learn how to stay compliant without interrupting their workflow with email notifications and policy tips.
                                                                View DLP reports showing content that matches your organization's DLP policies.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">2.46</h2>
                                                                            <span className="singleprice d-none">2.46</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Microsoft.png" alt="Microsoft Stream Storage Add-On (500 GB)"/>
                                        Microsoft Stream Storage Add-On (500 GB)
                                    </div>
                                    <div className="card-body">
                                        Additional storage capacity for Stream Plan 1 and Stream Plan 2 tenants. <a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal11" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                       { /* Start Modal */}
                                        <div className="modal fade" id="modal11" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Microsoft.png" alt="Microsoft Stream Storage Add-On (500 GB)"/>
                                                            Microsoft Stream Storage Add-On (500 GB)
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Microsoft Stream includes a base amount of storage. A Microsoft Stream tenant receives a fixed allocation of 500 GB of storage and an additional 0.5 GB of storage per licensed user. If you need additional storage for your Stream content, you can purchase one or more 500 GB storage add-ons.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">81.81</h2>
                                                                            <span className="singleprice d-none">81.81</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/* End Modal */}
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <img src="./images/Office365.png" alt="Microsoft 365 Business Voice (without calling plan)"/>
                                        Microsoft 365 Business Voice (without calling plan)
                                    </div>
                                    <div className="card-body">
                                        Microsoft 365 Business Voice (without calling plan) is a modern cloud-based telephony solution that integrates in…<a href="javascript:void(0);" className="link-details">Details<i className="fa fa-chevron-right ml-1"></i></a>
                                    </div>
                                    <div className="card-footer">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#modal12" className="btn btn-pink withoutRadiusBorder">INCLUDE</a>
                                        {/* Start Modal */}
                                        <div className="modal fade" id="modal12" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="addon-header">
                                                            <img src="./images/Office365.png" alt="Microsoft 365 Business Voice (without calling plan)"/>
                                                            Microsoft 365 Business Voice (without calling plan)
                                                        </div>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true"><img src="./images/blckclose.png" alt="close"/></span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="cartdetails-section p-0">
                                                            <p className="text-left">Microsoft 365 Business Voice (without calling plan) is a cloud-based telephony solution that offers phone system capabilities like call park, call forwarding, auto attendants, call queues, audio conferencing, and calling plans.Business Voice requires an Office 365 subscription that includes Microsoft Teams. It is an add-on subscription for up to 300 users, that cannot be used standalone.

                                                                Microsoft 365 Business Voice (without calling plan) makes it easy for small and medium organizations to turn Microsoft Teams into a powerful and flexible telephone system. It's a replacement for traditional telephony providers and in-house phone systems that can be difficult and costly to manage. You can set up both toll and toll-free numbers, call menus to help callers get to the right department, audio conferencing so you can host meetings with anyone, and more. You can even give people their own phone numbers so they can get calls directly.

                                                                To make or receive phone calls to or from external phone numbers in Microsoft Teams, users need a Microsoft 365 Business Voice license. The license gives them access to all the features that they need to make or receive phone calls, host audio conferences, and more. Users who don't need to make or receive phone calls to or from external phone numbers just need Teams. They don't need a Microsoft 365 Business Voice license.</p>
                                                            <b className="text-left d-block">Configuration</b>

                                                            <table>
                                                            <tbody>
                                                                <tr className="d-none">
                                                                    <td>
                                                                        Auto Prolongation
                                                                    </td>
                                                                    <td>
                                                                        <label className="switch float-left">
                                                                            <input type="checkbox" className="default" defaultChecked/>
                                                                            <span className="slider round"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Billing Period</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons billing_period">
                                                                            <span>
                                                                                <b>Monthly (Postpaid)</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Quantity</td>
                                                                    <td className="pr-0">
                                                                        <div className="quantityGroup">
                                                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="pl-0">Contact Term</td>
                                                                    <td className="pr-0">
                                                                        <div className="addons contact_term">
                                                                            <span>
                                                                                <b>12 Months</b><i className="fa fa-info-circle text-pink ml-2"></i>
                                                                            </span>
                                                                            <span className="info">
                                                                                Value Propagated from parent
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <div className="cartdetails-section w-100 p-0 m-0">
                                                            <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="totalgroup">
                                                                            <span className="loader">
                                                                                <span className="loader-inner"></span>
                                                                            </span>
                                                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                                                            <h2 className="mx-2 mb-0 gothamBold productTotal">9.82</h2>
                                                                            <span className="singleprice d-none">9.82</span>
                                                                            <h3 className="gothamMedium mb-1">monthly</h3>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);" className="btn btn-pink d-block addtocart px-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     {/* End Modal */}
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="cartdetails-section right">
                            <h3 className="text-pink">Configuration</h3>

                            <table>
                            <tbody>
                                <tr className="d-none">
                                    <td>
                                        Auto Prolongation
                                    </td>
                                    <td>
                                        <label className="switch float-left">
                                            <input type="checkbox" className="default" defaultChecked/>
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Billing Period</td>
                                    <td>
                                        <div className="dropdown billing_period">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Monthly (Postpaid)
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropQty" style={{}}>
                                                <a className="dropdown-item" value="12" href="javascript:void(0);">Annually (Prepaid)</a>
                                                <a className="dropdown-item active" value="1" href="javascript:void(0);">Monthly (Postpaid)</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>
                                        <div className="quantityGroup">
                                            <button type="button" className="round-btn sub" title="If u want less quantity">-</button>
                                            <input className="quantityTxt quantity " name="quantity[]" type="text" defaultValue="1" maxLength="4"/>
                                            <button type="button" className="round-btn add" title="If u want more quantity">+</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact Term</td>
                                    <td>
                                        <div className="dropdown contact_term">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                12 Months
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropQty" style={{}}>
                                                <a className="dropdown-item" href="javascript:void(0);">1 Month</a>
                                                <a className="dropdown-item active" href="javascript:void(0);">12 Months</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">More Products in <span className="text-pink">Office 365 Enterprise</span></td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Office 365 Enterprise E1
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropQty" style={{}}>
                                                <a className="dropdown-item active" href="javascript:void(0);">Office 365 Enterprise E1</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Office 365 Enterprise E3</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Office 365 Enterprise E5</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <hr className="mb-0"/>
                                        <div className="totalgroup hide_value mt-2">
                                            <span className="loader">
                                                <span className="loader-inner"></span>
                                            </span>
                                            <h3 className="gothamMedium mb-1"><b className="currency"></b></h3>
                                            <h2 className="mx-2 mb-0 gothamBold productTotal">6.55</h2>
                                            <h3 className="gothamMedium mb-1 duration">monthly</h3>
                                        </div>
                                     
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a href="/cartDetail" className="btn btn-pink d-block addtocart px-3 mt-3 mb-0"><i className="fa fa-shopping-cart mr-2"></i>ADD TO CART</a>
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

export default Office365CartDetailComponent;