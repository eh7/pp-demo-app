import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/navbar/Home";
import Stake from "./pages/navbar/Stake";
import Token from "./pages/navbar/Token";

import {
  contractStakingAddress,
  contractStakingAbi,
  contractTokenAddress,
  contractTokenAbi,
} from './conf'

console.log(contractStakingAddress);
console.log(contractStakingAbi);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stake' element={<Stake />} />
          <Route path='/token' element={<Token />} />
        </Routes>
      </Router>
    </div>
  );
}

/*
function App() {
  return (
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
      </header>
    </div>
  );
}
*/

export default App;
