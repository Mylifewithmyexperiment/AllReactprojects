import React from 'react';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';



class CatlogDetailsComponent extends React.Component {

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
             <section className="catalog_details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="private_cloud_services.html">Catalog</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Software</li>
                            </ol>
                        </nav>
                        <div className="catalog_header">
                            <img src="./images/mongodb.png" alt="Databases for MongoDB" />
                            <div className="description">
                                <h3>MongoDB</h3>
                                <ul>
                                    <li><b>Author:</b>Sterlite</li>
                                    <li className="version"><b>Version:</b><span>4.2.8</span></li>
                                    <li><b>Date of Last update:</b>28/07/2020</li>
                                    <li><a href="javascript:void(0);">Docs</a></li>
                                    <li><a href="javascript:void(0);">API docs</a></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="Add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="true">Add</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="About-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false">About</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-3">
                                        <ul className="category_ul">
                                            <li>
                                                <span>Type</span>
                                                <p>Helm chart</p>
                                            </li>
                                            <li>
                                                <span>Provider</span>
                                                <p>Third party</p>
                                            </li>
                                            <li>
                                                <span>Category</span>
                                                <p>Databases Developer Tools</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="targetMethod">
                                            <div className="items">
                                                <label>Select Your Target</label>
                                                <div className="innerdiv">
                                                    <img src="./images/iks.svg" alt="Sterlite Kubernetes Service" />
                                                    <div className="title">
                                                        <h4>Sterlite Kubernetes Service</h4>
                                                    </div>
                                                    <i className="fas fa-check-circle"></i>
                                                </div>
                                            </div>
                                            <div className="items">
                                                <label>Select a Method</label>
                                                <div className="innerdiv">
                                                    <img src="./images/helm.svg" alt="Helm Chart" />
                                                    <div className="title">
                                                        <h4>Helm Chart</h4>
                                                        <div className="dropdown">
                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Version 4.2.8
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item active" data-version="4.2.8" href="javascript:void(0);">Version 4.2.8 <i className="fas fa-check"></i></a>
                                                                <a className="dropdown-item" data-version="4.0.14" href="javascript:void(0);">Version 4.0.14 <i className="fas fa-check"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <i className="fas fa-check-circle"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing_plan">
                                            <label>Pricing Plans</label>
                                            <p>Displayed prices do not include tax. Monthly prices shown are for country or region: <a href="javascript:void(0);">United States</a></p>
                                            <div className="plan_tbl">
                                                <div className="container">
                                                    <div className="row d-none d-xl-flex">
                                                        <div className="col-lg-2">
                                                            <b>Plan</b>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <b>Features</b>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <b>Pricing</b>
                                                        </div>
                                                    </div>
                                                    <div className="row activCls">
                                                        <div className="col-xl-2 col-lg-12">
                                                            <b className="header_title">Plan</b>
                                                            <b className="plan_title">Starter</b>
                                                        </div>
                                                        <div className="col-xl-5 col-lg-12">

                                                        </div>
                                                        <div className="col-xl-4 col-lg-12">
                                                            <b className="header_title">Pricing</b>
                                                            <ul>
                                                                <li>Free</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-1 col-lg-12">
                                                            <i className="far fa-circle d-none"></i>
                                                            <i className="fas fa-check-circle"></i>
                                                        </div>
                                                        <div className="col-xl-2 d-none d-xl-flex">

                                                        </div>
                                                        <div className="col-xl-10 col-lg-12">
                                                            <hr className="mt-0"/>
                                                            <p>High availability will not be available with free plan. Free plan includes 10GB disk storage, 1 GB RAM. Backup storage and dedicated cpu is not available with Starter plan.</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-2 col-lg-12">
                                                            <b className="header_title">Plan</b>
                                                            <b className="plan_title">Standard</b>
                                                        </div>
                                                        <div className="col-xl-5 col-lg-12">
                                                            <b className="header_title">Features</b>
                                                            <b>Serverless Scaling</b>
                                                            <p className="mb-3">Automatic backup orchestration Bring your own encryption key</p>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-12">
                                                            <b className="header_title">Pricing</b>
                                                            <ul className="plan_price">
                                                                <li className="gbdisk"><b className="currency"></b><span>0.58</span>/GB-Disk</li>
                                                                <li className="gbram"><b className="currency"></b><span>8.50</span>/GB-RAM</li>
                                                                <li className="gbbackups"><b className="currency"></b><span>0.03</span>/GB-Backups</li>
                                                                <li className="vpc"><b className="currency"></b><span>45.00</span>/Virtual Processor Core</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-1 col-lg-12">
                                                            <i className="far fa-circle"></i>
                                                            <i className="fas fa-check-circle d-none"></i>
                                                        </div>
                                                        <div className="col-xl-2 d-none d-xl-flex">

