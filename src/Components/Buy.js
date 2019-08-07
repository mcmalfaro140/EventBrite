import React from 'react';
import '../Style/buy.css'
import NavBar from '../Components/navbar'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

class Buy extends React.Component {
    state = {
        
    }
    render() { 
        return (  
            <div>
                <NavBar></NavBar>
                <div className="buyContainer">
                    <h1>Taco Event</h1>
                    <div className="options">
                        <div className="price">
                            <h3>General Admition:</h3>
                            <span>US$ 20 x </span>
                            <Dropdown className="drop" options={options} onChange={this._onSelect} placeholder="0" />
                        </div>
                        <div className="price">
                            <h3>VIP:</h3>
                            <span>US$ 26 x </span>
                            <Dropdown className="drop" options={options} onChange={this._onSelect} placeholder="0" />
                        </div>
                    </div>
                    <div>
                            <h2>Total: US$ 50</h2>
                    </div>
                    <button className="btn">Go Back</button>
                    <button className="btn">Check out</button>
                </div>
            </div>
        );
    }
}
 
export default Buy;