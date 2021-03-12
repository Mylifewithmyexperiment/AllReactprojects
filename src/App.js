import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./action/index";
import HomePage from "./HomePage";
import GetReduxData from "./GetReduxData";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/get" component={GetReduxData} />
        </Switch>
      </Router>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   marketPlaceStandardData: state.marketPlaceStandardData,
// });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});
export default connect(null, mapDispatchToProps)(App);