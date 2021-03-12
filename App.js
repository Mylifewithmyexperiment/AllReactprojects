import logo from './logo.svg';
import './App.css';
import LifeCycle from './training/LifeCycle';
import PropsDemo from './training/PropsDemo';
import HomePage from './training/HomePage';
import StateDemo from './training/StateDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <LifeCycle></LifeCycle>
      <PropsDemo value="Welcome to props demo example."></PropsDemo>
      <HomePage></HomePage>
      <StateDemo></StateDemo>
      </header>
    </div>
  );
}

export default App;
