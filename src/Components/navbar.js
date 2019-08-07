import React from 'react';
import '../Style/navbar.css';


class Navbar extends React.Component {
    render() { 
        return ( 
            <div className="navContainer" id="navbar">
                <ul>
                    <li className="navTitle"><a style={{color: 'orangered'}}>EventBrite</a></li>
                    <li><a href="#">Sing in</a></li>
                    <li><i class="fas fa-user-circle"></i></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;