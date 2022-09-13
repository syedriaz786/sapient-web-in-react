import React from 'react';

import './Banner.css';



function banner() {



  return (
    <>

    <div className='row banner-row'>
    <div className="col banner-col d-flex flex-column justify-content-center align-items-center py-3">
    <img src={ require('./home_logo.png')}  className="img-fluid"   alt=''  />
    <h1 className='py-3'>Sapient</h1>
    <p className='text-center'>Globally scoped, locally focused. Because <br /> compassion is in our DNA.</p>
    
    <div className="buttons my-3" id='buttons'>
    <button type='button' className='butn me-sm-4 me-3 active'>Login</button>
    <button type='button' className='butn'>Sign Up</button>
    </div>
    </div>

</div>


    </>
  )
}

export default banner