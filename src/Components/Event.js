import React from 'react';
import '../Style/event.css'

class Event extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="eventContainer">
                <div className="imgDiv">
                    <img src={require('../img/tacos.jpg')}/>
                    </div>
                <div className="infoDiv">
                    <div className="date">AUG 10</div>
                    <div className="event">
                        <h3>LA Taco & Beers Festival '19</h3>
                        <p>Sat, Aug 10, 3:00pm</p>
                        <p>LA Center Studios, Los Angeles, CA</p>
                        <p>Starts at $39.00</p>
                    </div>
                </div>
                <button className="getButton">Get Tickets</button>
            </div> 
        );
    }
}
 
export default Event;