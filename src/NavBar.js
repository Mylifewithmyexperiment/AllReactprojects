import React from 'react';
import {Link} from 'react-router-dom';
import HomePage from "./HomePage";
import CheckoutStep from "./CheckoutSteps";
import VRanDetailPageComponent from "./VRanDetailPageComponent";
import Office365CartDetailComponent from "./Office365CartDetailComponent";
import CartDetailsComponent from "./CartDetailsComponent";
import QuoteComponent from "./QuoteComponent";
import Office365DetailComponent from "./Office365DetailComponent";
import MyAccountDetailPageComponent from "./MyAccounDetailPageComponent";
import SubmitQuoteComponent from "./SubmitQuoteComponent";
import EmptyCartComponent from "./EmptyCartComponent";
import Office365ImageComponent from "./Office365ImageComponent";
import PrivateCloudServiceComponent from "./PrivateCloudServiceComponent";
import BrandDetailComponent from "./BrandDetailComponent";
import CatlogDetailsComponent from "./CatlogDetailsComponent";
import LoginComponent from "./LoginComponent";
import NgInxPlusComponent from "./NgInxPlusComponent";
import CartnginxComponent from "./CartnginxComponent";
import CartMongodbComponent from "./CartMongodbComponent";
import EmptyCartDetailComponent from "./EmptyCartDetailComponent";
import NginxCartdetailComponent from "./NginxCartdetailComponent";

const NavBar =() =>( 
      <nav>
    <ul>
      <li>
              <Link to='/' component={HomePage}></Link> 
              <Link to='/product-detail' component={VRanDetailPageComponent}></Link> 
              <Link to='/checkout' component={CheckoutStep}></Link> 
              <Link to='/office365EnterpriceDetails' component={Office365CartDetailComponent}></Link> 
              <Link to='/cartDetail' component={CartDetailsComponent}></Link> 
              <Link to='/quoteDetail' component={QuoteComponent}></Link> 
              <Link to='/new' component={Office365DetailComponent}></Link> 
              <Link to='/myaccountdetailPage' component={MyAccountDetailPageComponent}></Link> 
              <Link to='/submitquote' component={SubmitQuoteComponent}></Link> 
              <Link to='/emptycart' component={EmptyCartComponent}></Link> 
              <Link to='/privatecloudservicedetail' component={PrivateCloudServiceComponent}></Link> 
              <Link to='/brandetail' component={BrandDetailComponent}></Link> 
              <Link to='/catlogDetails' component={CatlogDetailsComponent}></Link> 
              <Link to='/login' component={LoginComponent}></Link> 
              <Link to='/nginxplusdetails' component={NgInxPlusComponent}></Link> 
              <Link to='/cartnginxdetail' component={CartnginxComponent}></Link> 
              <Link to='/mongocartdetail' component={CartMongodbComponent}></Link>
              <Link to='/emptyCartDetailComponent' component={EmptyCartDetailComponent}></Link> 
              <Link to='/nginxCartdetailComponent' component={NginxCartdetailComponent}></Link>
              <Link to='/office365_details' component={Office365DetailComponent}></Link>
              <Link to='/office365_cartdetails' component={Office365CartDetailComponent}></Link>
      </li>
  </ul>
</nav>
    

);

export default NavBar;