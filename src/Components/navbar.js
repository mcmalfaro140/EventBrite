import React from 'react';
import '../Style/navbar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Navbar extends React.Component {
    render() { 
        return ( 
            <div className="navContainer" id="navbar">
                <Router>
                <ul>
                    <li className="navTitle"><a style={{color: 'orangered'}}>EventBrite</a></li>
                    <li><Link to="/checkout">Sing in</Link></li>
                    <li><i class="fas fa-user-circle"></i></li>
                </ul>
                </Router>
            </div>
         );
    }
}
 
export default Navbar;