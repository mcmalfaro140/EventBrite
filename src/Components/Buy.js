import React from 'react';
import '../Style/buy.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

//options for the dropdown menu
const options = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGeneral: 0, //price of general
            selectedVip: 0, //price of vip
            price: 0 // total price
        }
        this.onSelectGeneral = this.onSelectGeneral.bind(this);
        this.onSelectVip = this.onSelectVip.bind(this);
      }

    
      //function for when the user selects a nnumber from the dropdown menu
      //general price
    onSelectGeneral (option) {
        //the temp value is use to store the total price
        //it's calculated by multiplying the total number of tickets times the price
        // and then adds both results
        let temp = (parseInt(option.label) * parseInt(this.props.location.state.event.general)) + (parseInt(this.state.selectedVip) * parseInt(this.props.location.state.event.vip) );
        //set the temp variable to the total price and the label to the dropdown
        this.setState({selectedGeneral: option.label, price: temp});
        
    }
      //function for when the user selects a nnumber from the dropdown menu
      //Vip price
    onSelectVip (option) {
        let temp = (parseInt(option.label) * parseInt(this.props.location.state.event.vip)) + (parseInt(this.state.selectedGeneral) * parseInt(this.props.location.state.event.general) );
        this.setState({selectedVip: option.label, price: temp})
    }

    
    render() { 
        //If the event is free, this is what the app is gonna render
        if(this.props.location.state.event.isfree === true) {
            return (  
                <div>
                    <div className="buyContainer">
                        <h1>{this.props.location.state.event.title}</h1>
                        <div className="coverImage"><img src={this.props.location.state.event.image}></img></div>
                        <h2>This event is free. Here is the location and time.</h2>
                        <h2>{this.props.location.state.event.Location}</h2>
                        <h2>{this.props.location.state.event.Date}</h2>
                        <div className="footText">We hope to see you there.</div>
                        
                        <div >
                            <Link to="/" className="btn">Go Back</Link>
                            
                        </div>
                    </div>
                </div>
            );

        //Otherwise; that means that there is a price, so the app is going to render this
        }else{
            return (  
                <div>
                    <div className="buyContainer">
                        <h1>{this.props.location.state.event.title}</h1>
                        <div className="coverImage"><img src={this.props.location.state.event.image}></img></div>
                        <div className="options">
                            <div className="price">
                                <h3>General Admition:</h3>
                                <span>US$ {this.props.location.state.event.general} </span>
                                <Dropdown className="drop" options={options} onChange={this.onSelectGeneral} placeholder={this.state.selectedGeneral} />
                            </div>
                            <div className="price">
                                <h3>VIP:</h3>
                                <span>US$ {this.props.location.state.event.vip}</span>
                                <Dropdown className="drop" options={options} onChange={this.onSelectVip} placeholder={this.state.selectedVip} />
                            </div>
                        </div>
                        <div>
                                <h2>Total: US$ {this.state.price}</h2>
                        </div>
                        
                        <div >
                            <Link to="/" className="btn">Go Back</Link>
                            <Link to={{ pathname:"/checkout", state: {total: this.state.price, title: this.props.location.state.event.title}}} className="btn">Check out</Link>
                        </div>
                    </div>
                    
                </div>
            );
        }
        
    }
}
 
export default Buy;