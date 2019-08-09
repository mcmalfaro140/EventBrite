import React from 'react';
import './App.css';
import Home from '../src/Components/Home'
import Buy from '../src/Components/Buy'
import Confirmation from '../src/Components/Confirmation'
import Navbar from '../src/Components/navbar'
import Checkout from '../src/Components/Checkout'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Home></Home> 
      {/*<Buy></Buy>
      <Confirmation></Confirmation> */}
      {/* <Checkout></Checkout> */}
    </div>
  );
}

export default App;
