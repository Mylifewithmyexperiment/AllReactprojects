import React from 'react';
import FooterComponent from './FootComponent';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import StickyiconComponent from './StickyiconComponent';
import ServiceCatlogComponent from './ServiceCatlogComponent';


class PrivateCloudServiceComponent extends React.Component {

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


            <div className="bg-white">
            <section className="catalog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h3 className="page-title">
                            Sterlite Catalog</h3>
                        <div className="left-side">
                            <div className="card mb-3">
                                <div className="card-header" data-toggle="collapse" data-target="#category">
                                    <a href="javascript:void(0);" className="card-title"> Services</a>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#category">
                                    <a href="javascript:void(0);" className="card-title"> Software</a>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#category">
                                    <a href="javascript:void(0);" className="card-title"> Consulting</a>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#category">
                                    <a href="javascript:void(0);" className="card-title"> Category <i className="fa fa-chevron-down"></i></a>
                                </div>
                                <div id="category" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Compute
                                                    <input type="checkbox" className="form-check-input" value="Compute"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Containers
                                                    <input type="checkbox" className="form-check-input" value="Containers"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Networking
                                                    <input type="checkbox" className="form-check-input" value="Networking"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Storage
                                                    <input type="checkbox" className="form-check-input" value="Storage"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    AI / Machine Learning
                                                    <input type="checkbox" className="form-check-input" value="AI / Machine Learning"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Analytics
                                                    <input type="checkbox" className="form-check-input" value="Analytics"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Blockchain
                                                    <input type="checkbox" className="form-check-input" value="Blockchain"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Databases
                                                    <input type="checkbox" className="form-check-input" value="Databases"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Developer Tools
                                                    <input type="checkbox" className="form-check-input" value="Developer Tools"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Logging and Monitoring
                                                    <input type="checkbox" className="form-check-input" value="Logging and Monitoring"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Integration
                                                    <input type="checkbox" className="form-check-input" value="Integration"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Internet of Things
                                                    <input type="checkbox" className="form-check-input" value="Internet of Things"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Security
                                                    <input type="checkbox" className="form-check-input" value="Security"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Mobile
                                                    <input type="checkbox" className="form-check-input" value="Mobile"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#provider">
                                    <a href="javascript:void(0);" className="card-title"> Provider <i className="fa fa-chevron-down"></i></a>
                                </div>
                                <div id="provider" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    STERLITE
                                                    <input type="checkbox" className="form-check-input" value="STERLITE"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Third Party
                                                    <input type="checkbox" className="form-check-input" value="Third Party"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#pricing_plan">
                                    <a href="javascript:void(0);" className="card-title">Pricing Plan<i className="fa fa-chevron-down"></i></a>
                                </div>
                                <div id="pricing_plan" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Lite
                                                    <input type="checkbox" className="form-check-input" value="Lite"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Free
                                                    <input type="checkbox" className="form-check-input" value="Free"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#compliance">
                                    <a href="javascript:void(0);" className="card-title">Compliance<i className="fa fa-chevron-down"></i></a>
                                </div>
                                <div id="compliance" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    IAM-enabled
                                                    <input type="checkbox" className="form-check-input" value="IAM-enabled"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Service Endpoint Supported
                                                    <input type="checkbox" className="form-check-input" value="Service Endpoint Supported"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-header" data-toggle="collapse" data-target="#release">
                                    <a href="javascript:void(0);" className="card-title">Release<i className="fa fa-chevron-down"></i></a>
                                </div>
                                <div id="release" className="card-body collapse show">
                                    <ul className="nav nav-tabs flex-column" role="tablist">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Beta
                                                    <input type="checkbox" className="form-check-input" value="Beta"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Dedicated
                                                    <input type="checkbox" className="form-check-input" value="Dedicated"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <label className="form-check-label pink">
                                                    Deprecated
                                                    <input type="checkbox" className="form-check-input" value="Deprecated"/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h3 className="page-title">
                            Services
                            <ul>
                                <li><a className="active" href="javascript:void(0);"><i className="fa fa-th-large"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-list"></i></a></li>
                            </ul>
                        </h3>
                        <p className="gothamBook">Explore our broad portfolio of managed services for infrastructure, developer tools, and more to build your apps on the public cloud.</p>

                        <div className="filter d-none">
                            <div className="items_group">
                                <b className="title">Filters:</b>
                                <span className="item d-none" data-val="Compute">Compute <button type="button">×</button></span>
                                <span className="item d-none" data-val="Containers">Containers <button type="button">×</button></span>
                                <span className="item d-none" data-val="Networking">Networking <button type="button">×</button></span>
                                <span className="item d-none" data-val="Storage">Storage <button type="button">×</button></span>
                                <span className="item d-none" data-val="AI / Machine Learning">AI / Machine Learning <button type="button">×</button></span>
                                <span className="item d-none" data-val="Analytics">Analytics <button type="button">×</button></span>
                                <span className="item d-none" data-val="Blockchain">Blockchain <button type="button">×</button></span>
                                <span className="item d-none" data-val="Databases">Databases <button type="button">×</button></span>
                                <span className="item d-none" data-val="Developer Tools">Developer Tools <button type="button">×</button></span>
                                <span className="item d-none" data-val="Logging and Monitoring">Logging and Monitoring <button type="button">×</button></span>
                                <span className="item d-none" data-val="Integration">Integration <button type="button">×</button></span>
                                <span className="item d-none" data-val="Internet of Things">Internet of Things <button type="button">×</button></span>
                                <span className="item d-none" data-val="Security">Security <button type="button">×</button></span>
                                <span className="item d-none" data-val="Mobile">Mobile <button type="button">×</button></span>

