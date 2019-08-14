import React from 'react'

//simple 404 component used by the router for those pages that are not found
class brokenLink extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img style={{width: '90%', marginTop: '5%'}} src={require('../img/dead_link.jpg')}></img>
                
            </div>
         );
    }
}
 
export default brokenLink;