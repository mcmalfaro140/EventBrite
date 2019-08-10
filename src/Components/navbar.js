import React from 'react';
import '../Style/navbar.css';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() { 
        return ( 
            <div className="navContainer" id="navbar">
                <ul>
                    <li className="navTitle"><a style={{color: '#f6682f'}}>EventBrite</a></li>
                    <li><Link to="/login">Sign in</Link></li>
                    <li><i class="fas fa-user-circle"></i></li>
                    <li><Link to="*">Create Event</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;