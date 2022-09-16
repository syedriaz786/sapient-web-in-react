import React from 'react';
import './Banner.css';
// import Login from './Login';
// import { useState } from 'react';

// import { Link } from 'react-router-dom';


function banner(props) {

  // const [isOpen, setIsOpen] = useState(false);



  return (
    <>

      <div className='row banner-row'>
        <div className="col banner-col d-flex flex-column justify-content-center align-items-center py-3">
          <img src={require('./home_logo.png')} className="img-fluid" alt='' />
          <h1 className='py-3'>Sapient</h1>
          <p className='text-center'>Globally scoped, locally focused. Because <br /> compassion is in our DNA.</p>

          <div className="buttons my-3" id='buttons'>
            {props.loginPopup}
            {/* <button type='button' className='butn me-sm-4 me-3 active'  
>Sign In</button> */}
            {props.signupPopup}
            {/* <button type='button' className='butn'>Sign Up</button>
    {props.children} */}
          </div>
        </div>

      </div>

      {/* <Login props /> */}

    </>
  )
}

export default banner