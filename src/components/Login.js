import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
<div className="container-fluid login-container">
    <div className="row login-row d-flex flex-column justify-content-center align-items-center ">
        <div className="col-4 login-col">
            <span className='text-start fs-2'> Login:</span>  <i class="bi bi-x-lg"></i>
            <hr />

            <form action="">
            <label for="formGroupExampleInput" className="form-label">USername:</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            <label for="formGroupExampleInput" className="form-label">Password</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            <button type='button'>Login</button>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Login