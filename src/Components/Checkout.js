import React from 'react'
import '../Style/checkout.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

const cards = ['Visa', 'MasterCard', 'American Express', 'Discovery'];

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
                        <h3 className="title">First Name:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="title">Last Name:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="title">Email:</h3>
                        <input className="input" type="text"></input>
                    </div>
                    
                </div>
                <div >
                    <h2 className="header">Payment Info:</h2>
                    <div className="box">
                        <h3 className="title">Card Number:</h3>
                        <input className="cardInput" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="title">Card Type:</h3>
                        <Dropdown className="cardDrop"  options={cards} onChange={this._onSelect} placeholder="Select card" />
                    </div>
                    <div className="box">
                        <h3 className="title">Date:</h3>
                        <input className="shortInput" type="text" placeholder="MMYYY"></input>
                    </div>
                    <div className="box">
                        <h3 className="title">CVV:</h3>
                        <input className="shortInput" type="text"></input>
                    </div>
                    <div className="box">
                        <h3 className="title">Zip code:</h3>
                        <input className="shortInput" type="text"></input>
                    </div>
                    
                </div>
                <Link to="/buy" className="btn">Go Back</Link>
                <Link to="/confirmation" className="btn">Pay US$ {this.props.location.state.total}</Link>
            </div>
         );
    }
}
 
export default Checkout;