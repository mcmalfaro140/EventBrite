import React from 'react';
import '../Style/eventlist.css'
import Event from '../Components/Event'

class EventList extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div className="eventListContainer">
            <Event></Event>
            <Event></Event>
            <Event></Event>
            <Event></Event>
            <Event></Event>
        </div> );
    }
}
 
export default EventList;