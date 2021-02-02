import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./action";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const mapStateToProps = (state) => ({
HomePageStore: state.sendHomeData,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default connect (mapStateToProps,mapDispatchToProps)(App)
