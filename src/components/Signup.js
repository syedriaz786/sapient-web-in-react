import React from 'react'
import './Signup.css'





function Login(props) {
  return (props.signupTrigger) ? (
    <>
<div className="container-fluid signup-container">
    <div className="row signup-row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-4 signup-col rounded mt-5 ">
        <div className='login-header d-flex justify-content-between '>
            <span className='text-start text-white fs-3 pt-3'> Login:</span>  <i className="bi bi-x-lg text-dark rounded border-0 fs-4 mt-4 me-1 px-1"  onClick={props.signupTrigger} ></i>
        </div>
            <hr className='text-white' />

            <form action="">
            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Username:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Username"/>

            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Password:</label>
            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Enter Password"/>

            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Email Address</label>
            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Enter Email"/>

            <p className='text-white my-3'>We'll never share your email with anyone else.</p>

            <label htmlFor="formGroupExampleInput" className="form-label text-white my-2">Zip</label>
            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Zip Code"/>






            <hr className='text-white' />
    <div className="buttons position-relative start-50">
            <button type='button' className='mt-2 mb-3 my-2  text-white py-2 px-3 ms-5 rounded border-0  '>Close</button>
            <button type='button' className='mt-2 mb-3 my-2 text-white py-2 px-3 ms-3 rounded border-0  '>Sign Up</button>
    </div>


            </form>
        </div>
    </div>
</div> 
    </> 
  ) : ""
}

export default Login