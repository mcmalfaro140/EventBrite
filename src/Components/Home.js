import React from 'react';
import '../Style/home.css';
import Navbar from '../Components/navbar'
import EventList from '../Components/EventList'
import { yellow } from 'ansi-colors';

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="homeContainer">
                <Navbar></Navbar>
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