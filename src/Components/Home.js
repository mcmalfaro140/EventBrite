import React from 'react';
import '../Style/home.css';
import EventList from '../Components/EventList'


class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="homeContainer">
                <div>
                    <img src={require('../img/cover music.jpg')}></img>
                </div>
                <div className="slogan">Live your best life</div>
                <EventList></EventList>
                <div className="footer">
                    <div className="question">Want to create an <span style={{color:'yellow'}}>event</span>?</div>
                    <div >Learn more <i class="fas fa-chevron-circle-right"></i></div>
                </div>
            </div>
            
         );
    }
}
 
export default Home;