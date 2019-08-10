import React from 'react';
import './App.css';
import Home from '../src/Components/Home'
import Buy from '../src/Components/Buy'
import Confirmation from '../src/Components/Confirmation'
import Navbar from '../src/Components/navbar'
import Checkout from '../src/Components/Checkout'
import broken from '../src/Components/404.js'
import Login from '../src/Components/Login'
import LogConfirmation from '../src/Components/loginConfirmation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [
      {
        user: 'test',
        pass: 'test',
      },
      {
        user: 'susan',
        pass: 'abcd',
      }],
    isloggedin: false,

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/buy" exact component={Buy}></Route>
            <Route path="/confirmation" exact component={Confirmation}></Route>
            <Route path="/checkout" exact component={Checkout}></Route>
            <Route path="/login" component={props => <Login {...props} data={this.state} />} exact ></Route>
            <Route path="/logConfirmation" exact component={LogConfirmation}></Route>
            <Route path='*' component={broken}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
