import React from 'react';
import './App.css';
import Home from '../src/Components/Home'
import Buy from '../src/Components/Buy'
import Confirmation from '../src/Components/Confirmation'
import Navbar from '../src/Components/navbar'
import Checkout from '../src/Components/Checkout'
import broken from '../src/Components/404.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/buy" exact component={Buy}></Route>
          <Route path="/confirmation" exact component={Confirmation}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
          <Route path='*' component={broken}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