                                                        </div>
                                                        <div className="col-xl-10 col-lg-12">
                                                            <hr className="mt-0"/>
                                                            <p>One highly available MongoDB instance with three data members. The Standard plan is priced based on disk storage, RAM, and backup storage allocated to deployments, prorated hourly. Databases for MongoDB instances have a minimum of 10GB of Disk and 1GB of RAM per data member.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-12 col-lg-12">
                                                        <label>Select CPU allocation</label>
                                                        <p className="mb-0">CPU allocation is optional. Selecting CPU allocation ensures your database has dedicated compute resources for your workload.</p>
                                                        <div className="input-group mb-2">
                                                            <input type="number" className="form-control" id="vpc1" placeholder="Select CPU allocation" value="1"/>
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">vCPU</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Select memory allocation</label>
                                                        <div className="input-group mb-2">
                                                            <input type="number" className="form-control" id="gbram1" placeholder="Select memory allocation" value="1"/>
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">GB</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Select disk allocation</label>
                                                        <div className="input-group mb-2">
                                                            <input type="number" className="form-control" id="gbdisk1" placeholder="Select disk allocation" value="1"/>
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">GB</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Select disk allocation for backup/archiving</label>
                                                        <div className="input-group mb-2">
                                                            <input type="number" className="form-control" id="gbbackups1" placeholder="Select disk allocation for backup/archiving" value="1"/>
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">GB</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Kubernetes cluster <i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="A cluster is required for your installation. It is recommended to install only one instance per cluster."></i></label>
                                                        <input type="text" className="form-control" value="No cluster available" disabled />
                                                    </div>
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Target namespace <i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Select from an existing namespace or create a new one by entering a unique namespace name."></i></label>
                                                        <input type="text" id="target_namespace" className="form-control" value="Sterlite Kubernetes Service" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-12">
                                                        <label>Configure your workspace</label>
                                                        <p>After you start the installation, you can track and manage the progress in your Sterlite Cloud Schematics workspace. Your workspace contains MongoDB, all of its resources, and the access URL for MongoDB after the installation is complete.</p>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Name <i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Give your workspace a unique name that you can easily recognize."></i></label>
                                                        <input type="text" id="workspace" className="form-control" value="mongodb-07-29-2020" />
                                                    </div>
                                                    <div className="form-group col-xl-6 col-lg-12">
                                                        <label>Resource group <i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Consider how you want resources organized in your account. The resource group that you select can't be changed after the service instance is created."></i></label>
                                                        <input type="text" id="resourceGroup" className="form-control" value="Default" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-12">
                                                        <label>Tags <i className="fas fa-info-circle" data-toggle="tooltip" data-placement="top" title="Use tags to organize your resources. If your tags are billing related, consider writing tags as key:value pairs to help group related tags, such as costctr:124. Tags are visible account-wide."></i></label>
                                                        <input type="text" className="form-control" value="Examples: env:dev, version-1" />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-xl-12">
                                                        <label>Set the deployment values</label>
                                                        <a className="btn deployment" data-toggle="collapse" href="#deployment" role="button" aria-expanded="false" aria-controls="deployment">
                                                            <b className="d-block text-left">Parameters with default values</b>
                                                            <span className="d-block text-left">A default value is set for each parameter. Review and accept the defaults, or you can update with customized values.</span>
                                                        </a>
                                                        <div className="collapse multi-collapse" id="deployment">
                                                            <div className="card card-body">
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <b>Parameter</b>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <b>Description</b>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <b>Value</b>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>auth.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable authentication</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                true
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item active" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>customLivenessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Override default liveness probe for MongoDB containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>extraVolumeMounts</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Optionally specify extra list of additional volumeMounts for the MongoDB container(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea type="text" value="[]" rows="4" className="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>service.port</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB service port</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="27017" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbitet.podSecurityContext</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Arbiter pod(s)' Security Context</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{" enabled":true,"fsGroup":1001,"sysctls":{}}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>customReadinessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Override default readliness probe for MongoDB containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumePermissions.image.tag</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container volume-permissions image tag</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="buster" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.service.annotations</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Service annotations for external access</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.prometheusRule.additionalLabels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Additional labels that can be used so prometheusRules will be discovered by Prometheus</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>service.loadBalancerIP</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>loadBalancerIP for MongoDB Service</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.readinessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Readiness probe configuration for Arbiter</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{"enabled":true,"failureThreshold":6,"initialDelaySeconds":5,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>service.nodePort</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Port to bind to for NodePort and LoadBalancer service types</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" placeholder="Enter service.nodePort" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>podAnnotations</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB Pod annotations</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.customLivenessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Override default liveness probe for Arbiter containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>persistence.existingClaim</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Provide an existing</p>
                                                                        <p>PersistentVolumeClaim (only when <code>architecture=standalone</code>)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>fullnameOverride</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>String to fully override mongodb.fullname</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.service.port</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Port of the Prometheus metrics service</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="9216" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.existingConfigmap</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Name of existing ConfigMap with Arbiter configuration</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.service.port</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB port used for external access when service type is LoadBalancer</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="27017" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>auth.password</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB custom user password</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.resources.requests</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>The requested resources for Prometheus exporter containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>persistence.subPath</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Subdirectory of the volume to mount at</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" placeholder="Enter persistence.subPath" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.autoDiscovery.resources.limits</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container auto-discovery resource limits</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.labels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Annotations to be added to the Arbiter statefulset</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.service.domain</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Domain or external IP used to configure MongoDB advertised hostname when service type is NodePort</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>persistence.size</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>PVC Storage Request for MongoDB data volume</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="8Gi" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>readinessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Readiness probe configuration for MongoDB</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{"enabled":true,"failureThreshold":6,"initialDelaySeconds":5,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.sidecars</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Add additional sidecar containers for the Arbiter pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.image.tag</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB Prometheus exporter image tag</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="0.11.0-debian-10-r88" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>podLabels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB pod labels</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>schedulerName</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Name of the scheduler (other than default) to dispatch pods</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>image.debug</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Set to true if you would like to see extra information on logs</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>sidecars</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Add additional sidecar containers for the MongoDB pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>auth.rootPassword</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB admin password</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" placeholder="Enter auth.rootPassword" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.service.nodePorts</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Array of node ports used to configure MongoDB advertised hostname when service type is NodePort</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea type="text" value="[]" className="form-control" rows="4"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>resources.limits</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>The resources limits for MongoDB containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumepermissions.resorces.limits</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container volume-permissions resource limits</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.podLabels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Add additional init containers for the Arbiter pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.initContainers</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Add additional init containers for the Arbiter pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.extraVolumeMount</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Optionally specify extra list of addtional volumeMounts for the Arbiter container(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea type="text" value="[]" className="form-control" rows="4"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.serviceMonitor.additionalLabels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Used to pass Labels that are required by the Installed Prometheus Operator</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.containerSecurityContext</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Arbiter containers' Security Context</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{"enabled":true,"runAsUser":1001}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.prometheusRule.namespace</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>namespace where prometheusRules resource should be created</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.pdb.create</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable/disable a Pod Disruption Budget creation for Arbiter pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>service.portName</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB service port name</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="mongodb" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>extraVolumes</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Optionally specify extra list of additional volumes to the MongoDB statefulset</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea value="[]" className="form-control" rows="4"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>nodeSelector</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Node labels for MongoDB pod(s) assignment</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.image.pullSecrets</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Specify docker-registry secret names as an array</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>rbac.create</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Weather to create & use RBAC resources or not</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>nameOverride</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>String to partially override mongodb.fullname</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable deploying the arbiter</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                true
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item active" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>persistence.mountPath</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Path to mount the volume at</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="/bitnami/mongodb" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.affinity</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Affinity for Arbiter pod(s) assignment</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable using a sidecar Prometheus exporter</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>serviceAccount.name</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Name of the created serviceAccount</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>auth.username</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB custom user (mandatory if auth.database is set)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>directoryPerDB</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Switch to enable/disable DirectoryPerDB on MongoDB</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>initdbScripts</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Dictionary of initdb scripts</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.serviceMonitor.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Create ServiceMonitor Resource for scraping metrics Prometheus Operator</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="OrderedReady" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>podManagementPolicy</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Pod management policy for MongoDB</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>service.annotations</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Service annotations</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.resources.reques</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>The requested resources for Arbiter containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.livenessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Liveness probe configuration for Arbiter</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{"enabled":true,"failureThreshold":6,"initialDelaySeconds":30,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>architecture</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB architecture (standalone or replicaset)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="standalone" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>extraFlags</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB additional command line flags</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea value="[]" rows="4" className="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumepermissions.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable init container that changes the owner and group of the persistent volume(s) mountpoint to <code>runAsUser:fsGroup</code></p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>image.registry</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB image registry</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="docker.io" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>replicaSetHostnames</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable DNS hostnames in the replicaset config (only when <code>architecture=replicaset</code>)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                true
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item active" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.service.type</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Kubernetes Servive type for external access. It can be NodePort or LoadBalancer</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="LoadBalancer" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>auth.replicaSetKey</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Key used for authentication in the replicaset (only when <code>architecture=replicaset</code>)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.autoDiscovery.image.tag</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container auto-discovery image tag (kubectl)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="1.18.6-debian-10-r5" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable Kubernetes external cluster access to MongoDB nodes</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumePermissions.image.repository</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container volume-permissions image name</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="bitnami/minideb" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.priorityClassName</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Name of the existing priority class to be used by Arbiter pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.extraEnvVars</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Extra environment variables to add to Arbiter pods</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea rows="4" value="[]" className="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.configuration</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Arbiter configuration file to be used</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" placeholder="Enter arbiter.configuration" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>args</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Override default container args (useful when using custom images)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>global.storageClass</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Global storage class for dynamic provisioning</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="Sterlitec-block-gold" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>resources.requests</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>The requested resources for MongoDB containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>persistence.storageClass</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>PVC Storage Class for MongoDB data volume</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.image.pullPolicy</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>MongoDB Prometheus exporter image pull policy</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="IfNotPresent" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>extraEnvVars</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Extra environment variables to add to MongoDB pods</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <textarea value="[]" rows="4" className="form-control"></textarea>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.serviceMonitor.interval</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Interval at which metrics should be scraped</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="30s" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>clusterDomain</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Default Kubernetes cluster domain</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="cluster.local" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumePermissions.image.pullPolicy</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container volume-permissions image pull policy</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="Always" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>initdbScriptsConfigMap</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>ConfigMap with the initdb scripts</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="__NOT_SET__" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.resources.limits</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>The resources limits for Prometheus exporter containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>externalAccess.autoDiscovery.enabled</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable using an init container to auto-detect external IPs by querying the K8s API</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>livenessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Liveness probe configuration for MongoDB</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value='{"enabled":true,"failureThreshold":6,"initialDelaySeconds":30,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5}' className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>useStatefulSet</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Set to true to use a StatefulSet instead of a Deployment (only when <code>architecture=standalone</code>)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>metrics.service.type</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Type of the Prometheus metrics service</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="ClusterIP" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>volumePermissions.resources.requests</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Init container volume-permissions resource requests</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>labels</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Annotations to be added to the MongoDB statefulset</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>arbiter.customReadinessProbe</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Override default readiness probe for Arbiter containers</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <input type="text" value="{}" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <hr/>
                                                                <div className="row">
                                                                    <div className="col-lg-4">
                                                                        <code>pdb.create</code>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <p>Enable/disable a Pod Disruption Budget creation for MongoDB pod(s)</p>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                false
                                                                            </button>
                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="javascript:void(0);">true</a>
                                                                                <a className="dropdown-item active" href="javascript:void(0);">false</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-3">
                                        <ul className="category_ul">
                                            <li>
                                                <span>Type</span>
                                                <p>Helm chart</p>
                                            </li>
                                            <li>
                                                <span>Provider</span>
                                                <p>Third party</p>
                                            </li>
                                            <li>
                                                <span>Category</span>
                                                <p>Databases Developer Tools</p>
                                            </li>
                                            <li>
                                                <span>Compliance</span>
                                                <p>EU Supported HIPAA Enabled IAM-enabled</p>
                                            </li>
                                            <li>
                                                <span>Location</span>
                                                <ul>
                                                    <li>Sydney</li>
                                                    <li>Chennai 01</li>
                                                    <li>Frankfurt</li>
                                                    <li>London</li>
                                                    <li>Tokyo</li>
                                                    <li>Oslo 01</li>
                                                    <li>Seoul 01</li>
                                                    <li>Washington DC</li>
                                                    <li>Dallas</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>Related links</span>
                                                <ul>
                                                    <li><a href="javascript:void(0);">API docs</a></li>
                                                    <li><a href="javascript:void(0);">Docs</a></li>
                                                    <li><a href="javascript:void(0);">Terms</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="about">
                                            <label>Summary</label>
                                            <p>MongoDB is a JSON document store with a rich query and aggregation framework. Databases for MongoDB makes MongoDB even better by managing it for you. Features include high availability, automated backup orchestration, autoscaling, and de-coupled allocation of storage, RAM, and vCPUs. Databases for MongoDB pricing is based on underlying disk and RAM allocation, as well as backup storage usage. The service is HIPAA-Ready and compliant with SOC 2 Type 2, ISO 27017, and ISO 27018. You can also learn more by viewing docs, API docs, and terms.</p>
                                            <label>Features</label>
                                            <ul>
                                                <li>Compliance: SOC 2 Type 2, ISO 27017, ISO 27018, GDPR, and HIPAA-ready</li>
                                                <li>Integration with Sterlite Cloud IAM, Logging, Activity Tracker, Monitoring, Cloud Service Endpoints and Key Protect</li>
                                                <li>Data and backups are encrypted in motion and at rest</li>
                                                <li>30 day backup retention on Cross-Regional Sterlite Cloud Object Storage</li>
                                                <li>Independent scaling of Disk, RAM, and vCPUs with serverless auto-scaling</li>
                                                <li>Pay-as-you-go, hourly billing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="summary">
                            <h4>Summary</h4>
                            <hr className="bg-white"/>
                            <div className="summary-body">
                                <h4 className="title">MongoDB</h4>
                                <ul className="plan">
                                    <li><span>Target:</span><b className="target_namespace">Sterlite Kubernetes Service</b></li>
                                    <li><span>Method:</span><b className="method">Helm chart</b></li>
                                    <li><span>Kubernetes cluster:</span><b className="cluster">No cluster available</b></li>
                                    <li><span>Workspace:</span><b className="workspace">mongodb-07-29-2020</b></li>
                                    <li><span>Resource group:</span><b className="resourceGroup">Default</b></li>
                                </ul>
                                <ul className="price_calculator">
                                    <li>
                                        <label>GB-Disk</label>
                                        <input type="number" id="gbdisk" className="form-control" value="1" />
                                    </li>
                                    <li>
                                        <label>GB-RAM</label>
                                        <input type="number" id="gbram" className="form-control" value="1" />
                                    </li>
                                    <li>
                                        <label>GB-Backups</label>
                                        <input type="number" id="gbbackups" className="form-control" value="1" />
                                    </li>
                                    <li>
                                        <label>Virtual Processor Core</label>
                                        <input type="number" id="vpc" className="form-control" value="1" />
                                    </li>
                                </ul>
                                <div className="estimateCost">
                                    <label className="pr-2 mr-auto">Estimated Cost:</label>
                                    <b className="currency"></b><span>0.00</span><b>/month</b>
                                </div>
                                <p class="includeTax">Estimated cost doesn't include tax</p>
                            </div>
                            <div className="summary-footer">
                                <label className="form-check-label text-white">I have read and agree to the following license agreements:
                                    <input className="form-check-input" type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <a href="/mongocartdetail" className="btn btn-pink d-block withoutRadiusBorder disabled">Add to Cart</a>
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

export default CatlogDetailsComponent;