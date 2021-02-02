 
import React from 'react';
import VideoComponent from './VideoComponent';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';

class VRanDetailPageComponent extends React.Component {

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
            <section className="product_details">
            <div className="container">
                <div className="row">
              
                   <VideoComponent/>
                  
                    <div className="col-lg-7">
                        <h3 className="text-pink">vRAN as a Service</h3>
                        <p className="font-12 text-white">Industry's first innovative e2e 5G mobile network with full cloud virtualization and automation</p>

                        <h3 className="text-white gothamMedium">Cost to build a single site:</h3>
                        <div className="price">
                            <p className="mb-0"><span className="smallFont">One time charges:</span> <span className="value">&#165; 12000</span></p>
                            <p className="mb-0"><span className="smallFont">Recurring charges:</span> <span className="value">&#165; 4800 / month</span></p>
                        </div>

                        <ul className="drop_price_ul">
                            <li>
                                <p className="font-12 text-white mb-2">No. of people you want to provide coverage to</p>
                                <input type="text" class="form-control mw-275" value="1,00,000" />
                            </li>
                            <li>
                                <p className="font-12 text-white mb-2">Bandwidth you want to provide</p>
                                <div className="dropdown mbps">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mbpsValue">200</span><span>mbps</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">200</a>
                                        <a className="dropdown-item" href="#">250</a>
                                        <a className="dropdown-item" href="#">500</a>
                                        <a className="dropdown-item" href="#">1000</a>
                                        <a className="dropdown-item" href="#">2000</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="validate"><a href="javascript:void(0);" data-toggle="modal" data-target="#validateModal">Validate</a> - our site planning algorithm would validate how many sites you would need.</div>
                       
                        <div className="modal fade" id="validateModal" tabindex="-1" role="dialog" aria-labelledby="validateModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title text-pink" id="exampleModalLabel">Validate no. of sites to be built</h3>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><img src="/images/close.png" alt="close"/></span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="text-group">
                                            <div>
                                                <p className="font-12 text-white mb-2">No. of people you want to provide coverage to</p>
                                                <input type="text" className="form-control mw-275" value="1,00,000" />
                                            </div>
                                            <div>
                                                <p className="font-12 text-white mb-2">Bandwidth you want to provide</p>
                                                <div className="dropdown mbps">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="mbpsValue">200</span><span>mbps</span>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">200</a>
                                                        <a className="dropdown-item" href="#">250</a>
                                                        <a className="dropdown-item" href="#">500</a>
                                                        <a className="dropdown-item" href="#">1000</a>
                                                        <a className="dropdown-item" href="#">2000</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="deployment">
                                            <p className="font-12 text-white mb-2">Type of depoloyment</p>
                                            <div className="btn-group btn-group-toggle deployment_group" data-toggle="buttons">
                                                <label className="btn btn-secondary btn-outline active">
                                                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> mmwave
                                                </label>
                                                <label className="btn btn-secondary btn-outline">
                                                    <input type="radio" name="options" id="option2" autocomplete="off"/> sub 6 GHz
                                                </label>
                                            </div>
                                        </div>
                                        <div className="deployment">
                                            <p className="font-12 text-white mb-2">Area to be covered</p>
                                            <iframe src="https://www.google.com/maps/d/embed?mid=1kI6hdfEvTQzVqpRrKg8YxYpT97yvzhp6" width="100%" height="215"></iframe>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <h3 className="text-pink">Number of sites required to be installed : 500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
              
                        <div className="location">
                            <img src="/images/location.png" alt="Location"/>
                            <div>
                                <p>Select Location to calculate density / Area of coverage</p>
                                <p class="d-none">our site planning algorithm would validate how many sites you would need.</p>
                            </div>
                        </div>
                        <div className="deployment">
                            <p className="font-12 text-white mb-2">Type of depoloyment</p>
                            <div className="btn-group btn-group-toggle deployment_group" data-toggle="buttons">
                                <label className="btn btn-secondary btn-outline active">
                                    <input type="radio" name="options" id="option1" autocomplete="off" checked/> mmwave
                                </label>
                                <label className="btn btn-secondary btn-outline">
                                    <input type="radio" name="options" id="option2" autocomplete="off"/> sub 6 GHz
                                </label>
                            </div>
                        </div>
                        <h3 className="nosites text-white">Number of sites required to be installed : <input type="text" value="500" class="form-control" /></h3>
                        <a href="/checkout" className="btn btn-pink addtocart">ADD TO CART</a>
                        <div className="description">
                            <h4 className="text-white">Description</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Hardwares</th>
                                        <th scope="col">Softwares</th>
                                        <th scope="col">Applications</th>
                                        <th scope="col">OSS</th>
                                        <th scope="col">Inventory Management</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="d-block d-sm-none">Hardwares</p>
                                            <ul>
                                                <li>RRH</li>
                                                <li>GPS</li>
                                                <li>RIU</li>
                                                <li>HUB Switch</li>
                                                <li>Rectifier</li>
                                                <li>Antenna</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <p className="d-block d-sm-none">Applications</p>
                                            <ul>
                                                <li>RRH Software</li>
                                                <li>RIU Software</li>
                                                <li>Switch Configuration Software</li>
                                                <li>Hardware Component Monitoring</li>
                                                <li>Orchestrator</li>
                                                <li>vCU</li>
                                                <li>vDU</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <p className="d-block d-sm-none">OSS</p>
                                            <ul className="list-style-none">
                                                <li>Observability Framework</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <p className="d-block d-sm-none">Hardwares</p>
                                            <ul className="list-style-none">
                                                <li>Audit Management</li>
                                                <li>Full Management <sup>*</sup>Optional</li>
                                                <li>Peformance Management <sup>*</sup>Optional</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <p className="d-block d-sm-none">Inventory Management</p>
                                            <ul className="list-style-none">
                                                <li>Config Management</li>
                                                <li>Change Management</li>
                                                <li>Automation / Workflow</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            
        </section>
        </div>
        );
    }
}

export default VRanDetailPageComponent;