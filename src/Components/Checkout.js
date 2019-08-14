import React from 'react'
import '../Style/checkout.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

//option for the dropdown box
const cards = ['Visa', 'MasterCard', 'American Express', 'Discovery'];


//no validation has been added to the values yet.
class Checkout extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="checkContainer">
                <h1 >{this.props.location.state.title}</h1>
                <h1 >Your total is: <span className="total">US$ {this.props.location.state.total}</span></h1>

                <div>
                    <h2 className="header">Your Info:</h2>
                    <div className="box">
                        <h3 className="label">First Name:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="label">Last Name:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="label">Email:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    
                </div>
                <div >
                    <h2 className="header">Payment Info:</h2>
                    <div className="box">
                        <h3 className="label">Card Number:</h3>
                        <input className="cardInput" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="label">Card Type:</h3>
                        <Dropdown className="cardDrop"  options={cards} onChange={this._onSelect} placeholder="Select card" />
                    </div>
                    <div className="box">
                        <h3 className="label">Date:</h3>
                        <input className="shortInput" type="text" placeholder="MMYYY"></input>
                    </div>
                    <div className="box">
                        <h3 className="label">CVV:</h3>
                        <input className="shortInput" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="label">Zip code:</h3>
                        <input className="shortInput" type="text"></input>
                    </div>
                    
                </div>
                <Link to="/" className="btnCheckout">Go Back Home</Link>
                <Link to="/confirmation" className="btnCheckout">Pay US$ {this.props.location.state.total}</Link>
            </div>
         );
    }
}
 
export default Checkout;