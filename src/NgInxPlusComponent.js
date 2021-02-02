import React from "react";
import LogoComponent from "./LogoComponent";
import CartComponent from "./CartComponent";
import SearchComponent from "./SearchComponent";
import MyAccountComponent from "./MyAccountComponent";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FootComponent";
import StickyiconComponent from "./StickyiconComponent";
import { connect } from "react-redux";
import {  sendProductToCartAction } from "./action/index";
import * as Actions from "./action";
import { bindActionCreators } from "redux";
//import *as cookie from "react-cookie";
import { Cookies } from 'react-cookie';
import cookie from 'react-cookies'
import { Link } from 'react-router-dom'

class NgInxPlusComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TAG_NAME: "",
      product_logo: "./images/nginx.png",
      product_name: "NGINX",
      product_author: "sterlite",
      product_quantity: "1",

      product_Summary :  {
        method :"Helm chart",
        Target: "Sterlite Kubernetes Service",
        Kubernetes_cluster : "No cluster available",
        workspace : "nginx-08-04-2020",
        Resource_group : "Default",
        GB_Disk:"1",
        GB_RAM : "1",
        GB_Backup : "1",
        Virtual_processsor_core :"1",
        Estimated_Cost : "0.00" 
      },
     
    };
  } 

  sendproductDetailsToCart = () => {
  this.props.sendProductToCartAction(this.state)

    //this.props.actions.sendProductToCartAction(this.state); 
    cookie.save('onboarded', this.state )
    console.log("cookies sent from here")
  //  Cookies.set('onboarded', this.state, { path: '/' });
     // Cookies.save("onboarded", this.state   );
     
  } 
 
  

  componentDidMount() {
    var token =
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IkstQ3poZ2Q3VlBUWVNOYU04VUVwMFd2ZTIweGJsUlE3S1QzVzhjOU5WcXcifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZXAtcm5kIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlcC1ybmQtdG9rZW4tNjQ5ZjUiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVwLXJuZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjAxNTZiNGRkLWUzNjItNDhhNi04N2NjLWE1NmZiNTJiZjMyNSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDpkZXAtcm5kOmRlcC1ybmQifQ.IZ1Uf7ALMgyx0-FW6uuahPVix8vjLNSFtfdyI7HgOM54dMyJzDQCZ2tvLvCxpky5XD8125xtDGEYzAKT2awVMVOTh5-ISqe5CVMiMVoEnyQmZcwElp36Yyi5m3xEVmS1tvlhIzHpTqzeYuUgxKiYGHMFkuY_NiB3CZlWOWGVAYHeJlfXBkpoMs2I0xL3b8r7GGsLU7NLuePMLDVZVrqAim7klX8ERPxVktD6W7wM6G96cyODPdoPsoX9IEiU7frjTVGl7XNmjKxFR1whiMY22ii8PsFX1b8UyXX_wAh5cWK0i_trL2K4yvpug88_ZZPS9czGCSIVLD8yclLpjU5yYg";
    // var bearer='Bearer ' + bearer_tocken;
    fetch("https://10.151.32.166:6443/api/v1/namespaces", {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        }

        return response.json();
      })
      .then((result) => {
        console.log("result=" + result);
      });
  }


  render() {
    // console.log(product_detaiiss)
    
   const product_detaiissw = this.props.product_detaiiss
//   {product_detaiissw}
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-dark bg-pink"
          id="mainheader"
        >
          <div className="container">
            <LogoComponent imagePath="/images/logo.png" />

            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <SearchComponent searchText="What are you looking for" />
              <MyAccountComponent />
              <CartComponent />
            </div>
          </div>
        </nav>
        <MenuComponent />
        <StickyiconComponent />

        <div className="bg-white">
          <section className="catalog_details">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-8">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="private_cloud_services.html">Catalog</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Software
                      </li>
                    </ol>
                  </nav>
                  <div className="catalog_header">
                    <img src="./images/nginx.png" alt="NGINX" />
                    <div className="description">
                      <h3>NGINX</h3>
                      <ul>
                        <li>
                          <b>Author:</b>Sterlite
                        </li>
                        <li className="version">
                          <b>Version:</b>
                          <span>1.19.1</span>
                        </li>
                        <li>
                          <b>Date of Last update:</b>02/08/2020
                        </li>
                        <li>
                          <a href="javascript:void(0);">Get help?</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="Add-tab"
                        data-toggle="tab"
                        href="#add"
                        role="tab"
                        aria-controls="add"
                        aria-selected="true"
                      >
                        Add
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="About-tab"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-controls="about"
                        aria-selected="false"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="add"
                      role="tabpanel"
                      aria-labelledby="add-tab"
                    >
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
                              <p>Developer Tools</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                          <div className="targetMethod">
                            <div className="items">
                              <label>Select Your Target</label>
                              <div className="innerdiv">
                                <img
                                  src="./images/iks.svg"
                                  alt="Sterlite Kubernetes Service"
                                />
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
                                    <button
                                      className="btn dropdown-toggle"
                                      type="button"
                                      id="dropdownMenuButton"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      Version 1.19.1
                                    </button>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <a
                                        className="dropdown-item active"
                                        data-version="1.19.1"
                                        href="javascript:void(0);"
                                      >
                                        Version 1.19.1{" "}
                                        <i className="fas fa-check"></i>
                                      </a>
                                      <a
                                        className="dropdown-item"
                                        data-version="1.18.0"
                                        href="javascript:void(0);"
                                      >
                                        Version 1.18.0{" "}
                                        <i className="fas fa-check"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <i className="fas fa-check-circle"></i>
                              </div>
                            </div>
                          </div>
                          <div className="pricing_plan">
                            <label>Pricing Plans</label>
                            <p>
                              Displayed prices do not include tax. Monthly
                              prices shown are for country or region:{" "}
                              <a href="javascript:void(0);">United States</a>
                            </p>
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
                                    <b className="plan_title">
                                      Opensourcfgbfghgfhe
                                    </b>
                                  </div>
                                  <div className="col-xl-5 col-lg-12"></div>
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
                                  <div className="col-xl-2 d-none d-xl-flex"></div>
                                  <div className="col-xl-10 col-lg-12">
                                    <hr className="mt-0" />
                                    <p>
                                      High availability will not be available
                                      with free plan. Free plan includes 10GB
                                      disk storage, 1 GB RAM. Backup storage and
                                      dedicated cpu is not available with
                                      Starter plan.
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xl-2 col-lg-12">
                                    <b className="header_title">Plan</b>
                                    <b className="plan_title">Plus</b>
                                  </div>
                                  <div className="col-xl-5 col-lg-12">
                                    <b className="header_title">Features</b>
                                    <b>
                                      Advanced monitoring and high availability
                                    </b>
                                  </div>
                                  <div className="col-xl-4 col-lg-12">
                                    <b className="header_title">Pricing</b>
                                    <ul className="plan_price">
                                      <li className="gbdisk">
                                        <b className="currency"></b>
                                        <span>0.58</span>/GB-Disk
                                      </li>
                                      <li className="gbram">
                                        <b className="currency"></b>
                                        <span>8.50</span>/GB-RAM
                                      </li>
                                      <li className="gbbackups">
                                        <b className="currency"></b>
                                        <span>0.03</span>/GB-Backups
                                      </li>
                                      <li className="vpc">
                                        <b className="currency"></b>
                                        <span>45.00</span>/Virtual Processor
                                        Core
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xl-1 col-lg-12">
                                    <i className="far fa-circle"></i>
                                    <i className="fas fa-check-circle d-none"></i>
                                  </div>
                                  <div className="col-xl-2 d-none d-xl-flex"></div>
                                  <div className="col-xl-10 col-lg-12">
                                    <hr className="mt-0" />
                                    <p>
                                      PLUS description : NGINX Plus has
                                      exclusive enterprise‑grade features beyond
                                      what's available in the open source
                                      offering, including session persistence,
                                      configuration via API, and active health
                                      checks. Use NGINX Plus instead of your
                                      hardware load balancer and get the freedom
                                      to innovate without being constrained by
                                      infrastructure.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <form>
                              <div className="form-row">
                                <div className="form-group col-xl-12 col-lg-12">
                                  <label>Select CPU allocation</label>
                                  <p className="mb-0">
                                    CPU allocation is optional. Selecting CPU
                                    allocation ensures your database has
                                    dedicated compute resources for your
                                    workload.
                                  </p>
                                  <div className="input-group mb-2">
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="vpc1"
                                      placeholder="Select CPU allocation"
                                      value="1"
                                    />
                                    <div className="input-group-prepend">
                                      <div className="input-group-text">
                                        vCPU
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>Select memory allocation</label>
                                  <div className="input-group mb-2">
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="gbram1"
                                      placeholder="Select memory allocation"
                                      value="1"
                                    />
                                    <div className="input-group-prepend">
                                      <div className="input-group-text">GB</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>Select disk allocation</label>
                                  <div className="input-group mb-2">
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="gbdisk1"
                                      placeholder="Select disk allocation"
                                      value="1"
                                    />
                                    <div className="input-group-prepend">
                                      <div className="input-group-text">GB</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>
                                    Select disk allocation for backup/archiving
                                  </label>
                                  <div className="input-group mb-2">
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="gbbackups1"
                                      placeholder="Select disk allocation for backup/archiving"
                                      value="1"
                                    />
                                    <div className="input-group-prepend">
                                      <div className="input-group-text">GB</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>
                                    Kubernetes cluster{" "}
                                    <i
                                      className="fas fa-info-circle"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="A cluster is required for your installation. It is recommended to install only one instance per cluster."
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="No cluster available"
                                    disabled
                                  />
                                </div>
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>
                                    Target namespace{" "}
                                    <i
                                      className="fas fa-info-circle"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Select from an existing namespace or create a new one by entering a unique namespace name."
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    id="target_namespace"
                                    className="form-control"
                                    defaultValue="Sterlite Kubernetes Service"
                                  />
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group col-xl-12">
                                  <label>Configure your workspace</label>
                                  <p>
                                    After you start the installation, you can
                                    track and manage the progress in your
                                    Sterlite Cloud Schematics workspace. Your
                                    workspace contains nginx, all of its
                                    resources, and the access URL for nginx
                                    after the installation is complete.
                                  </p>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>
                                    Name{" "}
                                    <i
                                      className="fas fa-info-circle"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Give your workspace a unique name that you can easily recognize."
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    id="workspace"
                                    className="form-control"
                                    defaultValue="nginx-08-04-2020"
                                  />
                                </div>
                                <div className="form-group col-xl-6 col-lg-12">
                                  <label>
                                    Resource group{" "}
                                    <i
                                      className="fas fa-info-circle"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Consider how you want resources organized in your account. The resource group that you select can't be changed after the service instance is created."
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    id="resourceGroup"
                                    className="form-control"
                                    defaultValue="Default"
                                  />
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group col-xl-12">
                                  <label>
                                    Tags{" "}
                                    <i
                                      className="fas fa-info-circle"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Use tags to organize your resources. If your tags are billing related, consider writing tags as key:value pairs to help group related tags, such as costctr:124. Tags are visible account-wide."
                                    ></i>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Examples: env:dev, version-1"
                                  />
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="form-group col-xl-12">
                                  <label>Set the deployment values</label>
                                  <a
                                    className="btn deployment"
                                    data-toggle="collapse"
                                    href="#deployment"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="deployment"
                                  >
                                    <b className="d-block text-left">
                                      Parameters with default values
                                    </b>
                                    <span className="d-block text-left">
                                      A default value is set for each parameter.
                                      Review and accept the defaults, or you can
                                      update with customized values.
                                    </span>
                                  </a>
                                  <div
                                    className="collapse multi-collapse"
                                    id="deployment"
                                  >
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
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.selectors</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Ingress selectors for labelSelector
                                            option
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>extraVolumeMounts</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Array to add extra mounts (normally
                                            used with extraVolumes, evaluated as
                                            a template)
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <textarea
                                            rows="4"
                                            className="form-control"
                                          >
                                            []
                                          </textarea>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>nodeSelector</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Node labels for pod assignment</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.httpsPort</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Service HTTPS port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="443"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>autoscaling.targetCPU</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Target CPU utilization percentage
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.tls</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>TLS hosts</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <textarea
                                            rows={4}
                                            classname="form-control"
                                            defaultValue={
                                              '[{"hosts":["example.local"],"secretName":"example.local-tls"}]'
                                            }
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.image.registry</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP Auth Daemon Image registry</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="docker.io"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.baseDN
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            LDAP root DN to begin the search for
                                            the user
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.baseDN"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.serviceMonitor.namespace
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Namespace in which Prometheus is
                                            running
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.secrets</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>TLS Secret Name</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>arbiter.readinessProbe</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Readiness probe configuration for
                                            Arbiter
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"enabled":true,"failureThreshold":6,"initialDelaySeconds":5,"periodSeconds":10,"successThreshold":1,"timeoutSeconds":5}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.nodePort</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Port to bind to for NodePort and
                                            LoadBalancer service types
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter service.nodePort"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>podAnnotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>nginx Pod annotations</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            arbiter.customLivenessProbe
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Override default liveness probe for
                                            Arbiter containers
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>persistence.existingClaim</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Provide an existing</p>
                                          <p>
                                            PersistentVolumeClaim (only when{" "}
                                            <code>architecture=standalone</code>
                                            )
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>fullnameOverride</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            String to fully override
                                            nginx.fullname
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.service.port</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Port of the Prometheus metrics
                                            service
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="9216"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>arbiter.existingConfigmap</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Name of existing ConfigMap with
                                            Arbiter configuration
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            externalAccess.service.port
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            nginx port used for external access
                                            when service type is LoadBalancer
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="27017"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>auth.password</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>nginx custom user password</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.resources.requests
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            The requested resources for
                                            Prometheus exporter containers
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.ldapConfig.uri</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            LDAP Server URI,{" "}
                                            <code>
                                              ldap[s]:/&lt;hostname&gt;:&lt;port&gt;
                                            </code>{" "}
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.uri"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.enabled</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Start a side-car prometheus exporter
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.interval
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Interval for sidecar container pull
                                            from the repository
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="60"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.annotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Ingress annotations</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.resources</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX Prometheus exporter resource
                                            requests/limit
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"limits":{},"requests":{}}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.enabled
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Get the server static content from a
                                            git repository
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.enabled</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Enable health ingress controller
                                            resource
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            existingServerBlockConfigmap
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Name of existing PVC with custom
                                            NGINX server block
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.nodePorts.http</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Kubernetes http node port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter service.nodePorts.http"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>image.registry</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>NGINX image registry</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="docker.io"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.certManager</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Add annotations for cert-manager
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.image.repository</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX Prometheus exporter image name
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="bitnami/nginx-exporter"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>nameOverride</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            String to partially override
                                            nginx.fullnametemplate
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.image.repository
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP Auth Daemon Image name</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="bitnami/nginx-ldap-auth-daemon"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>global.imagePullSecrets</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Global Docker registry secret names
                                            as an array
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.filter
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            LDAP search filter for search+bind
                                            authentication
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.filter"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.image.pullPolicy
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            LDAP Auth Daemon Image pull policy
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="IfNotPresent"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.repository
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Repository to clone static content
                                            from
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.nginxServerBlock
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX server block that configures
                                            LDAP communication. Overrides{" "}
                                            <code>ldapDaemon.ldapConfig</code>
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='server {listen 0.0.0.0:{{ .Values.containerPort }};# You can provide a special subPath or the rootlocation = / {    auth_request /auth-proxy;}location = /auth-proxy {    internal;    proxy_pass http://127.0.0.1:{{ .Values.ldapDaemon.port }};    ###############################################################    # YOU SHOULD CHANGE THE FOLLOWING TO YOUR LDAP CONFIGURATION  #    ###############################################################    # URL and port for connecting to the LDAP server    proxy_set_header X-Ldap-URL " ldap://YOUR_LDAP_SERVER_IP:YOUR_LDAP_SERVER_PORT"; # Base DN proxy_set_header X-Ldap-BaseDN "dc=example,dc=org" ; # Bind DN proxy_set_header X-Ldap-BindDN "cn=admin,dc=example,dc=org" ; # Bind password proxy_set_header X-Ldap-BindPass "adminpassword" ;}}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.httpCookieName
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            HTTP cookie name to be used in LDAP
                                            Auth
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.httpCookieName"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>livenessProbe</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Deployment Liveness Probe</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"failureThreshold":6,"initialDelaySeconds":30,"tcpSocket":{"port":"http"},"timeoutSeconds":5}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.branch
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Branch inside the git repository
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.image.registry
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Git image registry</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="docker.io"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.secrets</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>TLS Secret Name</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>replicaCount</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Number of replicas to deploy</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="1"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.image.tag</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP Auth Daemon Image tag</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="0.20200116.0-debian-10-r60"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>autoscaling.enabled</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Enable autoscaling for NGINX
                                            deployment
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>containerPort</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Deployment Container Port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="8080"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.port</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP Auth Daemon port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="8888"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>staticSitePVC</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Name of existing PVC with the server
                                            static content
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.tls</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>TLS hosts</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <textarea
                                            rows="4"
                                            value='[{"hosts":["example.local"],"secretName":"example.local-tls"}]'
                                            className="form-control"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>autoscaling.minReplicas</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Minimum number of replicas to scale
                                            back
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.hosts</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Hostname to your NGINX installation
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.enabled</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Enable LDAP Auth Daemon proxy</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.image.pullSecrets</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Specify docker-registry secret names
                                            as an array
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.annotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Health Ingress annotations</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.nodePorts.https</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Kubernetes https node port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter service.nodePorts.https"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.image.tag</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX Prometheus exporter image tag
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="0.8.0-debian-10-r18"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>tolerations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Tolerations for pod assignment</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.serviceMonitor.selector
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Prometheus instance selector labels
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>resources</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Resource requests/limit</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"limits":{},"requests":{}}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.serviceMonitor.scrapeTimeout
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Timeout after which the scrape is
                                            ended
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ingress.enabled</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Enable ingress controller resource
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.type</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Kubernetes Service type</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="LoadBalancer"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.port</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Service HTTP port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="80"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.image.pullPolicy
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Array to add extra volumes
                                            (evaluated as a template)
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="IfNotPresent"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>extraVolumes</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Array to add extra volumes
                                            (evaluated as a template)
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <textarea
                                            rows="4"
                                            className="form-control"
                                          >
                                            []
                                          </textarea>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.image.tag
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Git image tag</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="2.27.0-debian-10-r32"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>containerTlsPort</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Deployment Container Tls Port</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>staticSiteConfigmap</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Name of existing ConfigMap with the
                                            server static content
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.image.repository
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Git image name</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="bitnami/git"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.serviceMonitor.enabled
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Creates a Prometheus Operator
                                            ServiceMonitor (also requires{" "}
                                            <code>metrics.enabled</code> to be{" "}
                                            <code>true</code>)
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>image.pullSecrets</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Specify docker-registry secret names
                                            as an array
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>readinessProbe</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Deployment Readiness Probe</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <textarea
                                            rows="4"
                                            value='{"initialDelaySeconds":5,"periodSeconds":5,"tcpSocket":{"port":"http"},"timeoutSeconds":3}'
                                            className="form-control"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>global.imageRegistry</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Global Docker image registry</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.readinessProbe</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            LDAP Auth Daemon Readiness Probe
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"initialDelaySeconds":5,"periodSeconds":5,"tcpSocket":{"port":"ldap-daemon"},"timeoutSeconds":3}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.image.registry</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX Prometheus exporter image
                                            registry
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="docker.io"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.bindPassword
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Password for the user to bind to
                                            LDAP
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.bindPassword"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.podAnnotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Additional annotations for NGINX
                                            Prometheus exporter pod(s)
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"prometheus.io/port":"9113","prometheus.io/scrape":"true"}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>autoscaling.targetMemory</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Target Memory utilization percentage
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.loadBalancerIP</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LoadBalancer service IP address</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            cloneStaticSiteFromGit.image.pullSecrets
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Specify docker-registry secret names
                                            as an array
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>ldapDaemon.livenessProbe</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP Auth Daemon Liveness Probe</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value='{"failureThreshold":6,"initialDelaySeconds":30,"tcpSocket":{"port":"ldap-daemon"},"timeoutSeconds":5}'
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            metrics.serviceMonitor.interval
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Interval at which metrics should be
                                            scraped.
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.bindDN
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>DN of user to bind to LDAP</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.bindDN"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>podAnnotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Pod annotations</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>image.tag</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>NGINX Image tag</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="1.19.1-debian-10-r0"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.existingNginxServerBlockSecret
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Name of existing Secret with a NGINX
                                            server block to use for LDAP
                                            communication
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>serverBlock</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Custom NGINX server block</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.hosts</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Hostname to your NGINX installation
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>affinity</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Map of node/pod affinities</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.certManager</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Add annotations for cert-manager
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <div className="dropdown">
                                            <button
                                              className="btn dropdown-toggle"
                                              type="button"
                                              id="dropdownMenuButton"
                                              data-toggle="dropdown"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              false
                                            </button>
                                            <div
                                              className="dropdown-menu"
                                              aria-labelledby="dropdownMenuButton"
                                            >
                                              <a
                                                className="dropdown-item"
                                                href="javascript:void(0);"
                                              >
                                                true
                                              </a>
                                              <a
                                                className="dropdown-item active"
                                                href="javascript:void(0);"
                                              >
                                                false
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>healthIngress.selectors</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Health Ingress selectors for
                                            labelSelector option
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            service.externalTrafficPolicy
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Enable client source IP preservation
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="Cluster"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>fullnameOverride</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            String to fully override{" "}
                                            <code>nginx.fullnametemplate</code>
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>service.annotations</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>Service annotations</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="{}"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>image.repository</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>NGINX Image name</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="bitnami/nginx"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>image.pullPolicy</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>NGINX Image pull policy</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="IfNotPresent"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>autoscaling.maxReplicas</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            Maximum number of replicas to scale
                                            out
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="__NOT_SET__"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>metrics.image.pullPolicy</code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>
                                            NGINX Prometheus exporter image pull
                                            policy
                                          </p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            value="IfNotPresent"
                                            className="form-control"
                                          />
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="row">
                                        <div className="col-lg-4">
                                          <code>
                                            ldapDaemon.ldapConfig.httpRealm
                                          </code>
                                        </div>
                                        <div className="col-lg-4">
                                          <p>LDAP HTTP auth realm</p>
                                        </div>
                                        <div className="col-lg-4">
                                          <input
                                            type="text"
                                            placeholder="Enter ldapDaemon.ldapConfig.httpRealm"
                                            className="form-control"
                                          />
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
                    <div
                      className="tab-pane fade"
                      id="about"
                      role="tabpanel"
                      aria-labelledby="about-tab"
                    >
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
                              <p>Developer Tools</p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-xl-9 col-lg-9">
                          <div className="about">
                            <label>Summary</label>
                            <p className="mb-0">
                              <a className="text-pink" href="#">
                                NGINX
                              </a>{" "}
                              (pronounced "engine-x") is an open source reverse
                              proxy server for HTTP, HTTPS, SMTP, POP3, and IMAP
                              protocols, as well as a load balancer, HTTP cache,
                              and a web server (origin server).
                            </p>

                            <p className="mb-0">
                              In IBM Cloud™ you can configure your installation
                              from the Create tab, and then install it with a
                              single click instead of executing the Helm
                              installation directly. Your Helm Chart is
                              installed by using IBM Cloud Schematics, and after
                              the installation is complete, you can view the
                              Chart instance, update the version, or uninstall
                              from your Schematics workspace. If you are
                              installing an instance for a production
                              configuration, review the considerations for
                              adjusting the configuration parameters.
                            </p>

                            <p>
                              To learn how to deploy Bitnami applications in
                              your IBM Cloud Kubernetes Service (IKS) cluster
                              check out{" "}
                              <a className="text-pink" href="#">
                                this step-by-step getting started guide.
                              </a>
                            </p>

                            <label>Introduction</label>

                            <p className="mb-0">
                              Bitnami charts for Helm are carefully engineered,
                              actively maintained and are the quickest and
                              easiest way to deploy containers on a Kubernetes
                              cluster that are ready to handle production
                              workloads.
                            </p>

                            <p className="mb-0">
                              This chart bootstraps a{" "}
                              <a href="#" className="text-pink">
                                NGINX Open Source
                              </a>{" "}
                              deployment on a{" "}
                              <a href="#" className="text-pink">
                                Kubernetes
                              </a>{" "}
                              cluster using the{" "}
                              <a href="#" className="text-pink">
                                Helm
                              </a>{" "}
                              package manager.
                            </p>

                            <p>
                              Bitnami charts can be used with{" "}
                              <a href="#" className="text-pink">
                                Kubeapps
                              </a>{" "}
                              for deployment and management of Helm Charts in
                              clusters. This Helm chart has been tested on top
                              of{" "}
                              <a href="#" className="text-pink">
                                Bitnami Kubernetes Production Runtime
                              </a>{" "}
                              (BKPR). Deploy BKPR to get automated TLS
                              certificates, logging and monitoring for your
                              applications.
                            </p>

                            <label>Prerequisites</label>

                            <ul className="normalul">
                              <li>
                                You must install the IBM Cloud Block Storage
                                plug-in from the{" "}
                                <a href="#" className="text-pink">
                                  catalog
                                </a>{" "}
                                before you install this Chart. The Block Storage
                                plug-in is a persistent, high-performance iSCSI
                                storage that you can add to your apps by using
                                Kubernetes Persistent Volumes (PVs).
                              </li>
                              <li>Kubernetes 1.12+</li>
                              <li>Helm 2.12+ or Helm 3.0-beta3+</li>
                            </ul>

                            <label>Parameters</label>

                            <p className="mb-0">
                              The following tables lists the configurable
                              parameters of the NGINX Open Source chart and
                              their default values.
                            </p>

                            <div className="pricing_plan">
                              <form>
                                <div className="form-row">
                                  <div className="form-group col-xl-12">
                                    <div className="collapse multi-collapse show">
                                      <div className="card card-body">
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <b>Parameter</b>
                                          </div>
                                          <div className="col-lg-4">
                                            <b>Description</b>
                                          </div>
                                          <div className="col-lg-4">
                                            <b>Default</b>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>global.imageRegistry</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Global Docker image registry</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>global.imagePullSecrets</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Global Docker registry secret
                                              names as an array
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>[]</code> (does not add
                                              image pull secrets to deployed
                                              pods)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>image.registry</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>NGINX image registry</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>docker.io</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>image.repository</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>NGINX Image name</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>bitnami/nginx</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>image.tag</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>NGINX Image tag</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{this.state.TAG_NAME}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>image.pullPolicy</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>NGINX image pull policy</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>IfNotPresent</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>image.pullSecrets</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Specify docker-registry secret
                                              names as an array{" "}
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>[]</code> (does not add
                                              image pull secrets to deployed
                                              pods)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>nameOverride</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              String to partially override
                                              nginx.fullname template
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>fullnameOverride</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              String to fully override
                                              nginx.fullname template
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>staticSiteConfigmap</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Name of existing ConfigMap with
                                              the server static content
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>staticSitePVC</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Name of existing PVC with the
                                              server static content
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.enabled
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Get the server static content from
                                              a git repository
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.image.registry
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Git image registry</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>docker.io</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.image.repository
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Git image name</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>bitnami/git</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.image.tag
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Git image tag</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{this.state.TAG_NAME}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.image.pullPolicy
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Git image pull policy</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>[]</code> (does not add
                                              image pull secrets to deployed
                                              pods)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.repository
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Repository to clone static content
                                              from
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.branch
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Branch inside the git repository
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              cloneStaticSiteFromGit.interval
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Interval for sidecar container
                                              pull from the repository
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>60</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>serverBlock</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Custom NGINX server block</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              existingServerBlockConfigmap
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Name of existing PVC with custom
                                              NGINX server block
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>replicaCount</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Number of replicas to deploy</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>1</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>containerPort</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Deployment Container Port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>8080</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>containerTlsPort</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Deployment Container Tls Port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>podAnnotations</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Pod annotations</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>affinity</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Map of node/pod affinities</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>{}</code> (The value is
                                              evaluated as a template)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>nodeSelector</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Node labels for pod assignment
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>{}</code> (The value is
                                              evaluated as a template)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>tolerations</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Tolerations for pod assignment
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>[]</code> (The value is
                                              evaluated as a template)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>resources</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Resource requests/limit</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>livenessProbe</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Deployment Liveness Probe</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              See <code>values.yaml</code>
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>readinessProbe</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Deployment Readiness Probe</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              See <code>values.yaml</code>
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.type</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Kubernetes Service type</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>LoadBalancer</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.port </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Service HTTP port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>80</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.httpsPort </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Service HTTPS port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>443</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.nodePorts.http</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Kubernetes http node port </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.nodePorts.https</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Kubernetes https node port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              service.externalTrafficPolicy
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Enable client source IP
                                              preservation
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>Cluster</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.loadBalancerIP</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LoadBalancer service IP address
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>service.annotations</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Service annotations</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ldapDaemon.enabled</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Enable LDAP Auth Daemon proxy</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.image.registry
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP AUth Daemon Image registry
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>docker.io</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.image.repository
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>LDAP Auth Daemon Image name</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>
                                              bitnami/nginx-ldap-auth-daemon
                                            </code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ldapDaemon.image.tag</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>LDAP Auth Daemon Image tag</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{this.state.TAG_NAME}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.image.pullPolicy
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP Auth Daemon Image pull policy
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>IfNotPresent</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ldapDaemon.port</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>LDAP Auth Daemon port</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>8888</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.uri
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP Server URI,{" "}
                                              <code>
                                                ldap[s]:/&lt;hostname&gt;:&lt;port&gt;
                                              </code>
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.baseDN
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP root DN to begin the search
                                              for the user
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.bindDN
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>DN of user to bind to LDAP</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.bindPassword
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Password for the user to bind to
                                              LDAP
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.filter
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP search filter for search+bind
                                              authentication
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.httpRealm
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>LDAP HTTP auth realm</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.ldapConfig.httpCookieName
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              HTTP cookie name to be used in
                                              LDAP Auth
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>""</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.nginxServerBlock
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX server block that configures
                                              LDAP communication. Overrides{" "}
                                              <code>ldapDaemon.ldapConfig</code>
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              See <code>values.yaml</code>
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.existingNginxServerBlockSecret
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Name of existing Secret with a
                                              NGINX server block to use for LDAP
                                              communication
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.livenessProbe
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP Auth Daemon Liveness Probe
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              See <code>values.yaml</code>
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ldapDaemon.readinessProbe
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              LDAP Auth Daemon Readiness Probe
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              See <code>values.yaml</code>
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.enabled</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Enable ingress controller resource
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.certManager</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Add annotations for cert-manager
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.selectors </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Ingress selectors for
                                              labelSelector option
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.annotations</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Ingress annotations</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.hosts[0].name</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Hostname to your NGINX
                                              installation
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.hosts[0].path</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Path within the url structure</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>/</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.tls[0].hosts[0]</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS hosts</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ingress.tls[0].secretName
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret (certificates)</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local-tls</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.secrets[0].name</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Name</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              ingress.secrets[0].certificate
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Certificate</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>ingress.secrets[0].key</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Key</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>healthIngress.enabled</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Enable health ingress controller
                                              resource
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.certManager
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Add annotations for cert-manager
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>healthIngress.selectors</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Health Ingress selectors for
                                              labelSelector option
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.annotations
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Health Ingress annotations</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.hosts[0].name
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Hostname to your NGINX
                                              installation
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.hosts[0].path
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>Path within the url structure</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>/</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.tls[0].hosts[0]
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS hosts</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.tls[0].secretName
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret (certificates)</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nginx.local-tls</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.secrets[0].name
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Name</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.secrets[0].certificate
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Certificate</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              healthIngress.secrets[0].key
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>TLS Secret Key</p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>metrics.enabled</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Start a side-car prometheus
                                              exporter
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>metrics.image.registry</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX Prometheus exporter image
                                              registry
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>docker.io</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.image.repository{" "}
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX Prometheus exporter image
                                              name{" "}
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>bitnami/nginx-exporter</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>metrics.image.tag</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX Prometheus exporter image
                                              tag
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{this.state.TAG_NAME}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.image.pullPolicy{" "}
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX Prometheus exporter image
                                              pull policy
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>IfNotPresent</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.image.pullSecrets
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Specify docker-registry secret
                                              names as an array
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>[]</code> (does not add
                                              image pull secrets to deployed
                                              pods)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>metrics.podAnnotations</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Additional annotations for NGINX
                                              Prometheus exporter pod(s)
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>
                                              {"{"}prometheus.io/scrape: "true",
                                              prometheus.io/port: "9113"{"}"}
                                            </code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>metrics.resources</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              NGINX Prometheus exporter resource
                                              requests/limit
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>{}</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.serviceMonitor.enabled
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Creates a Prometheus Operator
                                              ServiceMonitor (also requires{" "}
                                              <code>metrics.enabled</code> to be{" "}
                                              <code>true</code>)
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.serviceMonitor.namespace
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Namespace in which Prometheus is
                                              running
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.serviceMonitor.interval
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Interval at which metrics should
                                              be scraped.
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>nil</code> (Prometheus
                                              Operator default value)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.serviceMonitor.scrapeTimeout
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Timeout after which the scrape is
                                              ended
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              <code>nil</code> (Prometheus
                                              Operator default value)
                                            </p>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              metrics.serviceMonitor.selector
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Prometheus instance selector
                                              labels
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>autoscaling.enabled</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Enable autoscaling for NGINX
                                              deployment
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>false</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>autoscaling.minReplicas</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Minimum number of replicas to
                                              scale back
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>autoscaling.maxReplicas</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Maximum number of replicas to
                                              scale out
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>autoscaling.targetCPU</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Target CPU utilization percentage
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>
                                              autoscaling.targetMemory
                                            </code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Target Memory utilization
                                              percentage
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>nil</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>extraVolumes</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Array to add extra volumes
                                              (evaluated as a template)
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                          <div className="col-lg-4">
                                            <code>extraVolumeMounts</code>
                                          </div>
                                          <div className="col-lg-4">
                                            <p>
                                              Array to add extra mounts
                                              (normally used with extraVolumes,
                                              evaluated as a template)
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <code>[]</code>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>

                            <p className="mb-0">
                              Specify each parameter using the{" "}
                              <code>--set key=value[,key=value]</code> argument
                              to helm <code>install</code>. For example,
                            </p>
                            <div className="p-3 mb-4 bg-white">
                              <code className="language-bash">
                                $ helm install my-release \ --set
                                imagePullPolicy=Always \ bitnami-ibm/nginx
                              </code>
                            </div>

                            <p className="mb-0">
                              The above command sets the{" "}
                              <code>imagePullPolicy</code> to{" "}
                              <code>Always</code>.
                            </p>

                            <p className="mb-0">
                              Alternatively, a YAML file that specifies the
                              values for the parameters can be provided while
                              installing the chart. For example,
                            </p>

                            <div className="p-3 mb-4 bg-white">
                              <code>
                                $ helm install my-release -f values.yaml
                                bitnami-ibm/nginx
                              </code>
                            </div>
                            <p>
                              <b>Tip:</b> You can use the default{" "}
                              <a href="#" className="text-pink">
                                values.yaml
                              </a>
                            </p>
                            <label>
                              Configuration and installation details
                            </label>
                            <p className="mb-0">
                              <a href="#" className="text-pink">
                                Rolling VS Immutable tags
                              </a>
                            </p>
                            <p className="mb-0">
                              It is strongly recommended to use immutable tags
                              in a production environment. This ensures your
                              deployment does not change automatically if the
                              same tag is updated with a different image.
                            </p>
                            <p>
                              Bitnami will release a new chart updating its
                              containers if a new version of the main container,
                              significant changes, or critical vulnerabilities
                              exist.
                            </p>

                            <label>Change NGINX version</label>
                            <p>
                              To modify the NGINX version used in this chart you
                              can specify a{" "}
                              <a href="#" className="text-pink">
                                valid image tag
                              </a>{" "}
                              using the <code>image.tag</code> parameter. For
                              example, <code>image.tag=X.Y.Z.</code> This
                              approach is also applicable to other images like
                              exporters.
                            </p>

                            <label>Deploying your custom web application</label>
                            <p>
                              The NGINX chart allows you to deploy a custom web
                              application using one of the following methods:
                            </p>
                            <ul className="normalul">
                              <li>
                                Cloning from a git repository: Set{" "}
                                <code>cloneStaticSiteFromGit.enabled</code> to
                                true and set the repository and branch using the{" "}
                                <code>cloneStaticSiteFromGit.repository</code>{" "}
                                and <code>cloneStaticSiteFromGit.branch</code>{" "}
                                parameters. A sidecar will also pull the latest
                                changes in an interval set by{" "}
                                <code>cloneStaticSitesFromGit.interval.</code>
                              </li>
                              <li>
                                Providing a ConfigMap: Set the{" "}
                                <code>staticSiteConfigMap</code> value to mount
                                a ConfigMap in the NGINX html folder.
                              </li>
                              <li>
                                Using an existing PVC: Set the{" "}
                                <code>staticSitePVC</code> value to mount an
                                PersistentVolumeClaim with the static site
                                content.
                              </li>
                            </ul>
                            <p className="mb-0">
                              You can deploy a example web application using git
                              deploying the chart with the following parameters:
                            </p>
                            <div className="bg-white p-3 mb-4">
                              <code>
                                cloneStaticSiteFromGit.enabled=true
                                cloneStaticSiteFromGit.repository=https://github.com/mdn/beginner-html-site-styled.git
                                cloneStaticSiteFromGit.branch=master
                              </code>
                            </div>

                            <label>Providing a custom server block</label>
                            <p className="mb-0">
                              This helm chart supports using custom custom
                              server block for <code>NGINX</code> to use.
                            </p>

                            <p className="mb-0">
                              You can use the <code>serverBlock</code> value to
                              provide a custom server block for NGINX to use. To
                              do this, create a values files with your server
                              block and install the chart using it:
                            </p>
                            <div className="bg-white p-3 mb-4">
                              <code>
                                serverBlock: |- server {"{"}
                                listen 0.0.0.0:8080; location / {"{"}
                                return 200 "hello!";
                                {"}"}
                                {"}"}
                              </code>
                            </div>
                            <p className="mb-0">
                              Warning: The above example is not compatible with
                              enabling Prometheus metrics since it affects the{" "}
                              <code>/status</code> endpoint.
                            </p>

                            <p>
                              In addition, you can also set an external
                              ConfigMap with the configuration file. This is
                              done by setting the{" "}
                              <code>existingServerBlockConfigmap</code>{" "}
                              parameter. Note that this will override the
                              previous option.
                            </p>

                            <label>Enabling LDAP</label>
                            <p className="mb-0">
                              In some scenarios, you may require users to
                              authenticate in order to gain access to protected
                              resources. By enabling LDAP, NGINX will make use
                              of an Authorization Daemon to proxy those
                              identification requests against a given LDAP
                              Server.
                            </p>

                            <p>
                              In order to enable LDAP authentication you can set
                              the ldapDaemon.enabled property and follow these
                              steps:
                            </p>

                            <ul className="normalul">
                              <li>
                                Use the <code>ldapDaemon.nginxServerBlock</code>{" "}
                                property to provide with an additional server
                                block that will make <code>NGINX</code> such a
                                proxy (<code>see values.yaml</code>).
                                Alternatively, you can provide this
                                configuration using an external Secret and the
                                property{" "}
                                <code>
                                  ldapDaemon.existingNginxServerBlockSecret.
                                </code>
                              </li>
                              <li>
                                Complete the aforementioned server block by
                                specifying your LDAP Server connection details
                                (see <code>values.yaml</code>). Alternatively,
                                you can declare them using the property{" "}
                                <code>ldapDaemon.ldapConfig.</code>
                              </li>
                            </ul>

                            <label>Upgrading</label>
                            <p>5.6.0</p>
                            <p>Added support for the use of LDAP.</p>
                            <p>5.0.0</p>
                            <p>
                              Backwards compatibility is not guaranteed unless
                              you modify the labels used on the chart's
                              deployments.
                            </p>
                            <p className="mb-0">
                              Use the workaround below to upgrade from versions
                              previous to 5.0.0. The following example assumes
                              that the release name is nginx:
                            </p>
                            <div className="bg-white p-3 mb-4">
                              <code>
                                $ kubectl delete deployment nginx
                                --cascade=false $ helm upgrade nginx
                                bitnami-ibm/nginx
                              </code>
                            </div>
                            <p>To 1.0.0</p>
                            <p>
                              Backwards compatibility is not guaranteed unless
                              you modify the labels used on the chart's
                              deployments.
                            </p>
                            <p className="mb-0">
                              Use the workaround below to upgrade from versions
                              previous to 1.0.0. The following example assumes
                              that the release name is nginx:
                            </p>

                            <div className="bg-white p-3 mb-4">
                              <code>
                                $ kubectl patch deployment nginx --type=json
                                -p='[{"{"}"op": "remove", "path":
                                "/spec/selector/matchLabels/chart"{"}"}]'
                              </code>
                            </div>

                            <label>Upgrading to a new version</label>
                            <p className="mb-2">
                              If a new version of a helm chart is available, you
                              are alerted in your Schematics workspace. To
                              upgrade to a new version, complete the following
                              steps:
                            </p>

                            <ul classname="normalul decimal_list_style">
                              <li>
                                Go to the <b>Navigation menu &gt; Schematics</b>
                                .
                              </li>
                              <li>Select your workspace name.</li>
                              <li>
                                Click <b>Settings</b>. In the Summary section,
                                your version number is displayed. If an update
                                is available, the <b>Update</b> button is
                                displayed.
                              </li>
                              <li>
                                Click <b>Update</b>.
                              </li>
                              <li>
                                Select a version, and click <b>Update</b>.
                              </li>
                            </ul>

                            <label>Uninstalling</label>
                            <p className="mb-2">
                              To uninstall a helm chart from your account,
                              complete the following steps:
                            </p>

                            <ul classname="normalul decimal_list_style">
                              <li>
                                Go to the <b>Navigation menu &gt; Schematics</b>
                                .
                              </li>
                              <li>Select your workspace name.</li>
                              <li>
                                Select <b>Actions &gt; Destroy resources</b>.
                                This deletes all resources in your workspace,
                                but it doesn't delete the workspace.
                              </li>
                              <li>
                                To delete your workspace, select{" "}
                                <b>Actions &gt; Delete workspace</b>.
                              </li>
                            </ul>

                            <label>Getting support</label>

                            <p>
                              This offering is provided and supported by{" "}
                              <a href="#" className="text-pink">
                                Bitnami
                              </a>
                              . If you encounter any issues that require opening
                              a support case, click the{" "}
                              <b className="gothamMedium">Contact Support</b>{" "}
                              link at the beginning of this page to open a
                              GitHub issue in the corresponding repository for
                              this chart. Your issue will typically be answered
                              in approximately 1 to 2 business days by the
                              Bitnami support team.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="summary">
                    <h4>Summary</h4>
                    
                    <hr className="bg-white" />
                    <div className="summary-body">
                      <h4 className="title">NGINX</h4>
                      <ul className="plan">
                        <li>
                          <span>Target:</span>
                          <b className="target_namespace">
                            Sterlite Kubernetes Service
                          </b>
                        </li>
                        <li>
                          <span>Method:</span>
                          <b className="method">Helm chart</b>
                        </li>
                        <li>
                          <span>Kubernetes cluster:</span>
                          <b className="cluster">No cluster available</b>
                        </li>
                        <li>
                          <span>Workspace:</span>
                          <b className="workspace">nginx-08-04-2020</b>
                        </li>
                        <li>
                          <span>Resource group:</span>
                          <b className="resourceGroup">Default</b>
                        </li>
                      </ul>
                      <ul className="price_calculator">
                        <li>
                          <label>GB-Disk</label>
                          <input
                            type="number"
                            id="gbdisk"
                            className="form-control"
                            value="1"
                          />
                        </li>
                        <li>
                          <label>GB-RAM</label>
                          <input
                            type="number"
                            id="gbram"
                            className="form-control"
                            value="1"
                          />
                        </li>
                        <li>
                          <label>GB-Backups</label>
                          <input
                            type="number"
                            id="gbbackups"
                            className="form-control"
                            value="1"
                          />
                        </li>
                        <li>
                          <label>Virtual Processor Core</label>
                          <input
                            type="number"
                            id="vpc"
                            className="form-control"
                            value="1"
                          />
                        </li>
                      </ul>
                      <div className="estimateCost">
                        <label className="pr-2 mr-auto">Estimated Cost:</label>
                        <b className="currency"></b>
                        <span>0.00</span>
                        <b>/month</b>
                      </div>
                      <p className="includeTax">
                        Estimated cost doesn't include tax
                      </p>
                    </div>
                    <div className="summary-footer">
                      <label className="form-check-label text-white">
                        I have read and agree to the following license
                        agreements:
                        <input className="form-check-input" type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <Link to="/cartnginxdetail"                                                 
                        className="btn btn-pink d-block withoutRadiusBorder disabled"
                        onClick={this.sendproductDetailsToCart}
                      >


                        
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <FooterComponent />
      </div>
    );



  }
}

// const mapStateToProps = (state) => ({
//   product_name: state.product_name,

// });
// 4572
//cartnginxdetail
//same state passing using anchor tag to next page

// summit sir working code 
// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(Actions, dispatch),
// });

// // const mapStateToProps=(state)=>{
// //   return{
// //     product_detaiiss :state
// //   }
// // }


// export default connect(null, mapDispatchToProps)(NgInxPlusComponent);

// my code 


const mapStateToProps=(state)=>{
  return{
    product_detaiiss :state
  }
}

const mapDispatchToProps={sendProductToCartAction}


// const mapDispatchToProps = dispatch => {
//   return {
//     sendproductDetailsToCart: () => { // handles sendproductDetailsToCart prop's call here
//       dispatch(sendProductToCartAction(this.state))
//     }
//   }
// }


export default connect(mapStateToProps,mapDispatchToProps)(NgInxPlusComponent)


