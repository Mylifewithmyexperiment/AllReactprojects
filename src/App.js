
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Component/HomePage';
import DashboardPage from './Component/DashboardPage';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path ='/dashboard' component ={DashboardPage} ></Route>
      <Route exact path = '/login' component={LoginPage}></Route>
      </Switch>      
      </Router>
    </div>
  );
}

export default App;
//new udday