                                <span className="item d-none" data-val="STERLITE">STERLITE<button type="button">×</button></span>
                                <span className="item d-none" data-val="Third Party">Third Party<button type="button">×</button></span>

                                <span className="item d-none" data-val="Lite">Lite<button type="button">×</button></span>
                                <span className="item d-none" data-val="Free">Free<button type="button">×</button></span>

                                <span className="item d-none" data-val="IAM-enabled">IAM-enabled <button type="button">×</button></span>
                                <span className="item d-none" data-val="Service Endpoint Supported">Service Endpoint Supported <button type="button">×</button></span>

                                <span className="item d-none" data-val="Beta">Beta<button type="button">×</button></span>
                                <span className="item d-none" data-val="Dedicated">Dedicated<button type="button">×</button></span>
                                <span className="item d-none" data-val="Deprecated">Deprecated<button type="button">×</button></span>

                                <a href="javascript:void(0);" className="clearall">Clear all</a>
                            </div>
                        </div>

                        <h4 className="all-categories">All Categories <b className="items">11</b> <span>items</span></h4>
                        <hr className="bg-pink my-0"/>
                        <div className="card-deck gridview">
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/mongodb.svg" alt="Mongo db"/>
                                    <div className="img-title">
                                        <h4>Databases for MongoDB</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Databases</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>MongoDB is a JSON document store with a rich query and aggregation framework.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>IAM-enabled</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/postgresql.svg" alt="Postgresql db"/>
                                    <div className="img-title">
                                        <h4>Databases for PostgreSQL</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Databases</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>PostgreSQL is a powerful, open source object-relational database that is highly customizable.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>IAM-enabled</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/actifiog.svg" alt="Actifio GO"/>
                                    <div className="img-title">
                                        <h4>Actifio GO</h4>
                                        <ul>
                                            <li>Third party</li>
                                            <li>Storage</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>SaaS platform for backup/DR/cloning/migration of Enterprise workloads in STERLITE Cloud.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>IAM-enabled</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/analytics-engine.png" alt="Analytics Engine"/>
                                    <div className="img-title">
                                        <h4>Analytics Engine</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Analytics</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Flexible framework to deploy Hadoop and Spark analytics applications.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Lite</li>
                                        <li>Free</li>
                                        <li>IAM-enabled</li>
                                        <li>Service Endpoint Supported</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/api-connect.svg" alt="API Connect"/>
                                    <div className="img-title">
                                        <h4>API Connect</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Create, manage, enforce and run APIs.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Lite</li>
                                        <li>Free</li>
                                        <li>IAM-enabled</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/api-gateway.svg" alt="API Gateway"/>
                                    <div className="img-title">
                                        <h4>API Gateway</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Developer Tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>A developer-focused solution for creating, securing, and sharing API proxies and custom APIs backed by STERLITE Cloud resources.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary  withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Lite</li>
                                        <li>Free</li>
                                        <li>IAM-enabled</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/app-connect.svg" alt="App Connect"/>
                                    <div className="img-title">
                                        <h4>App Connect</h4>
                                        <ul>
                                            <li>STERLITE</li>
                                            <li>Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Connect your applications, automate tasks, and improve productivity.</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Lite</li>
                                        <li>Free</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/mongodb.png" alt="Mongo db"/>
                                    <div className="img-title">
                                    <a href="/catlogDetails"> <h4>MongoDB</h4></a>
                                        <ul>
                                            <li>Third party</li>
                                            <li>Databases</li>
                                            <li>Developer Tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>MongoDB is a relational open source NoSQL database. Easy to use, it stores data in JSON-like...</p>
                                    <div className="btn-groups">
                                        <a href="./catlogDetails" className="btn btn-outline-secondary  withoutRadiusBorder">Add</a>
                                        <a href="./catlogDetails" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Helm charts</li>
                                        <li>STERLITE Kubernetes Service</li>
                                        <li>Free</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/nginx.png" alt="NGINX Plus"/>
                                    <div className="img-title">
                                        <a href="/nginxplusdetails"><h4>NGINX</h4></a>
                                        <ul>
                                            <li>Third party</li>
                                            <li>Software</li>
                                            <li>Developer Tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>NGINX Plus is a web server that can be also used as a reverse proxy, load balancer...</p>
                                    <div className="btn-groups">
                                        <a href="./nginxplusdetails" className="btn btn-outline-secondary  withoutRadiusBorder">Add</a>
                                        <a href="./nginxplusdetails" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Helm charts</li>
                                        <li>STERLITE Kubernetes Service</li>
                                        <li>Free</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/mongodb.png" alt="Mongo db"/>
                                    <div className="img-title">
                                        <h4>MongoDB Sharded</h4>
                                        <ul>
                                            <li>Third party</li>
                                            <li>Databases</li>
                                            <li>Developer Tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>MongoDB is a relational open source NoSQL database that uses JSON for data storage....</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary  withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Helm charts</li>
                                        <li>STERLITE Kubernetes Service</li>
                                        <li>Free</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="./images/moodle.png" alt="Moodle"/>
                                    <div className="img-title">
                                        <h4>Moodle</h4>
                                        <ul>
                                            <li>Third party</li>
                                            <li>Networking</li>
                                            <li>Developer Tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p>Moodle is an open source online Learning Management System (LMS) widely used at universities,....</p>
                                    <div className="btn-groups">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary  withoutRadiusBorder">Add</a>
                                        <a href="javascript:void(0);" className="btn btn-pink withoutRadiusBorder">Learn More</a>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>Helm charts</li>
                                        <li>STERLITE Kubernetes Service</li>
                                        <li>Free</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
             <FooterComponent/>
             </div>
        );
    }
}

export default PrivateCloudServiceComponent;