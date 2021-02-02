import React from 'react'
import './App.css';

class MenuComponent extends React.Component {

    render() {
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-black d-none d-lg-block" id="subheader">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="allcategories" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
                <ul className="dropdown-menu" aria-labelledby="allcategories">
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Hardware</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Mobile Computing</a></li>
                      <li><a className="dropdown-item" href="#">Communication</a></li>
                      <li><a className="dropdown-item" href="#">IT Infrastructure</a></li>
                      <li><a className="dropdown-item" href="#">Computing</a></li>
                      <li><a className="dropdown-item" href="#">Peripherals</a></li>
                      <li><a className="dropdown-item" href="#">Printers</a></li>
                      <li><a className="dropdown-item" href="#">Components</a></li>
                      <li><a className="dropdown-item" href="#">Connectivity</a></li>
                      <li><a className="dropdown-item" href="#">Office Equipment</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Software</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Storage, Backup &amp; Recovery</a></li>
                      <li><a className="dropdown-item" href="#">Security Software</a></li>
                      <li><a className="dropdown-item" href="#">Development Software</a></li>
                      <li><a className="dropdown-item" href="#">Collaboration Software</a></li>
                      <li><a className="dropdown-item" href="#">Office Applications</a></li>
                      <li><a className="dropdown-item" href="#">Infrastructure Software</a></li>
                      <li><a className="dropdown-item" href="#">Virtualisation</a></li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#">Cloud Services</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Microsoft Services</a></li>
                      <li><a className="dropdown-item" href="#">Amazon Web Services</a></li>
                      <li><a className="dropdown-item" href="#">Cisco Services</a></li>
                      <li><a className="dropdown-item" href="/privatecloudservicedetail">Private Cloud Services</a></li>
                      <li><a className="dropdown-item" href="#">Google G Suite</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="toprated" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Top rated</a>
                <ul className="dropdown-menu" aria-labelledby="toprated">
                  <li><a className="dropdown-item" href="#">Amazon Web Services</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft Services</a></li>
                  <li><a className="dropdown-item" href="#">Google G Suite</a></li>
                  <li><a className="dropdown-item" href="#">Collaboration Software</a></li>
                  <li><a className="dropdown-item" href="#">Storage, Backup &amp; Recovery</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Computing</a></li>
                  <li><a className="dropdown-item" href="#">Webex</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft 365</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="bestselling" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Best selling</a>
                <ul className="dropdown-menu" aria-labelledby="bestselling">
                  <li><a className="dropdown-item" href="#">Office 365 Business</a></li>
                  <li><a className="dropdown-item" href="#">Teams</a></li>
                  <li><a className="dropdown-item" href="#">Amazon Web Services</a></li>
                  <li><a className="dropdown-item" href="#">Private Cloud Services</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="business" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Business</a>
                <ul className="dropdown-menu" aria-labelledby="business">
                  <li><a className="dropdown-item" href="#">Dynamics 365</a></li>
                  <li><a className="dropdown-item" href="#">Power BI</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft PowerApps</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft Flow</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="collaboration" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Collaboration</a>
                <ul className="dropdown-menu" aria-labelledby="collaboration">
                  <li><a className="dropdown-item" href="#">Exchange Online</a></li>
                  <li><a className="dropdown-item" href="#">OneDrive for Business</a></li>
                  <li><a className="dropdown-item" href="#">SharePoint Online</a></li>
                  <li><a className="dropdown-item" href="#">Teams</a></li>
                  <li><a className="dropdown-item" href="#">Webex</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="Infrastructure" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Infrastructure</a>
                <ul className="dropdown-menu" aria-labelledby="Infrastructure">
                  <li><a className="dropdown-item" href="#">Azure</a></li>
                  <li><a className="dropdown-item" href="#">Azure Active Directory</a></li>
                  <li><a className="dropdown-item" href="#">Azure Information Protection</a></li>
                  <li><a className="dropdown-item" href="#">Backup as a Service</a></li>
                  <li><a className="dropdown-item" href="#">Amazon Web Services</a></li>
                  <li><a className="dropdown-item" href="#">Virtual Datacenter</a></li>
                  <li><a className="dropdown-item" href="#">Windows Server</a></li>
                  <li><a className="dropdown-item" href="#">Windows 7</a></li>
                  <li><a className="dropdown-item" href="#">SQL Server</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="Productivity" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productivity</a>
                <ul className="dropdown-menu" aria-labelledby="Productivity">
                  <li><a className="dropdown-item" href="#">Office 365</a></li>
                  <li><a className="dropdown-item" href="#">Office 365 Business</a></li>
                  <li><a className="dropdown-item" href="/office365EnterpriceDetails">Office 365 Enterprise</a></li>
                  <li><a className="dropdown-item" href="#">Office 365 Firstline</a></li>
                  <li><a className="dropdown-item" href="#">Office 365 eDiscovery</a></li>
                  <li><a className="dropdown-item" href="#">Project Online</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft 365</a></li>
                  <li><a className="dropdown-item" href="#">Visio Online</a></li>
                  <li><a className="dropdown-item" href="#">Windows 10</a></li>
                  <li><a className="dropdown-item" href="#">Microsoft Cloud App Security</a></li>
                  <li><a className="dropdown-item" href="#">Office 365 Support</a></li>
                  <li><a className="dropdown-item" href="#">Skykick</a></li>
                  <li><a className="dropdown-item" href="#">Smart Workplace</a></li>
                  <li><a className="dropdown-item" href="#">Google Gsuite</a></li>
                  <li><a className="dropdown-item" href="#">Pickit</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="connectivity" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Connectivity As Service</a>
                <ul className="dropdown-menu" aria-labelledby="connectivity">
                  <li><a className="dropdown-item" href="#">vRAN</a></li>
                  <li><a className="dropdown-item" href="#">SD-WAN</a></li>
                  <li><a className="dropdown-item" href="#">IoT</a></li>
                  <li><a className="dropdown-item" href="#">Cloud Connect</a></li>
                  <li><a className="dropdown-item" href="#">Ethernet VPN</a></li>
                  <li><a className="dropdown-item" href="#">Managed WiFi</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Become Partner</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}
export default MenuComponent;