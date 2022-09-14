import React from 'react';
import Banner from './components/Banner';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact'
import Mission from './components/Mission';
import Login from './components/Login';
import Signup from  './components/Signup';

import { useState } from 'react';

// import Home from './components/Home';

import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App(props) {


const [loginOpen, setLoginOpen] = useState(false)

const [signupOpen, setSignupOpen] = useState(false)

const toggleLoginPopup = () => {

  setLoginOpen(!loginOpen)
}

const toggleSignupPopup = () => {

  setSignupOpen(!signupOpen)
}
  return (
  
    <>
 
<div className="container-fluid app-container " >
<div className="container px-4 home-container ">
<div className="row app-row d-flex flex-column justify-content-center align-items-center ">
<div className="col-md-10 app-col">
{props.loginOpen}
<Router>

            
              <Banner key={Banner} loginPopup={ <button type='button' className='butn me-sm-4 me-3 active' onClick={toggleLoginPopup}>Sign In</button>} 
                 signupPopup={ <button type='button' className='butn' onClick={toggleSignupPopup}>Sign Up</button>  }
              />

              <Menu/>

           {!loginOpen && <Login key={Login} loginTrigger={toggleLoginPopup} />}
           {!signupOpen && <Signup key={Signup} signupTrigger={toggleSignupPopup} />}

    <Routes>



        <Route path="/" element={<About/>} />

        <Route path="/contact" element={<Contact/>} />
        <Route path="/mission" element={<Mission/>} />
     
    
    </Routes>
</Router>
</div>
</div>
</div>

</div>



    </>
  )
}

export default App;
