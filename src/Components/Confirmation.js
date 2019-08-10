import React from 'react'
import '../Style/confirmation.css'
import { Link } from 'react-router-dom'

//Simple confirmation page
//Ramdon number generator still needs to be add.
//As well as a function to check that the confirmation number does not match to another purchase.
class Confirmation extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="confContainer">
                    
                    <h1>Thank you for your payment.</h1>
                    <h2>Your confirmation number is:</h2>
                    <h1 style={{color: 'red'}}>7S8D21G1V22G</h1>
                    <h2>Have fun!!!</h2>
                    <Link to="/"><button className='btn'>Go Back Home</button></Link>

                </div>
            </div>
         );
    }
}
 
export default Confirmation;