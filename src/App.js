import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./action";
import { Provider } from "react-redux";
import {   createStore } from "redux";
import AddAllReducers from "./reducers";
import { BrowserRouter  } from "react-router-dom";
import NavBar from "./NavBar";
const mapStateToProps = (state) => ({
  sendProductToCart: state.sendProductToCart,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});
const store = createStore(
  AddAllReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Provider store={store}>
 <BrowserRouter>
 

 
    <div>

      <Router>
        {/* <NavBar/> */}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            exact
            path="/product-detail"
            component={VRanDetailPageComponent}
          ></Route>
          <Route exact path="/checkout" component={CheckoutStep}></Route>
          <Route
            exact
            path="/office365EnterpriceDetails"
            component={Office365CartDetailComponent}
          ></Route>
          <Route
            exact
            path="/cartDetail"
            component={CartDetailsComponent}
          ></Route>
          <Route exact path="/quoteDetail" component={QuoteComponent}></Route>
          <Route exact path="/new" component={Office365DetailComponent}></Route>
          <Route
            exact
            path="/myaccountdetailPage"
            component={MyAccountDetailPageComponent}
          ></Route>
          <Route
            exact
            path="/submitquote"
            component={SubmitQuoteComponent}
          ></Route>
          <Route exact path="/emptycart" component={EmptyCartComponent}></Route>
          <Route
            exact
            path="/privatecloudservicedetail"
            component={PrivateCloudServiceComponent}
          ></Route>
          <Route
            exact
            path="/brandetail"
            component={BrandDetailComponent}
          ></Route>
          <Route
            exact
            path="/catlogDetails"
            component={CatlogDetailsComponent}
          ></Route>
          <Route exact path="/login" component={LoginComponent}></Route>
          <Route
            exact
            path="/nginxplusdetails"
            component={NgInxPlusComponent}
          ></Route>
          <Route
            exact
            path="/cartnginxdetail"
            component={CartnginxComponent}
          ></Route>
          <Route
            exact
            path="/mongocartdetail"
            component={CartMongodbComponent}
          ></Route>
          <Route
            exact
            path="/emptyCartDetailComponent"
            component={EmptyCartDetailComponent}
          ></Route>
          <Route
            exact
            path="/nginxCartdetailComponent"
            component={NginxCartdetailComponent}
          ></Route>
          <Route
            exact
            path="/office365_details"
            component={Office365DetailComponent}
          ></Route>
          <Route
            exact
            path="/office365_cartdetails"
            component={Office365CartDetailComponent}
          ></Route>
        </Switch>
      </Router>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
