import React from 'react';
import '../Style/buy.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Link } from 'react-router-dom'

const options = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGeneral: 0,
            selectedVip: 0,
            price: 0
        }
        this.onSelectGeneral = this.onSelectGeneral.bind(this);
        this.onSelectVip = this.onSelectVip.bind(this);
      }

    
    onSelectGeneral (option) {
        let temp = (parseInt(option.label) * parseInt(this.props.location.state.event.general)) + (parseInt(this.state.selectedVip) * parseInt(this.props.location.state.event.vip) );
        this.setState({selectedGeneral: option.label, price: temp});
        
    }

    onSelectVip (option) {
        let temp = (parseInt(option.label) * parseInt(this.props.location.state.event.vip)) + (parseInt(this.state.selectedGeneral) * parseInt(this.props.location.state.event.general) );
        this.setState({selectedVip: option.label, price: temp})
    }

    
    render() { 
        
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