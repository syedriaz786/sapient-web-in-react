import React from 'react'
import './Login.css'
import App from '../App'




function Login(props) {
  return   (props.loginTrigger) ? (
    <>
<div className="container-fluid login-container">
    <div className="row login-row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-4 login-col rounded mt-5 ">
        <div className='login-header d-flex justify-content-between '>
            <span className='text-start text-white fs-3 pt-3'> Login:</span>  <i className="bi bi-x-lg text-dark rounded border-0 fs-4 mt-4 me-1 px-1" onClick={props.loginTrigger} ></i>
        </div>
            <hr className='text-white' />

            <form action="">
            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Username:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Username"/>


            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Password:</label>
            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Enter Password"/>
            <button type='button' className=' my-3 text-white py-2 px-3 rounded border-0  '>Login</button>
            </form>
        </div>
    </div>
</div> 
    </> 
  
  ) : ""
}

export default Login