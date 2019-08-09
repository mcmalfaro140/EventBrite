import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../src/Components/Home'
import Checkout from '../src/Components/Checkout'

class Routes extends React.Component {
    state = {  }
    render() { 
        return ( 
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/checkout" component={Checkout} />
        </Router> 
        );
    }
}
 
export default Routes;