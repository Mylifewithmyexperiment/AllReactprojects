import React from 'react';
import Logo from "./Component/Logo";
import HomePage from "./Component/HomePage";
import SearchBox from "./Component/SearchBox"
import './App.css';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Aadapter from './Component/Aadapter';
import HeaderLinks from './Component/HeaderLInks';

function App() {
  return (
    <div className="App">
      
      <Router >
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
             <Route exact path="/logo" component={Logo}></Route>
              <Route exact path="/searchbox" component={SearchBox}></Route>
              <Route exact path ="/adapter" component={Aadapter}></Route>
              <Route exact path ="/headerlink" component ={HeaderLinks}></Route>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
