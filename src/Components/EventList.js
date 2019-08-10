import React from 'react';
import '../Style/eventlist.css'
import Event from '../Components/Event'
import PropTypes from 'prop-types'


// this componet will loop thru myEvnts and will create as much Event components as needed
class EventList extends React.Component {
    
    render() { 
        return ( 
            <div className="eventListContainer">
                {this.props.myEvents.map((myevent) => (
                    <Event key={myevent.id} myevent={myevent} ></Event>
                ))}
                
            </div> 
        );
    }
}

//checks for props 
EventList.propTypes = {
    myEvents: PropTypes.array.isRequired
}
 
export default EventList;