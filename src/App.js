import React from 'react';
import Banner from './components/Banner';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact'
import Mission from './components/Mission';
// import Home from './components/Home';

import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
  
    <>
 
<div className="container-fluid app-container " >


<div className="container px-4 home-container ">

<div className="row app-row d-flex flex-column justify-content-center align-items-center ">
<div className="col-md-10 app-col">

<Router>

            
              <Banner/>
              <Menu/>

    <Routes>



        <Route path="/about" element={<About/>} />

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
