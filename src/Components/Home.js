import React from 'react';
import '../Style/home.css';
import { Suspense, lazy } from 'react';
const EventList = lazy(() => import('../Components/EventList'));
class Home extends React.Component {
    state = { 
        myEvents: []
    }
    //call event function before mounting components
    componentDidMount() {
        this.getEvents();
        
    }
    // gets data from the api and populate myEvents
    getEvents = () => {
        fetch('https://backendevent.herokuapp.com/api/getevents')
        .then(response => response.json())
        .then(response => this.setState({myEvents: response.body})) //setting state values to data from api
        .catch(err => console.log(err))
    }

    //render component
    render() { 
        return ( 
            <div className="homeContainer">
                <div>
                    <img src={require('../img/cover.jpg')}></img>
                </div>
                <div className="slogan">Live your best life</div>
                <Suspense fallback={<div>Loading...</div>}>
                    <EventList myEvents={this.state.myEvents}></EventList>
                </Suspense>
                
                <div className="footer">
                    <div className="question">Want to create an <span style={{color:'yellow'}}>event</span>?</div>
                    <div >Learn more <i class="fas fa-chevron-circle-right"></i></div>
                </div>
            </div>
            
         );
    }
}
 
export default Home;