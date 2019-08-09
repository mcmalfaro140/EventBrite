import React from 'react'
class brokenLink extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img style={{width: '60%'}} src={require('../img/dead_link.jpg')}></img>
                
            </div>
         );
    }
}
 
export default brokenLink;