import React from 'react';
import '../Style/event.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

class Event extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="eventContainer">
                <div className="imgDiv">
                    <img src={this.props.myevent.image}/>
                </div>
                <div className="infoDiv">
                    <div className="date">AUG 10</div>
                    <div className="event">
                        <h3>{this.props.myevent.title}</h3>
                        <p>{this.props.myevent.Date}</p>
                        <p>{this.props.myevent.Location}</p>
                        <p>{this.props.myevent.Price}</p>
                    </div>
                </div>
                <Link to={{ pathname:"/buy", state: {event: this.props.myevent}}}><button className="getButton">Get Tickets</button></Link>
            </div> 
        );
    }
}

Event.propTypes = {
    myevent: PropTypes.object.isRequired
}
 
export default Event;