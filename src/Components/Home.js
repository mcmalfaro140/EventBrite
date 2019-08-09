import React from 'react';
import '../Style/home.css';
import EventList from '../Components/EventList'
import { Link } from "react-router-dom";


class Home extends React.Component {
    state = { 
        myEvents: [
            {
                id: 1,
                title: `All the 90's Art Exhibition`,
                Date: 'Sat, Aug 24, 7:00pm',
                Location: 'Phylm Studios, Los Angeles, CA',
                Price: 'Free',
                image: require('../img/90s.jpg'),
                isfree: true,
            },
            {
                id: 2,
                title: `Boyz N The Hood`,
                Date: 'Sat, Aug 10, 8:30pm',
                Location: 'Cinespia At Hollywood Forever Cemetery',
                Price: 'Starts at $12',
                image: require('../img/boyz.png'),
                isfree: false,
                general: 12,
                vip: 20

            },
            {
                id: 3,
                title: `17th Annual Gardena Jazz Festival`,
                Date: 'Sun, Aug 25, 10:00pm',
                Location: 'Rowley Memorial Park, Gardena, CA',
                Price: 'Starts at $30.00',
                image: require('../img/jazz.jpg'),
                isfree: false,
                general: 30,
                vip: 85
            },
            {
                id: 4,
                title: `LA Taco & Beer Festival'19`,
                Date: 'Sat, Aug 10, 3:00pm',
                Location: 'LA Center Studios, Los Angeles, CA',
                Price: 'Starts at $35.00',
                image: require('../img/tacos.jpg'),
                isfree: false,
                general: 35,
                vip: 89
            },
            {
                id: 5,
                title: `REO Speedwagon and Sir`,
                Date: 'Sat, Aug 10, 7:00pm',
                Location: 'Pershing, Los Angeles, CA',
                Price: 'Free',
                image: require('../img/reo.jpg'),
                isfree: true
            },
            {
                id: 6,
                title: `RIP Nipsey Hussle: Crenshaw & Slauson The Show`,
                Date: 'Sat, Aug 11, 12:00pm',
                Location: 'The Marathon Clothing, Los Angeles, CA',
                Price: 'Free',
                image: require('../img/rip.jpg'),
                isfree: true
            },
            {
                id: 7,
                title: `Labryrinth Masquerade Ball 2019`,
                Date: 'Fri, Aug 16, 7:00pm',
                Location: 'Millenium Biltmore, Los Angeles, CA',
                Price: 'Starts at $ 35.00',
                image: require('../img/lab.jpg'),
                isfree: false,
                general: 35,
                vip: 330
            }
        ]
     }
    render() { 
        return ( 
            <div className="homeContainer">
                <div>
                    <img src={require('../img/cover.jpg')}></img>
                </div>
                <div className="slogan">Live your best life</div>
                <EventList myEvents={this.state.myEvents}></EventList>
                <div className="footer">
                    <div className="question">Want to create an <span style={{color:'yellow'}}>event</span>?</div>
                    <div >Learn more <i class="fas fa-chevron-circle-right"></i></div>
                </div>
            </div>
            
         );
    }
}
 
export default Home;