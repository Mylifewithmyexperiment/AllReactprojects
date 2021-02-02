import React from 'react';


class ServiceCatlogComponent extends React.Component {

    render() {
        return (

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
                                        IBM
                                        <input type="checkbox" className="form-check-input" value="IBM"/>
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
        
            
        );
    }
}

export default ServiceCatlogComponent;