import React from 'react';
import '../Style/navbar.css';
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.isToggle = false;
        this.menuClick = this.menuClick.bind(this);
    }
    menuClick () {
        const node = this.myRef.current;
                
        if(this.isToggle === false) {
           node.style.height= "170px";
           this.isToggle = true;
        }else{
            node.style.height= "50px";
            this.isToggle = false;
        }

        // console.log(node)
    }
    render() { 
        return ( 
            <div className="navContainer" id="navbar" ref={this.myRef}>
                <ul>
                    <li className="navTitle"><a style={{color: '#f6682f'}}>EventBrite</a></li>
                    <li className="navlink"><Link to="/login">Sign in</Link></li>
                    <li className="logIcon"><i class="fas fa-user-circle"></i></li>
                    <li className="navlink"><Link to="*">Create Event</Link></li>
                    <li className="navlink"><Link to="/">Home</Link></li>
                    <li className="menuIcon"><i class="fa fa-bars" onClick={this.menuClick}></i></li>
                </ul>
                <div className="container2">
                    <ul>
                        <li ><Link to="/" className="phoneView">Home</Link></li>
                        <li ><Link to="*" className="phoneView">Create Event</Link></li>
                        <li ><Link to="/login" className="phoneView">Sign in</Link></li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Navbar;